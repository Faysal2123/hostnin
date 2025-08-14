"use client"
import React from "react";
import Image from "next/image";

const SignupHeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      const offset = 80; // Header height offset
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="w-full bg-gradient-to-r from-[#0A2A6C] to-[#1746A2] flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-0 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="flex-1 text-white text-center lg:text-left z-10 order-2 lg:order-1">
          <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Sign up for WordPress Hosting
            <br className="hidden sm:block" />
            <span className="text-blue-200">With Hostnin Today!</span>
          </h1>
          <p className="mt-4 sm:mt-6 mb-4 sm:mb-6 text-[15px] sm:text-base md:text-lg font-medium text-gray-100">
            Get Started Plan Offer <span className="text-gray-300">৳999</span> <span className="text-orange-400 font-semibold">per month.</span>
          </p>
          <div className="mt-6 sm:mt-8">
            <button 
              onClick={scrollToPricing}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-[15px] sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto cursor-pointer "
            >
              Get Started
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg h-full z-10 order-1 lg:order-2">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/07/building.png"
            alt="WordPress Hosting Illustration"
            width={400}
            height={400}
            className="object-contain w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SignupHeroSection; 
