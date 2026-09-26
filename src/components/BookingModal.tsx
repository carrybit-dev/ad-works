'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, Sparkles, Mail, Copy, Check, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage: string;
}

const PACKAGE_OPTIONS = [
  'Starter Promotion ($20)',
  'Growth Promotion ($45)',
  'Advanced Promotion ($105)',
  'Custom Campaign ($250+)',
];

// Callers append context like "Growth Promotion ($45) - <video title>"; map any
// such string back onto one of the real select options so the dropdown never
// renders blank.
function normalizePackage(pkg: string): string {
  if (PACKAGE_OPTIONS.includes(pkg)) return pkg;
  if (pkg.includes('Starter')) return PACKAGE_OPTIONS[0];
  if (pkg.includes('Growth')) return PACKAGE_OPTIONS[1];
  if (pkg.includes('Advanced')) return PACKAGE_OPTIONS[2];
  if (pkg.includes('Custom')) return PACKAGE_OPTIONS[3];
  return PACKAGE_OPTIONS[1];
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultPackage,
}: BookingModalProps) {
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedPkg, setSelectedPkg] = useState(() => normalizePackage(defaultPackage || 'Growth Promotion ($45)'));
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmedCampaign, setConfirmedCampaign] = useState<{
    id: string;
    videoUrl: string;
    packageName: string;
    targetViews: number;
    notes?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setConfirmedCampaign(null);
    setError('');
    onClose();
  }, [onClose]);

  // Escape closes the modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Book via the server route — the SheetDB key must never ship to the browser.
      const res = await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoUrl: videoUrl.trim(),
          packageName: selectedPkg,
          notes: notes.trim() || 'None',
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setConfirmedCampaign({
          id: data.campaign.id,
          videoUrl: data.campaign.videoUrl,
          packageName: data.campaign.packageName,
          targetViews: data.campaign.targetViews,
          notes,
        });
      } else {
        setError(data.error || 'Failed to record order. Please try again or reach out directly.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyOrder = () => {
    if (!confirmedCampaign) return;
    navigator.clipboard.writeText(confirmedCampaign.id).catch(() => {});
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
      `Target Niche / Notes: ${confirmedCampaign.notes || 'None'}\n\n` +
      `Please confirm my campaign and send payment instructions.\n`
    );
    window.location.href = `mailto:contact@fardintareque.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-[160] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full rounded-3xl bg-[#0E1422] border border-white/20 p-6 sm:p-8 shadow-2xl animate-scaleUp"
      >
        <button
          onClick={handleClose}
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
            <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-bold text-white mb-2">
              Start Your Campaign
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Enter your public YouTube video link to initiate audience matching and campaign scheduling.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="booking-video-url" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  YouTube Video Link <span className="text-[#FF4229]">*</span>
                </label>
                <input
                  id="booking-video-url"
                  type="url"
                  required
                  autoFocus
                  placeholder="https://youtube.com/watch?v=..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF4229]"
                />
              </div>

              <div>
                <label htmlFor="booking-package" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Campaign Package
                </label>
                <select
                  id="booking-package"
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
                <label htmlFor="booking-notes" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Target Niche / Competitor Channels (Optional)
                </label>
                <input
                  id="booking-notes"
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
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30">
              <Clock className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Campaign Intake Received!</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Your video has entered our intake queue. Status is currently <span className="text-amber-400 font-semibold">Pending Review</span>:
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Order ID</div>
                <div className="font-mono text-xl font-extrabold text-[#FFA58A]">
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
              <div>Status: <span className="text-amber-400 font-bold">Pending Setup Confirmation</span></div>
              <div>Package: <span className="text-white">{confirmedCampaign.packageName}</span></div>
              <div>Target: <span className="text-slate-200 font-bold">~{confirmedCampaign.targetViews.toLocaleString()} Views</span></div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleOpenEmail}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#FF4229] to-[#FF7A50] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Confirm & Send Details Via Email</span>
              </button>
              <button
                onClick={handleClose}
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
