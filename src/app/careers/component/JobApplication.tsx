"use client";
import Link from 'next/link';

export default function JobApplication() {
  return (
    <section className="bg-[#f8f8f8] pb-10  px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="mb-6 text-blue-100">
              We're always looking for talented individuals to join our growing team. 
              Even if you don't see the perfect role listed, we'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Competitive salary & benefits</span>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Flexible working arrangements</span>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Career development opportunities</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Apply Today</h3>
            <p className="text-gray-600 mb-6">
              You can apply for current vacancies listed below, but speculative applications from enthusiastic people are always welcome.
            </p>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-gray-700">
                Send your CV to <span className="font-semibold text-blue-600">career@hostnin.com</span>
              </p>
            </div>
            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-sm text-gray-500">or</span>
              </div>
            </div>
            
            <div className="text-center">
              <button 
               onClick={() => {
                const JobsSection =
                  document.getElementById("job-section");
                if (JobsSection) {
                  JobsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
                
                className="inline-flex items-center cursor-pointer px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                View our latest vacancies
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}