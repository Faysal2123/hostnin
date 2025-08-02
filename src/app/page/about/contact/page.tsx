
import Navbar from "@/app/layout/Navbar";
import React from "react";

import Footer from "@/app/layout/Footer";
import HeroSection from "./HeroSection";
import ContactSalesBanner from "./ContactSalesBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
       <HeroSection></HeroSection>
      <ContactSalesBanner />
      <Footer></Footer>
    </>
  );
} 