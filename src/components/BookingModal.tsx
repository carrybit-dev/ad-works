'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Mail, Copy, Check } from 'lucide-react';
import { CampaignBooking } from '@/types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultPackage,
}: BookingModalProps) {
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedPkg, setSelectedPkg] = useState(defaultPackage || 'Growth Promotion ($45)');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmedCampaign, setConfirmedCampaign] = useState<CampaignBooking | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultPackage) {
      setSelectedPkg(defaultPackage);
    }
  }, [defaultPackage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setConfirmedCampaign(null);
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoUrl,
          packageName: selectedPkg,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setConfirmedCampaign(data.campaign);
      } else {
        setError(data.error || 'Failed to submit campaign request.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyOrder = () => {
    if (!confirmedCampaign) return;
    navigator.clipboard.writeText(confirmedCampaign.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenEmail = () => {
    if (!confirmedCampaign) return;
    const subject = encodeURIComponent(`New YouTube Campaign [${confirmedCampaign.id}] - ${confirmedCampaign.packageName}`);
    const body = encodeURIComponent(
      `Hi Fardin,\n\nI initiated campaign ${confirmedCampaign.id} on your website.\n\n` +
      `Order ID: ${confirmedCampaign.id}\n` +
      `Package: ${confirmedCampaign.packageName}\n` +
      `Video Link: ${confirmedCampaign.videoUrl}\n` +
      `Notes: ${confirmedCampaign.notes || 'None'}\n\n` +
      `Please let me know the next steps for ad deployment.\n`
    );
    window.location.href = `mailto:contact@fardintareque.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[160] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full rounded-3xl bg-[#0E1422] border border-white/20 p-6 sm:p-8 shadow-2xl animate-scaleUp"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white bg-white/5"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedCampaign ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A50] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Full-Stack Campaign Intake</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Start Your Campaign
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Enter your public YouTube video link to initiate audience matching and campaign scheduling.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  YouTube Video Link <span className="text-[#FF4229]">*</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://youtube.com/watch?v=..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4229]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Campaign Package
                </label>
                <select
                  value={selectedPkg}
                  onChange={(e) => setSelectedPkg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0D15] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4229]"
                >
                  <option value="Starter Promotion ($20)">Starter Promotion — $20 (~1,000 views, 3 days)</option>
                  <option value="Growth Promotion ($45)">Growth Promotion — $45 (~2,500 views, 7 days)</option>
                  <option value="Advanced Promotion ($105)">Advanced Promotion — $105 (~8,000 views, 30 days)</option>
                  <option value="Custom Campaign ($250+)">Custom Scaler Budget ($250+)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Target Niche / Competitor Channels (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gaming longplays, Travel vlogs, Indie Music"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4229]"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,66,41,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
              >
                {loading ? 'Submitting to MCC...' : 'Deploy Campaign Setup →'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Campaign Initiated!</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Your video has been recorded into our intake queue. Here is your tracking reference:
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Order ID</div>
                <div className="font-mono text-xl font-extrabold text-emerald-400">
                  {confirmedCampaign.id}
                </div>
              </div>
              <button
                onClick={handleCopyOrder}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="text-xs font-mono text-slate-400 text-left space-y-1 p-3 rounded-xl bg-black/30">
              <div>Package: <span className="text-white">{confirmedCampaign.packageName}</span></div>
              <div>Estimated Target: <span className="text-emerald-400 font-bold">~{confirmedCampaign.targetViews.toLocaleString()} Real Views</span></div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleOpenEmail}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Confirm Via Direct Email</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full border border-white/10 text-slate-300 text-xs font-mono hover:bg-white/5"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
