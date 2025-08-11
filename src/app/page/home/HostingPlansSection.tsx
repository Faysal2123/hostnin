import React from 'react';
import { hostingPlans } from './data/hostingPlans';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HostingPlansSection() {
  const router = useRouter();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Select Your Perfect Hosting Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hostingPlans.map((plan) => (
            <div
              key={plan.title}
              className="group relative bg-gray-100 border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 p-8 flex flex-col items-center text-center hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 hover:text-white"
            >
              {plan.badge && plan.badge.type !== 'none' && (
                <div
                  className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                    plan.badge.type === 'popular'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {plan.badge.text}
                </div>
              )}
              {plan.icon && (
                <Image
                  src={plan.icon}
                  width={48}
                  height={48}
                  alt={`${plan.title} icon`}
                  className="mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-white transition-colors duration-200">{plan.title}</h3>
              <p className="mb-6 group-hover:text-white transition-colors duration-200">{plan.description}</p>
              <div className="flex items-baseline justify-center space-x-2 mb-8">
                <span className="text-xl font-bold group-hover:text-white transition-colors duration-200">৳{plan.price}</span>
                <span className="text-base group-hover:text-white transition-colors duration-200">{plan.duration}</span>
              </div>
              <button
                onClick={() => router.push(`/page/${plan.title.toLowerCase().replace(/\s+/g, '-')}`)}
                className="w-full max-w-xs border border-blue-100 text-blue-600 bg-white py-2 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-blue-900 group-hover:text-white group-hover:border-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                {plan.buttonText}
                <span aria-hidden className="ml-1 group-hover:text-white transition-colors duration-200">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
