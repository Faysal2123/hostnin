// app/components/card/FeatureCards.tsx
import React from "react";
import { FaCheck } from "react-icons/fa";
import { PricingPlan } from "../../web-hosting/types/PricingPlan";

interface FeatureCardsProps {
  cards: PricingPlan[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ cards }) => (
  <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-6 justify-center items-stretch relative z-10 overflow-hidden" style={{ fontFamily: '"Mulish", sans-serif' }}>
    {cards.map((plan) => (
      <div
        key={plan.title}
        className="relative w-full max-w-[400px] sm:max-w-sm mx-auto bg-white  shadow-xl flex flex-col items-center px-3 sm:px-4 md:px-6 py-2.5 sm:py-6 md:py-8 border border-gray-200 mt-4 sm:mt-0"
        style={{ fontFamily: '"Mulish", sans-serif' }}
        
      >
        <div className="flex flex-col items-center mb-2 sm:mb-4 mt-1 sm:mt-2 w-full">
          <span className="text-[#232946] font-bold text-xl mb-2 text-start w-full" style={{ fontFamily: '"Mulish", sans-serif' }}>{plan.title}</span>
                      <div className="flex items-start mb-2 sm:mb-4 w-full">
            <span className="text-pink-600 text-3xl sm:text-3xl md:text-5xl font-bold" style={{ fontFamily: '"Mulish", sans-serif' }}>{plan.currency}{plan.price}</span>
            <span className="text-gray-500 text-sm sm:text-base font-medium ml-1 mb-1" style={{ fontFamily: '"Mulish", sans-serif' }}>/mo</span>
          </div>
          <button className="w-full bg-[#0a1747] text-white font-semibold py-3 mb-2 sm:mb-4 hover:bg-[#03206B] transition text-xs sm:text-lg" style={{ fontFamily: '"Mulish", sans-serif' }}>
            {plan.buttonText}
          </button>
        </div>
        <ul className="w-full flex-1 mb-2 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <FaCheck className="w-2 h-2 text-white" />
              </div>
                              <span className="text-slate-700 text-sm md:text-lg" style={{ fontFamily: '"Mulish", sans-serif' }}>{feature.text}</span>
            </li>
          ))}
        </ul>
        
      </div>
    ))}
  </div>
);

export default FeatureCards;
