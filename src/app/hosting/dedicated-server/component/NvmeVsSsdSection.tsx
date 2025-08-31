"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NvmeVsSsdSection = () => {
  return (
    <section className="bg-[#f8f8f8] w-full py-5">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-12 items-center justify-center px-4">
        {/* Left Content */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 font-['Urbanist',sans-serif]">Enterprise NVMe vs SSD</h2>
          <p className="text-lg text-gray-600 mb-9 max-w-xl font-['Mulish',sans-serif]">
            Choose an NVMe-based dedicated server and eradicate IO bottlenecks. Your website will load faster, backups will be performed quicker and your server will respond more rapidly. With no moving parts, NVMe is also more reliable, meaning you are far less likely to suffer downtime due to drive failure.
          </p>
          <Link target="_blank" href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6" className="contact-sales-btn min-w-[160px] font-['Urbanist',sans-serif]">Get In Touch</Link>
        </div>
        {/* Right Illustration - Image only */}
        <div className="flex-1 min-w-[320px] flex justify-center">
          <div className="relative w-full max-w-[600px] h-[auto] aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/09/enterprise.png"
              alt="NVMe vs SSD Comparison"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NvmeVsSsdSection;
