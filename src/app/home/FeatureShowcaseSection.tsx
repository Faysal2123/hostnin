"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FeatureShowcaseSection() {
  const router = useRouter();
  return (
    <div className="bg-[#f8f8f8]">
      <section className="w-full mx-auto flex flex-col md:flex-row justify-between items-stretch gap-6 py-8">
        {/* Left Section */}
        <div className="flex-1 relative bg-white rounded-xl shadow overflow-hidden min-h-[620px] flex items-stretch">
          {/* Background Image */}
          <Image
            src="https://hostnin.com/wp-content/uploads/2023/03/hosting-1.png"
            alt="Left Feature"
            fill
            className="object-cover object-left"
            priority
          />
          {/* Text Content */}
          <div className="relative z-10 flex flex-col h-full justify-start p-8">
            <h4 className="font-bold text-2xl md:text-3xl mb-4 text-black">
              Reliable web hosting with 99.9% uptime guaranteed.
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-base">
                ✓
              </span>
              <span className="text-gray-700 text-base">
                Get a ready-to-launch website with our AI-integrated
              </span>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex-1 relative bg-white rounded-xl shadow overflow-hidden min-h-[600px] flex items-stretch">
          {/* Background Image */}
          <Image
            src="https://hostnin.com/wp-content/uploads/2024/02/bg-img-5.png"
            alt="CMS Install"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Text Content */}
          <div className="relative z-10 flex flex-col h-full justify-start p-8">
            <h4 className="font-bold text-2xl md:text-4xl mb-6 text-white drop-shadow">
              Install over 150 CMS with one click.
            </h4>
            <button
            onClick={() => router.push("/hosting/web-hosting")}
            className="w-fit cursor-pointer px-6 py-3 bg-white text-[#0a174e] font-semibold rounded shadow hover:bg-gray-300 transition hover:text-black">
              See More Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative bg-white rounded-xl shadow overflow-hidden min-h-[600px] flex items-stretch">
          {/* Text Content */}
          <div className="relative z-10 flex flex-col h-full justify-start p-8">
            <h4 className="font-bold text-2xl md:text-3xl mb-4 text-[#0a174e] text-center">
              Easy-to-use powerful features.
            </h4>
          </div>
          {/* Background Image (bottom centered, not behind text) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-[90%] h-[90%] pointer-events-none">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/07/vps-header.png"
              alt="Powerful Features"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
