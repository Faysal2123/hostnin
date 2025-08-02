"use client";

import Image from "next/image";
import { FaBolt, FaMoneyBillWave } from "react-icons/fa";


const Arrow = () => (
  <span className="ml-2 text-lg align-middle">&rarr;</span>
);

const HeroSection = () => {
  return (
    <section
      className="min-h-[620px] flex items-center justify-center px-2 pt-5 sm:px-6 lg:px-10 relative "
      style={{
        backgroundImage: 'url("https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png"), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)',
        backgroundPosition: "left center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, cover"
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-[1.2] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Top Badge */}
          <div className="flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm self-center lg:self-start">
            <FaBolt className="text-yellow-400 text-lg" />
            <span className="text-white font-semibold text-base sm:text-lg">
              Upto 90% Off on <span className="font-bold">Web Hosting</span>
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-5xl leading-tight mb-4 relative inline-block" style={{ fontFamily: 'var(--font-urbanist)' }}>
          Best Web Hosting Company<br />
            <span className="relative inline-block">
            in Bangladesh
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400 -z-10 rounded-sm" style={{height:'0.4em'}}></span>
            </span>
          </h1>
          {/* Subheadline */}
          <p className="text-white/90 text-base sm:text-base max-w-2xl mb-8">
          At Hostnin, you&apos;ll discover top-notch web hosting solutions tailored for portfolios, e-commerce, and any type of website you can envision. Experience superior support, advanced features, and competitive pricing when you purchase web hosting from Bangladesh’s best hosting provider.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 w-full sm:w-auto">
            <button className="bg-white text-[#0B6A6B] font-semibold px-7 py-3 rounded-full sm:rounded-[2.5rem] text-base flex items-center justify-center min-w-[260px] border-0 shadow-none hover:bg-yellow-400 hover:text-[#0B6A6B] transition">
              View Pricing <Arrow />
            </button>
            <button className="bg-transparent border border-white/40 text-white font-semibold px-7 py-3 rounded-full sm:rounded-[2.5rem] text-lg flex items-center justify-center min-w-[260px] hover:bg-white hover:text-[#0B6A6B] transition">
              Contact Us <Arrow />
            </button>
          </div>
          {/* Guarantee Row */}
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 self-center lg:self-start">
            <FaMoneyBillWave className="text-yellow-400 text-xl" />
            <span className="text-white font-semibold text-base sm:text-lg">
              30–Day Money–Back Guarantee. Cancel Anytime.
            </span>
          </div>
        </div>
        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/09/turbo-hosting-1.png"
            alt="Server Illustration" 
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

export default HeroSection;
