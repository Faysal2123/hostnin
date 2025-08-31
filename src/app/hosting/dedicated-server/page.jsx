
import FAQComponent from "../../hosting/cloud-hosting/components/FAQComponent";
import TestimonialSection from "../../hosting/web-hosting/component/TestimonialSection";

import NvmeVsSsdSection from "./component/NvmeVsSsdSection";
import ContactSalesSection from "./component/ContactSalesSection";
import FeatureCardsSection from "./component/FeatureCardsSection";
import DedicatedServerPlansSection from "./component/DedicatedServerPlansSection";
import HeroSection from "./component/HeroSection";
import WhyChooseDedicatedSection from "./component/WhyChooseDedicatedSection";
import ReviewSection from "../../hosting/web-hosting/component/ReviewSection";
import NewsletterSection from "./component/NewsletterSection";

export const metadata = {
  title: "Dedicated Server",
};

export default function Vps() {
  return (
    <>
     
      <HeroSection></HeroSection>
      <DedicatedServerPlansSection />
      <WhyChooseDedicatedSection />
      <FeatureCardsSection />
      <ContactSalesSection></ContactSalesSection>
      <NvmeVsSsdSection />
      <ReviewSection></ReviewSection>
     <FAQComponent></FAQComponent>
     <NewsletterSection></NewsletterSection>
     
    </>
  );
}