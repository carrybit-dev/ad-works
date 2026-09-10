import { NextResponse } from 'next/server';
import { CampaignBooking } from '@/types';

// In-memory campaign storage with initial seed demonstration campaigns
const campaignsDatabase: CampaignBooking[] = [
  {
    id: 'FAW-94821',
    videoUrl: 'https://youtube.com/watch?v=ND_FinalScene',
    packageName: 'Growth Promotion ($45)',
    budget: 45,
    niche: 'gaming',
    status: 'COMPLETED',
    progressPercentage: 100,
    viewsDelivered: 5100,
    targetViews: 2500,
    createdAt: '2026-08-28T14:30:00Z',
    estimatedDeliveryDate: '2026-09-04T14:30:00Z',
    channelName: 'Mystery Longplay Haven'
  },
  {
    id: 'FAW-83912',
    videoUrl: 'https://youtube.com/watch?v=Andalusia_Goodbye',
    packageName: 'Starter Promotion ($20)',
    budget: 20,
    niche: 'travel',
    status: 'ACTIVE',
    progressPercentage: 68,
    viewsDelivered: 1720,
    targetViews: 1000,
    createdAt: '2026-09-08T09:15:00Z',
    estimatedDeliveryDate: '2026-09-11T09:15:00Z',
    channelName: 'Nomad Finca Diaries'
  },
  {
    id: 'FAW-72019',
    videoUrl: 'https://youtube.com/watch?v=Toupee_Release',
    packageName: 'Advanced Promotion ($105)',
    budget: 105,
    niche: 'music',
    status: 'OPTIMIZING',
    progressPercentage: 84,
    viewsDelivered: 13200,
    targetViews: 8000,
    createdAt: '2026-08-20T11:00:00Z',
    estimatedDeliveryDate: '2026-09-19T11:00:00Z',
    channelName: 'Ero Seagull Official'
  }
];

export async function GET() {
  // Return list of recent campaigns for social proof ticker
  return NextResponse.json({
    success: true,
    totalCampaigns: 300 + campaignsDatabase.length,
    recentCampaigns: campaignsDatabase.slice(-5)
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { videoUrl, packageName, budget, niche, notes } = body;

    if (!videoUrl || !videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid YouTube video URL.' },
        { status: 400 }
      );
    }

    const campaignBudget = Number(budget) || (packageName?.includes('20') ? 20 : packageName?.includes('105') ? 105 : 45);
    const targetViews = campaignBudget <= 20 ? 1000 : campaignBudget <= 45 ? 2500 : 8000;
    
    // Generate order ID
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newId = `FAW-${randomSuffix}`;

    const now = new Date();
    const deliveryDays = campaignBudget <= 20 ? 3 : campaignBudget <= 45 ? 7 : 30;
    const deliveryDate = new Date(now.getTime() + deliveryDays * 24 * 60 * 60 * 1000);

    const newBooking: CampaignBooking = {
      id: newId,
      videoUrl,
      packageName: packageName || `Custom Campaign ($${campaignBudget})`,
      budget: campaignBudget,
      niche: niche || 'General / Multi-Audience',
      notes: notes || '',
      status: 'AUDIT',
      progressPercentage: 10,
      viewsDelivered: 0,
      targetViews,
      createdAt: now.toISOString(),
      estimatedDeliveryDate: deliveryDate.toISOString(),
      channelName: 'YouTube Creator Channel'
    };

    campaignsDatabase.unshift(newBooking);

    return NextResponse.json({
      success: true,
      message: 'Campaign successfully initiated! Our Google Ads MCC team is reviewing your upload.',
      campaign: newBooking
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to process campaign submission.' },
      { status: 500 }
    );
  }
}
