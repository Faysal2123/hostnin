import Image from "next/image";
import { CardFeature } from "../../types/CardFeature";

interface FeatureCardsProps {
  cards: CardFeature[];
  bottom?: string;
}

const FeatureCards = ({ cards, bottom = "-180px" }: FeatureCardsProps) => (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl "
    style={{ bottom, fontFamily: '"Mulish", sans-serif' }}
  >
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-8 flex-1 min-w-0 flex flex-col justify-between overflow-hidden"
          style={{ fontFamily: '"Mulish", sans-serif' }}
        >
          <div className="flex items-center justify-between mb-4 relative z-10 w-full">
            <span className="inline-flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex-shrink-0">
              <Image src={card.icon} alt={card.title} width={48} height={48} className="sm:w-16 sm:h-16" />
            </span>
            {card.fadedIcon && (
              <span className="flex items-center justify-center select-none pointer-events-none" style={{ opacity: 0.13, marginTop: '-16px' }}>
                <Image src={card.fadedIcon} alt="" width={70} height={70} className="sm:w-24 sm:h-24" />
              </span>
            )}
          </div>
          <span className="font-bold text-xl sm:text-2xl text-[#03206B] mb-2 block text-left" style={{ fontFamily: '"Mulish", sans-serif' }}>{card.title}</span>
          <p className="text-gray-600 text-base sm:text-base relative z-10 text-left" style={{ fontFamily: '"Mulish", sans-serif' }}>{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards; 