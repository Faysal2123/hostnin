import Link from 'next/link';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection = ({
  title = "Do You Have Questions?",
  subtitle = "About Hostnin Budget Hosting Service"
}: ContactSectionProps) => {
  return (
    <div className='bg-[#fafbfc]'>
      <div className='px-2'>
        <section className="bg-[#00052E] py-10 md:py-16 relative overflow-hidden max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-20 xs:w-32 h-20 xs:h-32 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-32 xs:w-48 h-32 xs:h-48 bg-blue-500/10 rounded-full translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-0 right-0 w-16 xs:w-24 h-16 xs:h-24 grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-500/20 rounded-full" />
        ))}
      </div>
      <div className="container mx-auto px-2 xs:px-4">
        <div className="text-center text-white space-y-2 xs:space-y-4" style={{ fontFamily: 'var(--font-urbanist)' }}>
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
          <p className="text-xl md:text-2xl">{subtitle}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 xs:gap-6 mt-6 xs:mt-8">
            <Link 
              href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6"
              className="bg-[#0066FF] text-white px-6  py-2 md:px-8 md:py-4 rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25  duration-300"
            >
              Live Chat With Sales
            </Link>
            <Link 
            href="https://wa.me/8801325875955"
             
              className="flex items-center gap-3 text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 text-sm md:text-base"
            >
              <div className="bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 xs:h-6 w-5 xs:w-6 text-[#00052E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              01325 875 955 (24/7 WhatsApp)
            </Link>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default ContactSection; 