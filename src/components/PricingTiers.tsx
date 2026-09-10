'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface PricingTiersProps {
  onOpenBooking: (pkg: string) => void;
}

export default function PricingTiers({ onOpenBooking }: PricingTiersProps) {
  const [billingMode, setBillingMode] = useState<'single' | 'retainer'>('single');

  const plans = [
    {
      id: 'starter',
      tier: 'PLAN 01 · VALIDATION',
      name: 'Starter Promotion',
      price: billingMode === 'single' ? 20 : 16,
      period: billingMode === 'single' ? '/ campaign' : '/ video (4 runs)',
      desc: '~1,000 targeted Google Ads views over 3 days. Best for testing a video’s audience pull before scaling up budget.',
      features: [
        '~1,000 Real Google Ads Views',
        '3-Day Rapid Delivery Window',
        'Single YouTube Video Focus',
        'Niche Keyword & Placement Targeting',
        '100% Monetization & AdSense Safe',
      ],
      popular: false,
      buttonText: 'Select Starter ($20)',
    },
    {
      id: 'growth',
      tier: 'PLAN 02 · COMPOUNDING',
      name: 'Growth Promotion',
      price: billingMode === 'single' ? 45 : 36,
      period: billingMode === 'single' ? '/ campaign' : '/ video (4 runs)',
      desc: '~2,500 targeted views over 7 days. The core package behind 80% of our verified case studies — built to kickstart YouTube recommendations.',
      features: [
        '~2,500 Real Targeted Views',
        '7-Day Compounding Delivery Schedule',
        'Competitive Channel & Topic Targeting',
        'Watch Time & Retention Stabilization',
        'Before / After YouTube Studio Audit',
        'Priority Direct Creator Email Support',
      ],
      popular: true,
      buttonText: 'Select Growth ($45) →',
    },
    {
      id: 'advanced',
      tier: 'PLAN 03 · AUTHORITY',
      name: 'Advanced Promotion',
      price: billingMode === 'single' ? 105 : 84,
      period: billingMode === 'single' ? '/ campaign' : '/ video (4 runs)',
      desc: '~8,000 targeted views over 30 days plus video growth hacking. Engineered for flagship releases, album drops, or milestone series.',
      features: [
        '~8,000 Real Targeted Views',
        '30-Day Sustained Algorithmic Momentum',
        'Full Video Growth Hacking & Optimization',
        'Multi-Geo & Demographic Segmentation',
        'Daily Campaign Pacing & Ad Group Tuning',
      ],
      popular: false,
      buttonText: 'Select Advanced ($105)',
    },
  ];

  return (
    <section id="services" className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>01 · CAMPAIGN PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Three Campaign Sizes. One Goal —{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-[#FF8A66] bg-clip-text text-transparent">
              Believable, Compounding Growth.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every package targets a single YouTube upload with hyper-focused Google Ads traffic matched directly to your video's genre, topic, and competitor channels.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#0E131E] border border-white/10">
            <button
              onClick={() => setBillingMode('single')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                billingMode === 'single'
                  ? 'bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Single Video Run
            </button>
            <button
              onClick={() => setBillingMode('retainer')}
              className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                billingMode === 'retainer'
                  ? 'bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Monthly Creator Retainer</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 backdrop-blur-2xl ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#192233] to-[#0D121D] border-2 border-[#FF4229]/60 shadow-[0_20px_50px_-10px_rgba(255,66,41,0.25)] lg:-translate-y-2'
                  : 'bg-[#0E131E]/85 border border-white/10 hover:border-white/20 shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-mono text-[11px] font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  MOST BOOKED
                </div>
              )}

              <div>
                <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-3">
                  {plan.tier}
                </div>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-2xl font-bold text-white">$</span>
                  <span className={`text-5xl font-black font-display ${plan.popular ? 'text-[#FF7A50]' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{plan.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs font-mono uppercase text-slate-300 font-semibold mb-3">
                    Includes:
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => onOpenBooking(`${plan.name} ($${plan.price})`)}
                  className={`w-full py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FF4229] to-[#FF6647] text-white shadow-[0_6px_20px_rgba(255,66,41,0.4)] hover:shadow-[0_10px_25px_rgba(255,66,41,0.6)] hover:scale-[1.02]'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
