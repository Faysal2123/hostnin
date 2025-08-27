
import Navbar from "@/app/layout/Navbar";
import React from "react";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "../web-hosting/component/TestimonialSection";
import { comparisonTableData } from "./data/comparisonTableData";
import ComparisonTable from "./components/ComparisonTable";
import CloudFeatureSection from "./components/CloudFeatureSection";
import FeatureCards from './components/FeatureCards';
import FAQComponent from "./components/FAQComponent";
import Footer from "@/app/layout/Footer";
import MoneyBack from "./components/MoneyBack";
import CloudFeatureDifference from "./components/CloudFeatureDifference";
import FeatureListSection from "./components/FeatureListSection";
import ControlPanelSection from "./components/ControlPanelSection";
import PerformanceAndSupportSection from "./components/PerformanceAndSupportSection";
import GuideGridSection from "./components/GuideGridSection";
import HeroSection from "./components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Hosting",
};

export default function CloudHostingPage() {
  return (
    <>
      <Navbar></Navbar>
     
      <HeroSection></HeroSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <ComparisonTable data={comparisonTableData} />
      <CloudFeatureSection></CloudFeatureSection>
      <FeatureCards />
      <MoneyBack></MoneyBack>
      <CloudFeatureDifference></CloudFeatureDifference>
      <FeatureListSection></FeatureListSection>
      <ControlPanelSection />
      <PerformanceAndSupportSection></PerformanceAndSupportSection>
      <GuideGridSection></GuideGridSection>
      <FAQComponent></FAQComponent>

      <Footer></Footer>
    </>
  );
} 