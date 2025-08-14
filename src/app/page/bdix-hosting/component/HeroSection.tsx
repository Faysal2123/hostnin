"use client";

import cardData from "@/app/page/web-hosting/data/cardData";
import Image from "next/image";

import { useEffect, useState, useMemo } from "react";
import { MdDone } from "react-icons/md";
import FeatureCards from "./card/FeatureCards";
import { FaBolt } from "react-icons/fa";

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const HeroSection = () => {
  
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1); // 1 day from now
    date.setHours(0, 0, 0, 0); // Reset to midnight
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

 const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-yellow-400 font-bold mb-2 text-base sm:text-xl">Expertly Crafted for Online Businesses</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-urbanist)' }}>
            Get Fastest Hosting<br/>Upto 76% Discount
          </h1>
          <ul className="mb-4 sm:mb-6 md:mb-8 my-3 sm:my-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-lg grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 px-2 sm:px-0">
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-[16px] md:text-lg">Super Fast SSD Storage</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-[16px] md:text-lg">Advanced Cache Management</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-[16px] md:text-lg">Lifetime Free SSL Certificate</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-[16px] md:text-lg">Unlimited Bandwidth</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-[16px] md:text-lg">Managed WordPress</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-[16px] md:text-lg">WordPress Acceleration</span>
            </li>
          </ul>
          {/* Countdown */}
          <div className="mb-8 sm:mb-14">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-14 justify-center lg:justify-start flex-wrap">
              {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                <div
                  key={index}
                  className="bg-white text-[#03206B] rounded-lg p-3 sm:p-4 lg:p-5 text-center w-16 sm:w-18 md:w-20 lg:w-24 mb-2 sm:mb-3 shadow-lg"
                >
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    {String(timeLeft[unit as keyof typeof timeLeft]).padStart(
                      2,
                      "0"
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-medium leading-tight mt-1">
                    {unit === "seconds" ? "Second" : unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
         <div className="px-4 md:px-0">
         <button 
            onClick={scrollToPricing}
            className="relative cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold px-6 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl transition-all duration-500 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto mb-6 sm:mb-10 transform hover:-translate-y-1 border-2 border-blue-400 hover:border-indigo-500 flex items-center justify-center gap-2"
          >
            <FaBolt className="text-lg animate-pulse" />
            <span className="relative z-10">Claim Offer Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </button>
         </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/09/hero-vector.png"
            alt="Server Illustration" 
            width={400} 
            height={400} 
            className="object-contain w-full h-auto" 
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <FeatureCards cards={cardData} bottom="-40px xs:-60px sm:-120px lg:-180px" />
      </div>
    </section>
  );
};

export default HeroSection;