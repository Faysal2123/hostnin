

import React from "react";


import HeroSection from "./component/HeroSection";
import PricingSection from "./component/PricingSection";
import TestimonialSection from "../web-hosting/component/TestimonialSection";
import WordpressHighlightsSection from "./component/WordpressHighlightsSection";
import FAQSection from "../web-hosting/component/FAQSection";
import StatsSection from "./component/StatsSection";
import PlanIncludesSection from "./component/PlanIncludesSection";
import SignupHeroSection from "./component/SignupHeroSection";
import WordpressReview from "./component/WordpressReview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Hosting",
};

export default function WordpressHosting() {
  return (
    <>
     
      <HeroSection></HeroSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <WordpressHighlightsSection></WordpressHighlightsSection>
      <StatsSection></StatsSection>
      <PlanIncludesSection />
      <SignupHeroSection></SignupHeroSection>
      <WordpressReview></WordpressReview>
      <FAQSection></FAQSection>
  
    </>
  );
} 