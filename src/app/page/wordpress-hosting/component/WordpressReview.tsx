"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "@/app/page/web-hosting/data/reviews";
import googleLogo from "@/app/assets/google.png.webp";

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const WordpressReview: React.FC = () => {
 
  return (
    <section className="bg-[#f8f8f9] pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#03206B] mb-2 leading-tight">
              What&apos;s Our Clients Say&apos;s
            </h2>
            <p className="text-gray-500 mb-4 max-w-xl text-sm sm:text-base">
              Our migration service is free and quick. In most cases, we can have websites. Then click below to speak to our team.
            </p>
            
          </div>
          {/* Average Rating Box */}
          <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center min-w-[220px] border border-gray-100">
            <div className="flex items-center mb-2">
              <Image src={googleLogo} alt="Google" width={80} height={40} />
            </div>
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-green-500 text-xl mr-1">★</span>
              ))}
            </div>
            <div className="text-gray-700 text-sm font-medium">4.9 Excellent 250 Review</div>
          </div>
        </div>
        {/* Slider Section */}
        <Slider {...sliderSettings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-2">
              <div 
                className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-between h-[400px] group"
                style={{
                  '--scrollbar-width': 'none',
                  '--ms-overflow-style': 'none',
                } as React.CSSProperties}
              >
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 aspect-square rounded-full overflow-hidden mr-4 border-4 border-white shadow flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={72}
                      height={72}
                      className="rounded-full object-cover aspect-square"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a2343]">
                      {review.name}
                    </h3>
                    <div className="flex mt-1">
                      <Image
                        src="https://hostnin.com/wp-content/uploads/2022/09/green-star.svg"
                        alt="Star"
                        width={100}
                        height={50}
                        className="mr-1"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <p 
                  className="text-[#6b6b6b] text-sm md:text-base mb-8 overflow-y-auto flex-1 font-['Mulish',sans-serif]"
                  style={{
                    scrollbarWidth: 'none',
                    ['-ms-overflow-style' as string]: 'none',
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.scrollbarWidth = 'auto';
                    (e.currentTarget.style as any).msOverflowStyle = 'auto';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.scrollbarWidth = 'none';
                    (e.currentTarget.style as any).msOverflowStyle = 'none';
                  }}
                >
                  {review.review}
                </p>
                <FaQuoteLeft className="text-4xl text-[#f3f3f3]" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WordpressReview;
