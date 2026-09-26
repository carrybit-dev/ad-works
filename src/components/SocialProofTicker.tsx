'use client';

import React from 'react';
import { Activity, Play, Zap, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

// Ticker items are derived from the site's own published case studies
// (see #proofs section) — no invented figures.
const icons = [CheckCircle2, Zap, Activity, Play];
const colors = ['text-emerald-400', 'text-cyan-400', 'text-[#FF7A50]', 'text-emerald-400'];

export default function SocialProofTicker() {
  const events = caseStudies.slice(0, 8).map((c, i) => ({
    text: `${c.t} — ${c.bv} → ${c.av} views (${c.g})`,
    tag: c.d + ' Run',
    icon: icons[i % icons.length],
    color: colors[i % colors.length],
  }));

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
