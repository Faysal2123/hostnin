"use client";

import React from "react";
import Image from "next/image";
import { featureCards } from "../data/featureCards";
import { FeatureCard } from "../types/FeatureCard";

const FeatureCardsSection: React.FC = () => {
  return (
    <section className="py-5 bg-[#f8f8f8]" style={{ fontFamily: '"Mulish", sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black" style={{ fontFamily: '"Mulish", sans-serif' }}>
          Core Features Available!
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl" style={{ fontFamily: '"Mulish", sans-serif' }}>
          Efficiently redefine high-quality potentialities rather than
          innovative ideas. Accurate infomediaries with high-payoff technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featureCards.map((card: FeatureCard, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start hover:shadow-lg hover:shadow-blue-200 hover:scale-105 transition-all duration-300 min-h-[220px]"
              style={{ fontFamily: '"Mulish", sans-serif' }}
            >
              <div className="w-12 h-12 mb-4 relative">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl md:text-xl lg:text-[22px] mb-2 text-black" style={{ fontFamily: '"Mulish", sans-serif' }}>{card.title}</h3>
              <p className="text-gray-500 text-base md:text-base" style={{ fontFamily: '"Mulish", sans-serif' }}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
