import React from 'react';
import { MousePointerClick, Rocket, TrendingUp, ListChecks } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Pick your package',
    text: 'Choose Starter, Growth or Advanced and book through Launch Run. It takes about two minutes, no account needed.',
  },
  {
    icon: Rocket,
    title: 'I launch your campaign',
    text: 'I set up a targeted Google Ads campaign for your video by hand. Real viewers, no bots, fully safe for monetization.',
  },
  {
    icon: TrendingUp,
    title: 'Watch it grow',
    text: 'Follow live progress in your order tracker as real views and watch time come in, then keep the organic lift that follows.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-4">
            <ListChecks className="w-3.5 h-3.5" />
            <span>08 · HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            From Booking To Views In{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-[#FF8A66] bg-clip-text text-transparent">
              Three Steps.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            No dashboards to learn, no ad account to manage. You book, I run everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#0E131E]/80 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#FF4229]/15 border border-[#FF4229]/30 flex items-center justify-center text-[#FF8A66] font-mono font-bold text-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <Icon className="w-6 h-6 text-[#FF8A66]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
