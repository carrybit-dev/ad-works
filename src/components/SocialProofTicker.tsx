'use client';

import React from 'react';
import { Activity, Play, Zap, CheckCircle2 } from 'lucide-react';

export default function SocialProofTicker() {
  const events = [
    { text: 'Gaming Longplay run completed (+153.2% views, 716 likes)', tag: 'Nancy Drew Series', icon: CheckCircle2, color: 'text-emerald-400' },
    { text: 'Travel Vlog campaign approved by Google Ads MCC (Tier 1)', tag: 'Andalusia Vlog', icon: Zap, color: 'text-cyan-400' },
    { text: 'Music Video campaign surpassed 15,500 views (+11,712%)', tag: 'Andy Warhol Track', icon: Activity, color: 'text-[#FF7A50]' },
    { text: 'Entertainment analysis reached 4,611% audience growth surge', tag: 'Entertainment Channel', icon: Play, color: 'text-emerald-400' },
  ];

  return (
    <div className="w-full bg-[#03060C] border-y border-white/5 py-2.5 overflow-hidden font-mono text-xs text-slate-400 relative z-20">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {events.concat(events).map((item, idx) => {
          const IconC = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 shrink-0 px-4">
              <span className={`p-1 rounded-md bg-white/5 ${item.color}`}>
                <IconC className="w-3.5 h-3.5" />
              </span>
              <span className="text-slate-300">{item.text}</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 border border-white/5">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
