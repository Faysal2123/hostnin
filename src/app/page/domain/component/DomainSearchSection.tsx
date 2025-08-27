"use client";
import React from "react";
import Image from "next/image";

interface DomainCard {
  currentPrice: string;
  originalPrice: string;
  discount: string;
  imageUrl: string;
}

const domainData: DomainCard[] = [
  {
    currentPrice: "৳1199",
    originalPrice: "৳3875",
    discount: "69.06%",
    imageUrl:
      "https://hostnin.com/wp-content/uploads/2022/12/rsz_1rsz_1rsz_1rsz_dotonline_gtld_logosvg.png",
  },
  {
    currentPrice: "৳1650",
    originalPrice: "৳2000",
    discount: "17.50%",
    imageUrl:
      "https://hostim.themetags.com/wp-content/uploads/2022/09/logo_6.svg",
  },
  {
    currentPrice: "৳999",
    originalPrice: "৳3800",
    discount: "73.71%",
    imageUrl:
      "https://hostim.themetags.com/wp-content/uploads/2022/09/shop-b.svg",
  },
  {
    currentPrice: "৳1250",
    originalPrice: "৳1399",
    discount: "10.65%",
    imageUrl: "https://hostim.themetags.com/wp-content/uploads/2022/09/top.svg",
  },
  {
    currentPrice: "৳1089",
    originalPrice: "৳1750",
    discount: "37.77%",
    imageUrl: "https://hostim.themetags.com/wp-content/uploads/2022/09/uk-.svg",
  },
  {
    currentPrice: "৳1650",
    originalPrice: "৳2150",
    discount: "23.26%",
    imageUrl:
      "https://hostim.themetags.com/wp-content/uploads/2022/09/logo_13.svg",
  },
  {
    currentPrice: "৳896",
    originalPrice: "৳1760",
    discount: "49.09%",
    imageUrl:
      "https://hostim.themetags.com/wp-content/uploads/2022/09/logo_10.svg",
  },
  {
    currentPrice: "৳1239",
    originalPrice: "৳1750",
    discount: "29.20%",
    imageUrl:
      "https://hostim.themetags.com/wp-content/uploads/2022/09/dot-me-b.svg",
  },
];

const DomainSearchSection: React.FC = () => {
  return (
    <section className="py-16 px-2 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-[28px] md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: '"Urbanist", sans-serif' }}
          >
            Search & Register Your Domains
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: '"Mulish", sans-serif' }}
          >
            Register your domains at competitive prices, complete with advanced
            features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainData.map((domain, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

              <div className="absolute top-9 right-4 bg-gradient-to-b from-red-500 to-pink-400 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-lg">
  {domain.discount} off
</div>


              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-3">
                    <Image
                      src={domain.imageUrl}
                      alt={`Domain ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-2" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                  {domain.currentPrice}/yr
                </div>

                <div className="text-base text-gray-500 group-hover:text-white group-hover:opacity-80 transition-colors duration-500 mb-4" style={{ fontFamily: '"Mulish", sans-serif' }}>
                  Instead of {domain.originalPrice}/yr
                </div>

                <div className="mt-auto">
                  <a
                    href="https://my.hostnin.com/cart.php?a=add&domain=register&currency=1"
                    className="inline-flex items-center text-blue-600 group-hover:text-white font-bold transition-colors duration-500"
                    style={{ fontFamily: '"Urbanist", sans-serif' }}
                  >
                    Register Now{" "}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainSearchSection;
