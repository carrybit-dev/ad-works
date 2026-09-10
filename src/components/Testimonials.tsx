'use client';

import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "Excellent service! The promotion brought a lot of genuine engagement to my channel, and the whole process was super smooth. Highly recommend his work.",
      author: 'Jack Miller',
      role: 'Gaming Longplay Creator (85K Subs)',
      avatar: 'JM',
      campaign: 'Nancy Drew Series · 7-Day Run',
    },
    {
      quote:
        "He did an amazing job with my recent upload. My video got great traction, and the communication was top-notch. Will definitely use his services again!",
      author: 'Emma Davis',
      role: 'Travel & Lifestyle Vlogger',
      avatar: 'ED',
      campaign: 'Andalusia Vlog · +978% Views',
    },
    {
      quote:
        "Fast, professional, and delivered exactly what was promised. I saw a noticeable boost in real views and my channel retention stayed healthy. Great experience!",
      author: 'Lucas Clark',
      role: 'Pop Culture & Entertainment',
      avatar: 'LC',
      campaign: 'Entertainment Analysis · +4,611% Views',
    },
  ];

  return (
    <section className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>06 · CREATOR NOTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What Creators Say <span className="bg-gradient-to-r from-white via-slate-100 to-[#FF8A66] bg-clip-text text-transparent">After Their Run.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real feedback from channel owners after their campaign wrapped and views settled into sustained audience retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#0E131E]/80 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/15 flex items-center justify-center font-bold text-white text-xs">
                    {rev.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">{rev.author}</h4>
                    <p className="text-xs text-slate-400">{rev.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
