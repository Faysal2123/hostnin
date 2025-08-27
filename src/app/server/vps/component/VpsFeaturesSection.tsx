"use client";
import React from "react";
import Image from "next/image";
import { vpsFeaturesData } from "../data/vpsFeaturesData";

const VpsFeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-5 sm:py-5 pb-8 sm:pb-10 flex flex-col items-center relative overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h2 className="text-[30px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-3  sm:mb-8 text-center font-['Urbanist',sans-serif]">
          Hostnin Virtual Private Servers Include
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          {vpsFeaturesData.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-5 pb-6 sm:p-5 md:p-8 flex flex-col items-start border border-gray-100 min-h-[120px] sm:min-h-[140px] md:min-h-[180px] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              
              <div className="flex-shrink-0 w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#f1f6ff] mb-2 sm:mb-3 md:mb-4 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="object-contain w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
                  priority={true}
                />
              </div>
              <span className="font-bold text-xl sm:text-base md:text-lg lg:text-xl text-black mb-1 sm:mb-2 font-['Urbanist',sans-serif]">
                {feature.title}
              </span>
              <span className="text-gray-500 text-base md:text-sm lg:text-[17px] font-medium text-left font-['Mulish',sans-serif]">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default VpsFeaturesSection;
