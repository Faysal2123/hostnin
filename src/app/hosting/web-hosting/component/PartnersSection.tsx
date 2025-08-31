import Image from "next/image";
import { partnersData } from "../data/partnersData";

const PartnersSection = () => (
 <div className="bg-[#001143]">
     <section className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 flex flex-col items-center px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-10 md:mb-12">
      Web Hosting Infrastructure <span className="text-[#FFB800]">Partners</span>
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-7xl">
      {partnersData.map((partner) => (
        <div
          key={partner.name}
          className="bg-white rounded-xl flex items-center justify-center h-24 sm:h-28 md:h-32 shadow-md transition-transform hover:scale-105 duration-200 p-2 sm:p-4"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={80}
            className="object-contain max-h-16 sm:max-h-18 md:max-h-20 w-full h-auto"
          />
        </div>
      ))}
    </div>
  </section>
 </div>
);

export default PartnersSection; 