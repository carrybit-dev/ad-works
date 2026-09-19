import { NextResponse } from 'next/server';

const SHEETDB_URL = 'https://sheetdb.io/api/v1/nxbc1gqqb06xi';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { videoUrl, packageName, notes } = body;

    if (!videoUrl) {
      return NextResponse.json(
        { success: false, error: 'YouTube Video URL is required.' },
        { status: 400 }
      );
    }

    // 1. Random Unique Order ID generate kora (e.g. FAW-62491)
    const orderId = `FAW-${Math.floor(10000 + Math.random() * 90000)}`;

    // 2. Package onujayi Target Views set kora
    let targetViews = 2500;
    if (packageName?.includes('Starter')) targetViews = 1000;
    else if (packageName?.includes('Growth')) targetViews = 2500;
    else if (packageName?.includes('Advanced')) targetViews = 8000;
    else if (packageName?.includes('Custom')) targetViews = 20000;

    // 3. SheetDB-te Notun Row Insert kora
    const sheetData = {
      orderId: orderId,
      videoUrl: videoUrl,
      status: 'ACTIVE',
      targetViews: targetViews,
      viewsDelivered: 0,
      progressPercentage: 0,
      attribution: 'In-Feed Google Ads (70%) • Audience Matching (30%)'
    };

    const sheetRes = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: [sheetData] })
    });

    if (!sheetRes.ok) {
      console.error('SheetDB post failed:', await sheetRes.text());
    }

    // 4. Client-ke confirmed response pathano
    return NextResponse.json({
      success: true,
      campaign: {
        id: orderId,
        videoUrl: videoUrl,
        packageName: packageName,
        targetViews: targetViews,
        status: 'ACTIVE',
        notes: notes || ''
      }
    });
  } catch (error) {
    console.error('Campaign creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error. Could not book campaign.' },
      { status: 500 }
    );
  }
}
