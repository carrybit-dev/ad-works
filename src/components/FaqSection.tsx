'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are these views 100% safe for my YouTube channel and monetization?',
      a: 'Yes, 100%. We run official in-feed Google Video Discovery ads directly through our agency Google Ads MCC account. Because Alphabet owns both YouTube and Google Ads, this is the exact promotional mechanism used by major studios, record labels, and verified brands. It carries zero strike or demonetization risk.',
    },
    {
      q: 'Will this hurt my audience retention or watch time percentage?',
      a: 'No. Unlike bot views that bounce within seconds, Google Ads discovery ads display your thumbnail to real users who choose to click and watch based on genuine interest. While overall engagement rate naturally moderates as audience scales, watch duration remains healthy and signals the recommendation algorithm.',
    },
    {
      q: 'Do you need login access or permissions to my YouTube channel?',
      a: 'Never. We only need the public URL of the YouTube video you want to promote. We configure all audience demographics, keywords, and placements externally inside Google Ads.',
    },
    {
      q: 'How quickly does a campaign start after booking?',
      a: 'Once you submit your video link and package, campaigns are set up and submitted for Google review within 12 to 24 hours. Once approved by Google (typically 4–12 hours), real niche-matched viewers begin watching immediately.',
    },
    {
      q: 'Can I target specific countries or demographic niches?',
      a: 'Yes! We customize targeting based on your channel niche, language, and audience profile (e.g. US, UK, Canada, Australia, or worldwide). You can specify target locations and competitor channels when submitting your video.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>07 · QUESTIONS &amp; ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Clear answers to common questions about safety, delivery speed, and audience retention.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1422] border-[#FF4229]/40 shadow-lg'
                    : 'bg-[#0E1422]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <span className={`p-1.5 rounded-full bg-white/5 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#FF7A50]' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
