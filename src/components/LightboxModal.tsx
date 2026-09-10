'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
  onPrev: () => void;
  onNext: () => void;
  onOpenBooking: (pkg?: string) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  caseStudy,
  onPrev,
  onNext,
  onOpenBooking,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !caseStudy) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full flex flex-col items-center gap-4 animate-scaleUp"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 p-2 rounded-full bg-white/10 hover:bg-[#FF4229] text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev & Next Controls */}
        <button
          onClick={onPrev}
          className="hidden md:flex absolute left-[-64px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#FF4229] text-white transition-all hover:scale-110"
          aria-label="Previous Case Study"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="hidden md:flex absolute right-[-64px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#FF4229] text-white transition-all hover:scale-110"
          aria-label="Next Case Study"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Screenshot Image Container */}
        <div className="w-full max-h-[72vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseStudy.img}
            alt={`${caseStudy.t} proof`}
            className="max-h-[72vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Metadata Bar */}
        <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#0E131E]/95 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {caseStudy.t}
            </h4>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                {caseStudy.d}
              </span>
              <span>Views: {caseStudy.bv} → {caseStudy.av}</span>
              <span className="text-emerald-400 font-bold">({caseStudy.g})</span>
              <span>• Likes: {caseStudy.bl} → {caseStudy.al}</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(`Growth Promotion ($45) - Similar to "${caseStudy.t}"`);
            }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF6647] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg whitespace-nowrap hover:scale-105 transition-transform"
          >
            <span>Run Similar Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
