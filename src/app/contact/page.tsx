
import Navbar from "@/app/layout/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import ContactSalesBanner from "./ContactSalesBanner";
import { Metadata } from "next";
import Team from "./Team";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
       <HeroSection></HeroSection>
       <Team></Team>
      <ContactSalesBanner />
   
    </>
  );
} 