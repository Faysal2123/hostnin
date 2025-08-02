"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  const [domainName, setDomainName] = useState("");

  const handleSearch = () => {
    // Handle domain search logic here
    console.log("Searching for domain:", domainName);
  };

  return (
    <section className="pt-8 pb-12 px-2 sm:pt-12 sm:pb-20 sm:px-6 lg:pt-28 lg:pb-24 lg:px-10 relative"
    style={{
      backgroundImage: 'url("https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png"), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)',
      backgroundPosition: "left center, center",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "contain, cover"
    }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Domain Search Content */}
        <div className="flex-1 text-white lg:pr-12 text-left mb-8 lg:mb-0">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6 text-white" style={{ fontFamily: 'var(--font-urbanist)' }}>
            Search & Register Domain For Your Website
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-base mb-8 sm:mb-12 opacity-90">
            Cheap domains with advanced features; get top-level domains only at 1650TK/year.
          </p>

          {/* Domain Search Interface */}
          <div className="flex flex-col sm:flex-row items-start justify-start gap-3 mb-3">
            <div className="relative flex-1 max-w-2xl w-full flex">
              <input
                type="text"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                placeholder="ilovehostnin.com"
                className="w-full px-6 py-4 text-lg bg-gray-200 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border-r-0"
              />
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-r-lg font-semibold text-lg flex items-center gap-2 transition-all duration-200 border-l-0"
              >
                <FaSearch className="text-white" />
                Check
              </button>
            </div>
          </div>

          {/* Domain Pricing */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="text-left">
              <div className="text-white text-lg sm:text-xl font-bold mb-1">.COM</div>
              <div className="text-slate-300 text-sm sm:text-sm opacity-90">৳1650/Year</div>
            </div>
            <div className="text-left">
              <div className="text-white text-lg sm:text-xl font-bold mb-1">.ORG</div>
              <div className="text-slate-300 text-sm sm:text-sm opacity-90">৳1650/Year</div>
            </div>
            <div className="text-left">
              <div className="text-white text-lg sm:text-xl font-bold mb-1">.NET</div>
              <div className="text-slate-300 text-sm sm:text-sm opacity-90">৳1650/Year</div>
            </div>
            <div className="text-left">
              <div className="text-white text-lg sm:text-xl font-bold mb-1">.XYZ</div>
              <div className="text-slate-300 text-sm sm:text-sm opacity-90">৳599/Year</div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/08/dm-hero.png"
            alt="Domain Registration Illustration" 
            width={400} 
            height={400} 
            className="object-contain w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;