import { NextResponse } from 'next/server';
import { CalculationResult } from '@/types';

export async function POST(request: Request) {
  try {
    const { budget } = await request.json();
    const b = Math.max(15, Number(budget) || 45);

    let views = 0;
    let watchTime = 0;
    let days = '3-5 Days';
    let subs = '20 - 45+';
    let algoScore = 75;

    if (b <= 20) {
      views = Math.round(b * 50);
      watchTime = Math.round(views * 0.04);
      days = '3 Days';
      subs = '15 - 35';
      algoScore = 68;
    } else if (b <= 45) {
      views = Math.round(1000 + (b - 20) * 60);
      watchTime = Math.round(views * 0.045);
      days = '7 Days';
      subs = '45 - 110+';
      algoScore = 88;
    } else if (b <= 105) {
      views = Math.round(2500 + (b - 45) * 91.6);
      watchTime = Math.round(views * 0.05);
      days = '15–30 Days';
      subs = '180 - 450+';
      algoScore = 95;
    } else {
      views = Math.round(8000 + (b - 105) * 85);
      watchTime = Math.round(views * 0.055);
      days = '30 Days';
      subs = '400 - 1,200+';
      algoScore = 99;
    }

    const result: CalculationResult = {
      budget: b,
      estimatedViews: views,
      watchTimeHours: watchTime,
      estimatedSubscribers: subs,
      recommendedDays: days,
      algorithmicScore: algoScore,
      nichePrecisionScore: 98
    };

    return NextResponse.json({ success: true, result });
  } catch {
    return NextResponse.json({ success: false, error: 'Calculation failed' }, { status: 400 });
  }
}
