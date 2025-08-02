"use client";

import Image from "next/image";


const features = [
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/upljoads/2022/09/pointer.svg"
        alt="Pointer Icon"
        width={40}
        height={40}
      />
    ),
    title: "Easy of Used",
    description:
      "Easy to navigate control panel, everything is super smooth. Create your website in a minute. Thanks to our advanced web builder software that comes with Cpanel as built in feature.",
  },
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/09/database.svg"
        alt="Database Icon"
        width={40}
        height={40}
      />
    ),
    title: "Powerful Hosting",
    description:
      "Based on High config server, Imunify360 features an excellent anti malware that includes a comprehensive collection of “deny” policy rules that block all attacks. Stay safe and secure with our security tools.",
  },
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/09/wp.svg"
        alt="WordPress Icon"
        width={40}
        height={40}
      />
    ),
    title: "WordPress Optimized",
    description:
      "Get ahead with out wordpress optimized hosting panel. There are 380+ prebuilt apps. with our softaculous system, you can install any CMS with few clicks including wordpress, prestashop and more. By Softaculous, you can also manage your websites from one place.",
  },
];

const ControlPanelSection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#13205A] mb-4">
        User-Friendly Control Panel
      </h2>
      <p className="text-center text-[#222] mb-12">
        Purchase web hosting from the best web hosting company in Bangladesh.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
        {/* Left: Features */}
        <div className="flex-1 flex flex-col gap-10 max-w-xl">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start text-start gap-3">
              <div className="shrink-0 mb-2">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-black ">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-base">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Right: Laptop Image */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-4xl relative flex items-center justify-center">
            {/* Background image behind the laptop image */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl pointer-events-none"
              style={{
                backgroundImage: "url('https://hostnin.com/wp-content/uploads/2024/02/contact-bg-right.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: 750,
                height: 750,
                opacity: 0.5,
                zIndex: 1,
              }}
            />
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/12/mockupfinale.png.webp"
              alt="Cpanel Control Panel"
              className="rounded-xl object-contain w-full h-auto z-10"
              height={520}
              width={800}
            />
          </div>
          <p className="text-center text-gray-500 text-base">Cpanel Control Panel</p>
        </div>
      </div>
    </section>
  );
};

export default ControlPanelSection;
