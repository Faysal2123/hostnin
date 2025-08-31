"use client";
import React from "react";
import { hostingPlans } from "./data/hostingPlans";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HostingPlansSection() {
  const router = useRouter();

  return (
    <section id="pricing-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Select Your Perfect Hosting Plan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostingPlans.map((plan) => (
            <div
              key={plan.title}
              className="group relative bg-gray-100 border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all  p-8 flex flex-col items-center text-center"
            >
              {/* Gradient overlay for smooth hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity "></div>

              {/* Badge */}
              {plan.badge && plan.badge.type !== "none" && (
                <div
                  className={`absolute top-4 right-4 z-10 text-xs font-semibold px-3 py-1 rounded-full ${
                    plan.badge.type === "popular"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {plan.badge.text}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                {plan.icon && (
                  <Image
                    src={plan.icon}
                    width={48}
                    height={48}
                    alt={`${plan.title} icon`}
                    className="mb-4"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-3 transition-colors  group-hover:text-white">
                  {plan.title}
                </h3>
                <p className="mb-6 transition-colors  group-hover:text-white">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center space-x-2 mb-8">
                  <span className="text-xl font-bold transition-colors group-hover:text-white">
                    ৳{plan.price}
                  </span>
                  <span className="text-base transition-colors group-hover:text-white">
                    {plan.duration}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() =>
                    router.push(
                      `/hosting/${plan.title.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                  className="w-full max-w-xs cursor-pointer border border-blue-100 text-blue-600 bg-white py-2 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 
                  hover:bg-blue-50 hover:border-blue-400 hover:text-black 
                  group-hover:bg-white group-hover:text-black group-hover:border-white"
                >
                  {plan.buttonText}
                  <span
                    aria-hidden
                    className="ml-1 transition-colors duration-500 delay-100 group-hover:text-black"
                  >
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
