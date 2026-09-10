'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, Sparkles, ArrowRight, Zap, Play } from 'lucide-react';

interface SpilloverSimulatorProps {
  onOpenBooking: (pkg?: string) => void;
}

export default function SpilloverSimulator({ onOpenBooking }: SpilloverSimulatorProps) {
  const [budget, setBudget] = useState(45);
  const [videoLength, setVideoLength] = useState<'short' | 'medium' | 'long'>('medium');

  // Multiplier logic based on video length & session retention
  const lengthMultiplier = videoLength === 'short' ? 0.7 : videoLength === 'medium' ? 1.05 : 1.45;

  const paidViews = budget <= 20 ? Math.round(budget * 50) : budget <= 45 ? Math.round(1000 + (budget - 20) * 60) : Math.round(2500 + (budget - 45) * 91.6);
  const organicSpillover = Math.round(paidViews * lengthMultiplier);
  const totalViews = paidViews + organicSpillover;
  const organicPercentage = Math.round((organicSpillover / totalViews) * 100);

  return (
    <section id="spillover" className="py-24 relative border-t border-white/10 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#FF7A50]" />
            <span>03 · THE COMPOUNDING EFFECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Paid Ads Trigger <span className="bg-gradient-to-r from-[#FF8A66] via-white to-emerald-400 bg-clip-text text-transparent">Free Organic Spillover</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            When authentic viewers watch for multiple minutes, YouTube’s recommendation engine promotes your upload for free across Browse &amp; Suggested Watch Next.
          </p>
        </div>

        {/* Interactive Dual-Input Simulator */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#0B0F19]/90 border border-white/15 shadow-2xl backdrop-blur-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Budget slider */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex justify-between items-center mb-3 text-xs font-mono">
                  <span className="text-slate-300 uppercase font-semibold">Campaign Budget:</span>
                  <span className="text-xl font-bold text-[#FF7A50]">${budget}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF4229]"
                />
              </div>

              {/* Video duration selector */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono text-slate-300 uppercase font-semibold mb-3">
                  Upload Length &amp; Watch Session Potential:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setVideoLength('short')}
                    className={`py-2.5 px-3 rounded-xl font-mono text-xs transition-all ${
                      videoLength === 'short'
                        ? 'bg-[#FF4229] text-white font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    &lt; 10 Mins
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoLength('medium')}
                    className={`py-2.5 px-3 rounded-xl font-mono text-xs transition-all ${
                      videoLength === 'medium'
                        ? 'bg-[#FF4229] text-white font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    15–30 Mins
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoLength('long')}
                    className={`py-2.5 px-3 rounded-xl font-mono text-xs transition-all ${
                      videoLength === 'long'
                        ? 'bg-[#FF4229] text-white font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    60m+ Longplay
                  </button>
                </div>
              </div>

            </div>

            {/* Visualizer Breakdown */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#131A29] to-[#0A0D15] border border-white/15 space-y-4">
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">Total Projected View Impact</div>
                <div className="text-3xl sm:text-4xl font-mono font-black text-white mt-1">
                  ~{totalViews.toLocaleString()}{' '}
                  <span className="text-sm font-sans text-emerald-400 font-bold">Total Reach</span>
                </div>
              </div>

              {/* Compounded visual ratio bar */}
              <div className="space-y-1.5 pt-2">
                <div className="h-4 w-full rounded-full bg-white/10 overflow-hidden flex">
                  <div
                    className="h-full bg-[#FF4229] transition-all duration-300"
                    style={{ width: `${100 - organicPercentage}%` }}
                    title={`Paid Views: ${paidViews.toLocaleString()}`}
                  />
                  <div
                    className="h-full bg-emerald-400 transition-all duration-300"
                    style={{ width: `${organicPercentage}%` }}
                    title={`Organic Spillover: ${organicSpillover.toLocaleString()}`}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-[#FFA58A]">■ In-Feed Ad: {paidViews.toLocaleString()} ({100 - organicPercentage}%)</span>
                  <span className="text-emerald-400">■ Organic Spillover: +{organicSpillover.toLocaleString()} ({organicPercentage}%)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Recommendation Boost:</span>
                <span className="text-emerald-400 font-bold">+{Math.round(lengthMultiplier * 100)}% Algorithmic Push</span>
              </div>

              <button
                onClick={() => onOpenBooking(`Growth Promotion ($${budget})`)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <span>Deploy This Run (${budget})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
