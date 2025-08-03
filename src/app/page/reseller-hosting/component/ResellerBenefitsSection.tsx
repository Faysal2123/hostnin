import React from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Low Number of Clients per Server",
    description:
      "We believe in quality, not quantity. Maintaining low numbers of clients per server makes a website more powerful and fastest. All the sites can get a better share of resources, bandwidth and more advanced features. For this, your websites are fully loaded with cutting-edge resources.",
  },
  {
    title: "24x7 Technical Support",
    description:
      "Developing a business is hard, but with our always-on support system, it's getting easier than you think. Working at midnight or dawn and worried about proper support? You shouldn't be. Our expert support members are always available for your need.",
  },
  {
    title: "Most Advanced SSD/NVMe Servers",
    description:
      "We use the latest server hardware with the most advanced technology to run websites without hassle. For this reason, we're the only one providing the best quality hosting at affordable prices. Get your website online with our advanced technology and run your business like a pro.",
  },
];

const ResellerBenefitsSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-8 sm:py-12 md:py-16 pt-[1090px] sm:pt-[250px] md:pt-[300px] lg:pt-[400px] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
        {/* Left: Heading and left card */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#001858] mb-3 sm:mb-4 leading-tight">
            We Offers massive benefits with<br className="hidden sm:block" />our reseller hosting plans!
          </h2>
          <p className="text-[#6b7280] text-base sm:text-lg mb-4 sm:mb-10 max-w-xl text-justify">
            Let your dreams become a reality with the most advanced tailored hosting. Traditional shared hosting is buggy, slow, and way more, but we&apos;re not. Our advanced technology makes your website fast and secure with no downtime.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 pb-8 w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center gap-4 sm:gap-6 mb-3">
              <div className="flex-shrink-0">
                <Image
                  src="https://hostnin.com/wp-content/uploads/2022/07/happy-client.svg"
                  alt="Low Number of Clients per Server"
                  width={120}
                  height={120}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#001858]">{benefits[0].title}</h3>
            </div>
            <p className="text-[#6b7280] text-sm sm:text-base w-full text-justify">{benefits[0].description}</p>
          </div>
        </div>
        {/* Right: Two stacked cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center gap-4 sm:gap-6 mb-3">
              <div className="flex-shrink-0">
                <Image
                  src="https://hostnin.com/wp-content/uploads/2022/07/support.svg"
                  alt="24x7 Technical Support"
                  width={120}
                  height={120}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#001858]">{benefits[1].title}</h3>
            </div>
            <p className="text-[#6b7280] text-sm sm:text-base w-full text-justify">{benefits[1].description}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center gap-4 sm:gap-6 mb-3 ">
              <div className="flex-shrink-0">
                <Image
                  src="https://hostnin.com/wp-content/uploads/2022/07/ssd-storage.svg"
                  alt="Most Advanced SSD/NVMe Servers"
                  width={120}
                  height={120}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#001858]">{benefits[2].title}</h3>
            </div>
            <p className="text-[#6b7280] text-sm sm:text-base w-full text-justify">{benefits[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerBenefitsSection;