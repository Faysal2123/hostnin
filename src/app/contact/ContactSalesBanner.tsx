import React from "react";

const ContactSalesBanner = () => {
  return (
    <section className="w-full flex justify-center bg-transparent py-8 pt-[480px] lg:pt-10">
      <div className="relative w-full max-w-7xl md:rounded-2xl bg-gradient-to-r from-[#00146b] to-[#0026b3] px-8 py-10 flex flex-col items-center shadow-xl overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-900/30 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="absolute top-6 right-12 grid grid-cols-4 gap-1 opacity-40 pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-200 rounded-full" />
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-['Urbanist',sans-serif]">
            Do You Have Questions?
          </h2>
          <h2 className="text-white text-lg md:text-3xl lg:text-4xl font-bold mb-8 font-['Urbanist',sans-serif]">
            About Our Hosting and Domain Service
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6" 
              
              rel="noopener noreferrer"
              className="bg-[#0066FF] hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors text-base flex items-center justify-center hover:scale-105"
            >
              Live Chat With Sales
            </a>
            <span className="flex items-center gap-2 bg-opacity-10 px-4 py-2 rounded-lg text-white text-base font-medium hover:scale-105 cursor-pointer">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm text-black bg-white bg-opacity-20 ">
                {/* Phone SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="font-bold tracking-wide">01325 875 955</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSalesBanner;