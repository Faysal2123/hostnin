"use client";
import React, { useEffect, useState, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";

const getTimeLeft = (targetDate: Date) => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
};

const DiscountBanner: React.FC = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setHours(
      date.getHours() + 12,
      date.getMinutes() + 54,
      date.getSeconds() + 32,
      0
    );
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white px-2 md:px-4 py-2 md:py-6 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto whitespace-nowrap">
        {/* Left: Sale & Countdown */}
        <div className="flex items-center md:gap-8 gap-2 shrink-0">
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-base md:text-xl whitespace-nowrap">
              24-Hour Flash Sale!
            </span>
            <span className="hidden lg:block font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
              Get 76% off Hosting plans + free Domain & SSL!
            </span>
          </div>
          <div className="flex space-x-1">
            {["Hour", "Min", "Sec"].map((label, i) => {
              const value = [
                timeLeft.hours,
                timeLeft.minutes,
                timeLeft.seconds,
              ][i];
              return (
                <div
                  key={label}
                  className="bg-white text-[#1a2340] rounded-md px-1 md:px-4 py-1 flex flex-col items-center min-w-[28px] sm:min-w-[36px]"
                >
                  <span className="font-bold text-xs sm:text-sm md:text-lg">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[10px]">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: View Details & Close */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
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
            className="flex items-center text-xs sm:text-lg font-semibold whitespace-nowrap cursor-pointer
             underline underline-offset-2 decoration-white hover:text-gray-300 transition"
          >
            View Details
            <svg
              className="ml-1 w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => setShow(false)}
            aria-label="Close banner"
            className="text-white text-lg cursor-pointer"
          >
            <AiOutlineClose size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
