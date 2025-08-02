
import Navbar from "@/app/layout/Navbar";
import React from "react";

import Footer from "@/app/layout/Footer";
import HeroSection from "./component/HeroSection";

import FAQSection from "@/app/page/web-hosting/component/FAQSection";
import ComparisonTable from "./component/ComparisonTable";
import { vpsComparisonTableData } from "./data/vpsComparisonTableData";
import FeatureCards from "./component/FeatureCards";
import VpsFeaturesSection from "./component/VpsFeaturesSection";
import ContactSupportSection from "./component/ContactSupportSection";
import ReviewSection from "../../web-hosting/component/ReviewSection";
import TestimonialSection from "../../web-hosting/component/TestimonialSection";

export const metadata = {
  title: "VPS Hosting",
};

export default function Vps() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ComparisonTable data={vpsComparisonTableData} />
      <TestimonialSection></TestimonialSection>
      <FeatureCards />
      <VpsFeaturesSection />
      <ContactSupportSection />
      
      <FAQSection></FAQSection>
      <Footer></Footer>
    </>
  );
} 