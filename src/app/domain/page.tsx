
import Navbar from "@/app/layout/Navbar";
import HeroSection from "./component/HeroSection";
import DomainSearchSection from "./component/DomainSearchSection";
import DomainFeaturesSection from "./component/DomainFeaturesSection";
import SupportTeamSection from "./component/SupportTeamSection";
import FAQSection from "./component/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Registration",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DomainSearchSection />
      <SupportTeamSection />
      <DomainFeaturesSection />
      <FAQSection />
      
    </div>
  );
}
