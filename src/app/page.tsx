'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// ১. Above-the-fold কম্পোনেন্টগুলো সরাসরি ইমপোর্ট (দ্রুত LCP বজায় রাখতে)
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProofTicker from '@/components/SocialProofTicker';

// ২. স্ক্রোলের নিচের সেকশনগুলো ডাইনামিক ইমপোর্ট (HTML সাইজ ও ইনিশিয়াল লোড কমাতে)
const VideoScanner = dynamic(() => import('@/components/VideoScanner'), { ssr: false });
const StatsTicker = dynamic(() => import('@/components/StatsTicker'));
const BentoGrid = dynamic(() => import('@/components/BentoGrid'));
const SpilloverSimulator = dynamic(() => import('@/components/SpilloverSimulator'), { ssr: false });
const CaseStudies = dynamic(() => import('@/components/CaseStudies'));
const PricingTiers = dynamic(() => import('@/components/PricingTiers'));
const CampaignTracker = dynamic(() => import('@/components/CampaignTracker'), { ssr: false });
const GrowthEngine = dynamic(() => import('@/components/GrowthEngine'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const Footer = dynamic(() => import('@/components/Footer'));

// ৩. ইন্টারেক্টিভ মডাল এবং উইজেট (প্রয়োজনের সময় লোড হবে)
const BookingModal = dynamic(() => import('@/components/BookingModal'), { ssr: false });
const CommandMenu = dynamic(() => import('@/components/CommandMenu'), { ssr: false });
const LiveActivityToast = dynamic(() => import('@/components/LiveActivityToast'), { ssr: false });
const QuickChatWidget = dynamic(() => import('@/components/QuickChatWidget'), { ssr: false });

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Growth Promotion ($45)');

  // Forced Reflow এড়াতে requestAnimationFrame ব্যবহার করে স্ক্রোল হ্যান্ডলিং
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });

      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);

  const handleOpenBooking = (pkg?: string) => {
    if (pkg) setSelectedPackage(pkg);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen relative flex flex-col bg-[#04070E] text-slate-100">
      {/* Cyber Grid Background Pattern */}
      <div className="cyber-grid" aria-hidden="true" />

      {/* Floating Dock Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Live Social Proof Activity Ticker */}
      <SocialProofTicker />

      {/* Lazy Loaded Below-the-fold Sections */}
      <VideoScanner onOpenBooking={handleOpenBooking} />
      <StatsTicker />
      <BentoGrid />
      <SpilloverSimulator onOpenBooking={handleOpenBooking} />
      <CaseStudies onOpenBooking={handleOpenBooking} />
      <PricingTiers onOpenBooking={handleOpenBooking} />
      <CampaignTracker />
      <GrowthEngine />
      <Testimonials />
      <FaqSection />
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Conditionally Rendered Modals */}
      {bookingOpen && (
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          defaultPackage={selectedPackage}
        />
      )}

      {commandMenuOpen && (
        <CommandMenu
          isOpen={commandMenuOpen}
          onClose={() => setCommandMenuOpen(false)}
          onOpenBooking={handleOpenBooking}
        />
      )}

      {/* Real-time Overlays */}
      <LiveActivityToast />
      <QuickChatWidget />
    </main>
  );
}
