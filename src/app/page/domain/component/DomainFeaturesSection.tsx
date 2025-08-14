import React from 'react';
import Image from 'next/image';

const DomainFeaturesSection = () => {
  return (
    <section className="md:py-16  py-8 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section - Domain Registration Banner */}
        <div className="text-center mb-20">
          
            <h1 className="md:text-4xl text-3xl text-center md:text-start font-bold text-black mb-6 font-['Urbanist',sans-serif]">
              Register Your Domain with Hostnin
            </h1>
            <p className="text-gray-700 md:text-center text-base leading-relaxed max-w-4xl mx-auto text-justify font-['Mulish',sans-serif]">
              We provide low-cost domains as well as the premium add-ons you require. 
              There are no hidden rules or fees; everything is crystal clear. 
              Register your domain from the best domain provider in Bangladesh.
            </p>
         
        </div>

        {/* First Section - Domain Registration */}
        <div className="grid lg:grid-cols-2 md:gap-12  items-center  mb-20">
          {/* Image */}
          <div className="flex justify-center">
            <Image 
              src="https://hostnin.com/wp-content/uploads/2022/08/about-1.png" 
              alt="Domain Registration Illustration"
              width={500}
              height={400}
              className="max-w-lg h-auto"
            />
          </div>
          
          {/* Text Content */}
          <div>
            <h2 className="md:text-4xl text-3xl text-center md:text-start font-bold text-black mb-6 font-['Urbanist',sans-serif]">
              DNS Management
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p className="font-['Mulish',sans-serif]">
                We include free DNS management with every domain you purchase. 
                Manage all domains from a single location and directly from our 
                control panel, including DNS and name servers.
              </p>
              <p className="font-['Mulish',sans-serif]">
                By using the DNS Management option, you can add your domain records, 
                such as A, TXT, and MX records. We simplified everything for you. 
                When you&apos;re ready, place your order and we&apos;ll get you going!
              </p>
            </div>
          </div>
        </div>

        {/* Second Section - Data Protection */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="md:text-4xl text-[28px] text-center md:text-start font-bold text-black mb-6 font-['Urbanist',sans-serif]">
            Protect and secure your data from the thieves
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p className="font-['Mulish',sans-serif]">
              We include WHOIS data protection for free with every domain name registration to keep your personal information safe. By doing this, there is nothing to worry about regarding your personal information, such as your phone number and address.
              </p>
              <p className="font-['Mulish',sans-serif]">
              Defending your personal data from data brokers is a breeze with our Domain ID Protection (WHOIS Protection).
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center">
            <Image 
              src="https://hostnin.com/wp-content/uploads/2022/08/about-2.png" 
              alt="Data Protection Illustration"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Third Section - DNS Management */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image 
              src="https://hostnin.com/wp-content/uploads/2022/08/about-3.png" 
              alt="DNS Management Illustration"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
          
          {/* Text Content */}
          <div>
            <h2 className="md:text-4xl text-[27px] text-center md:text-start font-bold text-black mb-9 font-['Urbanist',sans-serif]">
            Move anytime, anywhere
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p className="font-['Mulish',sans-serif]">
              We safeguard not only your confidentiality but also your right to remain here. With our full domain control panel, you can go anywhere, at any time, with a single click. Being with us is not restricted in any way.
              </p>
              <p className="font-['Mulish',sans-serif]">
              Take complete control of your domains and ensure the security of your website. We have no restrictions on renewing with us, and it will be valid until the last hour of the expiration date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainFeaturesSection; 