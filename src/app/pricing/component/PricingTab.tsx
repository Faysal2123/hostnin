"use client";
import React, { useState } from "react";
import WebHostingPrice from "./WebHostingPrice";
import CloudHostingPrice from "./CloudHostingPrice";
import TurboHostingPrice from "./TurboHostingPrice";
import BdixHostingPrice from "./BdixHostingPrice";

const tabs = [
  { id: "Web Hosting", label: "Web Hosting", component: <WebHostingPrice /> },
  { id: "Cloud Hosting", label: "Cloud Hosting", component: <CloudHostingPrice /> },
  { id: "Turbo Hosting", label: "Turbo Hosting", component: <TurboHostingPrice /> },
  { id: "Bdix Hosting", label: "Bdix Hosting", component: <BdixHostingPrice /> },
];

const PricingTab = () => {
  const [activeTab, setActiveTab] = useState("Web Hosting");

  return (
    <div className="pt-5 bg-[#f8f8f8]">
      {/* Tab Buttons */}
      <div className="flex justify-center px-3">
        <div
          className="
            flex flex-wrap sm:inline-flex 
            gap-2 sm:gap-3 
            rounded-lg bg-gray-100 p-2 shadow-md w-full sm:w-auto
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 sm:flex-none text-center px-2 md:px-4 py-2 rounded-md font-medium md:transition-all md:duration-300 cursor-pointer 
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-md text-sm  md:text-xl font-semibold"
                    : "text-gray-700 hover:bg-blue-100 text-xs  md:text-lg"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4 rounded-xl shadow-lg bg-white ">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default PricingTab;
