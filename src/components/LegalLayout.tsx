import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

/**
 * Shared shell for the legal/policy pages (Terms, Privacy, Refund).
 * Visual style matches the dark/cyber homepage.
 */
export default function LegalLayout({ eyebrow, title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#04070E] text-slate-100 relative">
      <div className="cyber-grid" aria-hidden="true" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A50]" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-10">
          Effective date: {effectiveDate}
        </p>

        <article className="space-y-8 text-sm sm:text-[15px] leading-relaxed text-slate-300">
          {children}
        </article>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs font-mono text-slate-500">
          <p>
            Questions about this page? Email{' '}
            <a href="mailto:contact@fardintareque.com" className="text-[#FFA58A] hover:underline">
              contact@fardintareque.com
            </a>
            .
          </p>
          <p className="mt-2">© 2026 Fardin Ad Works. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
