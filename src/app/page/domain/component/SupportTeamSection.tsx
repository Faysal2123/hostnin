import React from 'react';
import Image from 'next/image';

const SupportTeamSection = () => {
  return (
    <section className="pt-10 px-4" style={{ background: 'linear-gradient(278deg, #001DAC 16%, #000E57 98%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6">
            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-xl text-center md:text-start lg:text-4xl font-bold leading-tight font-['Urbanist',sans-serif]">
                Need Some Help?
              </h2>
              <h3 className="text-xl text-center md:text-start lg:text-4xl font-bold font-['Urbanist',sans-serif]">
                Call to get assist with
              </h3>
              <h4 className="text-xl text-center md:text-start lg:text-4xl font-bold font-['Urbanist',sans-serif]">
                Registering your Domains
              </h4>
            </div>

            {/* Body Text */}
            <p className="text-base leading-relaxed max-w-xl text-justify font-['Mulish',sans-serif]">
              Our team of experts is always available to assist you with registering
              your desired domains with Hostnin. For live 24/7 assistance, call us on
              WhatsApp. We&apos;re here to help you every step of the way.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Phone Button */}
              <a 
                href="https://wa.me/8801325875955"
                className="inline-flex items-center font-bold gap-3 bg-white text-blue-900 px-6 py-3 rounded-lg  hover:bg-gray-100 transition-colors duration-200 font-['Urbanist',sans-serif]"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                01325875955
              </a>

              {/* Chat Button */}
              <a 
                href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 font-['Urbanist',sans-serif]"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                Chat Now
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[600px]">
              <Image 
                src="https://hostnin.com/wp-content/uploads/2022/08/support-team.png"
                alt="Support Team - Hostnin Customer Service Representatives"
                width={700}
                height={560}
                className="w-full max-w-xl lg:max-w-3xl h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTeamSection; 