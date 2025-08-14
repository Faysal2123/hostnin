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

      // Check if we should show sticky header
      const shouldBeSticky = sectionTop <= 0 && sectionBottom > headerHeight;
      
      setIsSticky(shouldBeSticky);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#f8f8f8]  py-8 sm:py-12 lg:py-16 lg:pb-28">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[26px] sm:text-3xl lg:text-5xl font-bold text-black bg-clip-text mb-3 sm:mb-4">
            Compare BDIX Hosting Plans
          </h1>
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            In order to match your work, you can get the details of each plan and decide which one is suitable for you. Everything is written clearly without any hidden information.
          </p>
        </div>

        {/* Sticky Header - Separate Element */}
        {isSticky && (
          <div 
            className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg hidden lg:block"
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
                {data.plans.map((_, idx) => (
                  <col key={idx} className="w-1/5" />
                ))}
              </colgroup>
              <thead>
                <tr>
                  <th className="p-4 lg:p-4 text-white font-bold text-base lg:text-lg border-r border-blue-700/50">
                    <div className="flex items-center justify-center text-2xl">
                     
                      Features
                    </div>
                  </th>
                  {data.plans.map((plan, planIdx) => (
                    <th
                      key={plan.name}
                      className={`p-4 lg:p-3   text-white text-center border-r border-blue-700/50 ${
                        planIdx === data.plans.length - 1 ? 'border-r-0' : ''
                      }`}
                    >
                      <div className="space-y-2 lg:space-y-3">
                        <div className="font-bold text-lg lg:text-xl">{plan.name}</div>
                        <div className="bg-white/15 rounded-lg p-2 lg:p-3 backdrop-blur-sm border border-white/25">
                          <div className="text-2xl lg:text-[27px] font-bold text-white">
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

        <div 
          ref={tableSectionRef}
          className="bg-white rounded-xl lg:rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {/* Add spacing when header is sticky */}
          {isSticky && (
            <div 
              style={{ 
                height: headerRef.current?.offsetHeight || 0,
                width: '100%'
              }}
            />
          )}
          
          {/* Mobile Cards View */}
          <div className="lg:hidden">
            {data.plans.map((plan, planIdx) => (
              <div key={plan.name} className="border-b border-gray-200 last:border-b-0">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-4">
                  <div className="text-center space-y-3">
                    <div className="font-bold text-xl text-white">{plan.name}</div>
                    <div className="bg-white/15 rounded-lg p-3 backdrop-blur-sm border border-white/25">
                      <div className="text-3xl font-bold text-white">
                        ৳{plan.price}
                      </div>
                      <div className="text-sm text-blue-200">{plan.priceUnit}</div>
                    </div>
                    <button className="cursor-pointer w-full bg-white/95 transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Order Now
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  {data.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-6 last:mb-0">
                      {sectionIdx > 0 && (
                        <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-3 mb-4 rounded-lg">
                          <div className="flex items-center justify-center">
                            
                            <span className="text-lg font-bold text-white">{section.title}</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        {section.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center flex-1">
                              
                              <span className="font-semibold text-gray-700 text-sm">{feature.label}</span>
                            </div>
                            <div className="ml-4">
                              {typeof feature.values[planIdx] === 'string' && feature.values[planIdx].toLowerCase().includes('yes') ? (
                                <div className="flex items-center text-green-600 font-semibold">
                                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm">{feature.values[planIdx]}</span>
                                </div>
                              ) : typeof feature.values[planIdx] === 'string' && feature.values[planIdx].toLowerCase().includes('no') ? (
                                <div className="flex items-center text-red-600 font-semibold">
                                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm">{feature.values[planIdx]}</span>
                                </div>
                              ) : (
                                <span className="font-medium text-gray-700 text-sm">{feature.values[planIdx]}</span>
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

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <colgroup>
                <col className="w-1/5" />
                {data.plans.map((_, idx) => (
                  <col key={idx} className="w-1/5" />
                ))}
              </colgroup>
              
              {/* Original Header */}
              <thead 
                ref={headerRef}
                className="bg-gradient-to-r from-blue-800 to-blue-600"
              >
                <tr>
                  <th className="p-6 text-white font-bold text-lg border-r border-blue-700/50">
                    <div className="flex items-center justify-center text-2xl">
                     
                      Features
                    </div>
                  </th>
                  {data.plans.map((plan, planIdx) => (
                    <th
                      key={plan.name}
                      className={`p-3 text-white text-center border-r border-blue-700/50 ${
                        planIdx === data.plans.length - 1 ? 'border-r-0' : ''
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="font-bold text-xl">{plan.name}</div>
                        <div className="bg-white/15 rounded-lg p-3 backdrop-blur-sm border border-white/25">
                          <div className="text-3xl font-bold text-white">
                            ৳{plan.price}
                          </div>
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
                    {/* Section Title Row - Only for sections after the first one */}
                    {sectionIdx > 0 && (
                      <tr className="bg-gradient-to-r from-blue-800 to-blue-600">
                        <th colSpan={data.plans.length + 1} className="p-6 text-center">
                          <div className="flex items-center justify-center">
                            
                            <span className="text-2xl font-bold text-white">{section.title}</span>
                          </div>
                        </th>
                      </tr>
                    )}
                    
                    {/* Features for this section */}
                    {section.features.map((feature, featureIdx) => (
                      <tr 
                        key={`${sectionIdx}-${featureIdx}`} 
                        className={`hover:bg-blue-50/50 transition-colors duration-200 ${
                          featureIdx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                        }`}
                      >
                        <td className="p-6 font-semibold text-gray-700 border-r border-gray-200">
                          <div className="flex items-center text-lg">
                          
                            {feature.label}
                          </div>
                        </td>
                        {feature.values.map((value, idx) => (
                          <td 
                            key={idx} 
                            className={`p-6 text-center border-r border-gray-200 ${
                              idx === feature.values.length - 1 ? 'border-r-0' : ''
                            }`}
                          >
                            <div className="flex items-center justify-center">
                              {typeof value === 'string' && value.toLowerCase().includes('yes') ? (
                                <div className="flex items-center text-green-600 font-semibold">
                                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  {value}
                                </div>
                              ) : typeof value === 'string' && value.toLowerCase().includes('no') ? (
                                <div className="flex items-center text-red-600 font-semibold">
                                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                  {value}
                                </div>
                              ) : (
                                <span className="font-medium text-gray-700">{value}</span>
                              )}
                            </div>
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
