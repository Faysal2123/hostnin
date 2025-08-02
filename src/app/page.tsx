"use client"
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import ControlPanelSection from "./page/home/ControlPanelSection";
import DomainSearchSection from "./page/home/DomainSearchSection";

import FeatureShowcaseSection from "./page/home/FeatureShowcaseSection";
import HeroSection from "./page/home/HeroSection";
import HostingPlansSection from "./page/home/HostingPlansSection";
import MigrationPromoSection from "./page/home/MigrationPromoSection";
import NewsletterSection from "./page/home/NewsletterSection";
import ReviewSection from "./page/home/ReviewSection";
import { useRef } from "react";

export default function Home() {
  const hostingPlansRef = useRef<HTMLDivElement>(null);

  const scrollToHostingPlans = () => {
    hostingPlansRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      
      <Navbar />
      <HeroSection></HeroSection>
      <div ref={hostingPlansRef}>
        <HostingPlansSection></HostingPlansSection>
      </div>
      <FeatureShowcaseSection></FeatureShowcaseSection>
      
      <MigrationPromoSection onViewPricingClick={scrollToHostingPlans}></MigrationPromoSection>
      <DomainSearchSection></DomainSearchSection>
      <ControlPanelSection></ControlPanelSection>
      <ReviewSection></ReviewSection>
      
     <NewsletterSection></NewsletterSection>
      
      <Footer></Footer>
    </div>
  );
}
