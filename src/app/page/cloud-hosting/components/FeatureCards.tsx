import Image from 'next/image';


const features = [
  {
    image: "https://hostnin.com/wp-content/uploads/2022/09/wordpress-staging.svg",
    title: 'OneClick Install',
    desc: `It only takes one click to generate a copy of your entire website, which can then be used for testing, updating, or adding new content or code. As soon as you are satisfied with the results, you may deploy those changes to the live site in an effortless manner.`,
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2022/07/built-in-analytics.svg",
    title: 'Built-in Analytics',
    desc: `Monitor critical metrics for all of your WordPress sites, including load average, disk I/O, and bandwidth utilization, among other things. Get all the report right from your control panel, data can filtered by country, regions.`,
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2022/07/login-security.svg",
    title: 'Secured Login',
    desc: `Two-factor authentication, FTP security lock, brute-force login protection with StackProtect, and blocking by IP address or country all help keep people from getting into your control panel and files without your permission.`,
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2022/07/email-management.svg",
    title: 'Email Management',
    desc: `For protection and privacy, TLS encrypts all email while it's being sent. We use network-level scans, virus scans, and content-based scans to look for spam and viruses that come in.`,
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2022/07/powerful-multisite-hosting.svg",
    title: 'Powerful multisite hosting',
    desc: `Manage hosting, security, and domains in one location. No of your site count, advanced multi-site administration capabilities and filters give you control.`,
  },
  {
    image: "https://hostnin.com/wp-content/uploads/2022/07/loaded-with-features.svg",
    title: 'Built in SSH Terminal',
    desc: `There are more than 80 1-click tools, including WordPress. phpMyAdmin, Git Version Control, domain names and DNS manager, SSH access, email manager, 2FA, and a lot more.`,
  },
];

const FeatureCards = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center bg-[#f8f8f9]"
      style={{
        backgroundImage: 'url("https://hostnin.com/wp-content/uploads/2022/09/bg-curve.png")',
        fontFamily: '"Mulish", sans-serif'
      }}
    >
      <div className="flex flex-col items-center pt-6 sm:pt-8 lg:pt-10 px-3 sm:px-4">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Mulish", sans-serif' }}>
          What are Specials?
        </h1>
        <p className='text-gray-500 w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl text-center mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg px-3 sm:px-4' style={{ fontFamily: '"Mulish", sans-serif' }}>You&apos;ll get more resources for less money with our plans, so you can count on their reliability. It&apos;s easier than you think to start your own website with Hostnin!  </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl w-full px-3 sm:px-4 pb-6 sm:pb-8 lg:pb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8 flex flex-col hover:shadow-md transition"
              style={{ fontFamily: '"Mulish", sans-serif' }}
            >
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-12 h-12 sm:w-15 sm:h-15 flex items-center justify-center rounded-full bg-blue-50 flex-shrink-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="text-blue-600 w-8 h-8 sm:w-10 sm:h-12"
                  />
                </div>
                <h3 className="font-bold text-lg md:text-[22px] text-gray-900" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                  
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-semibold" style={{ fontFamily: '"Mulish", sans-serif' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
