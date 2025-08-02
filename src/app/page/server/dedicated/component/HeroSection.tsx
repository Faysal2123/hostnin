"use client";

import Image from "next/image";
import { MdDone } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-12 px-2 sm:pt-12 sm:pb-20 sm:px-6 lg:pt-16 lg:pb-10 lg:px-10 relative"
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
          <p className="text-white font-semibold mb-2 text-base sm:text-xl">
            Plans Starting at <span className="text-yellow-400">৳99999/mo</span>
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6" style={{ fontFamily: '"Urbanist", sans-serif' }}>
            Managed Dedicated<br className="hidden sm:block" /> Server Hosting
          </h1>
          <p className="mb-6 my-5 sm:mb-8 text-sm sm:text-lg text-white/90" style={{ fontFamily: '"Mulish", sans-serif' }}>
            Hostnin specializes in bare-metal technology. You can host your website, set up your high-resilience infrastructure, or customize your machine with just a few clicks.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-start mb-6 sm:mb-8">
            <li className="flex items-center gap-2" style={{ fontFamily: '"Mulish", sans-serif' }}>
              <span className="text-lg sm:text-xl"><MdDone /></span>
              <span className="font-semibold text-base sm:text-lg">Performance</span>
            </li>
            <li className="flex items-center gap-2" style={{ fontFamily: '"Mulish", sans-serif' }}>
              <span className="text-lg sm:text-xl"><MdDone /></span>
              <span className="font-semibold text-base sm:text-lg">SSD24x7 Support</span>
            </li>
            <li className="flex items-center gap-2" style={{ fontFamily: '"Mulish", sans-serif' }}>
              <span className="text-lg sm:text-xl"><MdDone /></span>
              <span className="font-semibold text-base sm:text-lg">Gbit Port Speed</span>
            </li>
          </ul>
          <button className="text-white font-semibold px-8 py-3 rounded transition text-base sm:text-lg shadow w-full sm:w-auto mb-6 sm:mb-10 hover:shadow-lg" style={{ fontFamily: '"Urbanist", sans-serif', background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)' }}>
            Custom Quote <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center w-[400px] h-[400px] sm:w-[600px] sm:h-[500px] lg:w-[800px] lg:h-[600px]">
          <Image
            src="https://hostnin.com/wp-content/uploads/2022/07/Vps-slider-2.png"
            alt="Server Illustration"
            width={800}
            height={600}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
