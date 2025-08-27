import React from "react";
import { featureHighlights } from "../data/featureHighlights";
import Image from "next/image";

const FeatureHighlightSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col">
        {featureHighlights.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center lg:justify-between lg:gap-16 xl:gap-32 ${
              idx % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 flex justify-center items-center mb-6 lg:mb-0">
              <Image
                src={feature.image}
                alt={feature.title}
                width={350}
                height={250}
                className="object-contain drop-shadow-xl max-w-[300px] h-auto"
                priority
              />
            </div>
            <div className="flex-1 flex flex-col  max-w-xl text-center lg:text-left">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4"
                style={{ fontFamily: '"Urbanist", sans-serif' }}
              >
                {feature.title}
              </h2>
              <p
                className="text-gray-700 text-[15px] sm:text-base md:text-lg font-normal  text-justify md:w-[500px] pb-10"
                style={{ fontFamily: '"Mulish", sans-serif' }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlightSection;
