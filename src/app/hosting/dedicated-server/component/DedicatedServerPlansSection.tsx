import React from "react";
import { dedicatedServerPlans } from "../data/dedicatedServerPlans";
import {
  FaNetworkWired,
  FaMicrochip,
  FaHdd,
  FaTachometerAlt,
  FaExchangeAlt,
  FaCogs,
  FaGlobe,
  FaWindows,
} from "react-icons/fa";
import Link from "next/link";

const featureHighlights = [
  {
    text: "24/7 Expert Support",
  },
  {
    text: "Full Root Access",
  },
  {
    text: "Unlimited Traffic with 36.47 TBit",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  network: <FaNetworkWired className="text-blue-600 text-lg" />, // RAM
  cpu: <FaMicrochip className="text-blue-600 text-lg" />, // CPU
  storage: <FaHdd className="text-blue-600 text-lg" />, // Storage
  performance: <FaTachometerAlt className="text-blue-600 text-lg" />, // Performance
  bandwidth: <FaExchangeAlt className="text-blue-600 text-lg" />, // Bandwidth
  manage: <FaCogs className="text-blue-600 text-lg" />, // Fully Managed
  ip: <FaGlobe className="text-blue-600 text-lg" />, // IP
  os: <FaWindows className="text-blue-600 text-lg" />, // OS
};

const DedicatedServerPlansSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-[#f8f8f8] px-2 ">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-black font-['Urbanist',sans-serif]">
          Dedicated CPU Hosting plans
          <br />
          and Pricing
        </h2>
        <div className="mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {dedicatedServerPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-10 flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="font-bold text-2xl md:text-3xl mb-3 text-black font-['Urbanist',sans-serif]">
                  {plan.title}
                </h3>
                <p className="text-gray-500 text-base mb-8 min-h-[40px] font-['Mulish',sans-serif]">
                  {plan.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1 flex flex-col gap-4">
                    {plan.specs.slice(0, 4).map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-gray-700 text-base"
                      >
                        <span>{iconMap[spec.icon]}</span>
                        <span className="font-['Mulish',sans-serif]">
                          {spec.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden sm:block w-px bg-gray-200 mx-2"></div>
                  <div className="flex-1 flex flex-col gap-4">
                    {plan.specs.slice(4).map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-gray-700 text-base"
                      >
                        <span>{iconMap[spec.icon]}</span>
                        <span className="font-['Mulish',sans-serif]">
                          {spec.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full">
                <a
                  target="_blank"
                  href={plan.url}
                  className="bg-gradient-to-r from-[#009FFF] to-[#0057FF] text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform text-lg font-['Urbanist',sans-serif]"
                >
                  {plan.buttonText || "Purchase Now"}
                </a>

                <div className="flex items-center gap-2">
                  <span className="text-pink-600 font-bold text-3xl md:text-3xl font-['Urbanist',sans-serif]">
                    ৳{plan.price.toLocaleString()}
                  </span>
                  <span className="text-slate-900 text-lg font-['Urbanist',sans-serif]">
                    /monthly
                  </span>
                  {plan.priceNote && (
                    <span className="text-gray-400 text-base font-['Urbanist',sans-serif]">
                      {plan.priceNote}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Feature highlights row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {featureHighlights.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white rounded-xl shadow p-4"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-white text-lg font-bold shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="url(#blueGradient)" />
                  <defs>
                    <linearGradient
                      id="blueGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M6 10.5L9 13.5L14 7.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-gray-800 font-medium text-base font-['Mulish',sans-serif]">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedicatedServerPlansSection;
