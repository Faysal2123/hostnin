'use client';

import React from 'react';
import Image from 'next/image';

const steps = [
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/09/icon-pricing.png"
        alt="Pricing icon"
        width={48}
        height={48}
        className="text-white"
      />
    ),
    title: 'Purchase the perfect plan',
    description: 'Depending on your budget and needs, purchasing the plan is half the battle. Choose what you need and place your order. You may also contact us for custom quotation.',
    bg: '#ec4899', // Tailwind pink-500
    glow: 'rgba(236, 72, 153, 0.18)'
  },
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/09/icon-checkout.png"
        alt="Checkout icon"
        width={48}
        height={48}
        className="text-white"
      />
    ),
    title: 'Get your credentials to enter',
    description: 'After a successful transaction, you will get the login details in your email. By doing this, you can start your email management journey with us.',
    bg: '#facc15', // Tailwind yellow-400
    glow: 'rgba(250, 204, 21, 0.18)'
  },
  {
    icon: (
      <Image
        src="https://hostnin.com/wp-content/uploads/2022/09/icon-email-.png"
        alt="Email icon"
        width={48}
        height={48}
        className="text-white"
      />
    ),
    title: 'Send and Recieve emails',
    description: 'There you go; all the processes are ready for you now. You can send and recieve mails directly to your mailbox. You can also forward the emails to your favorite Gmail interface.',
    bg: '#22d3ee', // Tailwind cyan-400
    glow: 'rgba(34, 211, 238, 0.18)'
  },
];

const OrderingProcessSection = () => {
  return (
    <div className="bg-[#fafbfc] md:pb-10">
      <section className="py-5 md:py-12 px-2 md:px-0 max-w-7xl mx-auto ">
        <div className="text-center mb-8 xs:mb-10">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 xs:mb-4">Ordering a turbo hosting is easier than ever!</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Choose your plan based on features and the detailes offering. Choosing a perfect plan is key to Build good website.
          </p>
        </div>
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between z-10 gap-8 md:gap-x-16" style={{minHeight: 220}}>
          {/* Curved dashed line */}
          <svg
            className="hidden md:block absolute left-0 right-0 mx-auto"
            style={{ top: 92, left: 0, right: 0, width: '100%', height: 120, zIndex: 0 }}
            viewBox="0 0 1000 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M166 100 Q500 10 834 100"
              stroke="#e2e8f0"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,12"
            />
          </svg>
          <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10 md:gap-x-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center mx-0 md:mx-8 mb-12 md:mb-0 flex-1"
                style={{ position: 'relative', zIndex: 2 }}
              >
                {/* Glow + white outline + icon */}
                <div className="relative flex items-center justify-center" style={{ height: 90 }}>
                  {/* Glow */}
                  <span
                    className="absolute"
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      top: 10,
                      left: 0,
                      right: 0,
                      margin: 'auto',
                      background: step.glow,
                      filter: `blur(8px)`,
                      zIndex: 0,
                    }}
                  />
                  {/* White outline */}
                  <span
                    className="absolute"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      top: 9,
                      left: 0,
                      right: 0,
                      margin: 'auto',
                      background: '#fff',
                      zIndex: 1,
                    }}
                  />
                  {/* Main icon */}
                  <div
                    className="flex items-center justify-center rounded-full shadow-xl relative z-10 bg-white"
                    style={{
                      width: 64,
                      height: 64,
                      border: '4px solid #fff',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 text-black mt-2" style={{ fontFamily: '"Urbanist", sans-serif' }}>{step.title}</h3>
                <p className="text-gray-600 max-w-sm text-base md:text-base text-center" style={{ fontFamily: '"Mulish", sans-serif' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderingProcessSection; 