
import Navbar from "@/app/layout/Navbar";
import React from "react";

import Footer from "@/app/layout/Footer";
import TermsCondition from "./TermsCondition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function Condition() {
  return (
    <>
      <Navbar></Navbar>
       <TermsCondition></TermsCondition>
      <Footer></Footer>
    </>
  );
} 