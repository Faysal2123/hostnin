import Image from 'next/image';
import React from 'react';
import img from "../../assets/services-img.webp";

const AffiliateMarketing = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white py-10 px-10 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              User-first affiliate marketing
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  High conversion rates
                </h3>
                <p className="text-gray-600">
                  Our brand and effective promo materials mean the traffic you send our way will convert.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Commissions based on performance
                </h3>
                <p className="text-gray-600">
                  The more sales you make, the bigger your commission.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Easy to start and grow
                </h3>
                <p className="text-gray-600">
                  Drive conversions with professionally-designed banner packages, screenshots, and more.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={img} 
                alt="Affiliate Marketing" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateMarketing;
