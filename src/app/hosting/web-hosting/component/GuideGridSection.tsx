"use client";
import React from "react";
import Image from "next/image";

const guides = [
  {
    image: "/assets/temp-link.webp", // Ensure this path is correct and public
    category: "Cloud Hosting Guide",
    title: "কিভাবে টেম্পোরারি লিংক থেকে লাইভ করবেন?",
    link: "#",
  },
  {
    image: "/assets/cloud-panel-login.webp",
    category: "Cloud Hosting Guide",
    title: "কিভাবে ক্লাউড প্যানেলে লগিন করবেন?",
    link: "#",
  },
  {
    image: "/assets/addon-domain.webp",
    category: "Cloud Hosting Guide",
    title: "কিভাবে এডঅন ডোমেইন সেটআপ করবেন",
    link: "#",
  },
  {
    image: "/assets/cloud-package.webp",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড প্যাকেজে কোটেশন: কিভাবে আপগ্রেড করবেন",
    link: "#",
  },
  {
    image: "/assets/cloud-mail-outlook.webp",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড মেইলবক্স Outlook এ কানেক্ট করবেন",
    link: "#",
  },
  {
    image: "/assets/cloud-subdomain.webp",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড হোস্টিংয়ে সাবডোমেইন তৈরি করবেন যেভাবে",
    link: "#",
  },
];

const GuideGridSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
          Comprehensive Guides: a Full Roadmap
        </h2>
        <p className="text-center text-gray-500 mb-6 sm:mb-10 text-sm sm:text-base max-w-2xl mx-auto">
          Our detailed guides are ready with your journey, whenever you need them: just search.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-32 sm:h-40 w-full rounded-t-xl overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 3} // prioritize first 3 images
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <span className="text-xs text-orange-500 font-medium mb-2">
                  ● {guide.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold mb-3 leading-snug">
                  {guide.title}
                </h3>
                <a
                  href={guide.link}
                  className="mt-auto text-xs sm:text-sm text-gray-700 font-medium hover:underline flex items-center gap-1"
                >
                  বিস্তারিত পড়ুন <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideGridSection;
