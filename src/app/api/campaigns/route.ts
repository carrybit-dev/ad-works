import { NextResponse } from 'next/server';
import { CampaignBooking } from '@/types';

// In-memory store for bookings created via POST in this server instance.
// NOTE: serverless instances do not share memory — treat this as ephemeral.
// The SheetDB-backed /api/track + /api/campaign-status routes are the
// source of truth for real order tracking.
const campaignsDatabase: CampaignBooking[] = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    totalCampaigns: campaignsDatabase.length,
    recentCampaigns: campaignsDatabase.slice(-5)
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { videoUrl, packageName, budget, niche, notes } = body;

    if (!videoUrl || (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be'))) {
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
