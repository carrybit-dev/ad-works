'use client';

import React, { useState } from 'react';
import { Play, Copy, Check, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: (pkg?: string) => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fardin@fardintareque.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Top Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#192233] via-[#121824] to-[#0E131E] border border-white/15 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4229]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-xl text-center lg:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Amplify Your Next Upload?
            </h3>
            <p className="text-sm text-slate-300">
              Send your video link, select your target niche, and let our Google Ads discovery engine deliver authentic watch time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto z-10">
            <button
              onClick={() => onOpenBooking('Growth Promotion ($45)')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-sm shadow-[0_4px_20px_rgba(255,66,41,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Start a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4229] to-[#FF7A50] flex items-center justify-center text-white">
                <Play className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="font-bold text-white text-base">FARDIN AD WORKS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Precision Google Ads architecture for YouTube creators. 100% human, niche-matched viewers that drive organic channel recommendations.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Google Ads Partner Compliant</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-300 font-bold mb-4 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Campaign Packages</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Reach Calculator</a></li>
              <li><a href="#proofs" className="hover:text-white transition-colors">16 Case Studies</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Architecture Engine</a></li>
              <li><a href="#tracker" className="hover:text-white transition-colors">Live Order Tracker</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-300 font-bold mb-4 tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF7A50]" />
                <a href="mailto:fardin@fardintareque.com" className="text-white hover:underline">
                  fardin@fardintareque.com
                </a>
              </li>
              <li>Website: <span className="text-slate-300">fardintareque.com</span></li>
              <li>Turnaround: <span className="text-slate-300">12–24h Review Window</span></li>
              <li>Coverage: <span className="text-slate-300">Global / English &amp; Regional</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Fardin Ad Works. All rights reserved.
          </div>
          <div>
            100% Policy Compliant · YouTube &amp; Google Ads are trademarks of Alphabet Inc.
          </div>
        </div>

      </div>
    </footer>
  );
}
