'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Mail, CheckCircle2, Send } from 'lucide-react';

const SUPPORT_EMAIL = 'contact@fardintareque.com';

/**
 * Honest contact widget: a small form that opens the visitor's email client
 * with a prefilled message. No fake "online now" presence, no live-chat claims.
 */
export default function QuickChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website inquiry${name.trim() ? ` from ${name.trim()}` : ''}`
    );
    const body = encodeURIComponent(
      `Hi Fardin,\n\n${message.trim()}\n\n— ${name.trim() || 'A website visitor'}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const canSend = name.trim().length > 0 && message.trim().length > 0;

  return (
    <div className="fixed bottom-20 right-5 sm:bottom-16 sm:right-6 z-[200] font-sans">
      {/* Expanded Contact Drawer */}
      {isOpen && (
        <div className="mb-3 w-[300px] sm:w-[330px] rounded-3xl bg-[#0E1422]/95 border border-white/20 shadow-2xl backdrop-blur-2xl p-5 text-white animate-scaleUp">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF4229] to-[#FF7A50] flex items-center justify-center font-bold text-xs text-white shadow-md font-mono">
                AW
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  Contact Us
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </h4>
                <p className="text-[10px] font-mono text-slate-400">We reply by email, personally</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white bg-white/5 transition-colors"
              aria-label="Close contact form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSend} className="space-y-3">
            <div>
              <label htmlFor="chat-name" className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                Your name
              </label>
              <input
                id="chat-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                maxLength={80}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4229] placeholder:text-slate-600"
              />
            </div>
            <div>
              <label htmlFor="chat-message" className="block text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                id="chat-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about packages, targeting, timelines…"
                rows={4}
                maxLength={1000}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4229] placeholder:text-slate-600 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={!canSend}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send via Email</span>
            </button>
            <p className="text-[10px] font-mono text-slate-500 text-center">
              Opens your email app addressed to {SUPPORT_EMAIL}
            </p>
          </form>

          <div className="mt-3.5 pt-2.5 border-t border-white/5 text-center">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF7A50]" />
              <span>{SUPPORT_EMAIL}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-xs shadow-[0_8px_24px_rgba(255,66,41,0.5)] hover:scale-105 active:scale-95 transition-all ml-auto cursor-pointer"
        aria-label={isOpen ? 'Close contact form' : 'Open contact form'}
      >
        <MessageSquare className="w-4 h-4" />
        <span className="font-mono">Contact</span>
      </button>
    </div>
  );
}
