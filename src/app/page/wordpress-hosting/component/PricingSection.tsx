"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck, FaTimes } from "react-icons/fa";
import pricingPlans from "../data/pricingPlans";

const tabClass = (active: boolean) =>
  `px-3 sm:px-4 md:px-7 md:py-1.5 py-1 cursor-pointer font-semibold text-sm sm:text-sm md:text-base focus:outline-none transition-colors duration-200 rounded-full ${
    active ? "bg-[#0070f3] text-white" : "bg-transparent text-white"
  }`;

const iconMap: Record<string, React.ReactNode> = {
  starter: (
    <img
      src="https://hostnin.com/wp-content/uploads/2024/04/svgexport-42.svg"
      alt="Starter"
      className="w-8 h-8"
    />
  ),
  pro: (
    <img
      src="https://hostnin.com/wp-content/uploads/2024/04/svgexport-44-1.svg"
      alt="Pro"
      className="w-8 h-8"
    />
  ),
  ultimate: (
    <img
      src="https://hostnin.com/wp-content/uploads/2024/04/svgexport-45-1.svg"
      alt="Ultimate"
      className="w-8 h-8"
    />
  ),
};

const PricingSection = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [showExpandedFeatures, setShowExpandedFeatures] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const handleTooltipClick = (i: number) => {
    setActiveTooltip(i);
    setTimeout(() => setActiveTooltip(null), 3000); // 3 seconds auto-hide
  };

  const plans = pricingPlans.filter(
    (plan) => plan.billingPeriod === billing && plan.title !== "Basic"
  );

  return (
    <section
      className="pricing-scroll w-full flex flex-col items-center justify-center py-6 sm:py-8 md:py-14 lg:py-20 bg-[#f8f8f8] pt-8 md:pt-[550px] lg:pt-60 px-3 sm:px-6"
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      <div className="w-full max-w-7xl">
        <h2
          id="pricing-section"
          className="text-[25px] md:text-4xl lg:text-5xl font-bold text-slate-700 mb-5 md:mb-10 text-center"
        >
          Choose Your Perfect Plan
        </h2>

        <div className="flex flex-row items-center gap-4 mb-8 justify-center">
          <div className="flex bg-[#2a3553] rounded-full p-1">
            <button
              className={tabClass(billing === "monthly")}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={tabClass(billing === "yearly")}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>

          <div className="relative flex items-center -ml-3 mt-3 sm:mt-0" style={{ minWidth: 120 }}>
            <svg
              width="90"
              height="40"
              viewBox="0 0 90 40"
              fill="none"
              className="absolute -top-6 left-0 sm:-top-6 lg:-top-8 lg:left-0"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M10 30 C40 0, 70 0, 80 20"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#2563eb" />
                </marker>
              </defs>
            </svg>
            <span className="text-blue-400 font-medium text-base md:text-lg inline ml-10">
              Upto 76% save
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-10 sm:gap-8 md:gap-10 justify-center items-start mt-8 sm:mt-12 md:mt-16">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col transition-all duration-300 border-2 hover:shadow-2xl ${
                plan.highlight
                  ? "border-blue-500 sm:-translate-y-4 z-10 shadow-2xl max-w-md"
                  : "translate-y-2 sm:translate-y-6 border-transparent hover:border-blue-200"
              }`}
              style={{ minHeight: "auto" }}
            >
              {plan.highlight && (
                <div className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-t-2xl">
                  <div className="text-xs md:text-lg font-semibold">Most Popular</div>
                </div>
              )}

              <div className="flex flex-col justify-between px-4 sm:px-6 py-4 sm:py-6 w-full h-full">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    {iconMap[plan.icon as string]}
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {plan.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 font-medium  mx-auto">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-sm md:text-lg text-gray-600">{plan.currency}</span>
                    <span className="text-3xl sm:text-4xl font-bold text-gray-800">{plan.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-600">/Per {billing === "monthly" ? "Month" : "Year"}</span>
                  </div>

                  {plan.savingsText && (
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 text-green-700 font-bold text-sm md:text-base mb-6 px-4 py-2 rounded-full border border-green-200 inline-block shadow-sm">
                      {plan.savingsText}
                    </div>
                  )}

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl"
                        : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent shadow-md hover:shadow-lg"
                    }`}
                  >
                    {plan.buttonText || "Add to Cart"}
                  </button>

                  <div className="text-xs md:text-base text-gray-500 mt-4 text-center">{plan.infoText}</div>
                </div>

                <div className="w-full mb-8">
                  <div className="mb-6">
                    {/* Starter Plan Special Gift */}
                    {plan.title === "WP Starter" && (
                      <div className="bg-gray-100 rounded-lg p-3 relative group">
                        <div className="bg-gray-400 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                          Special Gift
                        </div>
                        <p className="text-gray-500 text-sm md:text-base font-medium cursor-pointer">
                          Landing page design and Facebook mastery course
                        </p>
                        {/* Tooltip */}
                        <div className="absolute left-0 top-full mt-2 z-50 w-80 bg-blue-600 text-white text-sm md:text-lg rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          Claim your complimentary Landing Page & Ads Masterclass — designed to help you succeed online. (৳6000 Value)
                          <div className="absolute -top-2 left-4 w-3 h-3 bg-blue-600 transform rotate-45"></div>
                        </div>
                      </div>
                    )}

                    {/* Pro/Ultimate Plan Special Gift */}
                    {(plan.title === "WP Pro" || plan.title === "WP Ultimate") && (
                      <div className="bg-green-50 rounded-lg p-3 relative group">
                        <div className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                          Special Gift
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <span className="text-teal-500 text-sm">🎁</span>
                          <p className="text-gray-700 text-sm md:text-base  font-medium">
                            Landing page design and Facebook mastery course
                          </p>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute left-0 top-full mt-2 z-50 w-80 bg-blue-600 text-white text-sm md:text-lg rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          Claim your complimentary Landing Page & Ads Masterclass — designed to help you succeed online. (৳6000 Value)
                          <div className="absolute -top-2 left-4 w-3 h-3 bg-blue-600 transform rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <h4 className="font-bold text-gray-800 mb-4 text-lg md:text-xl">Features</h4>
                  <div className="space-y-3">
                    {plan.features.map((feature: any, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 group relative"
                        onClick={() => handleTooltipClick(i)}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaCheck className="text-xs text-blue-600 font-bold" />
                        </div>
                        <span className="text-[15px] md:text-base text-gray-700 cursor-help font-medium">
                          {feature.text}
                        </span>

                        {feature.tooltip && (
                          <div
                            className={`absolute left-0 top-full mt-2 z-50 w-60 bg-blue-600 text-white text-sm md:text-lg rounded-lg p-3 shadow-lg
                              ${activeTooltip === i ? "opacity-100 visible" : "opacity-0 invisible"}
                              md:group-hover:opacity-100 md:group-hover:visible
                              transition-opacity duration-300 pointer-events-auto`}
                          >
                            {feature.tooltip}
                            <div className="absolute -top-2 left-4 w-3 h-3 bg-blue-600 transform rotate-45"></div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Show More */}
                    {showExpandedFeatures && plan.expandedFeatures && (
                      <>
                        {(["general", "server", "security", "support"] as const).map((category) => (
                          <div key={category} className="mt-6">
                            <h5 className="font-bold text-gray-800 mb-3 text-lg capitalize bg-gray-50 px-3 py-2 rounded-lg">
                              {category}
                            </h5>
                            {plan.expandedFeatures &&
                              plan.expandedFeatures[category] &&
                              plan.expandedFeatures[category].map((feature, i: number) => (
                                <div key={`${category}-${i}`} className="flex items-center gap-3 group relative mb-2">
                                  {feature.included ? (
                                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                      <FaCheck className="text-xs text-green-600 font-bold" />
                                    </div>
                                  ) : (
                                    <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                      <FaTimes className="text-xs text-red-600 font-bold" />
                                    </div>
                                  )}
                                  <span className="text-[15px] lg:text-base text-gray-700 cursor-help font-medium">
                                    {feature.text}
                                  </span>
                                  {feature.tooltip && (
                                    <div className="absolute left-0 top-8 z-50 w-80 bg-blue-600 text-white text-sm md:text-lg rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                                      {feature.tooltip}
                                      <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 transform rotate-45"></div>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {!showExpandedFeatures ? (
                  <div
                    className={`flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 rounded-lg p-3 transition-all duration-200 border border-blue-200 ${
                      plan.highlight ? "mt-4 mb-6" : "mt-4"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowExpandedFeatures(true);
                    }}
                  >
                    <span className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                      See More Features
                    </span>
                    <IoMdArrowDropdown
                      size={18}
                      className="text-blue-600 hover:text-blue-700 transition-transform duration-200"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-50 rounded-lg p-3 transition-all duration-200 border border-orange-200 ${
                      plan.highlight ? "mt-6 mb-6" : "mt-6"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowExpandedFeatures(false);
                      const section = document.getElementById("pricing-section");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="text-orange-600 font-semibold text-sm hover:text-orange-700">
                      Show Less Features
                    </span>
                    <span className="text-orange-600 text-sm hover:text-orange-700 transform rotate-180 transition-transform duration-200">
                      ^
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
