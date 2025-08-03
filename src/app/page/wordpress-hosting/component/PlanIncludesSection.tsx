import React from "react";
import { FaLock,FaTachometerAlt,  FaCloudUploadAlt, FaDatabase,FaCrosshairs, FaFingerprint, FaPhp, FaDumpsterFire, FaFolderOpen } from "react-icons/fa";


const features = [
  {
    icon: <FaFingerprint size={28} className="text-[#2250fc]" />,
    title: "Access Management",
  },
  {
    icon: <FaPhp size={28} className="text-[#2250fc]" />,
    title: "PHP Version Control",
  },
  {
    icon: <FaLock size={28} className="text-[#2250fc]" />, 
    title: "Free SSL Certificate",
  },
  {
    icon: <FaDumpsterFire size={28} className="text-[#2250fc]" />,
    title: "eCommerce Optimization",
  },
  {
    icon: <FaCloudUploadAlt size={28} className="text-[#2250fc]" />, 
    title: "Free Site Migration",
  },
  {
    icon: <FaFolderOpen size={28} className="text-[#2250fc]" />, 
    title: "Daily Regular Backups",
  },
  {
    icon: <FaDatabase size={28} className="text-[#2250fc]" />, 
    title:"DDoS Protection"
  },
  {
    icon: <FaCrosshairs size={28} className="text-[#2250fc]" />,
    title:"Auto Stagging System," 
  },
  {
    icon: <FaTachometerAlt size={28} className="text-[#2250fc]" />, 
    title: "Autoscaling Cloud Technology",
  },
];

const PlanIncludesSection = () => {
  return (
    <section className="w-full bg-[#fafbfc] md:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-[#03206B] mb-14 tracking-tight">
          All WordPress Hosting Plans Include
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ga">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-sm shadow-lg px-6 py-5 md:w-[400px]  mx-auto gap-4 hover:shadow-xl hover:scale-105 transition-all duration-200 w-[380px]"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white ">
                {feature.icon}
              </span>
              <span className="font-bold text-lg md:text-xl text-[#03206B] text-left font-['Urbanist',sans-serif]">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanIncludesSection; 