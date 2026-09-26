'use client';

import React, { useState } from 'react';
import { Sparkles, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';
import { caseStudies, CaseStudy, nicheLabels } from '@/data/caseStudies';
import LightboxModal from './LightboxModal';

interface CaseStudiesProps {
  onOpenBooking: (pkg?: string) => void;
}

export default function CaseStudies({ onOpenBooking }: CaseStudiesProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gaming' | 'travel' | 'music' | 'entertainment'>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredCases = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter((c) => c.n === activeFilter);

  // Default-e 6-ti card dekhabe
  const visibleCases = isExpanded ? filteredCases : filteredCases.slice(0, 6);

  const filterTabs = [
    { key: 'all' as const, label: 'All Campaigns', count: caseStudies.length },
    { key: 'gaming' as const, label: 'Gaming Longplays', count: caseStudies.filter(c => c.n === 'gaming').length },
    { key: 'travel' as const, label: 'Travel Vlogs', count: caseStudies.filter(c => c.n === 'travel').length },
    { key: 'music' as const, label: 'Music & Artists', count: caseStudies.filter(c => c.n === 'music').length },
    { key: 'entertainment' as const, label: 'Entertainment', count: caseStudies.filter(c => c.n === 'entertainment').length },
  ];

  const handlePrev = () => {
    if (!selectedCase) return;
    const currentIndex = filteredCases.findIndex((c) => c.t === selectedCase.t);
    const prevIndex = (currentIndex - 1 + filteredCases.length) % filteredCases.length;
    setSelectedCase(filteredCases[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedCase) return;
    const currentIndex = filteredCases.findIndex((c) => c.t === selectedCase.t);
    const nextIndex = (currentIndex + 1) % filteredCases.length;
    setSelectedCase(filteredCases[nextIndex]);
  };

  const handleTabChange = (key: typeof activeFilter) => {
    setActiveFilter(key);
    setIsExpanded(false);
  };

  return (
    <section id="proofs" className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 · VERIFIED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Before / After on <span className="bg-gradient-to-r from-white via-slate-100 to-[#FF8A66] bg-clip-text text-transparent">Every Metric That Counts.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Unedited metrics pulled straight from real YouTube Studio dashboards — verified views, likes, and engagement rates before and after each campaign ran.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.key
                  ? 'bg-white text-slate-950 shadow-[0_4px_16px_rgba(255,255,255,0.3)] scale-105'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                activeFilter === tab.key ? 'bg-slate-900 text-white' : 'bg-white/10 text-slate-300'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCases.map((c, idx) => (
            <article
              key={`${c.t}-${idx}`}
              className="rounded-2xl bg-[#0E131E]/80 border border-white/10 hover:border-emerald-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] group backdrop-blur-xl"
            >
              {/* Media Thumbnail */}
              <button
                type="button"
                onClick={() => setSelectedCase(c)}
                aria-label={`Inspect proof for ${c.t}`}
                className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer w-full text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={`${c.t} proof`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-emerald-400" />
                  <span>Click to inspect proof</span>
                </div>
              </button>

              {/* Case Body */}
              <div className="p-5 flex flex-col gap-4 flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                      {nicheLabels[c.n] || c.n}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {c.d} Campaign
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug">
                    {c.t}
                  </h3>
                </div>

                {/* Metrics Comparison Box */}
                <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 uppercase text-[10px]">Views</span>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-slate-400">{c.bv}</span>
                      <span className="text-[#FF7A50]">→</span>
                      <span className="text-white font-bold">{c.av}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 uppercase text-[10px]">Likes</span>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-slate-400">{c.bl}</span>
                      <span className="text-[#FF7A50]">→</span>
                      <span className="text-white font-bold">{c.al}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Badges */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span
                    className="text-[11px] font-mono text-slate-400"
                    title="Engagement rate often dips as paid reach scales beyond a video's core audience — absolute likes and views still grow."
                  >
                    ER: {c.ber} → {c.aer}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                    {c.g} views
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All / Collapse Button */}
        {filteredCases.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95"
            >
              <span>{isExpanded ? 'Show Less Proofs' : `View All ${filteredCases.length} Proofs`}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Engagement-rate context note */}
        <p className="mt-8 text-center text-[11px] font-mono text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Note: engagement rate (likes ÷ views) often moderates as a campaign scales reach beyond a video&apos;s core audience — absolute likes and views still grow, which is what compounds algorithmic momentum.
        </p>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={selectedCase !== null}
          onClose={() => setSelectedCase(null)}
          caseStudy={selectedCase}
          onPrev={handlePrev}
          onNext={handleNext}
          onOpenBooking={onOpenBooking}
        />

      </div>
    </section>
  );
}
