import Image from 'next/image';
import React from 'react';

import TeamImage from '../../assets/team/img1.webp';
import GrowthImage from '../../assets/team/img2.png';
import InspirationImage from '../../assets/team/img-8.jpg';


const JobsSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jobs at <span className="text-blue-600">Hostnin</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Your career is more than just a job description.
            </p>
            <p className="text-lg text-gray-600">
              Our success is built on teamwork, our principles, and the challenge of pursuing individual and collective growth, all fueled by a generous infusion of inspiration.
            </p>
            <p className="text-lg text-gray-600">
              If this sounds like a place where you'd thrive, join our team and help us make online success possible for everyone.
            </p>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                Join our team
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            <div className="relative row-span-2 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={TeamImage}
                alt="Teamwork at Hostinger"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={GrowthImage}
                alt="Growth at Hostinger"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={InspirationImage}
                alt="Inspiration at Hostinger"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
