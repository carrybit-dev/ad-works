'use client';

import React, { useState, useTransition } from 'react';
import { Sliders, Sparkles, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { CalculationResult } from '@/types';

interface ReachCalculatorProps {
  onOpenBooking: (pkg?: string) => void;
}

export default function ReachCalculator({ onOpenBooking }: ReachCalculatorProps) {
  const [budget, setBudget] = useState(45);
  const [isPending, startTransition] = useTransition();

  // Local synchronous calculation for instant 60fps responsiveness
  const calculateMetrics = (b: number): CalculationResult => {
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

    return {
      budget: b,
      estimatedViews: views,
      watchTimeHours: watchTime,
      estimatedSubscribers: subs,
      recommendedDays: days,
      algorithmicScore: algoScore,
      nichePrecisionScore: 98,
    };
  };

  const currentResult = calculateMetrics(budget);

  const presets = [
    { label: '$20 (Starter)', val: 20 },
    { label: '$45 (Growth)', val: 45 },
    { label: '$105 (Advanced)', val: 105 },
    { label: '$250 (Flagship)', val: 250 },
  ];

  return (
    <section id="calculator" className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>02 · CAMPAIGN REACH SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Estimate Your <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">View &amp; Watch Time Lift</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Adjust the budget slider to preview the estimated real viewers, watch time contribution, and audience recommendation score for your next YouTube upload.
          </p>
        </div>

        {/* Simulator Glass Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0E1422]/80 border border-white/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#FF7A50]" />
                  <span>Selected Campaign Budget:</span>
                </span>
                <span className="font-mono text-2xl font-black text-[#FF7A50]">
                  ${budget}
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="20"
                max="300"
                step="5"
                value={budget}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  startTransition(() => setBudget(val));
                }}
                className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF4229]"
                aria-label="Budget Range Slider"
              />

              {/* Presets */}
              <div className="flex flex-wrap gap-2 mt-5">
                {presets.map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => startTransition(() => setBudget(preset.val))}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
                      budget === preset.val
                        ? 'bg-[#FF4229]/20 border border-[#FF4229] text-[#FFA58A]'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Methodology Explainer */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Niche Matching Algorithm</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                100% of your budget is directed into in-feed Google Video Discovery ads placed alongside high-retention competitor videos in your specific niche — ensuring high watch session depth and authentic subscriber interest.
              </p>
            </div>
          </div>

          {/* Right Metrics Display Card */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#162032] to-[#0D131F] border border-emerald-500/30 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-slate-400">Projected Views</span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">
                ~{currentResult.estimatedViews.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-slate-400">Estimated Watch Time</span>
              <span className="text-lg sm:text-xl font-mono font-bold text-white">
                ~{currentResult.watchTimeHours.toLocaleString()} hrs
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-slate-400">Target Timeline</span>
              <span className="text-sm font-mono font-bold text-slate-200">
                {currentResult.recommendedDays}
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-slate-400">Audience Retention Score</span>
              <span className="text-sm font-mono font-bold text-emerald-400">
                {currentResult.algorithmicScore} / 100
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Traffic Guarantee</span>
              <span className="text-emerald-400 font-semibold">100% Studio Proof</span>
            </div>

            <button
              onClick={() => onOpenBooking(`Custom Campaign ($${budget})`)}
              className="mt-3 w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF6647] text-white font-bold text-sm shadow-[0_6px_20px_rgba(255,66,41,0.4)] hover:shadow-[0_10px_25px_rgba(255,66,41,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            >
              <span>Book This Campaign (${budget})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
