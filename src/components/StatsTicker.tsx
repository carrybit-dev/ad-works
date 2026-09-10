'use client';

import React from 'react';
import { TrendingUp, Users, Shield, Clock } from 'lucide-react';

export default function StatsTicker() {
  const stats = [
    {
      number: '300+',
      label: 'Campaigns Successfully Completed',
      icon: Users,
      color: 'text-emerald-400',
      glow: 'border-emerald-500/20 hover:border-emerald-500/40',
    },
    {
      number: '+39,600%',
      label: 'Highest Single-Video View Surge',
      icon: TrendingUp,
      color: 'text-[#FF7A50]',
      glow: 'border-[#FF4229]/20 hover:border-[#FF4229]/40',
    },
    {
      number: '100%',
      label: 'Real, Organic-Matched Traffic',
      icon: Shield,
      color: 'text-white',
      glow: 'border-white/10 hover:border-white/25',
    },
    {
      number: '3–30',
      label: 'Day Fast Turnaround Per Video',
      icon: Clock,
      color: 'text-white',
      glow: 'border-white/10 hover:border-white/25',
    },
  ];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className={`relative overflow-hidden p-6 rounded-2xl bg-[#0E131E]/80 border ${stat.glow} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg group`}
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-white/5 text-slate-300">
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Metric 0{i + 1}
                  </span>
                </div>

                <div className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${stat.color} mb-1.5`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
