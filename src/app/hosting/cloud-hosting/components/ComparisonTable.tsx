"use client"
import React, { useState, useEffect, useRef } from "react";
import { ComparisonTableData } from "../types/ComparisonTableData";

interface ComparisonTableProps {
  data: ComparisonTableData;
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

      const shouldBeSticky = sectionTop <= 0 && sectionBottom > headerHeight;
      setIsSticky(shouldBeSticky);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f8f8f8] py-8 sm:py-12 lg:py-16 lg:pb-28 hidden md:block">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[26px] sm:text-3xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Compare Cloud Hosting Plans
          </h1>
        
        </div>

        {/* Sticky Header */}
        {isSticky && (
          <div 
            className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg hidden lg:block"
            style={{
              width: '100%',
              maxWidth: '80rem',
              margin: '0 auto',
              left: '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none'
            }}
          >
            <table className="w-full">
              <colgroup>
                <col className="w-1/5" />
                {data.plans.map((_, idx) => <col key={idx} className="w-1/5" />)}
              </colgroup>
              <thead>
                <tr>
                  <th className="p-4 lg:p-5 text-white font-bold text-base lg:text-lg border-r border-blue-700/50">
                    Features
                  </th>
                  {data.plans.map((plan, planIdx) => (
                    <th key={plan.name} className={`p-4 pt-5.5 text-white text-center border-r border-blue-700/50 ${planIdx === data.plans.length - 1 ? 'border-r-0' : ''}`}>
                      <div className="space-y-3 pointer-events-auto">
                        <div className="font-bold text-xl">{plan.name}</div>
                        <div className="bg-white/15 rounded-lg p-2 backdrop-blur-sm border border-white/25">
                          <div className="text-[26px] font-bold text-white">
                            ৳{plan.price}
                          </div>
                          <div className="text-sm text-blue-200">{plan.priceUnit}</div>
                        </div>
                        <button  
                          onClick={() => window.open(plan.orderLink, "_blank")}
                          className="w-full bg-white/95 transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                        >
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
          {isSticky && <div style={{ height: headerRef.current?.offsetHeight || 0, width: '100%' }} />}

          {/* Mobile Cards */}
          <div className="lg:hidden">
            {data.plans.map((plan, planIdx) => (
              <div key={plan.name} className="border-b border-gray-200 last:border-b-0">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-4 text-center space-y-3">
                  <div className="font-bold text-xl text-white">{plan.name}</div>
                  <div className="bg-white/15 rounded-lg p-1 backdrop-blur-sm border border-white/25">
                    <div className="text-3xl font-bold text-white">৳{plan.price}</div>
                    <div className="text-sm text-blue-200">{plan.priceUnit}</div>
                  </div>
                  <button 
                    onClick={() => window.open(plan.orderLink, "_blank")}
                    className="cursor-pointer w-full bg-white/95 transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Order Now
                  </button>
                </div>

                <div className="p-4">
                  {data.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-6 last:mb-0">
                      {sectionIdx > 0 && <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-3 mb-4 rounded-lg text-center text-white font-bold">{section.title}</div>}
                      <div className="space-y-3">
                        {section.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-semibold text-gray-700 text-sm">{feature.label}</span>
                            <span className="font-medium text-gray-700 text-sm">{feature.values[planIdx]}</span>
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
            <table className="w-full min-w-[800px]">
              <colgroup>
                <col className="w-1/5" />
                {data.plans.map((_, idx) => <col key={idx} className="w-1/5" />)}
              </colgroup>
              <thead ref={headerRef} className="bg-gradient-to-r from-blue-800 to-blue-600">
                <tr>
                  <th className="p-3 text-white font-bold text-lg border-r border-blue-700/50">Features</th>
                  {data.plans.map((plan, planIdx) => (
                    <th key={plan.name} className={`p-3 text-white text-center border-r border-blue-700/50 ${planIdx === data.plans.length - 1 ? 'border-r-0' : ''}`}>
                      <div className="space-y-3">
                        <div className="font-bold text-xl">{plan.name}</div>
                        <div className="bg-white/15 rounded-lg p-2 backdrop-blur-sm border border-white/25">
                          <div className="text-[26px] font-bold text-white">৳{plan.price}</div>
                          <div className="text-sm text-blue-200">{plan.priceUnit}</div>
                        </div>
                        <button 
                          onClick={() => window.open(plan.orderLink, "_blank")}
                          className="w-full bg-white/95 transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                        >
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
                    {sectionIdx > 0 && (
                      <tr className="bg-gradient-to-r from-blue-800 to-blue-600">
                        <th colSpan={data.plans.length + 1} className="p-6 text-center text-white font-bold text-2xl">{section.title}</th>
                      </tr>
                    )}
                    {section.features.map((feature, featureIdx) => (
                      <tr key={`${sectionIdx}-${featureIdx}`} className={`hover:bg-blue-50/50 transition-colors duration-200 ${featureIdx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                        <td className="p-6 font-semibold text-gray-700 border-r border-gray-200">{feature.label}</td>
                        {feature.values.map((value, idx) => (
                          <td key={idx} className={`p-6 text-center border-r border-gray-200 ${idx === feature.values.length - 1 ? 'border-r-0' : ''}`}>
                            {value}
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
