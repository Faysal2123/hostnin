import Image from 'next/image';

interface MigrationPromoSectionProps {
  onViewPricingClick?: () => void;
}

export default function MigrationPromoSection({ onViewPricingClick }: MigrationPromoSectionProps) {
  return (
    <section className="w-full bg-[#fafbfc] py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-8">
        {/* Left: Image and floating icons */}
        <div className="relative flex-1 flex items-center justify-center min-w-[320px]">
          <div className="relative z-10">
            <Image
              src="https://hostnin.com/wp-content/uploads/2023/03/features.png"
              alt="Runner"
              width={450}
              height={450}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        
        
        </div>
        {/* Right: Text content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <div className="text-blue-600 font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
            <span>Moving Websites</span>
            <span className="w-6 h-0.5 bg-blue-600 inline-block align-middle" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Moving From Another Host?
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            We&apos;ll Migrate your site for <span className="text-blue-600">FREE!</span>
          </p>
          <p className="text-gray-600 mb-6">
            Migrating one hosting to another is daunting this is why we have dedicated team for migration of your website. Let&apos;s sit relax and look how your website migrate in a moment. We process this migration in 3 steps: Backup, transfer and restore.
          </p>
          <button
            onClick={onViewPricingClick}
            className="px-6 py-3 cursor-pointer bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-700 hover:text-white transition"
          >
            View Pricing Plan
          </button>
        </div>
      </div>
    </section>
  );
} 