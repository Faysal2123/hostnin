"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const scripts = [
  {
    name: "WordPress",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/wordpress-logo.svg",
  },
  {
    name: "Joomla",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/joomla-logo.svg",
  },
  {
    name: "Drupal",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/drupal-logo.svg",
  },
  {
    name: "Moodle",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/moodle-logo.svg",
  },
];

const SupportedScriptsCarousel: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visible = [
    scripts[startIdx],
    scripts[(startIdx + 1) % scripts.length],
  ];

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + scripts.length) % scripts.length);
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % scripts.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % scripts.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8f8f8] px-2 sm:px-4">
      <div
        className="max-w-7xl mx-auto bg-no-repeat bg-center rounded-xl sm:rounded-2xl"
        style={{
          backgroundImage:
            "url('https://hostnin.com/wp-content/uploads/2022/09/rs-award-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-center text-[#06125a] pt-6 sm:pt-8 md:pt-10 px-3">
          Our Supported Scripts
        </h2>
        <p className="text-gray-700 font-medium mb-4 sm:mb-6 max-w-2xl mx-auto text-center text-xs sm:text-sm md:text-base px-3 sm:px-4">
          Our platform allows you to run almost any script you need to run,
          except for cryptocurrency mining scripts.
        </p>
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 pb-8 sm:pb-12 md:pb-16 px-2 sm:px-4">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#06125a] text-white text-sm sm:text-lg md:text-xl focus:outline-none hover:bg-[#0d47a1] transition-colors duration-300 flex-shrink-0"
          >
            &#8592;
          </button>
          <div className="flex gap-2 sm:gap-4 md:gap-8 w-full max-w-4xl justify-center">
            {visible.map((script) => (
              <div
                key={script.name}
                className="flex-1 bg-white rounded-lg sm:rounded-xl py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-8 lg:px-40 flex flex-col items-center justify-center border border-gray-200 min-w-[140px] sm:min-w-[200px] md:min-w-[300px]"
              >
                <div
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full mb-2 sm:mb-3 md:mb-4"
                  style={{ background: "#f1f6ff" }}
                >
                  <Image
                    src={script.icon}
                    alt={script.name}
                    width={48}
                    height={48}
                    className="object-contain w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  />
                </div>
                <div className="font-bold text-sm sm:text-base md:text-lg text-[#06125a] mt-1 sm:mt-2 text-center">
                  {script.name}
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#06125a] text-white text-sm sm:text-lg md:text-xl focus:outline-none hover:bg-[#0d47a1] transition-colors duration-300 flex-shrink-0"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedScriptsCarousel;
