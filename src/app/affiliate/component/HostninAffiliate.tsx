import Image from 'next/image';
import React from 'react';
import img from "../../assets/man-attending-online-meeting.png"
import Link from 'next/link';

const HostninAffiliate = () => {
  return (
    <section className="bg-[#f8f8f8] py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl  overflow-hidden md:flex">
          
          {/* Left Content Section */}
          <div className="md:w-1/2 p-8 sm:p-12 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              Become a Hostnin Affiliate in just a few easy steps
            </h1>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="ml-5">
                  <h2 className="text-xl font-semibold text-gray-900">Sign up for free</h2>
                  <p className="mt-2 text-gray-600">Approval is fast and simple, no hassle.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="ml-5">
                  <h2 className="text-xl font-semibold text-gray-900">Promote Bluehost</h2>
                  <p className="mt-2 text-gray-600">Use our ready-made banners and tools to promote effectively.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="ml-5">
                  <h2 className="text-xl font-semibold text-gray-900">Get paid 50% per sale</h2>
                  <p className="mt-2 text-gray-600">Earn competitive commissions on every qualified sale.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link href="https://my.hostnin.com/affiliates.php" className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Join Now
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 bg-gradient-to-tr  flex items-center justify-center p-8">
            <div className="relative w-full h-80 md:h-full">
              <Image
                src={img} // Replace with your actual image
                alt="Bluehost Affiliate Program"
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HostninAffiliate;
