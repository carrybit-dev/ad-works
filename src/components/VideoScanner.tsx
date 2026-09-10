'use client';

import React, { useState } from 'react';
import { Search, Zap, CheckCircle2, ArrowRight, Activity, Flame, ShieldCheck, Tag, Users, AlertCircle } from 'lucide-react';

interface VideoScannerProps {
  onOpenBooking: (pkg?: string) => void;
}

interface AuditResult {
  videoId: string;
  videoUrl: string;
  title: string;
  channelName: string;
  channelUrl: string;
  thumbnailUrl: string;
  niche: string;
  nicheKey: string;
  overallScore: number;
  grade: string;
  titleScore: number;
  titleFeedback: string[];
  competitorChannels: string[];
  targetKeywords: string[];
  recommendedCPV: string;
  estimatedReach: {
    starter: { budget: number; views: string; days: string };
    growth: { budget: number; views: string; days: string; recommended: boolean };
    flagship: { budget: number; views: string; days: string };
  };
  organicBrowseMultiplier: string;
  monetizationCompliance: string;
}

export default function VideoScanner({ onOpenBooking }: VideoScannerProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [scanStage, setScanStage] = useState(0);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');

  const stages = [
    'Connecting to YouTube API & fetching video metadata...',
    'Analyzing Title CTR hook & curiosity gap vectors...',
    'Scraping high-affinity competitor in-feed placement pools...',
    'Simulating watch session velocity & organic browse multipliers...',
  ];

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setAuditResult(null);
    setScanStage(0);

    // Realistic progressive stage ticker
    const int1 = setTimeout(() => setScanStage(1), 400);
    const int2 = setTimeout(() => setScanStage(2), 900);
    const int3 = setTimeout(() => setScanStage(3), 1400);

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl: url.trim() }),
      });

      const data = await res.json();
      if (data.success) {
        setAuditResult(data.audit);
      } else {
        setError(data.error || 'Failed to complete video audit. Please check your link.');
      }
    } catch {
      setError('Connection to YouTube Audit Engine timed out. Please check the URL.');
    } finally {
      clearTimeout(int1);
      clearTimeout(int2);
      clearTimeout(int3);
      setLoading(false);
    }
  };

  const loadSample = (sampleUrl: string) => {
    setUrl(sampleUrl);
  };

  return (
    <section id="scanner" className="py-20 relative z-10 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4229]/10 border border-[#FF4229]/30 text-[#FFA58A] font-mono text-xs mb-4">
            <Zap className="w-3.5 h-3.5 text-[#FF7A50]" />
            <span>REAL-TIME YOUTUBE AUDIT ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Audit Any YouTube Video <span className="bg-gradient-to-r from-white via-slate-100 to-[#FF8A66] bg-clip-text text-transparent">In Real-Time</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Paste any public YouTube URL. Our engine fetches real channel metadata, tests Title CTR friction, maps real competitor in-feed placements, and computes custom Google Ads targeting.
          </p>
        </div>

        {/* Scanner Terminal Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0B0F19]/90 border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          
          {/* Laser scanline animation while scanning */}
          {loading && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#FF4229] to-transparent shadow-[0_0_15px_#FF4229] animate-scanline" />
            </div>
          )}

          <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste real YouTube Video URL (e.g. https://youtube.com/watch?v=...)"
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF4229] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-sm shadow-[0_4px_20px_rgba(255,66,41,0.4)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 whitespace-nowrap flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Scanning Video...</span>
                </>
              ) : (
                <>
                  <span>Audit Real Video</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick sample chips for testing */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-mono text-slate-400">
            <span>Test with real videos:</span>
            <button
              type="button"
              onClick={() => loadSample('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
              className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
            >
              Rick Astley (Music)
            </button>
            <button
              type="button"
              onClick={() => loadSample('https://www.youtube.com/watch?v=jNQXAC9IVRw')}
              className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
            >
              First Video on YT
            </button>
          </div>

          {/* Scanning Progress Bar */}
          {loading && (
            <div className="mt-6 p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-slate-300 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>Live Algorithmic Scanner Running...</span>
              </div>
              <p className="text-slate-400 pl-6 animate-pulse">{stages[scanStage]}</p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* REAL AUDIT RESULTS SCORECARD */}
          {auditResult && (
            <div className="mt-8 pt-6 border-t border-white/10 space-y-6 animate-fadeIn">
              
              {/* Real Video Identity Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#151D2C] to-[#0D121F] border border-emerald-500/30 flex flex-col sm:flex-row gap-4 items-center">
                {/* Real YouTube Thumbnail */}
                <div className="relative w-full sm:w-44 aspect-video rounded-xl overflow-hidden border border-white/15 shrink-0 bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={auditResult.thumbnailUrl}
                    alt={auditResult.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                    LIVE
                  </span>
                </div>

                {/* Real Metadata */}
                <div className="flex-grow space-y-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                      {auditResult.niche}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Channel: <strong className="text-white">{auditResult.channelName}</strong>
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2">
                    {auditResult.title}
                  </h4>
                </div>

                {/* Score badge */}
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/40 border border-white/10 shrink-0">
                  <div className="text-2xl font-black font-mono text-emerald-400 leading-none">
                    {auditResult.overallScore}%
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">Algorithm Grade</div>
                  <span className="mt-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                    Grade {auditResult.grade}
                  </span>
                </div>
              </div>

              {/* Title CTR Insights */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">Title CTR Potential Score</span>
                  <span className="text-emerald-400 font-bold">{auditResult.titleScore} / 100</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {auditResult.titleFeedback.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competitor Placement Channels to target */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Target In-Feed Placement Channels (Ad Intercept Pool):</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {auditResult.competitorChannels.map((ch, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Keywords */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
                  <Tag className="w-3.5 h-3.5 text-[#FF7A50]" />
                  <span>High-Intent Google Ads Search Keywords:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {auditResult.targetKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-xs"
                    >
                      +{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Banner to deploy */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#172033] to-[#0E1524] border border-[#FF4229]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="text-xs font-mono text-[#FF7A50] font-bold flex items-center gap-1.5">
                    <Flame className="w-4 h-4" />
                    <span>Recommended Campaign: Growth Run ($45)</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Projected Reach: <strong className="text-emerald-400">{auditResult.estimatedReach.growth.views}</strong> over 7 days.
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking(`Growth Promotion ($45) - ${auditResult.title}`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all whitespace-nowrap"
                >
                  <span>Launch Campaign for This Video</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
