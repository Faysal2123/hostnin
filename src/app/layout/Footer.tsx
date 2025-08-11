import React from "react";
import paymentIcons from "../assets/Payment-Banner.webp";
import logo from "../assets/footer-logo.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001158] text-white pt-8 sm:pt-12 md:pt-16 pb-6 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:px-5">
        {/* Main Row: Logo/desc left, Newsletter right */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left: Logo and description */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src={logo}
              alt="Hostnin Logo"
              width={230}
              height={60}
              className="object-contain mb-3 w-[160px] sm:w-[200px] md:w-[230px] h-[40px] sm:h-[50px] md:h-[60px]"
            />
            <p className="text-base sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed text-justify px-2 md:px-0">
              Ready to launch your website? Let Hostnin help! Enjoy the most
              affordable domain and hosting services with guaranteed super-fast
              speed and 16+ CDN locations worldwide. Pay less for more!
            </p>
          </div>

          {/* Right: Newsletter */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full md:w-auto mt-4 md:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2 relative text-left w-full px-2 md:px-0">
              Subscribe to our Newsletter!
              <span className="block mt-1 w-[40px] sm:w-[50px] h-[3px] bg-gradient-to-r from-blue-600 to-sky-400 rounded" />
            </h3>
            <form className="w-full max-w-2xl mt-3 sm:mt-4 bg-[#2a3570] rounded-lg p-2 flex flex-row gap-2 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-shrink min-w-0 flex-grow h-10 sm:h-12 px-4 bg-transparent text-white border-none focus:outline-none text-base placeholder:text-gray-300 rounded-md"
                required
              />
              <button
                type="submit"
                className="flex-shrink-0 h-10 sm:h-12 px-3 sm:px-6 rounded-md cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Office Address */}
        <div className="w-full flex justify-center px-2">
          <p className="text-sm sm:text-sm md:text-base text-center font-normal max-w-4xl">
            <span className="font-bold hidden lg:inline">Office Address:</span>{" "}
            Hostnin HQ, 2nd Floor, Proshanti Residential Area, Colonelhat,
            Akbarshah, Chattogram, Bangladesh.
          </p>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center px-2">
          <a
            href="https://wa.me/8801325875955"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 inline-block text-base text-center w-full max-w-xs"
          >
            Contact With Us (24/7 Hours)
          </a>
        </div>

        {/* Payment/Partner Icons Banner */}
        <div className="flex justify-center w-full mt-2 mb-2 px-2">
          <div className="rounded-md">
            <Image
              src={paymentIcons}
              alt="payment icons"
              width={800}
              height={30}
              className="object-contain h-6 md:h-8 w-auto max-w-full"
              priority
            />
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-3 sm:gap-4 px-2">
          <span className="w-full md:w-auto text-center md:text-left text-white/90 mb-2 md:mb-0">
            © 2025 Hostnin. All Rights Reserved
          </span>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span className="text-blue-600">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="text-blue-600">|</span>
            <a href="#" className="hover:underline">
              Refund Policy
            </a>
            <span className="text-blue-600">|</span>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
