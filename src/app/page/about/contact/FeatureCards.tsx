import React from "react";
import { MdCall, MdAttachEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CardFeature } from "../../web-hosting/types/CardFeature";

const iconMap: Record<string, React.ReactElement> = {
  MdCall: <MdCall />,
  MdAttachEmail: <MdAttachEmail />,
  FaHome: <FaHome />,
};

interface FeatureCardsProps {
  cards: (Omit<CardFeature, "icon"> & { iconName: string })[];
  bottom?: string;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ cards, bottom = "-180px" }) => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl"
      style={{ bottom, fontFamily: '"Mulish", sans-serif' }}
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`relative bg-white rounded-lg shadow-xl pt-12 sm:pt-10 pb-6 sm:pb-8 min-w-0 flex flex-col justify-between items-start overflow-visible ${
              card.title === "Hotline" 
                ? "px-3 sm:px-6 lg:px-8 flex-[0.8]" 
                : card.title === "Email Us"
                ? "px-5 sm:px-10 lg:px-12 flex-[1.2]"
                : "px-4 sm:px-8 lg:px-10 flex-[1.5]"
            }`}
            style={{ fontFamily: '"Mulish", sans-serif' }}
          >
            {/* Icon Overlapping Top Center */}
            <span className="absolute left-6 sm:left-10 -top-7 sm:-top-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 shadow-[0_0_30px_8px_rgba(37,99,235,0.4)] flex items-center justify-center text-white text-2xl sm:text-3xl z-20 ">
              {iconMap[card.iconName] || null}
            </span>
            {/* Title */}
            <span className="font-bold text-lg sm:text-xl text-[#03206B] mb-2 text-start" style={{ fontFamily: '"Urbanist", sans-serif' }}>
              {card.title}
            </span>
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base relative z-10 text-start leading-tight" style={{ fontFamily: '"Mulish", sans-serif' }}>
              {card.desc.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < card.desc.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
