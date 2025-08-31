
import React from "react";


import HeroSection from "./component/HeroSection";
import PricingSection from "./component/PricingSection";
import TestimonialSection from "../web-hosting/component/TestimonialSection";
import DomainSearchSection from "./component/DomainSearchSection";
import FAQComponent from "../cloud-hosting/components/FAQComponent";
import BDIXHeroSection from "./component/BDIXHeroSection";
import BDIXFeaturesSection from "./component/BDIXFeaturesSection";
import PlanCarouselSection from "./component/PlanCarouselSection";
import BDIXReviewSection from "./component/BDIXReviewSection";
import FeatureBenefitSection from "./component/FeatureBenefitSection";
import ComparisonTable from "./component/ComparisonTable";
import { comparisonTableData } from "./data/comparisonTableData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDIX Hosting",
};

export default function BDIXHosting() {
  return (
    <>

      <HeroSection></HeroSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <DomainSearchSection></DomainSearchSection>
      <ComparisonTable data={comparisonTableData} />
      <FeatureBenefitSection></FeatureBenefitSection>
      <BDIXFeaturesSection />
      <BDIXHeroSection></BDIXHeroSection>
      <BDIXReviewSection />
      <FAQComponent></FAQComponent>
       <PlanCarouselSection></PlanCarouselSection>
      
    </>
  );
}
