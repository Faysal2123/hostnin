import React from 'react';
import { featureBenefits } from '../data/featureBenefits';

const FeatureBenefitSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#f8f8f8] w-full flex flex-col items-center pb-12 sm:pb-16 md:pb-24 pt-0 overflow-hidden bg-no-repeat bg-top bg-cover px-4 sm:px-6 font-roboto"
      style={{
        backgroundImage: `url('https://hostnin.com/wp-content/uploads/2022/09/bg-curve.png')`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center w-full pt-12 sm:pt-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4 text-black">
          Why Choose Web Hosting?
        </h2>
        <p className="text-center text-black max-w-[700px] mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
          With our Web Hosting plans, you&apos;ll receive more resources for less money,
          ensuring the reliability you can count on. Starting your own business with Hostnin is easier than you think!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
          {featureBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-start hover:shadow-lg transition-shadow min-h-[220px] sm:min-h-[260px]"
              >
                <div className="flex items-center mb-2 sm:mb-3 gap-2">
                  <div className="text-4xl sm:text-4xl md:text-5xl text-blue-700">
                    <Icon />
                  </div>
                  <h3
                    className="font-semibold text-base sm:text-xl text-black"
                    style={{ fontFamily: '"Urbanist", sans-serif' }}
                  >
                    {benefit.title}
                  </h3>
                </div>
                <p
                  className="text-gray-600 text-sm sm:text-base"
                  style={{ fontFamily: '"Mulish", sans-serif' }}
                >
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
