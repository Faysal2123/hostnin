import React from "react";
import paymentIcons from "../assets/Payment-Banner.webp";
import logo from "../assets/footer-logo.webp";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#001158] text-white pt-8 sm:pt-12 md:pt-16 pb-6 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:px-5">
        
        {/* Payment/Partner Icons Banner */}
        <div className="flex justify-center w-full mt-2 mb-2 px-2">
          <div className="rounded-md w-full">
            <Image
              src={paymentIcons}
              alt="payment icons"
              width={1200}
              height={300}
              className="object-contain w-full h-auto max-w-full"
              priority
            />
          </div>
        </div>

        {/* Main Row: Logo + Social Icons */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left: Logo */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src={logo}
              alt="Hostnin Logo"
              width={230}
              height={60}
              className="object-contain mb-3 w-[160px] sm:w-[200px] md:w-[230px] h-[40px] sm:h-[50px] md:h-[60px]"
            />
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 ml-6 text-2xl md:text-3xl">
            <Link href="">
              <FaFacebook />
            </Link>
            <Link href="">
              <FaLinkedin />
            </Link>
            <Link href="">
              <FaYoutube />
            </Link>
            <Link href="">
              <AiFillInstagram />
            </Link>
          </div>
        </div>

        {/* Copyright */}
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
            <a href="refund-Policy" className="hover:underline">
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
