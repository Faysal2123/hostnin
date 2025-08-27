import Image from 'next/image';
import { HiPhone } from 'react-icons/hi'; // Using react-icons

const ContactSalesSection = () => {
  return (
    <div className='bg-[#f8f8f8]'>
      <section className="w-full flex justify-center items-center py-12 px-4 bg-transparent">
        <div className="w-full max-w-7xl rounded-lg bg-[#001B8A] flex flex-col md:flex-row items-center justify-between p-5 px-10 shadow-lg">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center text-white mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6" style={{ fontFamily: '"Urbanist", sans-serif' }}>Need Some Help?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ fontFamily: '"Mulish", sans-serif' }}>
              Contact one of our friendly technical advisors now. Our team is available 24×7 via live chat and is ready to answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6" target="_blank" rel="noopener noreferrer">
                <button className="hover:scale-105 bg-gradient-to-r from-[#009FFF] to-[#0057FF] text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-transform" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                  Live Chat With Sales
                </button>
              </a>
              <div className="flex items-center gap-3 mt-4 sm:mt-0 hover:scale-105">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#001B8A] text-2xl shadow-md">
                  <HiPhone className="w-7 h-7" />
                </span>
                <span className="text-lg md:text-xl font-bold text-white select-all  transition-transform" style={{ fontFamily: '"Urbanist", sans-serif' }}>+880 1325-875955</span>
              </div>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/07/building.png"
              alt="Contact Sales Illustration"
              height={350}
              width={350}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSalesSection;
