

import React from "react";


import TermsCondition from "./TermsCondition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function Condition() {
  return (
    <>
      
       <TermsCondition></TermsCondition>
     
    </>
  );
} 