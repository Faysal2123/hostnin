"use client"
import Link from 'next/link';


const NewsletterSection = () => {
 

  return (
    <div className="bg-gray-50">
      <section
        className="w-full py-12 sm:py-10 flex flex-col items-center relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6"
        style={{
          backgroundImage: `url('https://hostnin.com/wp-content/uploads/2022/09/16252080_rm378-02-scaled.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 z-10 relative leading-snug">
          Try Hostnin Risk-Free for 30 Days
        </h2>

        <p className="text-white text-center mb-8 z-10 relative text-lg sm:text-xl">
          30 Days to Decide. Full Refund Guaranteed.
        </p>

        <div className='flex flex-col items-center'>
          <a
            href="/hosting/web-hosting"
            className="w-full sm:w-auto px-12 py-4  
            bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
            hover:from-blue-600 hover:via-blue-700 hover:to-blue-800
            text-white font-bold text-lg rounded-lg 
            shadow-lg shadow-blue-500/30
            transition-all duration-300 ease-in-out cursor-pointer"
          >
           Get the Offer
          </a>
          <Link href="https://api.whatsapp.com/send/?phone=8801325875955&text&type=phone_number&app_absent=0" className='text-yellow-500 pt-4 font-bold text-base md:text-lg hover:text-yellow-700'> Chat With an Expert</Link>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
