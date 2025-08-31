import { featureBenefits } from '../../web-hosting/data/featureBenefits';
import React from 'react';

const FeatureBenefitSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#f8f8f8] w-full flex flex-col items-center pb-12 sm:pb-16 md:pb-24 pt-0 overflow-hidden bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage: `url('https://hostnin.com/wp-content/uploads/2022/09/bg-curve.png')`,
        fontFamily: '"Roboto", sans-serif',
      }}
    > 
      <div className="relative z-10 flex flex-col items-center w-full pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-center mb-2 text-black px-4">
          Why Choose BDIX Hosting?
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mb-6 sm:mb-8 md:mb-10 px-4 text-[15px] sm:text-base">
          Get more resources for less with our reliable plans. Starting your business with Hostnin is easier than you think!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
          {featureBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 sm:p-6 flex flex-col items-start hover:shadow-lg transition-shadow min-h-[220px] sm:min-h-[240px] md:min-h-[260px]"
              >
                <div className="flex items-center mb-3 sm:mb-4 gap-2 w-full">
                  <div className="text-4xl sm:text-4xl md:text-5xl text-blue-700 flex-shrink-0">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl text-black leading-tight" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-[15px] sm:text-base text-justify leading-relaxed" style={{ fontFamily: '"Mulish", sans-serif' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefitSection;
