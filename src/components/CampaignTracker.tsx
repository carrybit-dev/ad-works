'use client';

import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CampaignTracker() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`/api/track?id=${encodeURIComponent(query.trim())}`);
      const data = await res.json();
      if (data.success) {
        setResult(data.trackingResult);
      } else {
        setError(data.error || 'No active run found for this query.');
      }
    } catch {
      setError('Unable to fetch campaign status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSample = (id: string) => {
    setQuery(id);
  };

  return (
    <section id="tracker" className="py-24 relative border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>04 · LIVE CAMPAIGN TRACKING PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Track Your YouTube <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text text-transparent">Delivery in Real-Time</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Enter your Campaign Order ID or YouTube video link to inspect your in-feed ad pacing, audience retention signal, and algorithmic attribution.
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0E1422]/90 border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID (e.g. FAW-94821) or video URL..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF4229] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? 'Tracking...' : 'Inspect Status →'}
            </button>
          </form>

          {/* Sample quick pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-mono text-slate-400">
            <span>Try sample ID:</span>
            <button
              type="button"
              onClick={() => handleSample('FAW-94821')}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10"
            >
              FAW-94821 (Completed)
            </button>
            <button
              type="button"
              onClick={() => handleSample('FAW-83912')}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-amber-400 border border-white/10"
            >
              FAW-83912 (Active)
            </button>
          </div>

          {error && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
              {error}
            </div>
          )}

          {/* Results Display */}
          {result && (
            <div className="mt-8 pt-6 border-t border-white/10 space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-slate-400">Campaign Reference</div>
                  <div className="text-lg font-bold text-white font-mono">{result.orderId}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${
                    result.status === 'COMPLETED'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {result.status}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>Delivery Pacing: {result.progressPercentage}%</span>
                  <span className="text-emerald-400 font-bold">{result.viewsDelivered.toLocaleString()} / {result.targetViews.toLocaleString()} views</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF4229] to-emerald-400 transition-all duration-700 rounded-full"
                    style={{ width: `${result.progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Milestones Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {result.stages?.map((stage: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      {stage.status === 'done' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      )}
                      <span className={stage.status === 'done' ? 'text-slate-200' : 'text-slate-400'}>
                        {stage.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">{stage.date}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Traffic Attribution:</span>
                <span className="text-emerald-400 font-bold">In-Feed Google Ads (64%) • Browse Features (24%)</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
