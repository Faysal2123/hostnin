import Image from "next/image";
import { CardFeature } from "../../../web-hosting/types/CardFeature";

interface FeatureCardsProps {
  cards: CardFeature[];
  bottom?: string;
}

const FeatureCards = ({ cards, bottom = "-120px sm:-150px lg:-180px" }: FeatureCardsProps) => (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl "
    style={{ bottom, fontFamily: '"Mulish", sans-serif' }}
  >
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-stretch">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 flex-1 min-w-0 flex flex-col justify-between overflow-hidden"
          style={{ fontFamily: '"Mulish", sans-serif' }}
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10 w-full">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white shadow-lg flex-shrink-0">
              <Image src={card.icon} alt={card.title} width={48} height={48} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </span>
            {card.fadedIcon && (
              <span className="flex items-center justify-center select-none pointer-events-none" style={{ opacity: 0.13, marginTop: '-12px sm:-16px' }}>
                <Image src={card.fadedIcon} alt="" width={70} height={70} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
              </span>
            )}
          </div>
          <span className="font-bold text-lg sm:text-xl lg:text-2xl text-[#03206B] mb-2 block text-left" style={{ fontFamily: '"Mulish", sans-serif' }}>{card.title}</span>
          <p className="text-gray-600 text-sm sm:text-base relative z-10 text-left" style={{ fontFamily: '"Mulish", sans-serif' }}>{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards; 