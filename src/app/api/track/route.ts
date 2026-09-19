import { NextResponse } from 'next/server';

const SHEETDB_URL = 'https://sheetdb.io/api/v1/nxbc1gqqb06xi';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get('id') || searchParams.get('url') || '').trim();

  if (!query) {
    return NextResponse.json(
      { success: false, error: 'Please provide an Order ID (e.g. FAW-94821) or YouTube Video URL to track.' },
      { status: 400 }
    );
  }

  try {
    // 1. Google Sheet theke orderId diye search
    const res = await fetch(`${SHEETDB_URL}/search?orderId=${encodeURIComponent(query)}`, {
      cache: 'no-store' // Always real-time fresh data
    });
    let data = await res.json();

    // 2. Jodi orderId te na paowa jay, videoUrl diye search
    if (!data || !Array.isArray(data) || data.length === 0) {
      const urlRes = await fetch(`${SHEETDB_URL}/search?videoUrl=${encodeURIComponent(query)}`, {
        cache: 'no-store'
      });
      data = await urlRes.json();
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
      return NextResponse.json({
        success: false,
        error: `No active campaign found matching "${query}". Please verify your Order ID or URL.`
      });
    }

    const row = data[0];

    // Numbers & clean parsing (handles formatting like 5,000 or 48%)
    const target = Number(String(row.targetViews || '0').replace(/[^0-9]/g, '')) || 5000;
    const delivered = Number(String(row.viewsDelivered || '0').replace(/[^0-9]/g, '')) || 0;
    
    let progress = 0;
    if (row.progressPercentage) {
      progress = Number(String(row.progressPercentage).replace(/[^0-9]/g, '')) || 0;
    } else {
      progress = target > 0 ? Math.min(100, Math.round((delivered / target) * 100)) : 0;
    }

    const currentStatus = (row.status || 'ACTIVE').toUpperCase();
    const isCompleted = currentStatus === 'COMPLETED' || progress >= 100;

    return NextResponse.json({
      success: true,
      trackingResult: {
        orderId: row.orderId || query,
        videoUrl: row.videoUrl || '',
        status: currentStatus,
        progressPercentage: progress,
        viewsDelivered: delivered,
        targetViews: target,
        retentionRate: '58.4%',
        attribution: row.attribution || 'In-Feed Google Ads (64%) • Browse Features (24%)',
        stages: [
          { name: '1. Video & Metadata Audit', status: 'done', date: 'Day 1' },
          { name: '2. High-Intent In-Feed Google Ads Setup', status: 'done', date: 'Day 1' },
          { name: '3. Algorithmic Recommendation Trigger', status: progress >= 40 ? 'done' : 'in_progress', date: 'Days 2-5' },
          { name: '4. Final Studio Analytics Audit Report', status: isCompleted ? 'done' : 'pending', date: 'Day 7' }
        ]
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Unable to connect to live tracking database. Please try again later.' },
      { status: 500 }
    );
  }
}
