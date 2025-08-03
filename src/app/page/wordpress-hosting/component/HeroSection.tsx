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
    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0, 0);
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
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="pt-4 pb-8 px-3 sm:pt-8 sm:pb-12 md:pt-12 md:pb-20 lg:pt-28 lg:pb-24 lg:px-10 relative"
    style={{
      backgroundImage: 'url("https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png"), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)',
      backgroundPosition: "left center, center",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "contain, cover"
    }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between pt-5">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-6 sm:mb-8 lg:mb-0">
          
          <h1 className="text-[25px] md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'var(--font-urbanist)' }}>
            2X Fast & Secure<br/>WordPress Hosting
          </h1>
          <p className="font-semibold mb-2 text-base md:text-xl text-white px-2 sm:px-0">
            WordPress Starter Plan - Starts from only for <span className="text-yellow-400">৳1799/year</span>
          </p>
          <ul className="mb-4 sm:mb-6 md:mb-8 my-3 sm:my-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-lg grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 px-2 sm:px-0">
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-xs sm:text-sm md:text-lg">Super Fast SSD Storage</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-xs sm:text-sm md:text-lg">Unlimited Bandwidth</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-xs sm:text-sm md:text-lg">Advanced Cache Management</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-xs sm:text-sm md:text-lg">Managed WordPress</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-xs sm:text-sm md:text-lg">Lifetime Free SSL Certificate</span>
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
              <span className="text-base sm:text-lg md:text-xl text-white"><MdDone /></span> 
              <span className="text-xs sm:text-sm md:text-lg">WordPress Acceleration</span>
            </li>
          </ul>

          {/* Countdown */}
          <div className="mb-6 sm:mb-8 md:mb-14">
            <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-14 justify-center lg:justify-start flex-wrap px-2 sm:px-0">
              {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                <div
                  key={index}
                  className="bg-white text-[#03206B] rounded-lg p-2 sm:p-3 md:p-4 lg:p-5 text-center w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 mb-2 sm:mb-3 shadow-lg"
                >
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
                    {String(timeLeft[unit as keyof typeof timeLeft]).padStart(
                      2,
                      "0"
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-medium leading-tight mt-0.5 sm:mt-1">
                    {unit === "days" ? "Day" : unit === "hours" ? "Hour" : unit === "minutes" ? "Minute" : "Second"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          <div className="px-4 md:px-0">
          <button 
            onClick={scrollToPricing}
            className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold px-4 sm:px-6 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 rounded-xl transition-all duration-500 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto mb-4 sm:mb-6 md:mb-10 transform hover:-translate-y-1 border-2 border-blue-400 hover:border-indigo-500 flex items-center justify-center gap-2"
          >
            <FaBolt className="text-sm sm:text-lg animate-pulse" />
            <span className="relative z-10">Claim Offer Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-2 sm:mt-4 md:mt-8 lg:mt-0 w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl h-full px-2 sm:px-0">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/07/hero-img-1.png"
            alt="Server Illustration" 
            width={400} 
            height={400} 
            className="object-contain w-full h-auto" 
          />
        </div>
      </div>

      <div className="hidden sm:block">
        <FeatureCards cards={cardData} bottom="-80px sm:-120px lg:-180px" />
      </div>
    </section>
  );
};

export default HeroSection;
