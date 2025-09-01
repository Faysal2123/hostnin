import React from 'react';
import { FaHeadset, FaCogs, FaChartBar, FaShieldAlt, FaHdd, FaFireAlt, FaPython, FaClock } from 'react-icons/fa';

const features = [
  {
    title: '24x7 Pro Support',
    description: 'Having support is crucial for bdix, so we make sure to provide you with the quick support you need.',
    icon: (
      <FaHeadset className="text-[#1a40c6]" size={40} />
    ),
  },
  {
    title: 'All Managed Includes',
    description: 'More options means more control of your hosting, we provides almost every option to manage.',
    icon: (
      <FaCogs className="text-[#1a40c6]" size={40} />
    ),
  },
  {
    title: 'Awstats & Webalizer',
    description: 'AWStats is a powerful and feature-rich tool that generates advanced web statistics graphically.',
    icon: (
      <FaChartBar className="text-[#1a40c6]" size={40} />
    ),
  },
  {
    title: 'Anti-Virus Protection',
    description: 'To protect the websites you host, we use advanced antivirus protection, which prevents all kinds of malware.',
    icon: (
      <FaShieldAlt className="text-[#1a40c6]" size={40} />
    ),
  },
  {
    title: 'Lightning-Fast Storage',
    description: 'Website speed is an important ranking signal for both Google and the user experience.',
    icon: (
      <FaHdd className="text-[#1a40c6]" size={40} />
    ),
  },
  {
    title: 'Next-gen Firewalls',
    description: 'The ability to manage and filter traffic by country is one of the most-requested features of cPanel servers.',
    icon: (
      <FaFireAlt className="text-[#1a40c6]" size={40} />
    ),
  },
  {
    title: 'Ruby, Python, NodeJS',
    description: 'We provide Ruby, Python, and Node.js features with our bdix plans so users can use them.',
    icon: (
      <FaPython className="text-[#1a40c6]" size={40} />
    ),
  },
  {
    title: '99.9% Server Uptime',
    description: 'With our enterprise grade datacenter, we ensures almost 100% uptime to keep your websites always online.',
    icon: (
      <FaClock className="text-[#1a40c6]" size={40} />
    ),
  },
];

const BDIXFeaturesSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 sm:py-20 lg:py-14 bg-[#f8f8f8] px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-black mb-4 text-start">BDIX Hosting Features</h2>
        <p className="text-[#232946] text-base mb-5 text-start max-w-2xl">
          Our BDIX hosting offers essential features for easier use and faster response times for your website.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-xl  hover:scale-110 transition-all duration-300 min-h-[200px] py-12"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-[#232946] font-['Urbanist',sans-serif]">{feature.title}</h3>
              <p className="text-[#6b7280] text-base font-['Mulish',sans-serif]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDIXFeaturesSection; 