import React from 'react';
import paymentIcons from '../assets/Payment-Banner.webp';
import logo from '../assets/footer-logo.webp';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#001158] text-white pt-8 sm:pt-12 md:pt-16 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6 md:px-5">
        {/* Main Row: Logo/desc left, Newsletter right */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6 md:gap-10">
          {/* Left: Logo and description */}
          <div className="flex-1 flex flex-col items-start text-center md:text-left">
            <Image
              src={logo}
              alt="Hostnin Logo"
              width={160}
              height={40}
              className="object-contain mb-3 sm:mb-4 w-[180px] sm:w-[200px] md:w-[230px] h-[45px] sm:h-[50px] md:h-[60px]"
            />
            <p className="text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed text-justify">
              Ready to launch your website? Let Hostnin help! Enjoy the most
              affordable domain and hosting services with guaranteed super-fast
              speed and 16+ CDN locations worldwide. Pay less for more!
            </p>
          </div>
          {/* Right: Newsletter */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full md:w-auto mt-2 sm:mt-4 md:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1 md:mb-2 relative text-left w-full">
              Subscribe to our Newsletter!
              <span className="block mt-1 sm:mt-2 w-[35px] sm:w-[40px] md:w-[50px] h-[2px] sm:h-[3px] bg-gradient-to-r from-blue-600 to-sky-400 rounded" />
            </h3>
            <div className="w-full max-w-2xl mt-3 sm:mt-4 bg-[#2a3570] rounded-lg p-2 flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-10 sm:h-12 px-3 sm:px-4 bg-transparent text-white border-none focus:outline-none text-sm sm:text-base placeholder:text-gray-300 rounded-none min-w-0 w-full"
              />
              <button
                type="submit"
                className="h-10 sm:h-12 px-4 sm:px-6 rounded-md cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold transition-colors text-sm sm:text-base whitespace-nowrap w-full sm:w-auto"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Office Address */}
        <div className="w-full flex justify-center">
          <p className="text-xs sm:text-sm md:text-base text-center font-normal px-2">
            <span className="font-bold hidden lg:block">Office Address:</span>{' '}
            Hostnin HQ, 2nd Floor, Proshanti Residential Area, Colonelhat,
            Akbarshah, Chattogram, Bangladesh.
          </p>
        </div>

      
        <div className="flex justify-center px-2">
          <a 
            href="https://wa.me/8801325875955" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 inline-block text-sm sm:text-base text-center"
          >
            Contact With Us (24/7 Hours)
          </a>
        </div>

        {/* Payment/Partner Icons Banner */}
        <div className="flex justify-center w-full mt-1 mb-1 px-2">
          <div className="rounded-md">
            <Image
              src={paymentIcons}
              alt="payment icons"
              width={800}
              height={20}
              className="hidden lg:block object-contain w-auto h-8 md:w-[1500px] md:h-5 max-w-full"
            />
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs gap-3 sm:gap-2 md:gap-0 px-2">
          <span className="w-full md:w-auto text-center text-xs sm:text-sm md:text-base md:text-left mb-2 md:mb-0">
            Copyright 2025. All Rights Reserved
          </span>
          <div className="flex flex-wrap gap-1 sm:gap-2 w-full md:w-auto justify-center md:justify-end">
            <a href="#" className="hover:underline text-xs sm:text-sm">
              Terms & Conditions
            </a>
            <span className="text-blue-600 text-xs sm:text-sm">|</span>
            <a href="#" className="hover:underline text-xs sm:text-sm">
              Privacy Policy
            </a>
            <span className="text-blue-600 text-xs sm:text-sm">|</span>
            <a href="#" className="hover:underline text-xs sm:text-sm">
              Refund Policy
            </a>
            <span className="text-blue-600 text-xs sm:text-sm">|</span>
            <a href="#" className="hover:underline text-xs sm:text-sm">
              About us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
