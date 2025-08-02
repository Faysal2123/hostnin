import React from "react";

const features = [
  {
    icon: (
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
        <path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Easily Upgrade or Downgrade",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2" />
        <path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Get Notified before suspension",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
        <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Refund process within an hour",
  },
];

const GuaranteeSection = () => {
  return (
   <section className="bg-[#f8f8f8] md:pt-10 px-4 sm:px-6">
     <div className="guarantee-section max-w-7xl mx-auto">
      {/* Decorative background circles */}
      <div className="guarantee-bg guarantee-bg-left" />
      <div className="guarantee-bg guarantee-bg-right" />
      <div className="guarantee-content text-center">
        <h2 className="guarantee-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">30 day <span>Money-back Guarantee</span></h2>
        <p className="guarantee-subtitle text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          There is no risk with our 30-day money back guarantee. Stay safe with assurance of refund.
        </p>
        <div className="guarantee-features flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mt-6 sm:mt-8">
          {features.map((feature, idx) => (
            <div className="guarantee-feature flex flex-col sm:flex-row items-center gap-2 sm:gap-3" key={idx}>
              <div className="guarantee-feature-icon bg-blue-600 rounded-full p-2 sm:p-3 flex items-center justify-center">
                {feature.icon}
              </div>
              <span className="guarantee-feature-text text-sm sm:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
  );
};

export default GuaranteeSection; 