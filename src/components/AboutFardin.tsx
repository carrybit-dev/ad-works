import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

const stats = [
  { value: '2022', label: 'Running ads since' },
  { value: '300+', label: 'Videos promoted' },
  { value: '100%', label: 'Real views, no bots' },
];

export default function AboutFardin() {
  return (
    <section className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#FF4229]/30 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/fardin-tareque.png"
                alt="Fardin Tareque, founder of Fardin Ad Works"
                width={640}
                height={640}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-4">
              <User className="w-3.5 h-3.5" />
              <span>09 · ABOUT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#FF8A66] bg-clip-text text-transparent">
                Fardin.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              I&apos;m the founder of Fardin Ad Works. I&apos;ve been running YouTube ad campaigns since 2022,
              and I&apos;ve promoted 300+ videos for creators around the world.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Most people who try YouTube ads on their own burn money: too much spend, too few views.
              My job is simple. I run your ads properly, so every dollar turns into real viewers.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl bg-[#0E131E]/80 border border-white/10 text-center"
                >
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
