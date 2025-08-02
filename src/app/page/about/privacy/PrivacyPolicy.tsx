import React from "react";
import { Urbanist, Mulish } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-10">
        {/* Header */}
        <header className="text-center mb-14">
          <h1 className={`text-5xl font-extrabold text-blue-700 tracking-tight ${urbanist.className}`}>
            Privacy Policy
          </h1>
          <p className={`mt-4 text-gray-500 text-lg max-w-xl mx-auto ${mulish.className}`}>
            Your privacy matters to us. Below, we explain how we collect, use,
            and protect your information.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {[
            {
              title: "Who We Are",
              content: (
                <>
                  Our website address is:{" "}
                  <a
                    href="https://hostnin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://hostnin.com
                  </a>
                  .
                </>
              ),
            },
            {
              title: "Comments",
              content: (
                <>
                  When visitors leave comments on the site, we collect the data
                  shown in the comments form, along with the visitor&apos;s IP address
                  and browser user agent string to help with spam detection.
                  <br />
                  An anonymized string (hash) created from your email address may
                  be sent to the Gravatar service to check if you are using it.
                  You can read their privacy policy here:{" "}
                  <a
                    href="https://automattic.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://automattic.com/privacy/
                  </a>
                  . After your comment is approved, your profile picture is visible
                  to the public with your comment.
                </>
              ),
            },
            {
              title: "Media",
              content:
                "If you upload images, avoid including embedded location data (EXIF GPS). Visitors can download and extract location data from images.",
            },
            {
              title: "Cookies",
              content: (
                <>
                  If you leave a comment, you may opt-in to saving your name,
                  email, and website in cookies for convenience. These cookies
                  last for one year.
                  <br />
                  When you log in, we set cookies to save login information and
                  screen preferences. Login cookies last two days, and screen
                  preference cookies last one year. If you choose &quot;Remember Me,&quot;
                  your login will persist for two weeks. Logging out removes these
                  cookies.
                </>
              ),
            },
            {
              title: "Embedded Content",
              content:
                "Articles on this site may include embedded content (videos, images, etc.). These websites may collect data, use cookies, and track your interaction just as if you visited their website directly.",
            },
            {
              title: "Data Sharing",
              content:
                "If you request a password reset, your IP address will be included in the reset email.",
            },
            {
              title: "Data Retention",
              content: (
                <>
                  Comments and their metadata are retained indefinitely. For
                  registered users, we store the personal information in their
                  user profile. Users can see, edit, or delete their personal
                  information. Administrators can also see and edit this data.
                </>
              ),
            },
            {
              title: "Your Data Rights",
              content: (
                <>
                  You can request an exported file of the personal data we hold
                  about you or ask us to erase it. This excludes data required for
                  legal or security purposes.
                </>
              ),
            },
            {
              title: "Where Your Data is Sent",
              content:
                "Visitor comments may be checked through an automated spam detection service.",
            },
          ].map(({ title, content }, idx) => (
            <section key={idx} className="border-l-4 border-blue-600 pl-6">
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ${urbanist.className}`}>{title}</h2>
              <p className={`text-gray-600 leading-relaxed ${mulish.className}`}>{content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
