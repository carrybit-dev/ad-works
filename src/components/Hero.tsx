'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import StudioMockup from './StudioMockup';

interface HeroProps {
  onOpenBooking: (pkg?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-6 backdrop-blur-md animate-fadeIn">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6647]" />
              <span>Google Ads Discovery Architecture · Active Slots Open</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Turn Quiet YouTube Uploads Into{' '}
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#FF8A66] bg-clip-text text-transparent">
                Compounding Real Audiences.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              We run short, laser-focused Google Ads discovery campaigns that deliver genuine, niche-matched viewers to your YouTube videos — so your views, watch time, and algorithmic recommendations actually hold up after the campaign ends.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenBooking('Growth Promotion ($45)')}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#FF4229] via-[#FF5F3D] to-[#FF7A50] text-white font-bold text-base shadow-[0_10px_30px_-5px_rgba(255,66,41,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(255,66,41,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <span>Book a Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#proofs"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
              >
                <span>See 16 Real Proofs</span>
              </a>
            </div>

            {/* Trust Pill Bar */}
            <div className="w-full pt-6 border-t border-white/10 grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>300+ Delivered Runs</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Monetization Safe</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive Dashboard Mockup */}
          <div className="lg:col-span-5 w-full">
            <StudioMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
