"use client";
import React, { useState } from "react";
import Image from "next/image";
import { featureTabs } from "../data/featureTabs";
import { FeatureTab } from "../types/FeatureTab";
import { MdDone } from "react-icons/md";

const FeatureTabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(featureTabs[0].key);
  const currentTab: FeatureTab = featureTabs.find(tab => tab.key === activeTab)!;

  return (
    <section className="py-8 sm:py-12 md:py-16 w-full flex justify-center bg-[#f8f8f8] px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl w-full gap-6 sm:gap-8 lg:gap-0">
        {/* Left: Illustration */}
        <div className="flex-1 flex justify-center items-start w-full order-2 lg:order-1 lg:sticky lg:top-8">
          <div className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[500px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[400px] flex items-center justify-center">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/09/laptop-man.png"
              alt={currentTab.title}
              width={400}
              height={400}
              className="w-full h-auto max-w-[400px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Tab Content */}
        <div className="flex-[1.5] flex flex-col justify-center items-start lg:pl-10 w-full order-1 lg:order-2">
          <h2 className="text-3xl md:text-3xl lg:text-[40px] font-bold text-[#06113C] mb-3 sm:mb-4 leading-tight px-2 text-center lg:text-left font-['Urbanist',sans-serif]">
            Advance features for the <br className="hidden sm:block" /> advanced user
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 border-b border-gray-200 w-full justify-center lg:justify-start">
            {featureTabs.map(tab => (
              <button
                key={tab.key}
                className={`px-2 sm:px-3 md:px-4 py-1 text-[15px] sm:text-base font-bold border-b-2 transition-colors duration-200 focus:outline-none whitespace-nowrap font-['Urbanist',sans-serif] ${
                  activeTab === tab.key
                    ? "border-blue-800 text-black"
                    : "border-transparent text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-base md:text-base max-w-4xl text-justify px-2 lg:text-left font-['Mulish',sans-serif]">
            {currentTab.description}
          </p>

          <ul className="mb-4 sm:mb-6 space-y-2 sm:space-y-3 px-2 w-full">
            {currentTab.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm sm:text-base md:text-lg text-[#1DBF73] font-medium font-['Mulish',sans-serif]">
                <span className="w-5 h-5 sm:w-6 sm:h-6 mr-2 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MdDone className="text-white" size={16} />
                </span>
                <span className="text-gray-800 font-normal text-base md:text-[17px] font-['Mulish',sans-serif]">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Only show button for "Global Data Center" tab */}
          {currentTab.title === "Global Data Centers" && (
            <div className="px-2 w-full flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-colors duration-200 text-[15px] sm:text-base md:text-base w-full sm:w-auto font-bold cursor-pointer">
                Explore More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureTabSection;
