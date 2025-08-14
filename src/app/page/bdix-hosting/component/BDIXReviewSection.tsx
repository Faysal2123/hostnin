"use client";

import { IoIosStar } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const reviewData = [
  {
    name: "Mostafizur Rahman Santo",
    role: "Businessman",
    text: "One of the best hosting services I've ever used, super-fast hosting at a reasonable price. fast customer service, and the service agents are very professional. I'm fully satisfied with their service. I wish hostnin best of luck!",
    rating: 5,
  },
  {
    name: "Al Amin Robin",
    role: "Web Developer",
    text: "Hostnin is an awesome hosting company and service provider. They are always there when I need them. They helped me a lot of times, and I love their support. I am a user of their premium hosting, and the server is too fast.",
    rating: 5,
  },
  {
    name: "Aqib Javed",
    role: "Freelancer",
    text: "Their Quality, affordability, and responsiveness dependable, high-quality maintenance services and assistance Highly Recommended. In Hostnin, i never gets any slower support which is very much appriciated.",
    rating: 5,
  },
];

const reviewImages = [
  "https://hostnin.com/wp-content/uploads/2022/07/unnamed-4.png",
  "https://hostnin.com/wp-content/uploads/2022/07/unnamed-2.png",
  "https://hostnin.com/wp-content/uploads/2022/07/unnamed-3.png",
];

const BDIXReviewSection = () => {
  return (
    <section className="relative pt-10 lg:pt-28 pb-10 sm:pb-20 px-2 sm:px-6 lg:px-8 overflow-hidden bg-[#f8f8f8] min-h-[940px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://hostnin.com/wp-content/uploads/2022/09/bg-shape.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-5xl font-bold text-white mb-2 sm:mb-4">
            Read our customer reviews
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] max-w-3xl mx-auto">
            We are consistently rated 5 stars by our customers. With over 100
            reviews on Trustpilot and Facebook, see for yourself why you can
            trust us to power your website.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {reviewData.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 py-6 sm:py-10 px-4 sm:px-8 shadow-lg"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-600 overflow-hidden">
                  <Image
                    src={reviewImages[index]}
                    alt={review.name}
                    width={80} // specify width
                    height={80} // specify height
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {review.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-2 sm:mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <IoIosStar
                    key={i}
                    className="text-yellow-400 text-lg sm:text-xl"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-base md:text-[17px] leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-4 sm:p-7  flex flex-col md:flex-row items-center md:item-start">
            <FaGoogle className="text-6xl  md:text-6xl text-[#4285F4] mr-2 sm:mr-4" />
            <div>
              <p className="text-base sm:text-base text-gray-600">
                Hostnin is rated &ldquo;Excellent&rdquo; with 5/5 on
              </p>
              <Link
                href="https://www.google.com/search?q=hostnin+&sca_esv=569594169&rlz=1C1UEAD_enBD1076BD1076&sxsrf=AM9HkKmpqltQEwtOf0G7hJl61rKQj5mIWA%3A1696031232393&ei=AGIXZf7OF6XP1e8P0KuEkAw&ved=0ahUKEwj-zonZgNGBAxWlZ_UHHdAVAcIQ4dUDCBA&uact=5&oq=hostnin+&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGhvc3RuaW4gMgQQIxgnMgQQIxgnMgcQABgNGIAEMgcQABgNGIAEMgYQABgeGA0yBhAAGB4YDTIIEAAYHhgNGA8yBhAAGB4YDTIKEAAYHhgNGA8YCjICECZI0A5QzgpYzgpwAngAkAEAmAH1AaAB9QGqAQMyLTG4AQPIAQD4AQHCAgoQABgNGIAEGLADwgIJEAAYHhgNGLADwgILEAAYHhgNGA8YsAPCAgsQABgFGB4YDRiwA-IDBBgBIEGIBgGQBgo&sclient=gws-wiz-serp#lrd=0x30acd9cbc6fae927:0xea0dfad1096f2469,1,,,,"
                className=" md:text-sm text-base text-blue-500 font-bold"
              >
                Google Business Review
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 py-4 sm:p-6 flex flex-col md:flex-row items-center md:item-start">
            <MdOutlineStars className="text-6xl md:text-6xl text-blue-800 mr-2 sm:mr-4" />
            <div>
              <p className="text-base text-gray-600">
                Hostnin is rated &ldquo;Excellent&rdquo; with 4.9/5 on
              </p>
              <Link
                href="https://www.trustpilot.com/review/hostnin.com"
                className=" text-base md:text-[15px]  text-blue-500 font-bold"
              >
                Trustpilot Business Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDIXReviewSection;
