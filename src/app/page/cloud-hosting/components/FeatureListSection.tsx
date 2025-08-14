import React from "react";
import { FaCheck } from "react-icons/fa";

const features = [
  [
    "Easy Control Panel",
    "100% Server Uptime",
    "1 Hour Response Time",
    "24/7 Technical Support",
    "Clustered Failover DNS",
    "1TB+ DDOS Protection",
  ],
  [
    "CMS Script Installer",
    "Malware & Exploit Scanning",
    "Advanced CDN FREE",
    "Edge Caching System",
    "ASP.NET Access Hosting",
    "Unlimited Auto Responders",
  ],
  [
    "Spam Protection",
    "SSH Access Available",
    "Latest PHP Extensions",
    "ionCube PHP Loader",
    "Temporary Domain",
    "Junk Mail Filters",
  ],
  [
    "Git Version Control",
    "Cloud Based Server",
    "Latest Configuration",
    "10GB Mailbox Storage",
    "Unlimited SFTP Users",
    "45+ Web Optimization Tools",
  ],
];

const FeatureListSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] pb-12 pt-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold text-center text-black mb-3 sm:mb-4 font-['Urbanist',sans-serif]">
          Cloud Hosting all Plans
          <br />
          <span className="block">Include Features</span>
        </h2>

        <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-start sm:justify-items-center">
          {features.map((column, colIdx) => (
            <ul key={colIdx} className="space-y-2 sm:space-y-3 md:space-y-4">
              {column.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm sm:text-base text-black"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mr-2">
                    <FaCheck className="w-2 h-2 text-white" />
                  </div>
                  <span className="font-semibold text-base sm:text-sm md:text-base font-['Urbanist',sans-serif]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection;
