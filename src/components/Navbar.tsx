'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Play, ArrowRight, Sparkles, Search, Command } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (pkg?: string) => void;
  onOpenCommandMenu: () => void;
}

export default function Navbar({ onOpenBooking, onOpenCommandMenu }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI Audit', href: '#scanner' },
    { name: 'Bento Engine', href: '#bento' },
    { name: 'Spillover ROI', href: '#spillover' },
    { name: '16 Proofs', href: '#proofs' },
    { name: 'Pricing', href: '#services' },
    { name: 'Tracker', href: '#tracker' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300">
        <nav
          className={`max-w-[1240px] mx-auto flex items-center justify-between px-5 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0B0F17]/90 backdrop-blur-xl border-white/15 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]'
              : 'bg-[#0B0F17]/75 backdrop-blur-md border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 text-white font-extrabold group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF4229] to-[#FF7A50] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(255,66,41,0.4)] group-hover:scale-105 transition-transform">
              <Play className="w-4 h-4 fill-white translate-x-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-none text-white">
                FARDIN AD WORKS
              </span>
              <span className="text-[10px] font-mono text-[#FF7A50] tracking-wider uppercase font-semibold">
                SaaS YouTube Growth
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Command Menu Trigger */}
            <button
              onClick={onOpenCommandMenu}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors"
              title="Open Command Palette (⌘K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[11px] text-slate-400">Search</span>
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => onOpenBooking('Growth Promotion ($45)')}
              className="relative group overflow-hidden rounded-full p-px font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(255,66,41,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF6647] text-white font-bold transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Run</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileDrawerOpen && (
        <div
          onClick={() => setMobileDrawerOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] animate-fadeIn"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[340px] bg-[#0A0D15]/95 backdrop-blur-2xl border-l border-white/10 z-[101] p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
          mobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4229] to-[#FF7A50] flex items-center justify-center text-white">
                <Play className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="font-bold text-sm text-white">Fardin Ad Works</span>
            </div>
            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-white bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={() => {
                setMobileDrawerOpen(false);
                onOpenCommandMenu();
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span>Search Commands / Proofs</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-black/40 text-[10px]">⌘K</span>
            </button>
          </div>

          <ul className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-slate-200 hover:text-[#FF7A50] hover:bg-white/5 text-sm font-semibold transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              setMobileDrawerOpen(false);
              onOpenBooking('Growth Promotion ($45)');
            }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF6647] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,66,41,0.4)]"
          >
            Start Campaign Now →
          </button>
          <a
            href="mailto:contact@fardintareque.com"
            className="block text-center w-full py-2.5 rounded-full border border-white/10 text-slate-300 text-xs font-mono hover:bg-white/5"
          >
            fardin@fardintareque.com
          </a>
        </div>
      </aside>
    </>
  );
}
