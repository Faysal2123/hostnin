import React from 'react';
import Image from 'next/image';

import { DomainPrice } from '@/app/page/web-hosting/types/DomainPrice';
import { domainPrices } from '@/app/page/web-hosting/data/domainPrices';

export default function DomainSearchSection() {
  return (
    <div className='bg-[#f8f8f8] py-12 '>
      <div className="bg-white rounded-2xl shadow-lg md:px-8 py-5 px-4  flex items-center justify-between gap-8 max-w-7xl mx-auto p">
        {/* Left: Search and Prices */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1440] mb-6">
            Search your Domain Name
          </h2>
          <form className="flex mb-6 max-w-xl">
            <input
              type="text"
              placeholder="yourdomain.com"
              className="flex-1 md:px-6 py-4 px-4  bg-[#F3F3F5] text-base outline-none border-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-[#0A8AFF] to-[#3B82F6] text-white font-semibold text-base px-8 rounded-r-sm hover:opacity-90 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Search
            </button>
          </form>
          <div className="flex gap-10 flex-wrap">
            {domainPrices.map(({ ext, price, color }: DomainPrice) => (
              <div key={ext} className="text-start min-w-[90px]">
                <span className={`font-bold text-2xl ${color}`}>{ext}</span><br />
                <span className="text-gray-600 font-medium text-sm">{price}/Year</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Offer Card (now replaced with image) */}
        <div className="min-w-[320px] flex justify-center">
          <Image
            src="https://hostnin.com/wp-content/uploads/2025/04/com-domain-offer.png"
            alt="Domain Offer"
            height={200}
            width={300}
          />
        </div>
      </div>
    </div>
  );
} 