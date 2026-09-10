export interface CampaignBooking {
  id: string;
  videoUrl: string;
  packageName: string;
  budget: number;
  niche?: string;
  notes?: string;
  status: 'AUDIT' | 'ACTIVE' | 'OPTIMIZING' | 'COMPLETED';
  progressPercentage: number;
  viewsDelivered: number;
  targetViews: number;
  createdAt: string;
  estimatedDeliveryDate: string;
  channelName?: string;
}

export interface CalculationResult {
  budget: number;
  estimatedViews: number;
  watchTimeHours: number;
  estimatedSubscribers: string;
  recommendedDays: string;
  algorithmicScore: number;
  nichePrecisionScore: number;
}
