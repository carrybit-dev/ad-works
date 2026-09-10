'use client';

import React, { useState } from 'react';
import { Activity, Play, Eye, Clock, Users, ShieldCheck, Flame } from 'lucide-react';

export default function StudioMockup() {
  const [activeTab, setActiveTab] = useState<'overview' | 'reach' | 'retention'>('overview');

  return (
    <div className="relative group">
      {/* Floating algorithmic badge */}
      <div className="absolute -top-4 -right-2 sm:-right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1422]/90 border border-emerald-500/40 text-emerald-400 font-mono text-xs shadow-xl backdrop-blur-md animate-bounce-slow">
        <Flame className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
        <span>Algorithmic Signal: +153.2%</span>
      </div>

      <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1422]/90 border border-[#FF4229]/40 text-[#FFA58A] font-mono text-xs shadow-xl backdrop-blur-md">
        <ShieldCheck className="w-4 h-4 text-[#FF4229]" />
        <span>100% Monetization Safe &amp; Compliant</span>
      </div>

      {/* Main Glass Dashboard */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#151C2C]/90 to-[#0A0E17]/95 p-5 sm:p-6 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 group-hover:border-white/20">
        {/* Window Chrome */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Play className="w-3.5 h-3.5 text-[#FF4229] fill-[#FF4229]" />
            <span>YouTube Studio · Live Attribution</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Active Run</span>
          </div>
        </div>

        {/* Video Card Header */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                Nancy Drew: The Final Scene (Complete Longplay)
              </h4>
              <p className="text-[11px] font-mono text-slate-400 mt-1">
                Campaign: 7-Day Growth Run · Target: Mystery / Puzzle Gamers
              </p>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#FF4229]/15 text-[#FF7A50] border border-[#FF4229]/30 text-[10px] font-mono font-bold whitespace-nowrap">
              VERIFIED
            </span>
          </div>
        </div>

        {/* Analytics Interactive Tabs */}
        <div className="flex gap-2 mb-3 border-b border-white/5 pb-2">
          {(['overview', 'reach', 'retention'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs capitalize font-medium px-3 py-1 rounded-md transition-all ${
                activeTab === tab
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Chart Area */}
        <div className="relative py-2">
          <div className="flex justify-between items-center mb-1 text-xs font-mono">
            <span className="text-slate-400">Audience Growth Trajectory</span>
            <span className="text-emerald-400 font-bold">+3,100 Views Added</span>
          </div>

          <div className="h-32 sm:h-36 w-full relative">
            <svg viewBox="0 0 400 130" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="studioChartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF4229" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF4229" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="studioLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6647" />
                  <stop offset="60%" stopColor="#FF4229" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path
                d={
                  activeTab === 'reach'
                    ? 'M0,110 Q80,105 160,70 T280,30 T400,8 L400,130 L0,130 Z'
                    : activeTab === 'retention'
                    ? 'M0,60 Q100,55 200,50 T320,48 T400,45 L400,130 L0,130 Z'
                    : 'M0,115 Q90,110 180,80 T290,35 T400,12 L400,130 L0,130 Z'
                }
                fill="url(#studioChartGlow)"
                className="transition-all duration-500 ease-out"
              />

              {/* Line path */}
              <path
                d={
                  activeTab === 'reach'
                    ? 'M0,110 Q80,105 160,70 T280,30 T400,8'
                    : activeTab === 'retention'
                    ? 'M0,60 Q100,55 200,50 T320,48 T400,45'
                    : 'M0,115 Q90,110 180,80 T290,35 T400,12'
                }
                fill="none"
                stroke="url(#studioLineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />

              {/* Nodes */}
              <circle cx="290" cy="35" r="4.5" fill="#FF4229" stroke="#ffffff" strokeWidth="2" />
              <circle cx="400" cy="12" r="5" fill="#10B981" stroke="#ffffff" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3">
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase font-mono tracking-wide">
              <Eye className="w-3 h-3" />
              <span>Final Views</span>
            </div>
            <div className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono mt-1">
              5,100
            </div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase font-mono tracking-wide">
              <Clock className="w-3 h-3" />
              <span>Baseline</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-200 font-mono mt-1">
              2,000
            </div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase font-mono tracking-wide">
              <Activity className="w-3 h-3 text-[#FF4229]" />
              <span>Growth Lift</span>
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#FF6647] font-mono mt-1">
              +153.2%
            </div>
          </div>
        </div>

        {/* Source attribution footer */}
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Traffic: 100% In-Feed Google Ads</span>
          <span className="text-emerald-400 font-semibold">Retention Verified</span>
        </div>
      </div>
    </div>
  );
}
