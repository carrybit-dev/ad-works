'use client';

import React from 'react';
import { Target, Activity, ShieldCheck, LineChart, Cpu } from 'lucide-react';

export default function GrowthEngine() {
  const pillars = [
    {
      num: '01 / TARGETING',
      title: 'Laser Niche Matching',
      desc: 'We position your video as an in-feed discovery ad alongside videos from top competitors in your genre. No generic bot clicks — only people who actively search and browse your topic.',
      icon: Target,
    },
    {
      num: '02 / RETENTION',
      title: 'Retention-First Optimization',
      desc: 'Because viewers deliberately click your thumbnail, audience watch session time stays healthy. This sends positive algorithmic signals to YouTube, unlocking organic Browse and Suggested views.',
      icon: Activity,
    },
    {
      num: '03 / SAFETY',
      title: '100% YouTube & AdSense Safe',
      desc: 'All views originate directly from Alphabet’s verified Google Ads network. Zero risk of demonetization, channel strikes, or bot scrubbing — fully eligible for YouTube Partner Program milestones.',
      icon: ShieldCheck,
    },
    {
      num: '04 / VERIFICATION',
      title: 'Unedited Studio Proof',
      desc: 'You track all metrics inside your own YouTube Studio dashboard in real-time. Full transparency on traffic source attribution, watch hours, and subscriber conversions.',
      icon: LineChart,
    },
  ];

  return (
    <section id="why-us" className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>05 · ALGORITHMIC ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Our Growth <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Holds Up Long-Term</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Cheap click farms and fake views get penalized by YouTube’s AI. Here is the 4-pillar Google Ads system we use to build lasting creator channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-7 bg-[#0E131E]/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl backdrop-blur-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono text-[#FF7A50] bg-[#FF4229]/10 px-2.5 py-1 rounded-full border border-[#FF4229]/20">
                      {p.num}
                    </span>
                    <span className="p-2.5 rounded-xl bg-white/5 text-slate-300 group-hover:text-emerald-400 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400">
                  ✓ Verified Algorithmic Factor
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
