"use client";
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    const offset = 80; // Header height offset
    const elementPosition = pricingSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const performanceFeatures = [
  '16+ CDN Included (Worthy as CloudFlare Premium Plan)',
  '100% Secure & safe Shell (SSH) Access',
  'Web Optimization feature for SEO',
  'Unlimited Download and Upload Speed through FTP',
];

const supportFeatures = [
  { text: '24/7 Chat Support through messenger' },
  { text: 'Live Call Support through What\'s App' },
  { text: 'Max. 1 Hours Email Support' },
  { text: 'Max. 30 Minute ticket reply'},
  { text: 'Anydesk/TeamViewer Support'},
];

const PerformanceAndSupportSection = () => {
  return (
    <section className="w-full bg-[#fafafa] py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 sm:gap-20 lg:gap-24">
        {/* Performance Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a174e] mb-3 sm:mb-4 font-['Urbanist',sans-serif]">
              We Offers Lighting Fast<br />
              Loading Speed
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[17px] font-['Mulish',sans-serif]">
              Speed is one of the most basic but powerful features that you will get instantly with your Shared hosting package. A fast loading website ensures that your competitor are not able to snatch your potential customers.
            </p>
            <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
              {performanceFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#0a174e]">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-2 h-2 text-white" />
                  </div>
                  <span className='font-bold text-base font-["Mulish",sans-serif]'>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 sm:px-8 py-2 sm:py-4 transition-colors text-sm sm:text-base rounded-full"
            >
              See Pricing
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="https://hostnin.com/wp-content/uploads/2023/03/features.png"
              alt="Lighting Fast Speed"
              width={500}
              height={350}
              className="object-contain drop-shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a174e] mb-3 sm:mb-4 font-['Urbanist',sans-serif]">
              Let us take worries away & put<br />
              time back in your day
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[17px] font-['Mulish',sans-serif]">
              We offer expert 24/7/365 problem-solving for everyone. For a closer partnership, choose the Advanced Support add-on that enhances your support experience or the Premium Support add-on where our Senior Support Engineers work as an extension of your in-house team.
            </p>
            <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
              {supportFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#0a174e]">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-2 h-2 text-white" />
                  </div>
                  <span className='font-bold text-base font-["Mulish",sans-serif]'>{feature.text}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 sm:px-8 py-2 sm:py-4 rounded-full transition-colors text-sm sm:text-base"
            >
              See Pricing
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="https://i.ibb.co/FbGFz0zH/customer-support-3-2048x1745.webp"
              alt="Support Illustration"
              width={600}
              height={350}
              className="object-contain drop-shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAndSupportSection; 