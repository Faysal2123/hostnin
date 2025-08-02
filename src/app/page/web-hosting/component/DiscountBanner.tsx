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
  // Set your countdown target date/time here
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setHours(date.getHours() + 12, date.getMinutes() + 54, date.getSeconds() + 32, 0);
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
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto py-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Left: Black Friday Sale & Countdown */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">Black Friday Sale</span>
          <div className="flex space-x-1 sm:space-x-2">
            <div className="bg-white text-[#1a2340] rounded-md px-2 sm:px-3 py-1 flex flex-col items-center min-w-[40px] sm:min-w-[48px]">
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs font-medium">Hour</span>
            </div>
            <div className="bg-white text-[#1a2340] rounded-md px-2 sm:px-3 py-1 flex flex-col items-center min-w-[40px] sm:min-w-[48px]">
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs font-medium">Min</span>
            </div>
            <div className="bg-white text-[#1a2340] rounded-md px-2 sm:px-3 py-1 flex flex-col items-center min-w-[40px] sm:min-w-[48px]">
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs font-medium">Sec</span>
            </div>
          </div>
        </div>
        {/* Center: Offer Text */}
        <div className="flex-1 text-center hidden sm:block">
          <span className="font-semibold text-sm sm:text-base md:text-lg">Get 80% off Hosting plans + free Domain & SSL!</span>
        </div>
        {/* Right: View Details & Close */}
        <div className="flex items-center space-x-3 sm:space-x-6 ml-0 sm:ml-4">
          <button className="font-semibold flex items-center space-x-1 focus:outline-none text-sm sm:text-base cursor-pointer">
            <span>View Details</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button className="text-lg sm:text-xl font-bold focus:outline-none cursor-pointer" onClick={() => setShow(false)} aria-label="Close banner">
            <AiOutlineClose size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
