'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProofTicker from '@/components/SocialProofTicker';
import VideoScanner from '@/components/VideoScanner';
import StatsTicker from '@/components/StatsTicker';
import BentoGrid from '@/components/BentoGrid';
import SpilloverSimulator from '@/components/SpilloverSimulator';
import CaseStudies from '@/components/CaseStudies';
import PricingTiers from '@/components/PricingTiers';
import CampaignTracker from '@/components/CampaignTracker';
import GrowthEngine from '@/components/GrowthEngine';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import CommandMenu from '@/components/CommandMenu';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Growth Promotion ($45)');

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

      {/* AI-Powered YouTube Video & Channel Scanner */}
      <VideoScanner onOpenBooking={handleOpenBooking} />

      {/* Performance Ticker */}
      <StatsTicker />

      {/* Linear-Style Asymmetric Bento Grid Engine */}
      <BentoGrid />

      {/* Compounding & Organic Browse Spillover Simulator */}
      <SpilloverSimulator onOpenBooking={handleOpenBooking} />

      {/* 16 Real Verified YouTube Case Studies */}
      <CaseStudies onOpenBooking={handleOpenBooking} />

      {/* Pricing & Retainer Plans */}
      <PricingTiers onOpenBooking={handleOpenBooking} />

      {/* Full-Stack Live Order Tracking Portal */}
      <CampaignTracker />

      {/* 4 Architecture Pillars */}
      <GrowthEngine />

      {/* Creator Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* High-Conversion Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Full-Stack Campaign Booking Intake Dialog */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultPackage={selectedPackage}
      />

      {/* Linear-Style Command Menu (⌘K) */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        onOpenBooking={handleOpenBooking}
      />
    </main>
  );
}
