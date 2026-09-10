'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, Zap, BarChart2, ShieldCheck, Activity, Copy, Check, ArrowRight, Play } from 'lucide-react';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (pkg?: string) => void;
  onSelectCase?: (index: number) => void;
}

interface CommandItem {
  label: string;
  href?: string;
  action?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
}

interface CommandGroup {
  category: string;
  items: CommandItem[];
}

export default function CommandMenu({
  isOpen,
  onClose,
  onOpenBooking,
}: CommandMenuProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions: CommandGroup[] = [
    {
      category: 'Quick Navigation',
      items: [
        { label: 'Interactive YouTube Video Scanner', href: '#scanner', icon: Zap },
        { label: 'Organic Spillover & Compounding Engine', href: '#spillover', icon: BarChart2 },
        { label: '16 Verified Proof Case Studies', href: '#proofs', icon: Play },
        { label: 'Live Campaign Status Tracker', href: '#tracker', icon: Activity },
        { label: 'Pricing & Retainer Packages', href: '#services', icon: ShieldCheck },
      ],
    },
    {
      category: 'Verified Proof Shortcuts',
      items: [
        { label: 'Inspect: Nancy Drew Longplay (+153.2% Views)', action: () => { onClose(); const el = document.getElementById('proofs'); el?.scrollIntoView({ behavior: 'smooth' }); }, icon: Play },
        { label: 'Inspect: Andy Warhol Indie Music (+11,712% Surge)', action: () => { onClose(); const el = document.getElementById('proofs'); el?.scrollIntoView({ behavior: 'smooth' }); }, icon: Play },
        { label: 'Inspect: Andalusia Travel Vlog (+978% Retention)', action: () => { onClose(); const el = document.getElementById('proofs'); el?.scrollIntoView({ behavior: 'smooth' }); }, icon: Play },
      ],
    },
    {
      category: 'Actions',
      items: [
        { label: 'Deploy New Campaign Run ($45 Growth Plan)', action: () => { onClose(); onOpenBooking('Growth Promotion ($45)'); }, icon: Zap },
        {
          label: copied ? '✓ Copied fardin@fardintareque.com' : 'Copy Direct Contact Email (fardin@fardintareque.com)',
          action: () => {
            navigator.clipboard.writeText('fardin@fardintareque.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          },
          icon: copied ? Check : Copy,
        },
      ],
    },
  ];

  const filtered = actions
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-xl flex items-start justify-center pt-24 px-4 sm:px-6 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-2xl bg-[#0B0F19] border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden animate-scaleUp"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, case study, or jump to section..."
            className="flex-grow bg-transparent text-white text-sm focus:outline-none placeholder:text-slate-500 font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-400">
            ESC to close
          </kbd>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Items List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No matching commands or case studies found.
            </div>
          ) : (
            filtered.map((group) => (
              <div key={group.category}>
                <div className="px-3 py-1 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  {group.category}
                </div>
                <div className="space-y-1 mt-1">
                  {group.items.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (item.action) {
                            item.action();
                          } else if (item.href) {
                            onClose();
                            const el = document.querySelector(item.href);
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm text-slate-200 hover:bg-white/10 hover:text-white transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className="w-4 h-4 text-slate-400 group-hover:text-[#FF7A50] transition-colors" />
                          <span>{item.label}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Linear-style Command Hub</span>
          <span>Press ⌘K or Ctrl+K anywhere</span>
        </div>
      </div>
    </div>
  );
}
