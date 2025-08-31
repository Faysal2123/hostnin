import React from 'react';
import Image from 'next/image';
import { featureDifferenceData } from '../../web-hosting/data/featureDifferenceData';
import img from "../../../assets/mujabhai.png"

const CloudFeatureDifference = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-[#f8f8f9]"
      style={{
        minHeight: '600px',
        backgroundImage: 'url("https://hostnin.com/wp-content/uploads/2022/09/shape.png")',
        backgroundPosition: 'top center',
      }}
    >

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-3 sm:px-4 pt-10 sm:pt-48 lg:pt-52 pb-16 sm:pb-24 lg:pb-24 relative z-10" style={{ minHeight: '700px' }}>
        {/* Left: Image */}
        <div className="flex-[1.2] justify-center items-center hidden lg:block w-full max-w-lg lg:max-w-xl xl:max-w-[620px] h-auto">
          <Image
            src={img}
            alt="Man with tablet"
            width={650}
            height={600}
            className="object-contain rounded-xl drop-shadow-lg w-full h-auto"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-start justify-center w-full md:pl-2 md:mt-6 lg:mt-10">
          <h2 className="text-3xl md:text-3xl lg:text-5xl  leading-[1.1] font-bold text-black mb-3 sm:mb-4 text-left" style={{ fontFamily: '"Urbanist", sans-serif' }}>
            What makes Hostnin <br />
            different from others?
          </h2>
          <p className="mb-6 sm:mb-8 lg:mb-10 text-gray-700 max-w-2xl text-left text-[15px] sm:text-base lg:text-lg font-normal" style={{ fontFamily: '"Mulish", sans-serif' }}>
            Using our incredible technology, we will help you improve your website&apos;s accessibility. With LiteSpeed Server and CloudLinux OS, you can speed up loading times, enhance security, and make your site faster and more reliable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            {featureDifferenceData.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start bg-white rounded-2xl p-4 md:p-4 lg:p-5 h-full min-h-[140px] md:min-h-[160px] lg:min-h-[180px] border border-[#eaf4fd] shadow-xl"
                style={{ boxShadow: '0 8px 32px 0 rgba(80, 143, 255, 0.13)' }}
              >
                <span className="bg-[#eaf4fd] text-blue-700 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 lg:mb-5 shadow-sm">
                  {React.createElement(feature.icon, { size: 32 })}
                </span>
                <h3 className="font-bold text-lg md:text-lg text-black mb-1 sm:mb-2 text-left py-1" style={{ fontFamily: '"Urbanist", sans-serif' }}>{feature.title}</h3>
                <p className="text-gray-700 text-base sm:text-base text-left font-normal" style={{ fontFamily: '"Mulish", sans-serif' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudFeatureDifference;
