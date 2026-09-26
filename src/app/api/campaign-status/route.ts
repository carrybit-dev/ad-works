import { NextResponse } from 'next/server';

// Server-side proxy for campaign lookups so the SheetDB API key is never
// exposed to the browser.
const SHEETDB_URL = process.env.SHEETDB_API_URL || 'https://sheetdb.io/api/v1/nxbc1gqqb06xi';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string' || !query.trim()) {
      return NextResponse.json(
        { success: false, error: 'Please enter an Order ID or video URL.' },
        { status: 400 }
      );
    }

    const cleanQuery = query.trim().slice(0, 300);

    // Try Order ID first, then fall back to video URL search
    let res = await fetch(
      `${SHEETDB_URL}/search?orderId=${encodeURIComponent(cleanQuery)}`,
      { headers: { Accept: 'application/json' } }
    );
    let data: unknown = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      res = await fetch(
        `${SHEETDB_URL}/search?videoUrl=${encodeURIComponent(cleanQuery)}`,
        { headers: { Accept: 'application/json' } }
      );
      data = await res.json();
    }

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No campaign found for this Order ID or video URL.' },
        { status: 404 }
      );
    }

    const row = data[0] as Record<string, unknown>;
    const num = (v: unknown): number =>
      Number(String(v ?? '0').replace(/[^0-9]/g, '')) || 0;

    const target = num(row.targetViews) || 2500;
    const delivered = num(row.viewsDelivered);
    const storedProgress = num(row.progressPercentage);
    const progress =
      row.progressPercentage !== undefined &&
      row.progressPercentage !== null &&
      row.progressPercentage !== ''
        ? Math.min(100, storedProgress)
        : target > 0
          ? Math.min(100, Math.round((delivered / target) * 100))
          : 0;

    return NextResponse.json({
      success: true,
      campaign: {
        orderId: typeof row.orderId === 'string' ? row.orderId : cleanQuery,
        status: typeof row.status === 'string' ? row.status : 'PENDING',
        targetViews: target,
        viewsDelivered: delivered,
        progressPercentage: progress,
        attribution:
          typeof row.attribution === 'string' && row.attribution
            ? row.attribution
            : 'In-Feed Google Ads (70%) • Audience Matching (30%)',
      },
    });
  } catch (error) {
    console.error('Campaign status lookup failed:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to fetch campaign status. Please try again.' },
      { status: 500 }
    );
  }
}
