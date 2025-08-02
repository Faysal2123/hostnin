import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';

const CloudFeatureSection = () => {
  return (
    <div className='bg-[#f8f8f8] pb-12 sm:pb-16 lg:pb-20'>
        <section className=" rounded-2xl shadow-xl bg-white px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto ">
      {/* Left Side - Text Content */}
      <div className="flex-1 lg:pr-8 xl:pr-16">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 font-['Urbanist',sans-serif]">
          Our cloud plan includes
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 sm:mb-6 drop-shadow-lg font-['Urbanist',sans-serif]">
          16+ CDN Locations Worldwide
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg font-['Mulish',sans-serif]">
          Go beyond a basic one-click app and deliver lightning-fast load times packed full of features like WordPress staging, cloning, cache, backups, unlimited CDN, image/code optimisation and more built-in (no expensive plug-ins required).
        </p>
        
        {/* Feature List */}
        <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <li className="flex items-start gap-2 sm:gap-3 text-gray-700 font-['Mulish',sans-serif]">
            <MdCheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm lg:text-base">PHP-FPM Advanced Process Management with Dedicated Opcache Performance</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3 text-gray-700 font-['Mulish',sans-serif]">
            <MdCheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm lg:text-base">One-Click Gmail and Office 365 DNS Setup</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3 text-gray-700 font-['Mulish',sans-serif]">
            <MdCheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm lg:text-base">Load Balanced & Redundant Platform</span>
          </li>
        </ul>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base font-['Mulish',sans-serif]">
            Sign Up
          </button>
          <button className="text-gray-700 hover:text-blue-500 font-medium px-4 sm:px-6 lg:px-8 py-2 sm:py-3 transition-colors text-sm sm:text-base font-['Mulish',sans-serif]">
            Compare Pricing
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <Image
          src="https://hostnin.com/wp-content/uploads/2023/05/hotim-bg.png"
          alt="Cloud Security Illustration"
          width={600}
          height={320}
          className="object-contain w-full h-auto"
          priority
        />
      </div>
    </section>
    </div>
  );
};

export default CloudFeatureSection; 