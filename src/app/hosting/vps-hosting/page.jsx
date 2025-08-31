


import HeroSection from "./component/HeroSection";

import FAQSection from "../../hosting/web-hosting/component/FAQSection";
import ComparisonTable from "./component/ComparisonTable";
import { vpsComparisonTableData } from "./data/vpsComparisonTableData";
import FeatureCards from "./component/FeatureCards";
import VpsFeaturesSection from "./component/VpsFeaturesSection";
import ContactSupportSection from "./component/ContactSupportSection";

import TestimonialSection from "../../hosting/web-hosting/component/TestimonialSection";
import NewsletterSection from "./component/NewsletterSection";

export const metadata = {
  title: "VPS Hosting",
};

export default function Vps() {
  return (
    <>
     
      <HeroSection></HeroSection>
      <ComparisonTable data={vpsComparisonTableData} />
      <TestimonialSection></TestimonialSection>
      <FeatureCards />
      <VpsFeaturesSection />
      <ContactSupportSection />
      
      <FAQSection></FAQSection>
     <NewsletterSection></NewsletterSection>
    </>
  );
} 