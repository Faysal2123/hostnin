"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import googleLogo from "../assets/google.png.webp";
import user1 from "../assets/man-looking-attractive.webp";
import user2 from "../assets/man-looking-attractive.webp";
import user3 from "../assets/man-looking-attractive.webp";
import arrowDark from "../assets/arrow-dark.webp";
import { testimonials } from "../data/testimonialData";
import { IoIosStar } from "react-icons/io";

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
};

const ReviewSection = () => (
  <section className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 py-8 sm:py-10 lg:py-12 px-3 sm:px-4 lg:px-6 bg-[#f8f8f8]">
    {/* Left Side */}
    <div className="relative w-full lg:flex-1 max-w-lg flex flex-col items-start">
      {/* Background Circle */}
      <div className="absolute block z-10 left-6 sm:left-10 top-32 sm:top-40 lg:top-48 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gray-100 rounded-full" />
      <div className="z-20">
        <div className="flex items-center mb-2 mt-4 sm:mt-6 lg:mt-10">
          <Image src={googleLogo} alt="Google" width={80} height={40} className="sm:w-20 sm:h-10 lg:w-24 lg:h-12" />
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-base sm:text-lg lg:text-xl">
              <IoIosStar />
            </span>
          ))}
        </div>
        <div className="text-gray-700 mb-2 sm:mb-3 lg:mb-4 font-medium sm:font-semibold text-sm sm:text-base lg:text-lg">
          4.8 out of 5 based on 147+ reviews.
        </div>
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#03206B] mb-2 leading-tight">
          Hear from our
          <br />
          happy customers
        </h2>
        <p className="text-gray-500 mb-3 sm:mb-4 lg:mb-6 max-w-md text-xs sm:text-sm lg:text-base">
          Getting positive reviews from hundreds of clients means a lot to us. We care about every feedback and adjust our services accordingly.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex -space-x-2 sm:-space-x-4">
            <Image
              src={user1}
              alt="User 1"
              width={36}
              height={36}
              className="rounded-full border-2 border-white z-10 object-cover aspect-square w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11"
            />
            <Image
              src={user2}
              alt="User 2"
              width={36}
              height={36}
              className="rounded-full border-2 border-white z-9 object-cover aspect-square w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11"
            />
            <Image
              src={user3}
              alt="User 3"
              width={36}
              height={36}
              className="rounded-full border-2 border-white z-8 object-cover aspect-square w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11"
            />
          </div>
          <span className="ml-2 sm:ml-4 text-[#2B4EFF] text-xs sm:text-sm lg:text-base font-medium cursor-pointer flex items-center">
            <Image
              src={arrowDark}
              alt="Arrow"
              width={24}
              height={24}
              className="mr-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
            />
            <span className="hidden sm:inline">More Review</span>
            <span className="sm:hidden">More</span>
          </span>
        </div>
      </div>
    </div>

    {/* Right Side - Slider */}
    <div className="w-full lg:flex-1 bg-white rounded-xl shadow-lg max-w-3xl flex flex-col relative justify-center py-6 sm:py-8 lg:py-10">
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, idx) => (
          <div key={idx}>
            <div className="flex items-center mb-1 px-3 sm:px-4 lg:px-5">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12"
              />
              <div className="ml-3 sm:ml-4 flex flex-col">
                <span className="font-bold sm:font-extrabold text-base sm:text-lg lg:text-xl text-[#03206B] leading-tight">
                  {testimonial.name}
                </span>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base lg:text-lg">
                      <IoIosStar />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-3 sm:mt-4 mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl px-3 sm:px-4 lg:px-5">
              {testimonial.text}
            </p>
            <span
              className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 opacity-10 text-3xl sm:text-5xl lg:text-7xl select-none"
              style={{ fontWeight: 900 }}
            >
              &ldquo;&rdquo;
            </span>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default ReviewSection;
