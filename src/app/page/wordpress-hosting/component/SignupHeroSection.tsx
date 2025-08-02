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
    <section className="w-full bg-gradient-to-r from-[#0A2A6C] to-[#1746A2] flex items-center justify-center px-2  sm:px-8 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white text-center lg:text-left z-10">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-4">
            Sign up for WordPress Hosting<br className="hidden sm:block" />
            With Hostnin Today!
          </h1>
          <p className="mt-6 mb-2 text-base sm:text-lg font-medium">
            Get Started Plan Offer <span className=" text-gray-300">৳999</span> <span className="text-orange-400 font-semibold">per month.</span>
          </p>
          <div className="mt-8">
            <button 
              onClick={scrollToPricing}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition text-base shadow"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-8 lg:mt-0 w-full max-w-md h-full z-10">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/07/building.png"
            alt="WordPress Hosting Illustration"
            width={400}
            height={400}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    
    </section>
  );
};

export default SignupHeroSection; 