import { useState, useEffect } from "react";
import Image from "next/image";

import Imran from "../assets/support/1.png";
import Asad from "../assets/support/2.png";
import Rafy from "../assets/support/4.png";
import Sajjad from "../assets/support/3.png";
import DavidImage from "../assets/support/5.png";
import Tareq from "../assets/support/6.png";

const TeamSupportSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    { id: 1, name: "Imran", role: "Hostnin Support", image: Imran },
    { id: 2, name: "Asad", role: "Hostnin Support", image: Asad },
    { id: 3, name: "Rafy", role: "Hostnin Support", image: Rafy },
    { id: 4, name: "Sajjad", role: "Hostnin Support", image: Sajjad },
    { id: 5, name: "Mujahid", role: "Hostnin Support", image: DavidImage },
    { id: 6, name: "Tareq", role: "Hostnin Support", image: Tareq },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="bg-[#f8f8f8] px-4 sm:px-6 md:px-0 py-10 pb-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-snug">
            24/7 Instant Expert Support by an Outstanding Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our smart AI Assistant helps you fix issues quickly, but if you ever need extra care, our human experts are just a message away.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className="flex-shrink-0 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-12 p-6 sm:p-10 bg-gradient-to-r from-gray-50 via-white to-gray-50">
                    {/* Image */}
                    <div className="flex justify-center">
                      <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 hover:scale-105 transition-transform duration-500">
                        {/* Gradient Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-2.5">
                          {/* White inner border */}
                          <div className="w-full h-full p-1.5 rounded-full bg-white flex items-center justify-center">
                            {/* Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden ">
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-center md:text-left px-2">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4 sm:mb-6">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Dedicated support professional ensuring{" "}
                        <span className="font-medium text-gray-900">
                          fast responses
                        </span>
                        ,{" "}
                        <span className="font-medium text-gray-900">
                          friendly communication
                        </span>
                        , and{" "}
                        <span className="font-medium text-gray-900">
                          effective solutions
                        </span>{" "}
                        for all your hosting needs.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-blue-50 focus:outline-none transition cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:bg-blue-50 focus:outline-none transition cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 sm:mt-10 space-x-2 sm:space-x-4">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all cursor-pointer ${
                  currentSlide === index
                    ? "bg-blue-600 scale-125 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSupportSection;
