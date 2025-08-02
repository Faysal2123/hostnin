"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(4); // Start with the 4th question expanded

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How can i buy a domain?",
      answer: "To buy or register your domain, go to the domain search box and check to see if it is available for registration. If there is a \"Checkout\" button, click it. Fill out the rest of the form, including your name, address, and phone number. Pay the amount after you have completed the filling out section, and your domain should be activated instantly."
    },
    {
      id: 2,
      question: "Where can i buy domain in bangladesh?",
      answer: "At Hostnin, you can buy cheap domains. In addition to low-cost domains, Hostnin offers premium domain add-ons such as WHOIS protection at reliable prices."
    },
    {
      id: 3,
      question: "What makes Hostnin the best place to register my domain?",
      answer: "Hostin offers premium domains with full control and sustainability. There is no risk of the domain being suspended without any reason, and there is no restriction on staying with the company. You have the full right to move the domain anywhere, anytime. Hostnin also gives you free WHOIS protection for life to keep your private information safe."
    },
    {
      id: 4,
      question: "What's the maximum time I can register the domain?",
      answer: "It all starts with an idea. You can register a domain name for as many years as you like, up to a maximum of 10 years. This is after you do a search to make sure it's available. The domain can be renewed every time it expires."
    },
    {
      id: 5,
      question: "Which domain extension is best for SEO?",
      answer: "Even though .com and other domain extensions like .net and .org were all born on the same day, it has become the most well-known and, therefore, the most widely used. As a result, .com is the most appropriate domain extension for search engine optimization."
    },
    {
      id: 6,
      question: "How to connect domain to the hosting?",
      answer: "You can connect a domain to hosting by configuring the nameservers. Each hosting has its own unique nameservers, which you need to find and update for your domain. It's very easy to update nameservers through our control panel."
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 pb-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4" style={{ fontFamily: '"Urbanist", sans-serif' }}>
            Why use Hostnin for domains?
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: '"Mulish", sans-serif' }}>
            Focus on your business and let us handle all the web domain hassles for you. With 24/7 support, our managed services act as your extended team.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Section */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white  shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800 text-base" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                    {item.question}
                  </span>
                  {expandedId === item.id ? (
                    <FaChevronUp className="text-gray-500 flex-shrink-0 ml-4" />
                  ) : (
                    <FaChevronDown className="text-gray-500 flex-shrink-0 ml-4" />
                  )}
                </button>
                {expandedId === item.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-[15px] leading-relaxed" style={{ fontFamily: '"Mulish", sans-serif' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  src="https://hostnin.com/wp-content/uploads/2022/08/faq_feature.png"
                  alt="Man looking thoughtful at laptop"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Question Mark Background */}
             
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 