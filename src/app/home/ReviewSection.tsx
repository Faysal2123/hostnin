"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import googleLogo from "../assets/google.png.webp";
import arrowDark from "../assets/arrow-dark.webp";

import { IoIosStar } from "react-icons/io";
import { testimonials } from "../web-hosting/data/testimonialData";

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const ReviewSection = () => (
  <div className="bg-[#f8f8f8] pb-5">
    <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-8 py-5 md:py-12 px-2 sm:px-6">
      {/* Left Side */}
      <div className="relative w-full lg:flex-1 max-w-lg flex flex-col items-start">
        {/* Background Circle */}
        <div className="absolute block z-10 left-10 top-40 sm:top-48 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[360px] lg:w-[450px] lg:h-[450px] h-96 sm:h-[360px] bg-gray-100 rounded-full" />

        <div className="z-20">
          <div className="flex items-center mb-2 mt-6 sm:mt-10">
            <Image src={googleLogo} alt="Google" width={100} height={50} />
          </div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg sm:text-xl">
                <IoIosStar />
              </span>
            ))}
          </div>
          <div className="text-gray-700 mb-3 sm:mb-4 font-medium sm:font-semibold text-base sm:text-lg">
            4.8 out of 5 based on 147+ reviews.
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#03206B] mb-2 leading-tight">
            Hear from our
            <br />
            happy customers
          </h2>
          <p className="text-gray-500 mb-4 sm:mb-6 max-w-md text-base sm:text-base">
            Getting positive reviews from hundreds of clients means a lot to us. We care about every feedback and adjust our services accordingly.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex -space-x-4">
              <Image
                src="https://hostnin.com/wp-content/uploads/2022/12/unnamed-5.png"
                alt="User 1"
                width={44}
                height={44}
                className="rounded-full border-2 border-white z-10 object-cover aspect-square"
              />
              <Image
                src="https://hostnin.com/wp-content/uploads/2022/07/unnamed-2.png"
                alt="User 2"
                width={44}
                height={44}
                className="rounded-full border-2 border-white z-9 object-cover aspect-square"
              />
              <Image
                src="https://hostnin.com/wp-content/uploads/2022/12/unnamed-6.png"
                alt="User 3"
                width={44}
                height={44}
                className="rounded-full border-2 border-white z-8 object-cover aspect-square"
              />
            </div>
            <span className="ml-4 text-[#2B4EFF] text-sm sm:text-base font-medium cursor-pointer flex items-center">
              <Image
                src={arrowDark}
                alt="Arrow"
                width={32}
                height={32}
                className="mr-1"
              />
              More Review
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Slider */}
      <div className="w-full lg:flex-1 bg-white rounded-xl shadow-lg max-w-3xl flex flex-col relative justify-center py-4 sm:py-6 px-2 mt-8 lg:mt-0">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between min-h-[200px] sm:min-h-[300px]"
            >
              <div className="flex items-center mb-4 px-5">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="ml-4 flex flex-col">
                  <span className="font-bold sm:font-extrabold text-lg sm:text-xl text-[#03206B] leading-tight">
                    {testimonial.name}
                  </span>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-base sm:text-lg"
                      >
                        <IoIosStar />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-gray-600 text-base sm:text-base leading-relaxed max-w-3xl px-5 mb-4">
                  {testimonial.text}
                </p>
                <div className="px-5">
                  <Image
                    src="https://hostnin.com/wp-content/uploads/2023/08/quote-icon.svg"
                    alt={testimonial.name}
                    width={70}
                    height={70}
                    className="text-start"
                  />
                </div>
              </div>

              <span
                className="absolute bottom-6 left-6 opacity-10 text-5xl sm:text-7xl select-none"
                style={{ fontWeight: 900 }}
              >
                &ldquo;&rdquo;
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  </div>
);

export default ReviewSection;
