import Image from 'next/image';
import lock from '../../../assets/lock.webp';

const MigrationPromoSection = () => {
  return (
    <section className="flex justify-center items-center bg-[#f8f8f8] pb-6 sm:pb-8 md:py-16 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl w-full max-w-[1300px] px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center">
        {/* Illustration */}
        <div className="flex-[0.6] justify-center lg:justify-start w-full lg:w-[340px] order-2 lg:order-1">
          <Image
            src={lock}
            alt="Migration Illustration"
            width={300}
            height={240}
            className="w-[200px] sm:w-[260px] md:w-[300px] h-auto"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#071952] mb-3 sm:mb-4 leading-snug">
            Migrate Your Site Instantly without any<br className="hidden sm:inline" /> single hour downtime
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0" style={{ fontFamily: '"Mulish", sans-serif' }}>
            Migrating a website can be daunting, which is why we have team of experts who are always ready to migrate your website smoothly.
          </p>
          <button className="bg-[#0057ff] hover:bg-blue-700 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base shadow-md transition-colors duration-200 w-full sm:w-auto" style={{ fontFamily: '"Urbanist", sans-serif' }}>
            Request free Migration
          </button>
        </div>
      </div>
    </section>
  );
};

export default MigrationPromoSection;
