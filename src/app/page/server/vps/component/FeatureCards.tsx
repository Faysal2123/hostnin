import React from "react";
import Image from "next/image";
import { featureCardsData } from "../data/featureCardsData";

const FeatureCards: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-5 sm:py-16 flex flex-col items-center relative overflow-x-hidden" style={{ fontFamily: '"Mulish", sans-serif' }}>
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 sm:mb-10 gap-4 md:gap-0">
          <div className="md:w-[75%]">
            <h2 className="text-[32px] sm:text-3xl md:text-[40px] font-bold text-black mb-2 leading-tight" style={{ fontFamily: '"Urbanist", sans-serif' }}>
              When You Expect Performance<br />Get Hostnin Managed VPS
            </h2>
          </div>
          <div className="md:w-[60%] mt-2 md:mt-0 flex items-center">
            <p className="text-gray-500 text-base md:text-base  font-medium md:text-right" style={{ fontFamily: '"Mulish", sans-serif' }}>
              Avoid all the hassles of VPS management and focus on your business. Our managed hosting guarantees unmatched performance, reliability, and an extended team.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {featureCardsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row md:items-center border border-gray-100 min-h-[140px] sm:min-h-[160px] transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{ fontFamily: '"Mulish", sans-serif' }}
            >
              <div className="flex-shrink-0 w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex md:items-center item-start md:justify-center mb-3 sm:mb-4 md:mb-0 md:mr-8">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="object-contain w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </div>
              <div className="flex flex-col items-start justify-center text-left">
                <span className="font-bold text-xl md:text-lg lg:text-2xl text-black mb-1 sm:mb-2" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                  {card.title}
                </span>
                <span className="text-gray-500 text-base sm:text-[17px] font-medium" style={{ fontFamily: '"Mulish", sans-serif' }}>
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
