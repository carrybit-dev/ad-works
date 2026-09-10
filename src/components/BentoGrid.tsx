'use client';

import React, { useState } from 'react';
import { Target, Activity, ShieldCheck, Globe, Terminal, CheckCircle2, AlertTriangle, Play } from 'lucide-react';

export default function BentoGrid() {
  const [retentionMode, setRetentionMode] = useState<'ads' | 'bots'>('ads');
  const [selectedGeo, setSelectedGeo] = useState<'us' | 'uk' | 'ca' | 'global'>('us');

  const logs = [
    { time: '02:14:08', text: 'MCC Engine: Placements locked (38 competitor channels)', status: 'green' },
    { time: '02:14:15', text: 'Bid Optimization: Established $0.017 Target CPV', status: 'cyan' },
    { time: '02:14:22', text: 'Policy Verification: PASSED (Monetization Compliant)', status: 'green' },
    { time: '02:14:30', text: 'Delivery Stream: Niche-matched viewers streaming', status: 'amber' },
  ];

  const geoData = {
    us: { name: 'United States', share: '48%', quality: 'Tier 1 Highest AdSense RPM', cpm: '$12-$28' },
    uk: { name: 'United Kingdom', share: '24%', quality: 'High Purchasing Affinity', cpm: '$10-$22' },
    ca: { name: 'Canada', share: '16%', quality: 'High Search Session Duration', cpm: '$11-$24' },
    global: { name: 'Worldwide / EU', share: '12%', quality: 'Broad Audience Scaler', cpm: '$6-$15' },
  };

  return (
    <section id="bento" className="py-24 relative border-t border-white/10 z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENTERPRISE GOOGLE ADS ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            The Algorithmic <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent">Bento Engine</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Engineered exclusively for YouTube creators who care about long-term channel authority, monetization safety, and real subscriber retention.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1 (Span 7): Radar In-Feed Competitor Intercept */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-[#0B0F19]/80 border border-white/15 hover:border-cyan-500/30 transition-all duration-300 shadow-2xl backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Target className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  Radar Active · 38 Target Nodes
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                In-Feed Competitor Video Intercept
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-6">
                Your video appears as the recommended next discovery upload directly under the most viral videos in your exact sub-niche.
              </p>
            </div>

            {/* Radar Visual Display */}
            <div className="h-44 sm:h-52 w-full rounded-2xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center">
              {/* Concentric circles */}
              <div className="w-72 h-72 rounded-full border border-cyan-500/15 absolute" />
              <div className="w-52 h-52 rounded-full border border-cyan-500/25 absolute" />
              <div className="w-32 h-32 rounded-full border border-cyan-500/35 absolute" />
              
              {/* Rotating radar sweep */}
              <div className="w-72 h-72 absolute rounded-full overflow-hidden animate-radar pointer-events-none">
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/25 to-transparent origin-bottom-right" />
              </div>

              {/* Target Intercept Nodes */}
              <div className="absolute top-1/3 left-1/4 flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0F172A] border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                <Play className="w-2.5 h-2.5 fill-cyan-400 text-cyan-400" />
                <span>Competitor #1 (120K Views)</span>
              </div>
              <div className="absolute bottom-1/4 right-1/4 flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0F172A] border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                <Play className="w-2.5 h-2.5 fill-emerald-400 text-emerald-400" />
                <span>Competitor #2 (450K Views)</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#FF4229] shadow-[0_0_12px_#FF4229] z-10" />
            </div>
          </div>

          {/* Bento Card 2 (Span 5): Watch Time Retention Comparator */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-[#0B0F19]/80 border border-white/15 hover:border-emerald-500/30 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Activity className="w-5 h-5" />
                </span>
                {/* Switcher */}
                <div className="flex p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setRetentionMode('ads')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      retentionMode === 'ads' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Google Ads
                  </button>
                  <button
                    onClick={() => setRetentionMode('bots')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      retentionMode === 'bots' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400'
                    }`}
                  >
                    Bot Clicks
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Retention Curve Health</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                See the contrast between human in-feed viewers vs cheap click-farms that ruin your video’s algorithmic trajectory.
              </p>
            </div>

            {/* Retention comparison card */}
            <div className={`p-5 rounded-2xl border transition-all ${
              retentionMode === 'ads'
                ? 'bg-emerald-500/5 border-emerald-500/30'
                : 'bg-rose-500/5 border-rose-500/30'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-slate-400">Average Watch Duration</span>
                <span className={`text-2xl font-black font-mono ${
                  retentionMode === 'ads' ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {retentionMode === 'ads' ? '62.4%' : '3.8% (Instant Bounce)'}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {retentionMode === 'ads'
                  ? '✓ Viewers watch 5+ minutes, leaving real likes, triggering YouTube’s Suggested Video recommendation pipeline.'
                  : '⚠ Automated bot scripts drop off within 8 seconds, causing YouTube to suppress the upload entirely.'}
              </p>
            </div>
          </div>

          {/* Bento Card 3 (Span 5): Live MCC Activity Terminal */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-[#0B0F19]/80 border border-white/15 hover:border-indigo-500/30 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Terminal className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Google Ads MCC Stream</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Streaming MCC Logs</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Direct programmatic integration with Alphabet’s official marketing API for optimal CPV pacing.
              </p>
            </div>

            {/* Terminal Window */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-[11px] space-y-2">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500">[{log.time}]</span>
                  <span className={log.status === 'green' ? 'text-emerald-400' : log.status === 'cyan' ? 'text-cyan-400' : 'text-amber-400'}>
                    {log.text}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-1 text-slate-500 pt-1">
                <span>&gt;</span>
                <span className="w-2 h-3.5 bg-cyan-400 animate-blink" />
              </div>
            </div>
          </div>

          {/* Bento Card 4 (Span 7): Tier-1 Geographic Targeting */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-[#0B0F19]/80 border border-white/15 hover:border-[#FF4229]/30 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-[#FF4229]/10 text-[#FF7A50] border border-[#FF4229]/20">
                  <Globe className="w-5 h-5" />
                </span>
                {/* Geo Selectors */}
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {(['us', 'uk', 'ca', 'global'] as const).map((geo) => (
                    <button
                      key={geo}
                      onClick={() => setSelectedGeo(geo)}
                      className={`px-3 py-1 rounded-full uppercase transition-all ${
                        selectedGeo === geo
                          ? 'bg-[#FF4229] text-white font-bold'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {geo}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Tier-1 Audience Distribution
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-6">
                Target audiences in the highest AdSense RPM countries to maximize your channel’s future ad revenue.
              </p>
            </div>

            {/* Geo Breakdown Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-base font-bold text-white">
                  {geoData[selectedGeo].name} ({geoData[selectedGeo].share})
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-0.5">
                  {geoData[selectedGeo].quality}
                </div>
              </div>
              <div className="sm:text-right">
                <div className="text-xs font-mono text-slate-400">Expected RPM Range</div>
                <div className="text-lg font-black font-mono text-white">
                  {geoData[selectedGeo].cpm}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
