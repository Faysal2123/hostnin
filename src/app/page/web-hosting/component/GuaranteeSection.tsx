import React from "react";
import Image from "next/image";

const features = [
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/07/pricing_icon1.svg"
        alt="Upgrade Icon"
        width={48}
        height={48}
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0"
      />
    ),
    text: "Easily Upgrade or Downgrade",
  },
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/07/pricing_icon3.svg"
        alt="Suspension Notification Icon"
        width={48}
        height={48}
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0"
      />
    ),
    text: "Get Notified before suspension",
  },
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/07/pricing_icon2.svg"
        alt="Refund Icon"
        width={48}
        height={48}
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0"
      />
    ),
    text: "Refund process within an hour",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="bg-[#f8f8f8] pt-5 md:pt-10 px-4 sm:px-6">
      <div className="guarantee-section max-w-7xl mx-auto">
        <div className="guarantee-bg guarantee-bg-left" />
        <div className="guarantee-bg guarantee-bg-right" />
        <div className="guarantee-content text-center p-3">
          <h2 className="guarantee-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            30 day <span>Money-back Guarantee</span>
          </h2>
          <p className="guarantee-subtitle text-sm sm:text-base md:text-lg max-w-2xl mx-auto ">
            There is no risk with our 30-day money back guarantee. Stay safe with assurance of refund.
          </p>
          <div className="guarantee-features flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mt-6 sm:mt-8">
            {features.map((feature, idx) => (
              <div
                className="guarantee-feature flex items-center gap-3 text-left"
                key={idx}
              >
                {feature.icon}
                <span className="guarantee-feature-text text-sm sm:text-base font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
