"use client";
import React, { useState, useEffect, useRef } from "react";
import { VpsComparisonTableData } from "../types/VpsComparisonTableData";
import { MdDone } from "react-icons/md";

interface ComparisonTableProps {
  data: VpsComparisonTableData;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  const [isSticky, setIsSticky] = useState(false);
  const tableSectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!tableSectionRef.current || !headerRef.current) return;

      const tableSection = tableSectionRef.current;
      const header = headerRef.current;

      const sectionRect = tableSection.getBoundingClientRect();
      const headerHeight = header.offsetHeight;
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      setIsSticky(sectionTop <= 0 && sectionBottom > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
       className="bg-[#f8f8f8] py-8 lg:pt-[430px] pt-[650px] sm:pt-[600px]">
      <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
        <div className="mb-6 sm:mb-8 px-3 sm:px-0 text-center">
          <h1 id="pricing-section" className="text-xl sm:text-2xl md:text-4xl lg:text-[40px] font-bold text-[#06125a] font-['Urbanist',sans-serif]">
            We Have the Perfect VPS Package
          </h1>
          <p className="text-slate-800 w-full sm:w-6/12 mx-auto pt-2 sm:pt-4 text-xs sm:text-sm md:text-base font-['Mulish',sans-serif]">
            Compare our plans according to your needs
          </p>
        </div>

        {/* Sticky Header */}
        {isSticky && (
          <div
            className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg hidden lg:block"
            style={{
              width: "100%",
              maxWidth: "80rem",
              margin: "0 auto",
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          >
            <table className="w-full table-fixed">
              <colgroup>
                <col className="w-1/5" />
                {data.plans.map((_, idx) => (
                  <col key={idx} className="w-1/5" />
                ))}
              </colgroup>
              <thead>
                <tr>
                  <th className="p-4 lg:p-3 text-white font-bold text-base md:text-2xl border-r border-blue-700/50">
                    Features
                  </th>
                  {data.plans.map((plan, idx) => (
                    <th
                      key={plan.name}
                      className={`p-4 lg:p-2.5 text-white text-center border-r border-blue-700/50 ${
                        idx === data.plans.length - 1 ? "border-r-0" : ""
                      }`}
                    >
                      <div className="space-y-2 lg:space-y-3">
                        <div className="font-bold text-lg lg:text-xl">{plan.name}</div>
                        <div className="bg-white/15 rounded-lg p-2 lg:p-3 backdrop-blur-sm border border-white/25">
                          <div className="text-2xl lg:text-[26px] font-bold text-white">
                            ৳{plan.price}
                          </div>
                          <div className="text-xs lg:text-sm text-blue-200">{plan.priceUnit}</div>
                        </div>
                        <button className="w-full bg-white transition-all duration-300 text-black font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm lg:text-base cursor-pointer">
                          Order Now
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
        )}

        <div ref={tableSectionRef} className="bg-white rounded-xl lg:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {isSticky && <div style={{ height: headerRef.current?.offsetHeight || 0, width: "100%" }} />}

          {/* Mobile Cards */}
          <div className="lg:hidden">
            {data.plans.map((plan, planIdx) => (
              <div key={plan.name} className="border-b border-gray-200 last:border-b-0 mb-6">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-4 rounded-lg">
                  <div className="text-center space-y-3">
                    <div className="font-bold text-xl text-white">{plan.name}</div>
                    <div className="bg-white/15 rounded-lg p-3 backdrop-blur-sm border border-white/25">
                      <div className="text-3xl font-bold text-white">৳{plan.price}</div>
                      <div className="text-sm text-blue-200">{plan.priceUnit}</div>
                    </div>
                    <button className="cursor-pointer w-full bg-white transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Order Now
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  {data.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-6 last:mb-0">
                     
                      <div className="space-y-3">
                        {section.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-semibold text-gray-700 text-sm">{feature.label}</span>
                            <div className="ml-4">
                              {typeof feature.values[planIdx] === "boolean" && feature.values[planIdx] ? (
                                <MdDone className="text-green-600 text-lg" />
                              ) : typeof feature.values[planIdx] === "string" && feature.values[planIdx].toLowerCase() === "yes" ? (
                                <span className="text-green-600 font-semibold">{feature.values[planIdx]}</span>
                              ) : typeof feature.values[planIdx] === "string" && feature.values[planIdx].toLowerCase() === "no" ? (
                                <span className="text-red-600 font-semibold">{feature.values[planIdx]}</span>
                              ) : (
                                <span className="font-medium text-gray-700">{feature.values[planIdx]}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[800px] table-fixed">
              <colgroup>
                <col className="w-1/5" />
                {data.plans.map((_, idx) => (
                  <col key={idx} className="w-1/5" />
                ))}
              </colgroup>
              <thead ref={headerRef} className="bg-gradient-to-r from-blue-800 to-blue-600">
                <tr>
                  <th className="p-3 text-white font-bold text-lg md:text-2xl border-r border-blue-700/50">Features</th>
                  {data.plans.map((plan, idx) => (
                    <th key={plan.name} className={`p-3 text-white text-center border-r border-blue-700/50 ${idx === data.plans.length - 1 ? "border-r-0" : ""}`}>
                      <div className="space-y-3">
                        <div className="font-bold text-xl">{plan.name}</div>
                        <div className="bg-white/15 rounded-lg p-3 backdrop-blur-sm border border-white/25">
                          <div className="text-3xl font-bold text-white">৳{plan.price}</div>
                          <div className="text-sm text-blue-200">{plan.priceUnit}</div>
                        </div>
                        <button className="w-full bg-white/95 transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                          Order Now
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.sections.map((section, sectionIdx) => (
                  <React.Fragment key={sectionIdx}>
                   
                    {section.features.map((feature, featureIdx) => (
                      <tr key={featureIdx} className={`hover:bg-blue-50/50 transition-colors duration-200 ${featureIdx % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}>
                        <td className="p-6 font-semibold text-gray-700 border-r border-gray-200">{feature.label}</td>
                        {feature.values.map((value, idx) => (
                          <td key={idx} className={`p-6 text-center border-r border-gray-200 ${idx === feature.values.length - 1 ? "border-r-0" : ""}`}>
                            {typeof value === "boolean" && value ? (
                              <MdDone className="inline text-green-600 text-lg" />
                            ) : typeof value === "string" && value.toLowerCase() === "yes" ? (
                              <span className="text-green-600 font-semibold">{value}</span>
                            ) : typeof value === "string" && value.toLowerCase() === "no" ? (
                              <span className="text-red-600 font-semibold">{value}</span>
                            ) : (
                              <span className="font-medium text-gray-700">{value}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
