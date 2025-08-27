import React from "react";
import { FaLock,  FaCloudUploadAlt, FaPhp, FaFolderOpen, FaCloud, FaShieldAlt, FaShieldVirus, FaTachometerAlt } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";


const features = [
  {
    icon: <FaCloud size={28} className="text-[#2250fc]" />,
    title: "LiteSpeed Technology",
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
    icon: <FaCloudArrowDown size={28} className="text-[#2250fc]" />,
    title: "Easy Backup/Restoration",
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
    icon: <FaShieldAlt size={28} className="text-[#2250fc]" />, 
    title:"Fully Protected Environment"
  },
  {
    icon: <FaShieldVirus size={28} className="text-[#2250fc]" />,
    title:"Virus & Malware Scanner" 
  },
  {
    icon: <FaTachometerAlt size={28} className="text-[#2250fc]" />, 
    title: "Autoscaling Cloud Technology",
  },
];

const PlanIncludesSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-5 pb-10">
      <div className="max-w-7xl mx-auto md:px-4 px-3">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-[#03206B] mb-5 md:mb-14 tracking-tight font-['Urbanist',sans-serif]">
          All WordPress Hosting Plans Include
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-4  md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-sm shadow-lg px-2 py-4 md:px-8 md:py-6 w-full max-w-sm sm:max-w-none mx-auto gap-3 xs:gap-4 hover:shadow-xl hover:scale-105  transition-all duration-200"
            >
              <span className="flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 rounded-full ">
                {feature.icon}
              </span>
              <span className="font-bold text-base md:text-lg lg:text-xl text-[#03206B] text-left font-['Urbanist',sans-serif]">
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