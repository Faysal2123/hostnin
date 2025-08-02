import Navbar from "@/app/layout/Navbar";
import React from "react";
import Footer from "@/app/layout/Footer";
import FAQComponent from "../../cloud-hosting/components/FAQComponent";
import TestimonialSection from "@/app/page/web-hosting/component/TestimonialSection";

import NvmeVsSsdSection from "./component/NvmeVsSsdSection";
import ContactSalesSection from "./component/ContactSalesSection";
import FeatureCardsSection from "./component/FeatureCardsSection";
import DedicatedServerPlansSection from "./component/DedicatedServerPlansSection";
import HeroSection from "./component/HeroSection";
import WhyChooseDedicatedSection from "./component/WhyChooseDedicatedSection";
import ReviewSection from "../../web-hosting/component/ReviewSection";

export const metadata = {
  title: "Dedicated Server",
};

export default function Vps() {
  return (
    <>
      <Navbar />
      <HeroSection></HeroSection>
      <DedicatedServerPlansSection />
      <WhyChooseDedicatedSection />
      <FeatureCardsSection />
      <ContactSalesSection></ContactSalesSection>
      <NvmeVsSsdSection />
      <ReviewSection></ReviewSection>
     <FAQComponent></FAQComponent>
      <Footer />
    </>
  );
}