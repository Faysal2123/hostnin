

import React from "react";


import PrivacyPolicy from "./PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <>
     
      <PrivacyPolicy></PrivacyPolicy>
      
    </>
  );
} 