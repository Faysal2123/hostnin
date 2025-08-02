
import Navbar from "@/app/layout/Navbar";
import React from "react";

import Footer from "@/app/layout/Footer";
import PlanCarouselSection from "../bdix-hosting/component/PlanCarouselSection";

import PerformanceAndSupportSection from "./component/PerformanceAndSupportSection";
import WebAppHostingSection from "./component/WebAppHostingSection";
import ResellerBenefitsSection from "./component/ResellerBenefitsSection";
import HeroSection from "./component/HeroSection";
import ReviewSection from "../web-hosting/component/ReviewSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reseller Hosting",
};

export default function ResellerHosting() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ResellerBenefitsSection></ResellerBenefitsSection>
     
      <PerformanceAndSupportSection></PerformanceAndSupportSection>
       <ReviewSection></ReviewSection>
       <WebAppHostingSection></WebAppHostingSection>
       <PlanCarouselSection></PlanCarouselSection>
      <Footer></Footer>
    </>
  );
} 