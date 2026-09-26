import { NextResponse } from 'next/server';

// Server-side only. Set SHEETDB_API_URL in the hosting environment.
// Falls back to the legacy key so existing deployments keep working, but the
// key must be rotated in the SheetDB dashboard since it was previously public.
const SHEETDB_URL = process.env.SHEETDB_API_URL || 'https://sheetdb.io/api/v1/nxbc1gqqb06xi';

function isYouTubeUrl(url: string): boolean {
  try {
    const u = new URL(url.trim());
    const host = u.hostname.replace(/^www\./, '').replace(/^m\./, '');
    return (
      host === 'youtube.com' ||
      host === 'youtu.be' ||
      host === 'youtube-nocookie.com' ||
      host.endsWith('.youtube.com')
    );
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { videoUrl, packageName, notes, customerEmail } = body;

    if (!videoUrl || typeof videoUrl !== 'string') {
      return NextResponse.json(
        { success: false, error: 'YouTube Video URL is required.' },
        { status: 400 }
      );
    }

    if (!isYouTubeUrl(videoUrl)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid YouTube video URL (youtube.com or youtu.be).' },
        { status: 400 }
      );
    }

    if (!customerEmail || typeof customerEmail !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim())) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required so we can confirm your order.' },
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
    const today = new Date();
    const formattedDate = today
      .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      .replace(/ /g, '-');

    const sheetData = {
      orderId: orderId,
      videoUrl: videoUrl.trim(),
      customerEmail: customerEmail.trim(),
      packageName: packageName || '',
      status: 'PENDING',
      targetViews: targetViews,
      viewsDelivered: 0,
      progressPercentage: 0,
      attribution: 'In Intake Queue • Awaiting Compliance Audit',
      orderDate: formattedDate,
      notes: typeof notes === 'string' ? notes.trim().slice(0, 500) : '',
      paymentStatus: 'UNPAID',
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
      // Never report success when the order wasn't actually recorded —
      // a "confirmed" order that was lost is worse than a visible error.
      console.error('SheetDB post failed:', await sheetRes.text());
      return NextResponse.json(
        {
          success: false,
          error:
            'We could not save your order right now. Please email contact@fardintareque.com with your video link and package so we can set it up manually.',
        },
        { status: 502 }
      );
    }

    // 4. Client-ke confirmed response pathano
    return NextResponse.json({
      success: true,
      campaign: {
        id: orderId,
        videoUrl: videoUrl.trim(),
        customerEmail: customerEmail.trim(),
        packageName: packageName,
        targetViews: targetViews,
        status: 'PENDING',
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
