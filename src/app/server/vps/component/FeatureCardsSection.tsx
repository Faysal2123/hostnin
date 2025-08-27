import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { vpsPlans } from "../data/vpsPlans";
import Link from "next/link";

const FeatureCardsSection = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const plan = vpsPlans[selectedPlanIndex];

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSelectedPlanIndex(value);
  };

  // Clamp knob position inside 5% to 95% range to keep knob fully inside
  const getSliderPosition = () => {
    const rawPosition = (selectedPlanIndex / (vpsPlans.length - 1)) * 100;
    return Math.min(95, Math.max(5, rawPosition));
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleSliderClick(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleSliderClick(e);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSliderClick = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const sliderWidth = rect.width;
    const percentage = Math.max(0, Math.min(100, (clickX / sliderWidth) * 100));

    const planIndex = Math.round((percentage / 100) * (vpsPlans.length - 1));
    const clampedIndex = Math.max(0, Math.min(planIndex, vpsPlans.length - 1));

    if (clampedIndex !== selectedPlanIndex) {
      setSelectedPlanIndex(clampedIndex);
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleSliderTouch(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleSliderTouch(e);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSliderTouch = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const sliderWidth = rect.width;
    const percentage = Math.max(0, Math.min(100, (touchX / sliderWidth) * 100));

    const planIndex = Math.round((percentage / 100) * (vpsPlans.length - 1));
    const clampedIndex = Math.max(0, Math.min(planIndex, vpsPlans.length - 1));

    if (clampedIndex !== selectedPlanIndex) {
      setSelectedPlanIndex(clampedIndex);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const sliderWidth = rect.width;
        const percentage = Math.max(0, Math.min(100, (clickX / sliderWidth) * 100));

        const planIndex = Math.round((percentage / 100) * (vpsPlans.length - 1));
        const clampedIndex = Math.max(0, Math.min(planIndex, vpsPlans.length - 1));

        if (clampedIndex !== selectedPlanIndex) {
          setSelectedPlanIndex(clampedIndex);
        }
      }
    };

    if (isDragging) {
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("mouseleave", handleGlobalMouseUp);
      document.addEventListener("mousemove", handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("mouseleave", handleGlobalMouseUp);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging, selectedPlanIndex]);

  return (
    <section
      className="w-full bg-white pt-16 sm:pt-20 md:pt-32 lg:pt-12 pb-8 sm:pb-12 flex flex-col items-center relative overflow-x-hidden"
      style={{ fontFamily: '"Mulish", sans-serif' }}
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-[#03206B] px-4"
        style={{ fontFamily: '"Mulish", sans-serif' }}
      >
        Your High Speed Cloud VPS!
      </h2>

      {/* Slider */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-6 sm:mb-8 relative px-4">
        <div
          ref={sliderRef}
          className="w-full h-3 sm:h-4 bg-[#f3f5f7] rounded-full relative flex items-center cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="absolute left-0 top-0 h-3 sm:h-4 bg-[#189bfa] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${getSliderPosition()}%` }}
          />
          <div
            className={`absolute top-1/2 z-10 flex flex-col items-center transition-all duration-300 ease-out ${
              isDragging ? "scale-110" : "hover:scale-105"
            }`}
            style={{ left: `${getSliderPosition()}%`, transform: "translate(-50%, -50%)" }}
          >
            <span
              className="relative bg-[#189bfa] text-white text-xs font-semibold px-2 sm:px-4 py-1 rounded-t-lg mb-1 shadow-lg"
              style={{ fontFamily: '"Mulish", sans-serif' }}
            >
              {plan.name}
              <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-6 sm:border-l-8 border-r-6 sm:border-r-8 border-t-6 sm:border-t-8 border-l-transparent border-r-transparent border-t-[#189bfa]" />
            </span>
            <span
              className={`w-10 h-10 sm:w-14 sm:h-14 bg-[#189bfa] flex items-center justify-center rounded-full border-2 sm:border-4 border-white shadow-lg text-white text-xl sm:text-3xl relative transition-all duration-200 ${
                isDragging ? "scale-110 shadow-xl" : "hover:scale-110"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-7 sm:h-7"
              >
                <path d="M8 14H20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M16 10L20 14L16 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18L8 14L12 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Hidden input for slider functionality */}
        <input
          type="range"
          min="0"
          max={vpsPlans.length - 1}
          value={selectedPlanIndex}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {/* Plan indicators */}
        <div className="w-full flex justify-between mt-4 sm:mt-6 px-2">
          {vpsPlans.map((planItem, index) => (
            <button
              key={planItem.name}
              onClick={() => setSelectedPlanIndex(index)}
              className={`text-xs font-medium transition-all duration-300 px-1 sm:px-2 py-1 mt-4 rounded ${
                index === selectedPlanIndex
                  ? "text-[#189bfa] bg-[#f1f6ff]"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              }`}
              style={{ fontFamily: '"Mulish", sans-serif' }}
            >
              {planItem.name}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 px-4">
        {plan.features.map((feature, index) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow p-3 sm:p-4 md:p-5 flex flex-row items-center border border-gray-100 hover:shadow-lg transition-all duration-500 min-h-[70px] sm:min-h-[80px] md:min-h-[100px] transform hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
              fontFamily: '"Mulish", sans-serif',
            }}
          >
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#f1f6ff] mr-2 sm:mr-3 md:mr-4 hover:bg-[#e1f0ff] transition-colors duration-300">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
              />
            </div>
            <div className="flex flex-col items-start">
              <span
                className="font-semibold text-xs sm:text-sm md:text-base text-[#03206B] mb-0.5"
                style={{ fontFamily: '"Mulish", sans-serif' }}
              >
                {feature.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-[#158aff]">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </span>
              <span
                className="text-gray-500 text-xs sm:text-sm font-medium"
                style={{ fontFamily: '"Mulish", sans-serif' }}
              >
                {feature.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Price and CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2 px-4">
        <span
          className="text-2xl sm:text-3xl font-bold text-[#03206B] transition-all duration-500"
          style={{ fontFamily: '"Mulish", sans-serif' }}
        >
          {plan.price}৳
          <span
            className="text-base sm:text-lg font-medium text-gray-500"
            style={{ fontFamily: '"Mulish", sans-serif' }}
          >
            /mo
          </span>
        </span>
        <Link
  target="_blank"
  href={plan.link}
  className="bg-gradient-to-r from-[#158aff] to-[#005bea] hover:from-[#005bea] hover:to-[#158aff] text-white font-semibold px-6 sm:px-10 py-2.5 sm:py-4 rounded-full transition-all duration-300 text-[15px] sm:text-[17px] shadow hover:shadow-lg hover:scale-105 transform w-full sm:w-auto"
  style={{ fontFamily: '"Mulish", sans-serif' }}
>
  Purchase Plan
</Link>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureCardsSection;
