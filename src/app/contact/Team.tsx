import React from 'react';
import Image from 'next/image';
import img1 from "../assets/team/img1.webp";
import img2 from "../assets/team/img2.png";
import img3 from "../assets/team/img3.jpg";    
import img4 from "../assets/team/img4.webp";

import img6 from "../assets/team/img6.jpg";
import img7 from "../assets/team/img-7.jpg";
import img8 from "../assets/team/img-8.jpg";
import img9 from "../assets/team/img9.jpg";

const Team = () => {
  const images = [img1, img2, img3, img4,img6, img7, img8, img9];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 pt-28 hidden lg:block">
     
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Team</h2>
     
      <p className="text-center text-gray-600 mb-8 text-base">
        Meet the amazing people who make everything possible.
      </p>

      {/* গ্রিড সিস্টেম */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg relative w-full ${
              index % 2 === 0 ? "lg:row-span-2 h-96" : "lg:row-span-1 h-48"
            }`}
          >
            <Image
              src={img}
              alt={`Team member ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
