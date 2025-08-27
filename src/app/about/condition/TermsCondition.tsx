import React from "react";

const TermsCondition: React.FC = () => {
  return (
    <div className="bg-[#f7f9fa] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1877f2] font-['Urbanist',sans-serif]">
            Hostnin Terms & Conditions
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto font-['Mulish',sans-serif]">
            Last Updated: 25 August 2025
          </p>
        </div>

        {/* Section 1. Introduction */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            1. Introduction
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li> These Terms and Conditions (“Terms”) govern the use of services offered by Hostnin (“we,” “us,” “our”) to customers (“you,” “your”).</li>
            <li>By signing up, purchasing, or using our services, you agree to be bound by these Terms.</li>
            <li> These Terms are designed in compliance with Bangladeshi law, and international best practices where applicable.</li>
            <li>If you do not agree with these Terms, you must immediately stop using our services.</li>
          </ul>
        </section>

        {/* Section 2. Governing Law */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            2. Governing Law & Jurisdiction
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>These Terms shall be governed by the laws of Bangladesh.</li>
            <li> Any dispute shall be subject to the exclusive jurisdiction of the courts of Bangladesh (primarily Dhaka or Chattogram).</li>
            <li>Hostnin reserves the right to cooperate with legal authorities in case of misuse or criminal activity.</li>
          </ul>
        </section>

        {/* Section 3. Account Registration */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            3. Account Registration & Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li> You must provide accurate and complete information during account creation.</li>
            <li>You are responsible for keeping login credentials secure. Hostnin is not liable for loss due to compromised passwords.</li>
            <li> Accounts registered with fake names, fake addresses, or fraudulent contact information may be terminated without notice.</li>
            <li> One person or business may not create multiple accounts to exploit promotions, discounts, or abuse policies.</li>
          </ul>
        </section>

        {/* Section 4. Acceptable Use Policy */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            4. Acceptable Use Policy (AUP)
          </h2>

          <h3 className="text-xl font-semibold mb-2 font-['Urbanist',sans-serif]">
            4.1 Prohibited Content
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Adult content, pornography, escort services, or sexually explicit material.</li>
            <li>Child exploitation or abuse material.</li>
            <li>Illegal gambling, betting, or lottery websites (without government approval).</li>
            <li>Political propaganda against the state, terrorism, or anti-religious content.</li>
            <li>Piracy, warez, nulled/cracked software distribution.</li>
            <li>Fake bank/MFS login pages, phishing, or fraud.</li>
            <li>Drugs, alcohol, weapons, or arms sales violating Bangladeshi law.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 font-['Urbanist',sans-serif]">
            4.2 Prohibited Activities
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Spamming (emails, SMS, WhatsApp).</li>
            <li>Hosting malware, botnets, or backdoors.</li>
            <li>Sending DDoS attacks or using hosting as attack infrastructure.</li>
            <li>Unauthorized cryptocurrency mining.</li>
            <li>Using hosting for “storage-only” purposes (Google Drive alternatives, movie hosting).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 font-['Urbanist',sans-serif]">
            4.3 Misuse & Abusive Behavior
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Clients must not harass or abuse Hostnin staff (support tickets, phone, WhatsApp, or social media).</li>
            <li>Abusive language, threats, or defamation against Hostnin or its employees may lead to immediate termination.</li>
          </ul>
        </section>

        {/* Continue similarly for Sections 5 to 18 */}
        {/* For brevity, all sections can follow this same structure: heading, subheading, list or paragraph */}

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm font-['Mulish',sans-serif]">
            For questions, contact:{" "}
            <a href="mailto:support@hostnin.com" className="text-blue-600 underline">
              support@hostnin.com
            </a>{" "}
            | WhatsApp/Phone: +880 1405 65 7089 | Office: Chattogram, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
