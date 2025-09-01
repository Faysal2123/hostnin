import Image from 'next/image';
import img from "../../assets/laptop-man.webp"
import Link from 'next/link';

export default function AffiliateLanding() {
  return (
    <section className="relative bg-[#f8f8f8] py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60rem] h-[60rem] bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              HOSTNIN AFFILIATE PROGRAM
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 leading-snug">
              Join the Highest Paying <br />
              Hosting Affiliate Program
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl mx-auto lg:mx-0">
              Help us spread the word about the next step in the hosting evolution and earn up to 15000 BDT per sale! Promote the very best in web hosting while enjoying industry-leading commissions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="https://my.hostnin.com/affiliates.php" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1">
                Apply Now
              </Link>
              <Link href="https://my.hostnin.com/index.php/login" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1">
                Log In
              </Link>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="flex-1  justify-center lg:justify-end hidden md:block">
            <div className="relative w-full max-w-md lg:max-w-lg h-80 md:h-96 lg:h-[550px] drop-shadow-2xl">
              <Image
                src={img}
                alt="ScalaHosting Affiliate Benefits"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
