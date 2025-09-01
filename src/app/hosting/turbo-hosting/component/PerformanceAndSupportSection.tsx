"use client";
import Image from 'next/image';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    const offset = 80; // Header height offset
    const elementPosition = pricingSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};



const supportFeatures = [
  { text: '24/7 Chat Support through messenger' },
  { text: 'Live Call Support through What\'s App' },
  { text: 'Max. 1 Hours Email Support' },
  { text: 'Max. 30 Minute ticket reply'},
  { text: 'Anydesk/TeamViewer Support'},
];



const PerformanceAndSupportSection = () => {
  return (
    <section className="w-full bg-[#fafafa] py-8 sm:py-10 xs:py-14 px-4 sm:px-6 xs:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 xs:gap-20">
        {/* Security Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 xs:gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl order-2 md:order-1">
            <h2 className="text-[27px] sm:text-2xl  md:text-5xl font-bold text-[#0a174e] mb-3 sm:mb-4 leading-tight" style={{fontFamily: 'Urbanist, sans-serif'}}>
              Enterprise-Grade Security<br />
              For Your Website
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base md:text-[17px] leading-relaxed font-['Mulish',sans-serif]">
            In addition to our web hosting solution, Hostnin&apos;s also offers advanced anti-virus and spam protections, along with up to unlimited storage mailboxes. For any business to be successful, email correspondence needs to remain uninterrupted at all times.
            <br />
            <span>
            In case you have any confusion regarding which Email Solution is best suited for your business, you can contact us for assistance. Live Chat is available 24 hours a day, 7 days a week.
            </span>
            </p>
            <div className='pt-2'>
              <Link href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-full transition-colors text-[15px]  sm:text-base w-full sm:w-auto">
              Contact Us
            </Link>
            </div>
           
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-full max-w-[250px] sm:max-w-[220px] xs:max-w-xs md:max-w-lg order-1 md:order-2">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/09/man.png"
              alt="Security Features"
              width={300}
              height={200}
              className="object-contain drop-shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Performance Section */}
      
        {/* Support Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 sm:gap-8 xs:gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl order-2 md:order-1">
            <h2 className="text-[27px] sm:text-2xl xs:text-3xl md:text-5xl font-semibold text-[#0a174e] mb-3 sm:mb-4 leading-tight" style={{fontFamily: 'Urbanist, sans-serif'}}>
              Let us take worries away  <br />
            & put time back in your day
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base  md:text-[17px] leading-relaxed font-['Mulish',sans-serif]">
              We offer expert 24/7/365 problem-solving for everyone. For a closer partnership, choose the Advanced Support add-on that enhances your support experience or the Premium Support add-on where our Senior Support Engineers work as an extension of your in-house team.
            </p>
            <ul className="mb-6 sm:mb-8 space-y-2.5 sm:space-y-3">
              {supportFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-[#0a174e]">
                  <MdCheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={22} />
                  <span className='font-bold text-[15px] sm:text-[17px] leading-relaxed' style={{fontFamily: 'Urbanist, sans-serif'}}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-colors text-[15px] sm:text-base w-full sm:w-auto cursor-pointer "
            >
              See Pricing
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-full max-w-[250px] sm:max-w-[220px] xs:max-w-xs md:max-w-lg order-1 md:order-2">
            <Image
              src="https://i.ibb.co/FbGFz0zH/customer-support-3-2048x1745.webp"
              alt="Support Illustration"
              width={300}
              height={200}
              className="object-contain drop-shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAndSupportSection; 