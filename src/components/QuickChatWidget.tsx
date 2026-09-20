'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Mail, CheckCircle2 } from 'lucide-react';

export default function QuickChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Agency contact routing
  const supportEmail = 'contact@fardintareque.com';
  const whatsappNumber = '8801615744712';

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello AdWorks Team, I'm reviewing your Google Ads YouTube growth campaigns. I'd like to consult on placement strategy for my channel."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Agency Consultation Request - YouTube Growth');
    const body = encodeURIComponent(
      "Hello Support Desk,\n\nI am inquiring about running Google Ads in-feed discovery campaigns for my YouTube uploads.\n\nChannel Link: \nTarget Audience / Niche: \nBudget Consideration: \n\nPlease provide placement recommendations."
    );
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    /* bottom-20 deway Netlify badge er upor thakbe ebong clear dekha jabe */
    <div className="fixed bottom-20 right-5 sm:bottom-16 sm:right-6 z-[200] font-sans">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-[300px] sm:w-[330px] rounded-3xl bg-[#0E1422]/95 border border-white/20 shadow-2xl backdrop-blur-2xl p-5 text-white animate-scaleUp">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF4229] to-[#FF7A50] flex items-center justify-center font-bold text-xs text-white shadow-md font-mono">
                  AW
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0E1422] rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  AdWorks Campaign Desk
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </h4>
                <p className="text-[10px] font-mono text-emerald-400">Desk Online • Live Assistance</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white bg-white/5 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Intro */}
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Have questions regarding audience segmentation, compliance review, or custom ad scheduling? Connect with our growth team:
          </p>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            <button
              onClick={handleWhatsApp}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5" />
                <span>Live WhatsApp Desk</span>
              </div>
              <span className="text-[10px] font-mono opacity-80">Instant Reply</span>
            </button>

            <button
              onClick={handleEmail}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF7A50]" />
                <span>Email Support Desk</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">contact@</span>
            </button>
          </div>

          <div className="mt-3.5 pt-2.5 border-t border-white/5 text-center">
            <span className="text-[10px] font-mono text-slate-400">Official Alphabet MCC Architecture</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-xs shadow-[0_8px_24px_rgba(255,66,41,0.5)] hover:scale-105 active:scale-95 transition-all ml-auto cursor-pointer"
        aria-label="Open Quick Support"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <MessageSquare className="w-4 h-4" />
        <span className="font-mono">Quick Support</span>
      </button>
    </div>
  );
}
