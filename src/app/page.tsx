"use client"

import ContactSalesBanner from "./home/ContactSalesBanner";
import ControlPanelSection from "./home/ControlPanelSection";
import DomainSearchSection from "./home/DomainSearchSection";

import HeroSection from "./home/HeroSection";
import HostingPlansSection from "./home/HostingPlansSection";
import MigrationPromoSection from "./home/MigrationPromoSection";
import NewsletterSection from "./home/NewsletterSection";
import ReviewSection from "./home/ReviewSection";
import TeamSupportSection from "./home/TeamSupportSection";

import Navbar from "./layout/Navbar";

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
   <div>
     <div className="min-h-screen">
    
      
      <Navbar />
      <HeroSection></HeroSection>
      <div ref={hostingPlansRef}>
        <HostingPlansSection></HostingPlansSection>
      </div>
      {/* <FeatureShowcaseSection></FeatureShowcaseSection> */}
      
      <MigrationPromoSection onViewPricingClick={scrollToHostingPlans}></MigrationPromoSection>
      
      <DomainSearchSection></DomainSearchSection>
      <ControlPanelSection></ControlPanelSection>
      <ContactSalesBanner></ContactSalesBanner>
      <ReviewSection></ReviewSection>
      <TeamSupportSection></TeamSupportSection>
      
     <NewsletterSection></NewsletterSection>
      
    </div>
   </div>
  );
}
