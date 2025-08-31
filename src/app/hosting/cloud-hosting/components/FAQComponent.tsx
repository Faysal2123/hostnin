"use client";
import React, { useState, useRef } from "react";
import { FaDashcube, FaHeadphonesAlt, FaServer } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";

const faqData = [
  {
    category: "General Questions",
    icon: <FaArtstation className="text-xl " />,
    faqs: [
      {
        question: "What is Web Hosting?",
        answer:
          "Web hosting is the service of storing data that keeps websites up and running for users.\n\nEvery website online has a host server, and almost all use a web host to manage that storage. However, not all web hosts provide the same level of quality.\n\nUptime, data speed, and transfer quantity are the most reliable measures of a host's success. You can often pay more to get data transferred in higher quantities and at faster speeds. Most web hosts offer unlimited bandwidth and disk space at a speed suitable for small-to-moderate-sized businesses or individuals.\n\nCompanies with large websites may need to seek out a more advanced web host to meet their needs.",
      },
      {
        question: "What is shared web hosting?",
        answer:
          "Shared web hosting is a type of web hosting service where the server's capabilities are divided among multiple domains hosted on the same server. This means the server's resources, such as CPU, memory, and disk space, are shared among all the domains on the server.",
      },
      {
        question: "What is a domain name?",
        answer:
          "A domain name is a unique address used to access a website on the internet. It typically consists of a name followed by an extension, such as `.com`, `.org`, or `.net`. For example, in the domain name `www.example.com`, \"example\" is the name and \".com\" is the extension. Domain names provide an easy-to-remember address for users to access websites, replacing the need to remember numerical IP addresses.",
      },
      {
        question: "How can I trust you?",
        answer:
          "There are many reasons to trust us, and most of them are simply undeniable. We have hundreds of online reviews, with 99.9% of them being positive. In Bangladesh, we are the only company that truly offers 24/7 service, not just as a promise, but as a reality.",
      },
      {
        question: "What's hostnin history?",
        answer:
          "In November of 2022, we started our journey, and in a very short period of time, we got a tremendous response from the clients. As a sister company to Spotlight Creative Web Agency, we have over 4 years of experience providing the best to our clients.",
      },
    ],
  },
  {
    category: "Ordering & Billing",
    icon: <RiShoppingCart2Fill className="text-xl " />,
    faqs: [
      {
        question: "How can I order a plan?",
        answer:
          'To order a plan from hostnin, you have to select the plan you want to book and click on the "Order Now" button on that plan. After that, you\'ll be redirected to the further process, such as your billing details and payment information.\n\nWhen all the steps are successfully completed, an account will be created and the following services will be activated instantly.',
      },
      {
        question: "How to Pay?",
        answer:
          "After providing the billing information, you'll be given the options for payment methods. You can continue and complete the payment by choosing the payment method. You will immediately receive the confirmation email in your inbox following the completion of your payment.",
      },
      {
        question: "Which payment method you accept?",
        answer:
          "Currently, you have three payment options: direct banking, credit or debit cards, and mobile banking. There is a way to use PayPal to pay if you reside abroad. For Mobile Banking, We receive the payment through Bkash, Rocket, Nagad, and Ucash are all supported.",
      },
      {
        question: "What billing cycles do you offer?",
        answer: "We provide monthly, quarterly, half-annually, annually, biennially, and triennially billing cycles that you can select. In addition to booking hosting for a custom number of years through our support chat, you can also book hosting for a custom number of months.",
      },
      {
        question: "What is the refund policy?",
        answer: "If you're unhappy with our hosting service, we have a 30-day refund policy. There are many options available for choosing a refund. For instance, a slow server, a problem with the hosting account, or a support issue. You'll find all the policies listed in detail on the service policy page.",
      },
    ],
  },
  {
    category: "Hosting Server",
    icon: <FaServer className="text-xl " />,
    faqs: [
      {
        question: "What is disk space and how much do I need?",
        answer:
          "Disk space is an empty space that you can arrange however you like, just like when you pack your suitcase for a trip or furnish your home. For most websites with text and images, 3-5 GB should be plenty. If users will be downloading large multimedia files or there will be more than 500 visitors per day, you should think about getting a plan with more transfer bandwidth.",
      },
      {
        question: "Is disk space matter for website speed?",
        answer:
          "Your disk space will only slow down the speed at which your website loads, and usually not by much, if all of the following are true: There are no caches (for example, the server just restarted), and the server is actually using a HDD (and not, for example, an SSD).",
      },
      {
        question: "What is SSL security?",
        answer:
          "Transport Layer Security is a set of rules for using encryption to keep computer network communications safe. The protocol is used in many applications, like email, instant messaging, and voice over IP, but its most well-known use is to protect HTTPS.",
      },
      {
        question: "How can I activate the SSL?",
        answer:
          "You can activate an SSL certificate right from your control panel. You can find the option by searching for 'SSL' at the top of the bar.\n\nThere are many videos made by our expert that show how to enable and activate it.",
      },
      {
        question: "What is bandwidth and how much do you need?",
        answer:
          "Bandwidth is the maximum amount of data that can be transmitted over an Internet connection, measured in megabits per second (Mbps). Speed: the rate at which data can be downloaded (or uploaded) to a given device using that Internet connection; also measured in megabits per second. You'll need the bandwidth based on how many people visit your website and how big your files are that people download.",
      },
      {
        question: "What servers do you run?",
        answer:
          "We don't use Nginx or Apache as our main web server software. Instead, we use LiteSpeed Web Servers (LSWS). Litespeed servers make a website more fast and secure than Apache and NGIX can.",
      },
      {
        question: "How secure are your servers?",
        answer:
          "Hostnin has some decent security features and precautions in place, albeit they are on the simple side. Security experts take care of the servers, and free SSL keeps your data and that of your visitors safe.",
      },
      {
        question: "Do you offer Shell Access?",
        answer:
          "Absolutely. Depending on your hosting plan and features, you will get shell access.",
      },
      {
        question: "Can I get root access?",
        answer: "In the case of shared hosting, no company can grant access to the server's root directory.\n\nIf you require root access for your work, you can use our virtual private server or dedicated server.",
      },
    ],
  },
  {
    category: "Control Panel",
    icon: <FaDashcube className="text-xl " />,
    faqs: [
      {
        question: "What control panel do you offer?",
        answer:
          "Depending on the packages you purchase from us, we provide a variety of control panels. Cpanel, PokoPanel, Direct Admin, and Plesk are all options.",
      },
      {
        question: "Is the control panel latest?",
        answer:
          "Absolutely! All of our control panels are in the latest mode, and we don't provide any backdated system interfaces.",
      },
      {
        question: "Can I get any demo of control panel?",
        answer: "Yes, you can check out the demo of our control panels by clicking the button above.",
      },
      {
        question: "Can I change the control panel by my own?",
        answer:
          "You can alter the interface system, such as the design, or something associated with it, but you must either migrate to a different system or upgrade to a different plan if you want to alter the entire control panel.",
      },
    ],
  },
  {
    category: "Support System",
    icon: <FaHeadphonesAlt className="text-xl " />,
    faqs: [
      {
        question: "What is the support method?",
        answer:
          "We provide assistance via our Messenger chatbox. Whatsapp for chat and phone calls, as well as the hotline number. In the most technical cases, you can create a ticket through our portal.",
      },
      {
        question: "When will I get the support?",
        answer: "We offer sales and technical support 24 hours a day, seven days a week, with immediate response. We have a team of support executives for each shift, so you'll always be able to get help. No matter it's government holiday or weekend.",
      },
      {
        question: "How much I need to pay for the support?",
        answer: "We offer some of the best support available, with 24-hour availability. Thankfully, it has always been and will continue to be offered at zero cost.",
      },
      {
        question: "Do you have a team or are you one man?",
        answer: "We have a team of expert support executives who have been able to provide appropriate assistance. As so many businesses now have a single owner who manages the business, it's been hard to provide on-time support for them, and ultimately the users of the company get a bad experience.",
      },
    ],
  },
];

const FAQComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndexes, setOpenIndexes] = useState<number[]>(faqData.map(() => 0));
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (idx: number) => {
    setSelectedTab(idx);
  };

  const handleAccordionClick = (faqIdx: number) => {
    setOpenIndexes((prev) =>
      prev.map((openIdx, tabIdx) =>
        tabIdx === selectedTab ? (openIdx === faqIdx ? -1 : faqIdx) : openIdx
      )
    );

    // Smooth scroll into view
    setTimeout(() => {
      const ref = answerRefs.current[faqIdx];
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          ref.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 300);
  };

  const currentFaqs = faqData[selectedTab].faqs;

  return (
    <div className="bg-[#f8f8f9]">
      <div className="w-full max-w-7xl mx-auto py-6 sm:py-8 lg:py-10 pt-12 sm:pt-16 lg:pt-20 px-3 sm:px-4 ">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 text-black">
          FAQs: Your questions, our answers
        </h2>
        <p className="text-center text-gray-500 mb-6 sm:mb-8 w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto text-[15px] sm:text-base px-3 sm:px-4">
          Here you will find answers to the most frequently asked questions. If you still need assistance, feel free to ask our live support team.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2 sm:px-4">
          {faqData.map((tab, idx) => (
            <button
              key={tab.category}
              className={`flex items-center cursor-pointer gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-md font-semibold transition-colors duration-200 focus:outline-none text-base sm:text-sm lg:text-base ${
                selectedTab === idx
                  ? "bg-blue-600 text-white shadow-[0_0_40px_16px_rgba(59,130,246,0.32)]"
                  : "bg-white text-black"
              }`}
              onClick={() => handleTabClick(idx)}
            >
              <span className="text-sm sm:text-base lg:text-xl">{tab.icon}</span>
              <span className="hidden sm:inline" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                {tab.category}
              </span>
              <span className="sm:hidden" style={{ fontFamily: '"Urbanist", sans-serif' }}>
                {tab.category.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Accordion Section */}
        <div className="bg-white shadow-lg p-4 sm:p-6 lg:p-8">
          {currentFaqs.map((faq, idx) => {
            const isOpen = openIndexes[selectedTab] === idx;
            return (
              <div key={faq.question} className="border-b last:border-b-0 border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-3 sm:py-4 lg:py-5 text-left focus:outline-none"
                  onClick={() => handleAccordionClick(idx)}
                >
                  <span className="font-bold text-[17px] md:text-base text-gray-900 pr-2 sm:pr-4 font-sans">
                    {faq.question}
                  </span>
                  <span className="text-xl sm:text-2xl text-blue-700 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
  ref={(el) => { answerRefs.current[idx] = el }} // remove the implicit return
  className={`overflow-hidden transition-all duration-500 ease-in-out`}
  style={{ maxHeight: isOpen && answerRefs.current[idx] ? answerRefs.current[idx].scrollHeight + 20 : 0 }}
>
                  <p className="pb-3 sm:pb-4 lg:pb-5 text-gray-700 text-[15px] sm:text-base whitespace-pre-line" style={{ fontFamily: '"Mulish", sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
