import React from "react";
import logo from "../assets/footer-logo.webp";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#001158] text-white pt-8 sm:pt-12 pb-6 px-4 sm:px-6 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-4">
        {/* Payment/Partner Icons */}
        <div className="rounded-md w-full">
          <Image
            src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-01.png"
            alt="payment icons"
            width={1200}
            height={300}
            className="object-contain w-full h-auto max-w-full"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 py-6 border-t border-b border-white/20">
          {/* Hosting */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3">Hosting</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/hosting/web-hosting" className="text-white/80 hover:text-white transition">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/hosting/cloud-hosting" className="text-white/80 hover:text-white transition">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/hosting/bdix-hosting" className="text-white/80 hover:text-white transition">
                  BDIX Hosting
                </Link>
              </li>
              <li>
                <Link href="/hosting/turbo-hosting" className="text-white/80 hover:text-white transition">
                  Turbo Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* Domain */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3">Domain</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="https://my.hostnin.com/cart.php?a=add&domain=register" className="text-white/80 hover:text-white transition">
                  Register Your Domain
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/cart.php?a=add&domain=transfer" className="text-white/80 hover:text-white transition">
                  Transfer to Us
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/index.php/cart/domain/renew" className="text-white/80 hover:text-white transition">
                  Renew Domains
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/clientarea.php?action=domains" className="text-white/80 hover:text-white transition">
                  Manage Domains
                </Link>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3">Service</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="https://my.hostnin.com/clientarea.php?action=services" className="text-white/80 hover:text-white transition">
                  Manage Service
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/cart.php?gid=addons" className="text-white/80 hover:text-white transition">
                  View Addons
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/index.php/service-renewals" className="text-white/80 hover:text-white transition">
                  Renew Services
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/serverstatus.php" className="text-white/80 hover:text-white transition">
                  Service Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3">Tools</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="https://my.hostnin.com/index.php/store/codeguard" className="text-white/80 hover:text-white transition">
                  Website Backup
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/index.php/store/sitelock" className="text-white/80 hover:text-white transition">
                  Website Security
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/index.php/store/professional-email" className="text-white/80 hover:text-white transition">
                  Professional Emails
                </Link>
              </li>
              <li>
                <Link href="https://my.hostnin.com/index.php/store/ssl-certificates" className="text-white/80 hover:text-white transition">
                  SSL Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3">Support</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6" className="text-white/80 hover:text-white transition">
                  24/7 LiveChat
                </Link>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send/?phone=8801325875955&text&type=phone_number&app_absent=0" className="text-white/80 hover:text-white transition">
                  24/7 WhatsApp
                </Link>
              </li>
              <li>
                <a href="mailto:support@hostnin.com" className="text-white/80 hover:text-white transition">
                  24/7 Email
                </a>
              </li>
              <li>
                <Link href="https://my.hostnin.com/submitticket.php" className="text-white/80 hover:text-white transition">
                  Open Ticket
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/terms-conditions" className="text-white/80 hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-white/80 hover:text-white transition">
                  Affiliate
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-white transition flex items-center justify-start sm:justify-start">
                  Careers <span className="text-yellow-400 ml-1">(Hiring)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo + Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-5">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <Image
              src={logo}
              alt="Hostnin Logo"
              width={230}
              height={60}
              className="object-contain w-[140px] sm:w-[200px] md:w-[230px] h-[35px] sm:h-[50px] md:h-[60px]"
            />
          </div>

          {/* Social */}
          <div className="flex space-x-4 text-2xl sm:text-3xl">
            <Link href="https://www.facebook.com/hostninweb/" target="_blank" className="transition transform hover:scale-125 hover:text-blue-600">
              <FaFacebook />
            </Link>
            <Link href="https://www.linkedin.com/company/hostnin/?originalSubdomain=bd" target="_blank" className="transition transform hover:scale-125 hover:text-blue-500">
              <FaLinkedin />
            </Link>
            <Link href="https://www.youtube.com/@hostnin/null" target="_blank" className="transition transform hover:scale-125 hover:text-red-600">
              <FaYoutube />
            </Link>
            <Link href="https://www.instagram.com/hostninbd/" target="_blank" className="transition transform hover:scale-125 hover:text-pink-500">
              <AiFillInstagram />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-4 pt-4">
          <span className="text-center sm:text-left text-white/90">
            © 2025 Hostnin. All Rights Reserved
          </span>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span className="text-blue-600">|</span>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
            <span className="text-blue-600">|</span>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
