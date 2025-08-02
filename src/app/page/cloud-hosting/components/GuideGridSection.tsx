"use client";

import React from "react";
import Image from "next/image";

const guides = [
  {
    image: "https://hostnin.com/wp-content/uploads/2023/08/Green-Minimalist-Tips-Gradient-Blog-Banner.png",
    category: "Cloud Hosting Guide",
    title: "কিভাবে টেম্পোরারি লিংক থেকে লাইভ করবেন?",
    link: "#",
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2023/08/Green-Minimalist-Tips-Gradient-Blog-Banner-3.png",
    category: "Cloud Hosting Guide",
    title: "কিভাবে ক্লাউড প্যানেলে লগিন করবেন?",
    link: "#",
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2023/08/Green-Minimalist-Tips-Gradient-Blog-Banner-6.png",
    category: "Cloud Hosting Guide",
    title: "কিভাবে এডঅন ডোমেইন সেটআপ করবেন",
    link: "#",
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2023/10/Green-Minimalist-Tips-Gradient-Blog-Banner-1.png",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড প্যাকেজে কোটেশন: কিভাবে আপগ্রেড করবেন",
    link: "#",
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2023/10/outlook-mail-setup.png",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড মেইলবক্স Outlook এ কানেক্ট করবেন",
    link: "#",
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2023/10/subdomain-create.png",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড হোস্টিংয়ে সাবডোমেইন তৈরি করবেন যেভাবে",
    link: "#",
  },
];

const GuideGridSection = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
          Comprehensive Guides: a Full Roadmap
        </h2>
        <p className="text-center text-gray-500 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base px-3 sm:px-4">
          Our detailed guides are ready with your journey, whenever you need them: just search.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
            >
              <div className="relative w-full h-32 sm:h-36 lg:h-40">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover object-center rounded-t-xl"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-1">
                <span className="text-xs text-orange-500 font-medium mb-1 sm:mb-2">
                  ● {guide.category}
                </span>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 leading-snug">
                  {guide.title}
                </h3>
                <a
                  href={guide.link}
                  className="mt-auto text-xs sm:text-sm text-gray-700 font-medium hover:text-orange-500 hover:underline flex items-center gap-1 transition-colors duration-200"
                >
                  বিস্তারিত পড়ুন <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
