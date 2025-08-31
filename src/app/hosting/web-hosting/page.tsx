
import DiscountBanner from "./component/DiscountBanner";
import PricingCards from "./component/card/PricingCards";
import TestimonialSection from "./component/TestimonialSection";
import DomainSearchSection from "./component/DomainSearchSection";
import PartnersSection from "./component/PartnersSection";
import FeatureBenefitSection from "./component/FeatureBenefit";
import GuaranteeSection from "./component/GuaranteeSection";
import FeatureHighlightSection from "./component/FeatureHighlightSection";
import ContactSalesSection from "./component/ContactSalesSection";
import FeatureTabSection from "./component/FeatureTabSection";

import MigrationPromoSection from "./component/MigrationPromoSection";
import FAQSection from "./component/FAQSection";

import CloudFeatureDifference from "./component/FeatureDifferenceSection";
import HeroSection from "./component/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Hosting",
};

export default function WebHostingPage() {
  return (
    <div className="min-h-screen">
      <DiscountBanner></DiscountBanner>
      
      
      <HeroSection></HeroSection>
      <PricingCards />
      <TestimonialSection />
      <DomainSearchSection />
      <PartnersSection />
      <FeatureBenefitSection />
      <GuaranteeSection />
      <CloudFeatureDifference/>
      <FeatureHighlightSection />
      <ContactSalesSection />
      <FeatureTabSection />
     
      <MigrationPromoSection />
      <FAQSection />
      
    </div>
  );
}
