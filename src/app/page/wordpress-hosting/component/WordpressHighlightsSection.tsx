"use client";
import React from "react";
import Image from "next/image";

const highlights = [
  {
    title: "Autoscaling WordPress Hosting",
    description:
      "The power of our WordPress network as a whole, not just one machine. Our patented cloud-based auto-scaling technology will automatically add more resources whenever more space is needed.",
    icon: "https://hostnin.com/wp-content/uploads/2022/07/settings-icon.svg",
    sideIcon: "https://hostnin.com/wp-content/uploads/2022/07/settings-icon.svg",
  },
  {
    title: "WordPress dev tools",
    description:
      "Advanced users can take advantage of features such as one-click installation that give them access to WP-CLI, SSH access, SFTP/FTP, PHP version control, phpMyAdmin, PHP configuration, and scheduled scripts.",
    icon: "https://hostnin.com/wp-content/uploads/2022/07/click-icon.svg",
    sideIcon: "https://hostnin.com/wp-content/uploads/2022/07/click-icon.svg",
  },
  {
    title: "Built for maximum speed",
    description:
      "The fastest WordPress hosting around. 100% solid-state drive (SSD) storage, HTTP/2, Google-based DNS, NGINX edge cache engine, no LVE limits, proprietary PHP optimization, and more are all features offered by this storage solution.",
    icon: "https://hostnin.com/wp-content/uploads/2022/07/backup-icon.svg",
    sideIcon: "https://hostnin.com/wp-content/uploads/2022/07/backup-icon.svg",
  },
  {
    title: "Blazing-fast WordPress Hosting",
    description:
      "When cPanel is in charge, WordPress sites can only be on one server. When you use a cPanel host, if you share a server with a busy site, it will slow down the time it takes for your site to load. This doesn&apos;t occur with managed plans. We&apos;re the best WordPress host because of this.",
    icon: "https://hostnin.com/wp-content/uploads/2022/07/cloud-icon.svg",
    sideIcon: "https://hostnin.com/wp-content/uploads/2022/07/cloud-icon.svg",
  },
  {
    title: "Ultra-secure hosting",
    description:
      "Suspicious theme and plugin code alerts, PCI compliant hosting, malware scanning, 1 Tbps+ DDoS protection, a web application firewall, brute force login protection, an FTP security lock, and 2FA are all included with all of our WordPress Web Hosting plans.",
    icon: "https://hostnin.com/wp-content/uploads/2022/07/protect-icon.svg",
    sideIcon: "https://hostnin.com/wp-content/uploads/2022/07/protect-icon.svg",
  },
  {
    title: "24/7 Expert Support",
    description:
      "Our expert support team is passionate about WordPress and is available 24 hours a day, 7 days a week. This shows in our amazing reviews and perfect Trustpilot score. Receive assistance with any WordPress-related issues caused by the server or hosting provider.",
    icon: "https://hostnin.com/wp-content/uploads/2022/07/server-icon.svg",
    sideIcon: "https://hostnin.com/wp-content/uploads/2022/07/server-icon.svg",
  },
];

const WordpressHighlightsSection = () => {
  return (
    <section className="w-full bg-[#fafbfc] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#03206B] mb-2">
              Managed WordPress Hosting Highlights
            </h2>
          </div>
          <div className="text-gray-500 max-w-2xl text-base font-normal">
            Keep your attention on running your company, and don&apos;t bother yourself with the intricacies of web hosting. Superior speed, uptime, and support are the hallmarks of our managed hosting.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col min-h-[260px] relative overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl shadow-sm relative">
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={32}
                    height={32}
                    priority={idx < 3} // prioritize first few images
                  />
                ) : (
                  <span>Icon</span>
                )}
              </div>

              {item.sideIcon && (
                <div className="absolute top-1 right-6 w-28 h-24 opacity-20 pointer-events-none select-none">
                  <Image
                    src={item.sideIcon}
                    alt={`${item.title} side icon`}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={idx < 3}
                  />
                </div>
              )}

              <h3 className="text-2xl md:text-[22px] font-bold text-[#03206B] mb-2 font-['Urbanist',sans-serif]">{item.title}</h3>
              <p className="text-gray-600 text-[15px] md:text-base font-normal font-['Mulish',sans-serif]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordpressHighlightsSection;
