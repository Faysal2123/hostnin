"use client";
import React, { useState } from "react";

type TabId = "performance" | "security" | "management";

interface Feature {
  title: string;
  description: string;
}

interface TabContent {
  title: string;
  subtitle: string;
  features: Feature[];
  image: string;
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
      subtitle:
        "Build, manage, and scale your websites with the world’s most trusted control panel.",
      image: "https://hostnin.com/wp-content/uploads/2023/08/laptop-server.png",
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
        {
          title: "Advanced Security Tools",
          description:
            "Built-in SSL, password-protected directories, and easy backup tools to keep your site safe.",
        },
      ],
    },
    security: {
      title: "Easy Website Management with Webuzo",
      subtitle: "A lightweight, modern control panel built for simplicity and speed.",
      image: "https://hostnin.com/wp-content/uploads/2023/07/hostim-img-7.png",
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
        {
          title: "Built-in Security & Backups",
          description:
            "One-click SSL certificates, automatic backups, and firewall tools included.",
        },
      ],
    },
    management: {
      title: "Easy Website Management with StackCP",
      subtitle:
        "Manage your hosting with StackCP next-gen control panel, built for performance and teamwork.",
      image: "https://hostnin.com/wp-content/uploads/2023/06/hsotim-img.png",
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
          title: "Team & Client Collaboration",
          description:
            "Grant controlled access to developers or clients without sharing your main login.",
        },
        {
          title: "Performance & Security Built-In",
          description:
            "Free SSL, CDN integration, malware scanning, and intelligent resource scaling.",
        },
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#13205A] mb-4">
        User-Friendly Control Panel
      </h2>
      <p className="text-center text-[#222] mb-12 text-lg">
        Purchase web hosting from the best web hosting company in Bangladesh.
      </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-4 sm:px-6 m-1 text-sm sm:text-2xl font-medium transition-colors duration-200 rounded ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
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
          <div className="lg:w-1/2 lg:pr-8 space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {currentContent.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              {currentContent.subtitle}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {currentContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-lg bg-gray-50 border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex items-center justify-center">
            <div className="w-full max-w-full sm:max-w-lg h-auto rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={currentContent.image}
                alt={currentContent.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanelSection;
