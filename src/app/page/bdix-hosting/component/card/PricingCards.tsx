"use client";
import { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import pricingPlans from "@/app/page/web-hosting/data/pricingPlans";
import Image from "next/image";

const tabClass = (active: boolean) =>
  `px-3 sm:px-4 md:px-6 py-1 font-semibold text-xs sm:text-sm md:text-base focus:outline-none transition-colors duration-200 rounded-full ${
    active ? "bg-[#0070f3] text-white" : "bg-transparent text-white"
  }`;

const iconMap: Record<string, React.ReactNode> = {
  starter: (
    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
      <Image 
        src="https://hostnin.com/wp-content/uploads/2024/04/svgexport-42-1.svg" 
        alt="Starter Plan Icon" 
        width={24} 
        height={24} 
        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    </span>
  ),
  pro: (
    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
      <Image 
        src="https://hostnin.com/wp-content/uploads/2024/04/svgexport-45.svg" 
        alt="Pro Plan Icon" 
        width={24} 
        height={24} 
        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    </span>
  ),
  ultimate: (
    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
      <Image 
        src="https://hostnin.com/wp-content/uploads/2024/04/svgexport-42-1.svg" 
        alt="Ultimate Plan Icon" 
        width={24} 
        height={24} 
        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
    </span>
  ),
};

const PricingCards = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [showExpandedFeatures, setShowExpandedFeatures] = useState(false);

  // Filter out Basic plans and get only Starter, Pro, Ultimate
  const plans = pricingPlans.filter((plan) => 
    plan.billingPeriod === billing && 
    plan.title !== "Basic"
  );

  return (
    <section id="pricing-section" className="pricing-scroll w-full flex flex-col items-center justify-center py-6 sm:py-8 md:py-14 lg:py-20 bg-[#f8f8f8] pt-[400px] sm:pt-[500px] md:pt-[550px] lg:pt-60 px-3 sm:px-6" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <div className="w-full max-w-7xl">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#232946] mb-4 sm:mb-6 md:mb-10 text-center" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
          Choose Your Perfect Plan
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center">
          <div className="flex bg-[#2a3553] rounded-full p-1">
            <button className={tabClass(billing === "monthly")} onClick={() => setBilling("monthly")} style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Monthly
            </button>
            <button className={tabClass(billing === "yearly")} onClick={() => setBilling("yearly")} style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Yearly
            </button>
          </div>

          {/* Updated: SVG Arrow + Text – visible on all devices */}
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
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#2563eb" />
                </marker>
              </defs>
            </svg>
            <span className="text-blue-400 font-medium text-xs sm:text-base inline ml-10" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Upto 76% save</span>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-stretch mt-8 sm:mt-12 md:mt-16">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center transition-all duration-300 border-2 ${
                plan.highlight 
                  ? "border-blue-500 scale-[1.02] sm:scale-[1.05] z-10 shadow-2xl max-w-md" 
                  : "border-transparent"
              }`}
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {/* Blue header for highlighted card */}
              {plan.highlight && (
                <div className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-t-2xl" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  <div className="text-xs md:text-lg font-semibold">Best deal - Limited time only</div>
                </div>
              )}

              {/* Discount badge */}
              {plan.badge && (
                <div className="absolute -top-3 sm:-top-5 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow md:text-base" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  {plan.badge}
                </div>
              )}

              <div className="flex flex-col items-center px-4 sm:px-6 py-4 sm:py-6 w-full">
                {/* Plan title and description */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    {iconMap[plan.icon as string]}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{plan.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{plan.description}</p>
                </div>

                {/* Pricing section */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-sm md:text-lg text-gray-600" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{plan.currency}</span>
                    <span className="text-3xl sm:text-4xl font-bold text-gray-800" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      {plan.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-600" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>/Per {billing === "monthly" ? "Month" : "Year"}</span>
                  </div>
                  
                  {plan.savingsText && (
                    <div className="text-blue-600 font-medium text-sm md:text-base mb-6" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{plan.savingsText}</div>
                  )}
                  
                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                      plan.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
                    }`}
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {plan.buttonText || "Add to Cart"}
                  </button>
                  
                  {/* Fine print */}
                  <div className="text-xs md:text-base text-gray-500 mt-4 text-center" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {plan.infoText}
                  </div>
                </div>

                {/* Features Section */}
                <div className="w-full mb-8">
                  {/* Conditional Boxes based on Plan */}
                  <div className="mb-6">
                    {plan.title === "Starter" && (
                      <div className="bg-gray-100 rounded-lg p-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        <div className="bg-gray-400 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                          Paid credits
                        </div>
                        <p className="text-gray-500 text-xs">– Free AI credits not included</p>
                      </div>
                    )}
                    
                    {plan.title === "Pro" && (
                      <div className="bg-green-50 rounded-lg p-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        <div className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                          Special Gift
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-teal-500 text-sm">🎁</span>
                          <p className="text-gray-700 text-xs underline decoration-dotted md:text-sm">
                          Lending page design and Facebook mastery course
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {plan.title === "Ultimate" && (
                      <div className="bg-green-50 rounded-lg p-3" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        <div className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                          Special Gift
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-teal-500 text-sm">🎁</span>
                          <p className="text-gray-700 text-xs underline decoration-dotted md:text-sm">
                          Lending page design and Facebook mastery course
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-bold text-gray-800 mb-4 text-sm md:text-xl" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Features</h4>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 group relative">
                        <span className="text-green-500 text-sm">✓</span>
                        <span className="text-sm md:text-base text-gray-700 cursor-help" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{feature.text}</span>
                        {feature.tooltip && (
                          <div className="absolute left-0 top-8 z-50 w-80 bg-blue-600 text-white text-xs rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none " style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                            {feature.tooltip}
                            <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 transform rotate-45"></div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Expanded General Features */}
                    {showExpandedFeatures && plan.expandedFeatures && (
                      <>
                        {plan.expandedFeatures.general && plan.expandedFeatures.general.map((feature, i) => (
                          <div key={`general-${i}`} className="flex items-center gap-2 group relative">
                            <span className={`text-sm ${feature.included ? "text-green-500" : "text-red-500"}`}>
                              {feature.included ? "✓" : "✗"}
                            </span>
                            <span className="text-sm lg:text-base text-gray-700 cursor-help" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{feature.text}</span>
                            {feature.tooltip && (
                              <div className="absolute left-0 top-8 z-50 w-80 bg-blue-600 text-white text-xs rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                                {feature.tooltip}
                                <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 transform rotate-45"></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* See More Features Button */}
                {!showExpandedFeatures && (
                  <div 
                    className="flex items-center justify-center gap-1 mt-8 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-all duration-200"
                    onClick={() => setShowExpandedFeatures(true)}
                  >
                    <span className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>See More Features</span>
                    <IoMdArrowDropdown size={16} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" />
                  </div>
                )}

                {/* Additional Expanded Features (Server, Security, Support) */}
                {showExpandedFeatures && plan.expandedFeatures && (
                  <div className="w-full mt-8 space-y-8">
                    {/* Server Features */}
                    <div>
                      <h5 className="font-bold text-gray-800 mb-4 lg:text-base" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Server</h5>
                      <div className="space-y-3">
                        {plan.expandedFeatures.server && plan.expandedFeatures.server.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 group relative">
                            <span className={`text-sm ${feature.included ? "text-green-500" : "text-red-500"}`}>
                              {feature.included ? "✓" : "✗"}
                            </span>
                            <span className="text-sm lg:text-base text-gray-700 cursor-help" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{feature.text}</span>
                            {feature.tooltip && (
                              <div className="absolute left-0 top-8 z-50 w-80 bg-blue-600 text-white text-xs rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                                {feature.tooltip}
                                <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 transform rotate-45"></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Security Features */}
                    <div>
                      <h5 className="font-bold text-gray-800 mb-4 lg:text-base" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Security</h5>
                      <div className="space-y-3">
                        {plan.expandedFeatures.security && plan.expandedFeatures.security.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 group relative">
                            <span className={`text-sm ${feature.included ? "text-green-500" : "text-red-500"}`}>
                              {feature.included ? "✓" : "✗"}
                            </span>
                            <span className="text-sm lg:text-base text-gray-700 cursor-help" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{feature.text}</span>
                            {feature.tooltip && (
                              <div className="absolute left-0 top-8 z-50 w-80 bg-blue-600 text-white text-xs rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                                {feature.tooltip}
                                <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 transform rotate-45"></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Support Features */}
                    <div>
                      <h5 className="font-bold text-gray-800 mb-3 lg:text-base" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Support</h5>
                      <div className="space-y-2">
                        {plan.expandedFeatures.support && plan.expandedFeatures.support.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 group relative">
                            <span className={`text-sm ${feature.included ? "text-green-500" : "text-red-500"}`}>
                              {feature.included ? "✓" : "✗"}
                            </span>
                            <span className="text-sm lg:text-base text-gray-700 cursor-help" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{feature.text}</span>
                            {feature.tooltip && (
                              <div className="absolute left-0 top-8 z-50 w-80 bg-blue-600 text-white text-xs rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                                {feature.tooltip}
                                <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 transform rotate-45"></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Less Features Button */}
                {showExpandedFeatures && (
                  <div 
                    className="flex items-center justify-center gap-1 mt-6 cursor-pointer hover:bg-orange-50 rounded-lg p-2 transition-all duration-200"
                    onClick={() => setShowExpandedFeatures(false)}
                  >
                    <span className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Less Features</span>
                    <span className="text-orange-500 text-sm hover:text-orange-600 transition-colors duration-200">^</span>
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

export default PricingCards;
