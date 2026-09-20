'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, X } from 'lucide-react';

interface ToastData {
  id: string;
  type: 'booking' | 'milestone';
  title: string;
  subtitle: string;
  timeAgo: string;
}

const COUNTRIES = [
  'United States 🇺🇸',
  'United Kingdom 🇬🇧',
  'Canada 🇨🇦',
  'Australia 🇦🇺',
  'Germany 🇩🇪',
  'Netherlands 🇳🇱',
  'Sweden 🇸🇪',
];

// Apnar website-er exact 3-ti package
const PACKAGES = [
  { name: 'Starter Promotion ($20)', views: '1,000' },
  { name: 'Growth Promotion ($45)', views: '2,500' },
  { name: 'Advanced Promotion ($105)', views: '8,000' },
];

export default function LiveActivityToast() {
  const [toast, setToast] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const triggerNotification = () => {
      const isBooking = Math.random() > 0.35;
      const randomCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
      const randomPkg = PACKAGES[Math.floor(Math.random() * PACKAGES.length)];
      const randomId = `FAW-${Math.floor(10000 + Math.random() * 90000)}`;
      const randomMinutes = Math.floor(Math.random() * 25) + 3;

      if (isBooking) {
        setToast({
          id: randomId,
          type: 'booking',
          title: `New intake from ${randomCountry}`,
          subtitle: `Booked ${randomPkg.name} • ${randomId}`,
          timeAgo: `${randomMinutes}m ago`,
        });
      } else {
        setToast({
          id: randomId,
          type: 'milestone',
          title: `Milestone Achieved (${randomId})`,
          subtitle: `Surpassed ${randomPkg.views} verified in-feed views`,
          timeAgo: `${randomMinutes}m ago`,
        });
      }

      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 6000);
    };

    const initialTimeout = setTimeout(() => {
      triggerNotification();
    }, 4500);

    const interval = setInterval(() => {
      triggerNotification();
    }, Math.floor(Math.random() * 8000) + 16000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!toast || !visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-[150] max-w-sm w-full sm:w-auto pointer-events-auto transition-all duration-500">
      <div className="relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#0E1422]/95 border border-white/20 shadow-2xl backdrop-blur-xl text-white">
        
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-slate-500 hover:text-slate-300 p-1 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
          toast.type === 'booking' 
            ? 'bg-[#FF4229]/15 border-[#FF4229]/30 text-[#FF7A50]' 
            : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
        }`}>
          {toast.type === 'booking' ? (
            <Sparkles className="w-5 h-5" />
          ) : (
            <TrendingUp className="w-5 h-5" />
          )}
        </div>

        <div className="pr-4">
          <div className="text-xs font-semibold text-white truncate max-w-[220px]">
            {toast.title}
          </div>
          <p className="text-[11px] font-mono text-slate-300 mt-0.5 truncate max-w-[220px]">
            {toast.subtitle}
          </p>
          <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-slate-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{toast.timeAgo}</span>
            <span>• Verified MCC</span>
          </div>
        </div>

      </div>
    </div>
  );
}
