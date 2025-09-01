'use client'
import { useState } from 'react';
import Image from 'next/image';
import img from "../../../assets/cloud hosting cPanel.png"

// Custom CSS for smooth animations
const cardStyles = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: 200px;
    }
  }
  
  .animate-slide-down {
    animation: slideDown 0.4s ease-out forwards;
  }
`;

const features = [
  {
    title: 'Installing apps is easy with this!',
    description: 'Over 86+ of the very best applications, including WordPress, all ready to install with just a click of the mouse or the tap of the finger.',
  },
  {
    title: 'Autoscaling cloud hosting',
    description:
      'The resources of our fast hosting platform, not just one server. Our proprietary autoscaling SSD hosting technology delivers resource boosts exactly when you need them.',
  },
  {
    title: 'Free Global CDN',
    description:
      "Our purpose built Content Delivery Network caches your content at data centres around the world. Best of all it's totally free and there are no bandwidth limits.",
  },
];

const ControlPanelSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <style jsx>{cardStyles}</style>
      <section className="relative w-full bg-[#03206B] overflow-hidden py-6 sm:py-10 lg:py-10 px-3 sm:px-6 lg:px-20 flex flex-col items-center ">
      {/* Heading */}
      <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 pt-6 sm:pt-8 lg:pt-5 z-10 px-3 sm:px-4" style={{ fontFamily: '"Urbanist", sans-serif' }}>
        Most Secured & Advanced<br />
        Control Panel around
      </h2>

      {/* Main Content (Tabs + Image) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 min-h-[400px] sm:min-h-[500px]">
        {/* Left: Timeline and Features */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-xl h-full">
          <div className="flex flex-row items-start w-full">
            {/* Timeline */}
            <div className="flex flex-col items-center mr-3 sm:mr-4 mt-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400 border-2 sm:border-4 border-[#03206B] shadow-lg" />
              <div className="flex-1 w-0.5 sm:w-1 bg-blue-400 my-1" style={{ minHeight: '50px', maxHeight: '60px' }} />
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400 border-2 sm:border-4 border-[#03206B] shadow-lg" />
              <div className="flex-1 w-0.5 sm:w-1 bg-blue-400 my-1" style={{ minHeight: '50px', maxHeight: '60px' }} />
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400 border-2 sm:border-4 border-[#03206B] shadow-lg" />
            </div>
            {/* Feature Cards */}
            <div className="flex flex-col gap-4 sm:gap-6 w-full">
              {features.map((feature, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-[#061B5B] border border-blue-400 rounded-lg px-6 sm:px-8 py-4 sm:py-6 text-white transition-all duration-300 ease-in-out shadow-lg flex flex-col justify-center cursor-pointer select-none ${isOpen ? 'ring-2 ring-blue-300 scale-[1.02]' : 'hover:bg-[#0a256b]/80 hover:scale-[1.01]'} min-h-[60px] sm:min-h-[70px]`}
                    onClick={() => setOpenIdx(idx)}
                  >
                    <div className="font-semibold text-base sm:text-base lg:text-lg mb-2" style={{ fontFamily: '"Mulish", sans-serif' }}>
                      {feature.title}
                    </div>
                    {isOpen && feature.description && (
                      <div className="text-[15px] sm:text-sm text-blue-100 leading-relaxed overflow-hidden animate-slide-down" style={{ fontFamily: '"Mulish", sans-serif' }}>
                        {feature.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Laptop Image */}
        <div className="flex-[1.5] flex justify-center items-center mt-8 sm:mt-12 lg:mt-0 w-full max-w-sm sm:max-w-md xl:max-w-7xl">
          <Image
            src={img}
            alt="Control Panel Laptop"
            width={600}
            height={400}
            className="object-contain w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Decorative blob bottom right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-blue-400 opacity-30 rounded-full blur-2xl z-0" />
    </section>
    </>
  );
};

export default ControlPanelSection;
