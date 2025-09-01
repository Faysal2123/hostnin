"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DomainPrice } from "../hosting/web-hosting/types/DomainPrice";
import { domainPrices } from "../hosting/web-hosting/data/domainPrices";

export default function DomainSearchSection() {
  const [domain, setDomain] = useState("");

  return (
    <div className="bg-[#f8f8f8] py-12 lg:py-10">
      <div className="bg-white rounded-2xl shadow-lg md:px-8 lg:px-16 py-5 px-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Left: Search and Prices */}
        <div className="flex-1 w-full flex flex-col justify-center ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1440] mb-6 text-center md:text-start">
            Search your Domain Name
          </h2>
          <form
            className="flex flex-row mb-6 max-w-xs md:max-w-md lg:max-w-xl mx-auto md:mx-0"
            action="https://my.hostnin.com/cart.php?a=add&domain=register"
            method="post"
            target="_blank" 
            onSubmit={(e) => {
              if (domain.trim() === "") {
                e.preventDefault();
                alert("Please enter a domain name");
              }
            }}
          >
            <input
              type="text"
              name="query"
              placeholder="yourdomain.com"
              className="flex-1 px-3 py-3 sm:px-4 sm:py-4 bg-[#F3F3F5] text-sm sm:text-base outline-none border-none rounded-t-md sm:rounded-t-none sm:rounded-l-md"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center cursor-pointer gap-1 sm:gap-2 bg-gradient-to-r from-[#0A8AFF] to-[#3B82F6] text-white font-semibold text-sm sm:text-base px-4 sm:px-7 md:px-9 py-3 sm:py-4 rounded-l-none rounded-r-md hover:opacity-90 transition"
            >
              <svg
                width="18"
                height="18"
                className="sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Search
            </button>
          </form>
          <div className="flex md:gap-6 gap-4 flex-wrap mx-auto md:mx-0">
            {domainPrices.map(({ ext, price, color }: DomainPrice) => (
              <div key={ext} className="text-start md:min-w-[80px] min-w-[50px]">
                <span className={`font-bold text-xl sm:text-2xl ${color}`}>
                  {ext}
                </span>
                <br />
                <span className="text-gray-600 font-medium text-xs md:text-base">
                  {price}/Year
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Offer Image */}
        <div className="w-full md:w-auto flex justify-center items-center">
          <Image
            src="https://hostnin.com/wp-content/uploads/2025/04/com-domain-offer.png"
            alt="Domain Offer"
            width={300}
            height={300}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}
