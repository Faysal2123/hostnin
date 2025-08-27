
import Navbar from "@/app/layout/Navbar";
import React from "react";

import Footer from "@/app/layout/Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <>
      <Navbar></Navbar>
      <PrivacyPolicy></PrivacyPolicy>
      <Footer></Footer>
    </>
  );
} 