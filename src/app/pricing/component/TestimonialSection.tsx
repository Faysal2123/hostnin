"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import arrowDark from "../../assets/arrow-dark.webp";
import { IoIosStar } from "react-icons/io";
import { testimonials } from "../data/testimonialData";
import Link from "next/link";



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

const TestimonialSection = () => (
  <section className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-6 bg-[#f8f8f8]" style={{ fontFamily: '"Mulish", sans-serif' }}>
    {/* Left Side */}
    <div className="relative w-full lg:flex-1 max-w-lg flex flex-col items-start">
      {/* Background Circle */}
      <div className="absolute block z-10 left-10 top-32 sm:top-40 md:top-48 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 md:w-[360px] lg:w-[450px] lg:h-[450px] h-64 sm:h-96 md:h-[360px] bg-gray-100 rounded-full" />

      <div className="z-20">
        <div className="flex items-center mb-2 mt-4 sm:mt-6 md:mt-10">
          <Image src="https://hostnin.com/wp-content/uploads/2022/09/google-logo.svg" alt="Google" width={80} height={40} className="sm:w-[100px] sm:h-[50px]" />
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-base sm:text-lg md:text-xl">
              <IoIosStar />
            </span>
          ))}
        </div>
        <div className="text-gray-700 mb-2 sm:mb-3 md:mb-4 font-medium sm:font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: '"Mulish", sans-serif' }}>
          4.8 out of 5 based on 147+ reviews.
        </div>
        <h2 className="font-bold text-[28px]  md:text-3xl lg:text-4xl text-black mb-2 leading-tight " style={{ fontFamily: '"Mulish", sans-serif' }}>
          Hear from our
          <br />
          happy customers
        </h2>
        <p className="text-gray-500 mb-3 sm:mb-4 md:mb-6 max-w-md text-base  md:text-[17px]" style={{ fontFamily: '"Mulish", sans-serif' }}>
          Getting positive reviews from hundreds of clients means a lot to us. We care about every feedback and adjust our services accordingly.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex -space-x-2 sm:-space-x-4">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/12/unnamed-5.png"
              alt="User 1"
              width={36}
              height={36}
              className="rounded-full border-2 border-white z-10 object-cover aspect-square sm:w-[44px] sm:h-[44px]"
            />
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/07/unnamed-2.png"
              alt="User 2"
              width={36}
              height={36}
              className="rounded-full border-2 border-white z-9 object-cover aspect-square sm:w-[44px] sm:h-[44px]"
            />
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/12/unnamed-6.png"
              alt="User 3"
              width={36}
              height={36}
              className="rounded-full border-2 border-white z-8 object-cover aspect-square sm:w-[44px] sm:h-[44px]"
            />
          </div>
          <span className="ml-2 sm:ml-4 text-[#2B4EFF] text-[15px] md:text-base font-bold cursor-pointer flex items-center underline" style={{ fontFamily: '"Mulish", sans-serif' }}>
            <Image
              src={arrowDark}
              alt="Arrow"
              width={24}
              height={24}
              className="mr-1 sm:w-8 sm:h-8"
            />
            <Link href="https://www.google.com/search?q=hostnin&oq=hostnin&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMgYIARBFGDwyBggCEEUYQTIGCAMQRRg8MhIIBBAuGCcYrwEYxwEYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEHSAQgxODQzajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd="> More Review</Link>
           
          </span>
        </div>
      </div>
    </div>

    {/* Right Side - Slider */}
    <div className="w-full lg:flex-1 bg-white rounded-xl shadow-lg max-w-3xl flex flex-col relative justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-5">
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, idx) => (
          <div key={idx}>
            <div className="flex items-center mb-1 px-2 sm:px-5">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full sm:w-[80px] sm:h-[80px]"
              />
              <div className="ml-3 sm:ml-4 flex flex-col">
                <span className="font-bold sm:font-extrabold text-base sm:text-lg md:text-xl text-black leading-tight" style={{ fontFamily: '"Mulish", sans-serif' }}>
                  {testimonial.name}
                </span>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base md:text-lg">
                      <IoIosStar />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-3 sm:mt-4 mb-6 sm:mb-8 text-[15px] md:text-[17px] leading-relaxed max-w-3xl px-2 sm:px-5" style={{ fontFamily: '"Mulish", sans-serif' }}>
              {testimonial.text}
            </p>
            <Image src="https://hostnin.com/wp-content/uploads/2023/08/quote-icon.svg" alt={testimonial.name} width={50} height={50} className="text-start pl-2 sm:pl-4 sm:w-[70px] sm:h-[70px]" />
            
            <span
              className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 opacity-10 text-3xl sm:text-5xl md:text-7xl select-none"
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

export default TestimonialSection;
