import {
  FaRegQuestionCircle,
  FaShoppingCart,
  FaServer,
  FaRegWindowMaximize,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { FAQCategory } from "../types/FAQ";
import { IconType } from "react-icons";

interface FAQCategoryData extends Omit<FAQCategory, "icon"> {
  icon: IconType;
}

export const faqData: FAQCategoryData[] = [
  {
    id: "general",
    title: "General Questions",
    icon: FaRegQuestionCircle,
    faqs: [
      {
        question: "What is Web Hosting?",
        answer: `
Web hosting stores website data and keeps sites running. All websites need a host server, but quality varies. Key factors are uptime, speed, and data transfer. Most hosts offer sufficient speed, bandwidth, and storage for small to medium sites, while large websites may require advanced hosting.`,
      },
      {
        question: "What is shared web hosting?",
        answer: `Shared web hosting is a type of web hosting service where the server's capabilities are divided among multiple domains hosted on the same server. This means the server's resources, such as CPU, memory, and disk space, are shared among all the domains on the server.`,
      },
      {
        question: "What is a domain name?",
        answer: `A domain name is a unique address used to access a website on the internet. It typically consists of a name followed by an extension, such as \`.com\`, \`.org\`, or \`.net\`. For example, in the domain name \`www.example.com\`, "example" is the name and ".com" is the extension. Domain names provide an easy-to-remember address for users to access websites, replacing the need to remember numerical IP addresses.`,
      },
      {
        question: "How can I trust you?",
        answer: `There are many reasons to trust us, and most of them are simply undeniable. We have hundreds of online reviews, with 99.9% of them being positive. In Bangladesh, we are the only company that truly offers 24/7 service, not just as a promise, but as a reality.`,
      },
      {
        question: "What's hostnin history?",
        answer: `In November of 2022, we started our journey, and in a very short period of time, we got a tremendous response from the clients. As a sister company to Spotlight Creative Web Agency, we have over 4 years of experience providing the best to our clients.`,
      },
    ],
  },
  {
    id: "billing",
    title: "Ordering & Billing",
    icon: FaShoppingCart,
    faqs: [
      {
        question: "How can I order a plan?",
        answer: `To order a plan from hostnin, you have to select the plan you want to book and click on the "Order Now" button on that plan. After that, you'll be redirected to the further process, such as your billing details and payment information.\n\nWhen all the steps are successfully completed, an account will be created and the following services will be activated instantly.`,
      },
      {
        question: "How to Pay?",
        answer: `After providing the billing information, you'll be given the options for payment methods. You can continue and complete the payment by choosing the payment method. You will immediately receive the confirmation email in your inbox following the completion of your payment.`,
      },
      {
        question: "Which payment method you accept?",
        answer: `Currently, you have three payment options: direct banking, credit or debit cards, and mobile banking. There is a way to use PayPal to pay if you reside abroad. For Mobile Banking, We receive the payment through Bkash, Rocket, Nagad, and Ucash are all supported.`,
      },
      {
        question: "What billing cycles do you offer?",
        answer: `We provide monthly, quarterly, half-annually, annually, biennially, and triennially billing cycles that you can select. In addition to booking hosting for a custom number of years through our support chat, you can also book hosting for a custom number of months.`,
      },
      {
        question: "What is the refund policy?",
        answer: `If you're unhappy with our hosting service, we have a 30-day refund policy. There are many options available for choosing a refund. For instance, a slow server, a problem with the hosting account, or a support issue. You'll find all the policies listed in detail on the service policy page.`,
      },
    ],
  },
  {
    id: "server",
    title: "Hosting Server",
    icon: FaServer,
    faqs: [
      {
        question: "What is disk space and how much do I need?",
        answer: `Disk space is an empty space that you can arrange however you like, just like when you pack your suitcase for a trip or furnish your home. For most websites with text and images, 3-5 GB should be plenty. If users will be downloading large multimedia files or there will be more than 500 visitors per day, you should think about getting a plan with more transfer bandwidth.`,
      },
      {
        question: "Is disk space matter for website speed?",
        answer: `Your disk space will only slow down the speed at which your website loads, and usually not by much, if all of the following are true: There are no caches (for example, the server just restarted), and the server is actually using a HDD (and not, for example, an SSD).`,
      },
      {
        question: "What is SSL security?",
        answer: `Transport Layer Security is a set of rules for using encryption to keep computer network communications safe. The protocol is used in many applications, like email, instant messaging, and voice over IP, but its most well-known use is to protect HTTPS.`,
      },
      {
        question: "How can I activate the SSL?",
        answer: `You can activate an SSL certificate right from your control panel. You can find the option by searching for 'SSL' at the top of the bar.\n\nThere are many videos made by our expert that show how to enable and activate it.`,
      },
      {
        question: "What is bandwidth and how much do you need?",
        answer: `Bandwidth is the maximum amount of data that can be transmitted over an Internet connection, measured in megabits per second (Mbps). Speed: the rate at which data can be downloaded (or uploaded) to a given device using that Internet connection; also measured in megabits per second. You'll need the bandwidth based on how many people visit your website and how big your files are that people download.`,
      },
    ],
  },
  {
    id: "panel",
    title: "Control Panel",
    icon: FaRegWindowMaximize,
    faqs: [
      {
        question: "What control panel do you offer?",
        answer: `Depending on the packages you purchase from us, we provide a variety of control panels. Cpanel, PokoPanel, Direct Admin, and Plesk are all options.`,
      },
      {
        question: "Is the control panel latest?",
        answer: `Absolutely! All of our control panels are in the latest mode, and we don't provide any backdated system interfaces.`,
      },
      {
        question: "Can I get any demo of control panel?",
        answer: `Yes, you can check out the demo of our control panels by clicking the button above.`,
      },
      {
        question: "Can I change the control panel by my own?",
        answer: `You can alter the interface system, such as the design, or something associated with it, but you must either migrate to a different system or upgrade to a different plan if you want to alter the entire control panel.`,
      },
    ],
  },
  {
    id: "support",
    title: "Support System",
    icon: FaHeadphonesAlt,
    faqs: [
      {
        question: "What is the support method?",
        answer: `We provide assistance via our Messenger chatbox. Whatsapp for chat and phone calls, as well as the hotline number. In the most technical cases, you can create a ticket through our portal.`,
      },
      {
        question: "When I will get the support?",
        answer: `We offer sales and technical support 24 hours a day, seven days a week, with immediate response. We have a team of support executives for each shift, so you'll always be able to get help. No matter it's government holiday or weekend.`,
      },
      {
        question: "How much I need to pay for the support?",
        answer: `We offer some of the best support available, with 24-hour availability. Thankfully, it has always been and will continue to be offered at zero cost.`,
      },
      {
        question:
          "Do you have a team of executives behind you, or are you just one man?",
        answer: `We have a team of expert support executives who have been able to provide appropriate assistance. As so many businesses now have a single owner who manages the business, it's been hard to provide on-time support for them, and ultimately the users of the company get a bad experience.`,
      },
    ],
  },
];
