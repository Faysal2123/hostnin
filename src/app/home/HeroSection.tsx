import React from "react";
import Image from "next/image";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[60vh] md:min-h-[60vh] lg:min-h-[800px]"
      style={{
        background:
          "linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-10 relative z-10 pt-16 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[50vh] md:min-h-[40vh] lg:min-h-[60vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-[34px] sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                Best Web Hosting
                <br />
                <span className="relative">
                  Company in Bangladesh
                  <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-1 bg-white"></div>
                </span>
              </h1>
            </div>

            {/* Body Text */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto lg:mx-0 text-justify">
              At Hostnin, you&apos;ll discover top-notch web hosting solutions
              tailored for portfolios, e-commerce, and any type of website you
              can envision. Experience superior support, advanced features, and
              competitive pricing when you purchase web hosting from
              Bangladesh’s best hosting provider.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
               <button
      onClick={() => {
        const pricingSection = document.getElementById("pricing-section");
        if (pricingSection) {
          pricingSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }}
      className="group w-full sm:w-auto cursor-pointer bg-white text-gray-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 
                 rounded-full border border-gray-300 hover:bg-gray-100 
                 transition-transform duration-300 ease-in-out 
                 flex items-center justify-center text-sm sm:text-base lg:text-[17px] 
                 hover:scale-105"
    >
      Start My Hosting Now
      <span
        className="ml-2 opacity-0 transform translate-x-2 transition-all duration-300 
                   group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-110"
      >
        <FaArrowRightLong className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </span>
    </button>
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center group font-bold text-base sm:text-lg"
              >
                Trusted By Agencies & Startups
                <FiArrowRight className=" w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Guarantee Text */}
            <div className="flex items-center justify-center lg:justify-start text-white/80 text-sm sm:text-base lg:text-lg font-semibold">
              <FiCheckCircle className="hidden lg:inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white flex-shrink-0" />
              <span>30-Day Money-Back Guarantee. Cancel Anytime.</span>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative order-2 lg:order-2">
            {/* First Image */}
            <div className="relative mt-6 sm:mt-8 lg:mt-20">
              <Image
                src="https://hostfame.com/wp-content/uploads/2024/01/hosting-01.svg"
                alt="Web Hosting Infrastructure"
                width={400}
                height={200}
                className="w-4/5 sm:w-2/3 h-auto mx-auto"
              />
            </div>

            {/* Second Image */}
            <div className="relative -mt-12 sm:-mt-16 lg:-mt-32">
              <Image
                src="https://hostfame.com/wp-content/uploads/2024/01/hosting.svg"
                alt="Hosting Services"
                width={200}
                height={150}
                className="w-3/5 sm:w-1/2 h-auto mx-auto"
              />
            </div>

            {/* Abstract Lines and Dots */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
              <div className="absolute top-5 right-10 sm:top-10 sm:right-20 w-1 sm:w-2 h-10 sm:h-20 bg-white/30 rounded-full"></div>
              <div className="absolute top-10 right-16 sm:top-20 sm:right-32 w-0.5 sm:w-1 h-8 sm:h-16 bg-blue-400/50 rounded-full"></div>
              <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-0.5 sm:w-1 h-6 sm:h-12 bg-white/40 rounded-full"></div>

              {/* Dots */}
              <div className="absolute top-2 right-8 sm:top-5 sm:right-16 w-1 sm:w-2 h-1 sm:h-2 bg-white rounded-full"></div>
              <div className="absolute top-8 right-14 sm:top-15 sm:right-28 w-0.5 sm:w-1.5 h-0.5 sm:h-1.5 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-8 right-2 sm:bottom-15 sm:right-5 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
