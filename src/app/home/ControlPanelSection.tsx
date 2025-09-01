"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import img1 from "../assets/cpanelmockup.png";
import img2 from "../assets/webuzumockup.png";
import img3 from "../assets/cloud hosting cPanel.png";

type TabId = "performance" | "security" | "management";

interface Feature {
  title: string;
  description: string;
}

interface TabContent {
  title: string;
  features: Feature[];
  image: StaticImageData;
}

interface Tab {
  id: TabId;
  title: string;
}

const ControlPanelSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("performance");

  const tabs: Tab[] = [
    { id: "performance", title: "cPanel" },
    { id: "security", title: "Webuzo" },
    { id: "management", title: "StackCP" },
  ];

  const tabContent: Record<TabId, TabContent> = {
    performance: {
      title: "Easy Website Management with cPanel",
      image: img1,
      features: [
        {
          title: "1-Click App Installer (Softaculous)",
          description:
            "Install WordPress, Joomla, Magento, or over 400+ apps in just one click.",
        },
        {
          title: "Powerful File & Database Management",
          description:
            "Manage files with File Manager, and control databases with phpMyAdmin—all from one place.",
        },
        {
          title: "Email & DNS Control",
          description:
            "Create custom email accounts, configure DNS zones, and manage domains with ease.",
        },
      ],
    },
    security: {
      title: "Easy Website Management with Webuzo",
      image: img2,
      features: [
        {
          title: "1-Click Application Deployment",
          description:
            "Launch WordPress, Laravel, Node.js, or 400+ other apps in seconds with Softaculous.",
        },
        {
          title: "Simple, Modern Interface",
          description:
            "Minimal, clutter-free dashboard designed for both beginners and developers.",
        },
        {
          title: "Developer-Friendly Stack",
          description:
            "Easily manage Apache, Nginx, LiteSpeed, MySQL, and PHP versions from the panel.",
        },
      ],
    },
    management: {
      title: "Easy Website Management with StackCP",
      image: img3,
      features: [
        {
          title: "WordPress & CMS Manager",
          description:
            "Install and manage WordPress and other CMSs with ease, including staging & cloning.",
        },
        {
          title: "Cloud-Powered File & Database Tools",
          description:
            "Fast file management and MySQL/MariaDB control, optimized for 20i’s autoscaling cloud.",
        },
        {
          title: "16+ CDN Worldwide",
          description:
            "Accelerate your website with global reach. Our cloud hosting comes with 16+ built-in CDN networks.",
        },
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className=" bg-[#f8f8f8] py-5 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#13205A] mb-4">
          User-Friendly Control Panel
        </h2>
        <p className="text-center text-[#222] mb-6 text-base sm:text-lg">
          Purchase fastest hosting from the best web hosting company in Bangladesh
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-6 sm:mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-3 sm:py-3 sm:px-6 m-1 text-lg sm:text-lg font-bold transition-colors duration-200 rounded ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600 cursor-pointer"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-8">
          {/* Left side - Content */}
          <div className="lg:w-1/2 lg:pr-6 flex flex-col space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {currentContent.title}
            </h1>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {currentContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex items-center justify-center p-1">
            <div className="w-full md:h-full rounded-lg overflow-hidden flex items-center justify-center min-h-[140px] sm:min-h-[350px]">
              <Image
                src={currentContent.image}
                alt={currentContent.title}
                className="w-full h-full object-contain rounded-lg"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanelSection;
