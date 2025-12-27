"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import StatsGrid from "@/components/sections/stats-grid";
import ComparisonSection from "@/components/sections/comparison";
import HowItWorks from "@/components/sections/how-it-works";
import FeaturesGrid from "@/components/sections/features-grid";
import Pricing from "@/components/sections/pricing";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Tab } from "@/types";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.WALLET);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden selection:bg-primary/20 selection:text-primary pb-24">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 blur-[120px] rounded-full animate-liquid" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/5 blur-[100px] rounded-full animate-liquid" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-primary/3 blur-[140px] rounded-full animate-liquid" style={{ animationDuration: '30s' }} />
      </div>

      <Header />
      <main className="flex-grow w-full">
        <HeroSection />
        <TrustedBy />
        <StatsGrid />
        <ComparisonSection />
        <HowItWorks />
        <FeaturesGrid />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
      
      <BottomNav currentTab={activeTab} setTab={setActiveTab} />
    </div>
  );
}
