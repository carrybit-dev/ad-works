import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get('id') || searchParams.get('url') || '').trim();

  if (!query) {
    return NextResponse.json(
      { success: false, error: 'Please provide an Order ID (e.g. FAW-94821) or YouTube Video URL to track.' },
      { status: 400 }
    );
  }

  // Simulated live matching logic
  const isCompleted = query.includes('94821') || query.includes('FinalScene');
  const isActive = query.includes('83912') || query.includes('Andalusia');

  const status = isCompleted ? 'COMPLETED' : isActive ? 'ACTIVE' : 'OPTIMIZING';
  const progress = isCompleted ? 100 : isActive ? 72 : 45;
  const viewsDelivered = isCompleted ? 5100 : isActive ? 1850 : 3400;
  const targetViews = isCompleted ? 2500 : isActive ? 2500 : 8000;

  return NextResponse.json({
    success: true,
    trackingResult: {
      orderId: query.startsWith('FAW-') ? query : 'FAW-' + Math.floor(10000 + Math.random() * 90000),
      videoUrl: query.startsWith('http') ? query : 'https://youtube.com/watch?v=sample_tracked_video',
      status,
      progressPercentage: progress,
      viewsDelivered,
      targetViews,
      retentionRate: '58.4%',
      trafficSources: {
        googleAdsInFeed: '64%',
        youtubeSuggested: '24%',
        youtubeBrowse: '12%'
      },
      stages: [
        { name: '1. Video & Metadata Audit', status: 'done', date: 'Day 1' },
        { name: '2. High-Intent In-Feed Google Ads Setup', status: 'done', date: 'Day 1' },
        { name: '3. Algorithmic Recommendation Trigger', status: isCompleted ? 'done' : 'in_progress', date: 'Days 2-5' },
        { name: '4. Final Studio Analytics Audit Report', status: isCompleted ? 'done' : 'pending', date: 'Day 7' }
      ]
    }
  });
}
