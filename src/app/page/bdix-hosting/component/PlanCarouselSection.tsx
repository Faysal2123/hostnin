"use client";
import Slider from "react-slick";
import {
  FaCloud,
  FaServer,
  FaWordpress,
  FaBriefcase,
  FaCheck,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const plans = [
  {
    icon: <FaBriefcase className="text-blue-700 text-3xl mb-2" />,
    title: "Reseller Hosting",
    description:
      "You’ll get more resources for less money with our plans, so you can count on their reliability. It’s easier than you think to start your own business with Hostnin!",
    features: [
      "25GB Pure SSD Disk Space",
      "30 Cpanel Accounts",
      "WHM Control Panel",
      "500GB Bandwidth",
      "Python, Ruby, NodeJS",
    ],
    button: "starting at ৳1599/mo",
  },
  {
    icon: <FaServer className="text-blue-700 text-3xl mb-2" />,
    title: "Web Hosting",
    description:
      "From the File Manager to Advanced Application Management, we are able to take care of all your management needs.",
    features: [
      "2 GB SSD Storage",
      "500GB Bandwidth",
      "3 Website",
      "5 Email Account's",
      "Premium SSL Certificate",
    ],
    button: "starting at ৳149/mo",
  },
  {
    icon: <FaCloud className="text-blue-700 text-3xl mb-2" />,
    title: "Cloud Hosting",
    description:
      "Traditional shared hosting is buggy, slow, and way more, but it's not. Cloud hosting makes your website fast, secure, and up-to-date.",
    features: [
      "512 MB Storage",
      "1 GB Bandwidth",
      "~1 000 Visits Monthly",
      "Unlimited Free SSL",
      "1 Email Account",
    ],
    button: "starting at ৳99/mo",
  },
  {
    icon: <FaWordpress className="text-blue-700 text-3xl mb-2" />,
    title: "WordPress Hosting",
    description:
      "You create your website; we take care of the rest. This is the promise of SSD server flexibility and performance.",
    features: [
      "50 GB SSD Storage",
      "20 MySQL Database",
      "2 Website/Addon",
      "Optimized Control Panel",
      "Easy Backup & Cloud Storage",
    ],
    button: "starting at ৳299/mo",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  initialSlide: 0, // Ensure first slide starts centered
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
  ],
};

export default function PlanCarouselSection() {
  const [current, setCurrent] = useState(0); // Start with the first slide
  const sliderRef = useRef<Slider | null>(null);

  const handleBeforeChange = (_old: number, next: number) => {
    setCurrent(next);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-10 sm:py-16 bg-[#fafbfc] px-1 sm:px-2">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-[22px] sm:text-3xl md:text-4xl font-bold text-center mb-2 text-[#181c32]">
          Are You Looking For Something Else?
        </h2>
        <p className="text-gray-500 text-center mb-6 sm:mb-10 text-base sm:text-lg">
          Get started with your desired plan!
        </p>
        <Slider
          {...settings}
          ref={sliderRef}
          beforeChange={handleBeforeChange}
        >
          {plans.map((plan, idx) => {
            let cardClass =
              "bg-white rounded-2xl flex flex-col items-start px-4 sm:px-8 py-6 sm:py-8 min-h-[320px] sm:min-h-[400px] h-full mx-auto max-w-xs sm:max-w-md border-2 transition-all duration-300";
            if (idx === current) {
              cardClass +=
                " scale-105 sm:scale-110 -translate-y-2 sm:-translate-y-5 shadow-2xl z-10 border-blue-500 shadow-blue-300/70 ring-4 ring-blue-200/30";
            } else {
              cardClass += " shadow-lg border-transparent";
            }
            return (
              <div key={idx} className="px-1 sm:px-2 py-8 sm:py-16 flex justify-center">
                <div className={cardClass}>
                  <div className="mb-2 sm:mb-3">{plan.icon}</div>
                  <h3 className="text-xl md:text-xl font-bold text-[#181c32] mb-1 sm:mb-2 font-['Urbanist',sans-serif]">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] md:text-base mb-2 sm:mb-4 min-h-[32px] sm:min-h-[48px] text-justify font-['Mulish',sans-serif]">
                    {plan.description}
                  </p>
                  <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2 w-full">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm sm:text-sm gap-1 sm:gap-2"
                      >
                        <FaCheck className="text-blue-500" />
                        <span className="text-black font-semibold font-['Mulish',sans-serif]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-2 sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2  transition text-[15px] sm:text-base w-full rounded-full cursor-pointer">
                    {plan.button} <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
