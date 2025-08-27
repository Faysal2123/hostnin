// components/RefundPolicy.tsx
"use client";

import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Refund Policy</h1>

      <p className="mb-6 text-gray-700">
        At Hostnin, we are committed to ensuring the satisfaction of our customers with the services we provide. 
        However, we understand that there may be instances where you may not be completely satisfied with our offerings. 
        In such cases, we offer a transparent and straightforward refund policy to address your concerns. 
        Please read through the following detailed terms and conditions that govern our refund process.
      </p>

      {/* 1. Refund Eligibility */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Refund Eligibility</h2>

        <h3 className="text-xl font-semibold mb-2">30-Day Money-Back Guarantee:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>All hosting services provided by Hostnin are covered by our 30-day money-back guarantee.</li>
          <li>The 30-day period begins from the date your service was first activated.</li>
          <li>Refunds will be processed if the service complies with our Terms of Service and Acceptable Use Policy.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Exclusions:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Domain Name Services: Non-refundable once registered or renewed.</li>
          <li>Add-on Services: SSL certificates, privacy protection, and third-party software may not be refundable once activated.</li>
          <li>Web Builder & SEO Services: Non-refundable due to upfront costs and third-party licenses.</li>
          <li>Custom Services: Non-refundable unless specified.</li>
          <li>Service Issues: Refunds may be provided as a Hostnin credit if service issues occur.</li>
          <li>Customer Behavior: Aggressive or unlawful behavior may result in refund denial and account ban.</li>
          <li>No Refund for VPS, Dedicated, or Reseller Hosting Services.</li>
        </ul>
      </div>

      {/* 2. Refund Process and Timelines */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Refund Process and Timelines</h2>

        <h3 className="text-xl font-semibold mb-2">bKash Payments:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Refunds processed within 24 hours.</li>
          <li>Refund credited to the original bKash account.</li>
          <li>Contact support if refund is not received within 24 hours.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Bank Transfers & Other Payments:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Processed within 3-7 business days depending on the bank.</li>
          <li>Hostnin is not responsible for delays caused by banks or external factors.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Credit/Debit Card Payments:</h3>
        <p className="text-gray-700 mb-4">
          Typically take up to 7 working days to process depending on payment gateway and issuing bank.
        </p>

        <h3 className="text-xl font-semibold mb-2">SSLCommerz and Other Payment Partners:</h3>
        <p className="text-gray-700 mb-4">
          Refunds typically take 3-7 working days. Exact time depends on the payment partner's procedures.
        </p>
      </div>

      {/* 3. Requesting a Refund */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Requesting a Refund</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Submit a refund request through Hostnin support channels or dashboard.</li>
          <li>Include your order number, reason, and transaction details.</li>
          <li>Refunds will be issued to the original payment method or as Hostnin account credit.</li>
        </ul>
      </div>

      {/* 4. Special Cases and Considerations */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Special Cases and Considerations</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Service Upgrades/Downgrades: Refund calculated based on original plan minus usage fees.</li>
          <li>Promotional Offers: Refund adjusted based on promotion terms.</li>
          <li>Partial Refunds: May be granted depending on service usage or circumstances.</li>
          <li>Chargebacks: Initiating chargebacks may result in refund denial and account termination.</li>
        </ul>
      </div>

      <p className="text-gray-700">
        <strong>Contact Us:</strong> If you have any questions or need clarification, our support team is available 24/7 to assist you.
      </p>
    </section>
  );
};

export default RefundPolicy;
