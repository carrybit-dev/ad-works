"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export interface OrderInfo {
  orderId: string;
  status: string;
  packageName: string;
  targetViews: string;
}

interface Props {
  order: OrderInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CampaignModal({ order, isOpen, onClose }: Props) {
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // ১. ব্রাউজারেই সেভ থাকবে (০ ক্রেডিট খরচ)
  useEffect(() => {
    if (order) {
      localStorage.setItem("faw_active_order", JSON.stringify(order));
    }
  }, [order]);

  if (!isOpen || !order) return null;

  // ২. কপি হ্যান্ডলার
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(order.orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  // ৩. ক্লোজ করার সতর্কবার্তা
  const handleSafeClose = () => {
    if (!copied) {
      const confirmExit = window.confirm(
        `Wait! Did you copy your Order ID (${order.orderId})?\n\nYou will need this ID to track your campaign progress.`
      );
      if (!confirmExit) return;
    }
    onClose();
  };

  // ৪. ডিরেক্ট ফ্রন্টএন্ড EmailJS (Netlify সার্ভার বাইপাস)
  const handleSendEmail = async () => {
    setLoading(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",    // EmailJS সার্ভিস আইডি
        "YOUR_TEMPLATE_ID",   // EmailJS টেমপ্লেট আইডি
        {
          order_id: order.orderId,
          package_name: order.packageName,
          target_views: order.targetViews,
        },
        "YOUR_PUBLIC_KEY"     // EmailJS পাবলিক কি
      );
      setEmailSent(true);
      alert("Order details confirmed and sent!");
    } catch (error) {
      alert("Could not send email automatically. Please use the WhatsApp button below.");
    } finally {
      setLoading(false);
    }
  };

  const waUrl = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(
    `Hi! I submitted an order.\nOrder ID: ${order.orderId}\nPackage:${order.packageName}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0b1120] border border-slate-800 p-6 text-center text-white shadow-2xl">
        <button onClick={handleSafeClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>

        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xl border border-amber-500/20">
          🕒
        </div>

        <h2 className="text-xl font-bold tracking-tight">Campaign Intake Received!</h2>
        <p className="mt-1 text-xs text-slate-400">
          Your video has entered our intake queue. Status: <span className="text-amber-400 font-medium">{order.status}</span>
        </p>

        <div className="my-4 rounded-xl bg-slate-900/90 border border-slate-800 p-3">
          <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold block text-left">ORDER ID</span>
          <div className="flex items-center justify-between mt-1">
            <span className="font-mono text-lg font-bold text-amber-400">{order.orderId}</span>
            <button onClick={handleCopy} className="px-3 py-1 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="space-y-1.5 text-left text-xs bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 mb-5">
          <p><span className="text-slate-400">Package:</span> <span className="text-slate-200 font-medium">{order.packageName}</span></p>
          <p><span className="text-slate-400">Target:</span> <span className="text-slate-200 font-medium">{order.targetViews}</span></p>
        </div>

        <div className="space-y-2">
          <button
            onClick={handleSendEmail}
            disabled={loading || emailSent}
            className="w-full py-2.5 rounded-xl font-medium text-sm bg-[#ff5a36] hover:bg-[#e04826] text-white disabled:opacity-50"
          >
            {emailSent ? "✓ Details Sent" : loading ? "Sending..." : "✉ Confirm & Send Details Via Email"}
          </button>
          <button onClick={handleSafeClose} className="w-full py-2 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800">
            Close Window
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
          Facing issues? <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">Send Order ID via WhatsApp ↗</a>
        </div>
      </div>
    </div>
  );
}
