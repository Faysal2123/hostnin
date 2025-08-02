import React from 'react';

interface DomainCard {
  name: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  imageUrl: string;
}

const domainData: DomainCard[] = [
  {
    name: '.online',
    currentPrice: '৳1199',
    originalPrice: '৳3875',
    discount: '69.06%',
    imageUrl: 'https://hostnin.com/wp-content/uploads/2022/12/rsz_1rsz_1rsz_1rsz_dotonline_gtld_logosvg.png'
  },
  {
    name: '.org',
    currentPrice: '৳1650',
    originalPrice: '৳2000',
    discount: '17.50%',
    imageUrl: 'https://hostim.themetags.com/wp-content/uploads/2022/09/logo_6.svg'
  },
  {
    name: '.shop',
    currentPrice: '৳999',
    originalPrice: '৳3800',
    discount: '73.71%',
    imageUrl: 'https://hostim.themetags.com/wp-content/uploads/2022/09/shop-b.svg'
  },
  {
    name: '.top',
    currentPrice: '৳1250',
    originalPrice: '৳1399',
    discount: '10.65%',
    imageUrl: 'https://hostim.themetags.com/wp-content/uploads/2022/09/top.svg'
  },
  {
    name: '.uk',
    currentPrice: '৳1089',
    originalPrice: '৳1750',
    discount: '37.77%',
    imageUrl: 'https://hostim.themetags.com/wp-content/uploads/2022/09/uk-.svg'
  },
  {
    name: '.com',
    currentPrice: '৳1650',
    originalPrice: '৳2150',
    discount: '23.26%',
    imageUrl: 'https://hostim.themetags.com/wp-content/uploads/2022/09/logo_13.svg'
  },
  {
    name: '.co.uk',
    currentPrice: '৳896',
    originalPrice: '৳1760',
    discount: '49.09%',
    imageUrl: 'https://hostim.themetags.com/wp-content/uploads/2022/09/logo_10.svg'
  },
  {
    name: '.me',
    currentPrice: '৳1239',
    originalPrice: '৳1750',
    discount: '29.20%',
    imageUrl: 'https://hostim.themetags.com/wp-content/uploads/2022/09/dot-me-b.svg'
  }
];

const DomainSearchSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Urbanist", sans-serif' }}>
            Search & Register Your Domains
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: '"Mulish", sans-serif' }}>
            Register your domains at competitive prices, complete with advanced features.
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainData.map((domain, index) => (
            <div key={index} className="group relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
             
           
              
              {/* Discount Tag */}
              <div className="absolute -right-5 top-4 bg-gradient-to-b from-red-500 to-pink-400 text-white text-xs font-bold px-2 py-1 rounded transform rotate-90 origin-left z-10 shadow-lg">
                {domain.discount} off
              </div>

                            {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Domain Icon and Name */}
                <div className="flex items-center mb-4">
                  <img 
                    src={domain.imageUrl} 
                    alt={domain.name} 
                    className="w-14 h-10 mr-3 object-contain"
                  />
                </div>

                {/* Current Price */}
                <div className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                  {domain.currentPrice}/yr
                </div>

                {/* Original Price */}
                <div className="text-sm text-gray-500 group-hover:text-white group-hover:opacity-80 transition-all duration-300 mb-4" style={{ fontFamily: '"Mulish", sans-serif' }}>
                  Instead of {domain.originalPrice}/yr
                </div>

                {/* Register Now Link - Pushed to bottom */}
                <div className="mt-auto">
                  <a 
                    href="https://my.hostnin.com/cart.php?a=add&domain=register&currency=1&_gl=1*1j0682o*_ga*MTQ5Mzg1MjA3Mi4xNzUyOTE1MTAw*_ga_8HH0WPJEP1*czE3NTM4MTIyNjEkbzMxJGcxJHQxNzUzODE0MTU4JGo1OCRsMCRoNjA5NDMxNjY2*_fplc*QWJYT3k5d0lEVTU5cTFYV3dFZ0ZLRElidmVocEc3S1dpVkxHTEpsSlElMkY2alRiUDRyazZFUDYwVHY0OUdnQ2tGTUg4b3pNM3ptWHAxSDVJZE8xenhyVyUyQmZuJTJCOHRtQjc4UHZsOGhoaXkwY1JuS1Z3cVNCN2ZPWUJmZTlSSnFnJTNEJTNE*_gcl_aw*R0NMLjE3NTM4MTIyNjUuQ2owS0NRanc0cUhFQmhDREFSSXNBTFlLRk5ObFhYTWZ3RVNVRU1wZURNSjhaZWxyTUZvamw2bWJ3aG9Ed1RwNE9lSGJZX0ZPZ2VXa2pyY2FBaDNzRUFMd193Y0I.*_gcl_au*MTE4MDYxMDg5MC4xNzUyOTE1MTAw*_ga_T6J46ZTKYW*czE3NTM4MTIyNjEkbzM5JGcxJHQxNzUzODE0MTU2JGo2MCRsMCRoNjg1MDg4ODU." 
                    className="inline-flex items-center text-blue-600 group-hover:text-white font-medium transition-colors duration-300"
                    style={{ fontFamily: '"Urbanist", sans-serif' }}
                  >
                    Register Now 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainSearchSection; 