

import React from "react";

import HeroSection from "./component/HeroSection";
import PlanIncludesSection from "./component/PlanIncludesSection";
import PricingSection from "./component/PricingSection";
import FAQComponent from "../cloud-hosting/components/FAQComponent";
import PerformanceAndSupportSection from "./component/PerformanceAndSupportSection";
import ContactSection from "./component/ContactSection";
// import OrderingProcessSection from './component/OrderingProcessSection';
import { Metadata } from "next";
import WordpressHighlightsSection from "./component/WordpressHighlightsSection";

export const metadata: Metadata = {
  title: "Turbo Hosting",
};

export default function TurboHosting() {
  return (
    <>
      
      <HeroSection></HeroSection>
      <PricingSection></PricingSection>
      <PlanIncludesSection></PlanIncludesSection>
      <PerformanceAndSupportSection></PerformanceAndSupportSection>
      {/* <OrderingProcessSection /> */}
      <WordpressHighlightsSection></WordpressHighlightsSection>
      <ContactSection></ContactSection>
      
      <FAQComponent></FAQComponent>
  
    </>
  );
} 