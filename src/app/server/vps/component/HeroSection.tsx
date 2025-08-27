"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdDone } from "react-icons/md";
import FeatureCardsSection from "./FeatureCardsSection";
import { FaBolt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="pt-16 pb-24 px-3 sm:pt-8 sm:pb-32 sm:px-6 lg:pt-28 lg:pb-44 lg:px-10 relative overflow-visible"
      style={{
        backgroundImage:
          'url("https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png"), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)',
        backgroundPosition: "left center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, cover",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-0">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-6 lg:mb-0">
          <p className="text-white font-bold mb-2 text-xl sm:text-2xl">
            Lightning-fast with 100% NVMe storage
          </p>
          <h1
            className="text-[36px] sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-6"
            style={{ fontFamily: '"Urbanist", sans-serif' }}
          >
            We Provide High
            <br className="hidden sm:block" /> Performance VPS
          </h1>
          <p
            className="mb-2 sm:mb-3 text-lg my-4 sm:text-xl font-semibold text-white/90"
            style={{ fontFamily: '"Mulish", sans-serif' }}
          >
            VPS Starter plan - Starting at{" "}
            <span className="text-yellow-500">৳1999/mo</span>
          </p>
          <ul className="flex flex-col text-start gap-y-2 space-y-2 mt-4 justify-center lg:justify-start mb-8 sm:mb-8 text-base sm:text-base">
            {[
              "Unbeatable Performance, Security, & Updates",
              "Deploy standard distro, 1-click app or custom image",
              "Spin up your VPS in 50s",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-2"
                style={{ fontFamily: '"Mulish", sans-serif' }}
              >
                <span className="flex items-center text-base sm:text-xl leading-none">
                  <MdDone />
                </span>
                <span className="text-[16px] md:text-lg font-semibold leading-none">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="px-4 md:px-0">
            <button
              onClick={() => {
                const pricingSection =
                  document.getElementById("pricing-section");
                if (pricingSection) {
                  pricingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="relative cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold px-6 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl transition-all duration-500 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto mb-6 sm:mb-10 transform hover:-translate-y-1 border-2 border-blue-400 hover:border-indigo-500 flex items-center justify-center gap-2"
            >
              <FaBolt className="text-lg animate-pulse" />
              <span className="relative z-10"> Buy VPS Hosting</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-40 xs:h-52 sm:h-72 md:h-96 lg:h-[600px]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <Image
            src="https://hostnin.com/wp-content/uploads/2022/07/vps-header-1.png"
            alt="Server Illustration"
            width={800}
            height={600}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>

      {/* Overlapping Feature Cards Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-[40rem] sm:-bottom-[36rem] lg:-bottom-[22rem] z-20 px-3 sm:px-0">
        <FeatureCardsSection />
      </div>
    </section>
  );
};

export default HeroSection;
