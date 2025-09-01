import Link from 'next/link';
import React from 'react';

const AffiliateProgram = () => {
  return (
    <div className='bg-[#f8f8f8] py-4'>
      <div className="max-w-7xl mx-auto my-10 px-6 mx:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-950 text-white rounded-2xl shadow-xl p-8 md:p-16">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-5xl font-bold">
            Sign Up For 50% commission per sale!
          </h2>
          
        </div>

        {/* Right Button */}
        <div className="mt-6 md:mt-0">
          <Link href="https://my.hostnin.com/affiliates.php" className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-semibold px-6 md:px-10 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out text-lg md:font-bold cursor-pointer">
            Join Now
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AffiliateProgram;
