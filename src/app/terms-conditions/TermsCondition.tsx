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
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            1. Introduction
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>These Terms and Conditions ("Terms") govern the use of services offered by Hostnin ("we," "us," "our") to customers ("you," "your").</li>
            <li>By signing up, purchasing, or using our services, you agree to be bound by these Terms.</li>
            <li>These Terms are designed in compliance with Bangladeshi law, and international best practices where applicable.</li>
            <li>If you do not agree with these Terms, you must immediately stop using our services.</li>
          </ul>
        </section>

        {/* Section 2. Governing Law */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            2. Governing Law & Jurisdiction
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>These Terms shall be governed by the laws of Bangladesh.</li>
            <li>Any dispute shall be subject to the exclusive jurisdiction of the courts of Bangladesh (primarily Dhaka or Chattogram).</li>
            <li>Hostnin reserves the right to cooperate with legal authorities in case of misuse or criminal activity.</li>
          </ul>
        </section>

        {/* Section 3. Account Registration */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            3. Account Registration & Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>You must provide accurate and complete information during account creation.</li>
            <li>You are responsible for keeping login credentials secure. Hostnin is not liable for loss due to compromised passwords.</li>
            <li>Accounts registered with fake names, fake addresses, or fraudulent contact information may be terminated without notice.</li>
            <li>One person or business may not create multiple accounts to exploit promotions, discounts, or abuse policies.</li>
          </ul>
        </section>

        {/* Section 4. Acceptable Use Policy */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
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
            <li>Using hosting for "storage-only" purposes (Google Drive alternatives, movie hosting).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 font-['Urbanist',sans-serif]">
            4.3 Misuse & Abusive Behavior
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Clients must not harass or abuse Hostnin staff (support tickets, phone, WhatsApp, or social media).</li>
            <li>Abusive language, threats, or defamation against Hostnin or its employees may lead to immediate termination.</li>
          </ul>
        </section>

        {/* Section 5. Resource Usage & Fair Usage Policy */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            5. Resource Usage & Fair Usage Policy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Hosting resources (CPU, RAM, bandwidth, inodes, emails) are shared. Excessive usage that disrupts other users will result in limits, suspension, or upgrade requests.</li>
            <li>Unlimited hosting is subject to "fair usage" not for hosting file sharing sites, video streaming libraries, or backup archives.</li>
            <li>Bulk email sending is forbidden unless pre-approved (for businesses with opt-in subscribers only).</li>
          </ul>
        </section>

        {/* Section 6. Payments, Billing & Refunds */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            6. Payments, Billing & Refunds
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>All prices are listed in Bangladeshi Taka (BDT). For international customers, USD equivalents may apply.</li>
            <li>Payments must be made in advance for all services. Unpaid invoices after due date may result in account suspension.</li>
            <li>Accepted payment methods include bKash, Nagad, Rocket, local bank transfer, card payments, PayPal, Stripe.</li>
            <li>Refunds:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Hosting plans: 30-day money-back guarantee (conditions apply).</li>
                <li>Non-refundable: domains, SSLs, VPS, dedicated servers, software licenses, SEO services.</li>
                <li>Refunds due to customer misuse/abuse will not be provided.</li>
              </ul>
            </li>
            <li>Chargebacks: Initiating a chargeback without contacting Hostnin first is considered abuse and may lead to permanent account ban.</li>
          </ul>
        </section>

        {/* Section 7. Suspension & Termination */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            7. Suspension & Termination
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Hostnin reserves the right to suspend or terminate services if:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Terms are violated.</li>
                <li>Payment is overdue beyond 7 days.</li>
                <li>Hosting is used for illegal or harmful purposes.</li>
                <li>Misuse/abuse impacts other customers or server performance.</li>
              </ul>
            </li>
            <li>Terminated accounts lose all stored data permanently. Hostnin is not responsible for data recovery after termination.</li>
            <li>Hostnin may blacklist abusive customers across all Hostnin brands permanently.</li>
          </ul>
        </section>

        {/* Section 8. Data Security & Backups */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            8. Data Security & Backups
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Hostnin provides automated backups (daily/weekly, depending on plan), but clients are responsible for their own backups.</li>
            <li>Hostnin is not liable for data loss caused by: hacking, accidental deletion, software corruption, or hardware failure.</li>
            <li>Clients must secure their CMS (WordPress, Joomla, etc.) with strong passwords, updated plugins, and security best practices.</li>
          </ul>
        </section>

        {/* Section 9. Support & Communication */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            9. Support & Communication
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Support is provided via ticket, live chat, WhatsApp, and email.</li>
            <li>Support does not include: coding, fixing client-side errors, or third-party software development.</li>
            <li>Clients must maintain respectful communication with support staff.</li>
            <li>Misuse of support channels for spamming, threats, or harassment may lead to suspension.</li>
          </ul>
        </section>

        {/* Section 10. Domain Registration & Ownership */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            10. Domain Registration & Ownership
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Domain registration is subject to ICANN and relevant registry rules.</li>
            <li>Domains are the sole property of the registered owner (the client).</li>
            <li>Hostnin is not responsible for expired domains if renewal invoices are unpaid.</li>
            <li>Users must check the validity after renewal and contact if there any issue. If there any API or registry issue happen and users don't contact immediately, Hostnin will not be responsible for this.</li>
          </ul>
        </section>

        {/* Section 11. Service Availability (Uptime SLA) */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            11. Service Availability (Uptime SLA)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Hostnin targets 99.9% uptime for shared hosting and 100% uptime for cloud hosting.</li>
            <li>SLA credits (partial refunds) may be provided if uptime falls below 99% in a given month (excluding force majeure, maintenance).</li>
            <li>Planned maintenance will be notified in advance.</li>
          </ul>
        </section>

        {/* Section 12. Legal Compliance & Government Requests */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            12. Legal Compliance & Government Requests
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Clients must comply with all Bangladeshi laws, including ICT Act, BTRC rules, and financial transaction rules.</li>
            <li>Hostnin will cooperate with government authorities if required for investigation.</li>
            <li>Hosting accounts may be suspended without notice if government/legal orders demand it.</li>
          </ul>
        </section>

        {/* Section 13. Privacy & Data Handling */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            13. Privacy & Data Handling
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Hostnin follows its Privacy Policy for handling personal data.</li>
            <li>Data may be shared with payment processors, domain registrars, and security providers as necessary.</li>
            <li>Personal data will not be sold to third parties.</li>
          </ul>
        </section>

        {/* Section 14. Limitation of Liability */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            14. Limitation of Liability
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Hostnin is not liable for:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Client's illegal use of hosting.</li>
                <li>Financial losses due to downtime, hacking, or misconfiguration.</li>
                <li>Content hosted by clients.</li>
                <li>Third-party software vulnerabilities.</li>
              </ul>
            </li>
            <li>Maximum liability of Hostnin is limited to the amount paid by the client in the past 6 months.</li>
          </ul>
        </section>

        {/* Section 15. Indemnification */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            15. Indemnification
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>You agree to indemnify and hold Hostnin harmless from claims, damages, or expenses arising from your:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Content hosted on our servers.</li>
                <li>Violation of laws or third-party rights.</li>
                <li>Misuse or abuse of services.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Section 16. Account Closure by Customer */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            16. Account Closure by Customer
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Clients may close their account anytime by submitting a cancellation request.</li>
            <li>No partial refunds for unused subscription periods (unless covered by 30-day guarantee).</li>
            <li>Once closed, all files, emails, and backups will be permanently deleted.</li>
          </ul>
        </section>

        {/* Section 17. Changes to Terms */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            17. Changes to Terms
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Hostnin may update these Terms from time to time.</li>
            <li>Updates will be published on our website, and clients will be notified via email for major changes.</li>
            <li>Continued use of services after updates constitutes acceptance.</li>
          </ul>
        </section>

        {/* Section 18. Contact Information */}
        <section className="mb-8 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
            18. Contact Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-['Mulish',sans-serif]">
            <li>Email: support@hostnin.com</li>
            <li>WhatsApp/Phone: +880 1405 65 7089</li>
            <li>Office: Chattogram, Bangladesh</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="text-center mt-8">
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