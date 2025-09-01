import React from "react";

const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Easily Upgrade or Downgrade",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2" />
        <path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Get Notified before suspension",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Refund process within an hour",
  },
];

const MoneyBack = () => {
  return (
   <section className="bg-[#f8f8f8] pt-12">
     <div className="guarantee-section max-w-7xl mx-auto px-3 sm:px-4">
      {/* Decorative background circles */}
      <div className="guarantee-bg guarantee-bg-left" />
      <div className="guarantee-bg guarantee-bg-right" />
      <div className="guarantee-content">
        <h2 className="guarantee-title text-2xl sm:text-3xl lg:text-4xl">30 day <span>Money-back Guarantee</span></h2>
        <p className="guarantee-subtitle text-sm sm:text-base lg:text-lg">
          There is no risk with our 30-day money back guarantee. Stay safe with assurance of refund.
        </p>
        <div className="guarantee-features">
          {features.map((feature, idx) => (
            <div className="guarantee-feature" key={idx}>
              <div className="guarantee-feature-icon">{feature.icon}</div>
              <span className="guarantee-feature-text text-sm sm:text-base">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
  );
};

export default MoneyBack; 