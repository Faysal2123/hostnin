import React from "react";
import { VpsPlan } from "../types/VpsPlan";

interface PlanSliderProps {
  plans: VpsPlan[];
  selectedPlanIndex: number;
  onPlanChange: (index: number) => void;
}

const PlanSlider: React.FC<PlanSliderProps> = ({
  plans,
  selectedPlanIndex,
  onPlanChange,
}) => {
  const getSliderPosition = () => {
    return (selectedPlanIndex / (plans.length - 1)) * 100;
  };

  return (
    <div className="w-full max-w-4xl flex flex-col items-center mb-8 relative">
      {/* Main Slider Track */}
      <div className="w-full h-6 bg-gradient-to-r from-[#f3f5f7] to-[#e8ecf0] rounded-full relative flex items-center shadow-inner">
        {/* Progress Bar */}
        <div 
          className="absolute left-0 top-0 h-6 bg-gradient-to-r from-[#189bfa] to-[#158aff] rounded-full transition-all duration-500 ease-out shadow-sm" 
          style={{ width: `${getSliderPosition()}%` }} 
        />
        
        {/* Slider Handle */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-all duration-500 ease-out"
          style={{ left: `${getSliderPosition()}%` }}
        >
          {/* Plan Label */}
          <span className="relative bg-gradient-to-r from-[#189bfa] to-[#158aff] text-white text-sm font-bold px-6 py-2 rounded-t-xl mb-2 shadow-lg border border-white/20">
            {plans[selectedPlanIndex].name}
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-t-8 border-l-transparent border-r-transparent border-t-[#189bfa]" />
          </span>
          
          {/* Slider Handle Circle */}
          <span className="w-16 h-16 bg-gradient-to-br from-[#189bfa] to-[#158aff] flex items-center justify-center rounded-full border-4 border-white shadow-xl text-white relative hover:scale-110 transition-transform duration-200 cursor-pointer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 16H22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M18 12L22 16L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 20L10 16L14 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      
      {/* Hidden input for slider functionality */}
      <input
        type="range"
        min="0"
        max={plans.length - 1}
        value={selectedPlanIndex}
        onChange={(e) => onPlanChange(parseInt(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      
      {/* Plan Indicators */}
      <div className="w-full flex justify-between mt-8 px-4">
        {plans.map((plan, index) => (
          <button
            key={plan.name}
            onClick={() => onPlanChange(index)}
            className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg ${
              index === selectedPlanIndex 
                ? 'text-[#189bfa] bg-[#f1f6ff] shadow-md border border-[#e1f0ff]' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-transparent'
            }`}
          >
            {plan.name}
          </button>
        ))}
      </div>
      
      {/* Price Preview */}
      <div className="mt-6 text-center">
        <span className="text-2xl font-bold text-[#03206B] transition-all duration-500">
          {plans[selectedPlanIndex].price}৳
          <span className="text-lg font-medium text-gray-500 ml-1">/mo</span>
        </span>
      </div>
    </div>
  );
};

export default PlanSlider; 