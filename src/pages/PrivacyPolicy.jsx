import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-10 lg:px-24 mt-10">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-GB')}</strong></p>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">1. Introduction</h2>
            <p>
              Welcome to <strong>TechTradeUK Limited</strong> ("we", "our", or "us"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="mt-2">
              Our registered office is: Birmingham, UK. Company No: 10940432.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">2. Information We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Identity Data:</strong> First name, last name, title.</li>
              <li><strong>Contact Data:</strong> Email address, telephone numbers, billing address.</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">3. How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we use your data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide and manage our IT, SAP, and Consulting services.</li>
              <li>Communicate with you regarding your inquiries and services.</li>
              <li>Improve our website and customer support.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">4. Legal Basis for Processing (UK GDPR)</h2>
            <p>Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for processing this information are:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your consent. You can remove your consent at any time by contacting us.</li>
              <li>We have a contractual obligation.</li>
              <li>We have a legal obligation.</li>
              <li>We have a legitimate interest.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">5. Data Security & Retention</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">6. Your Data Protection Rights</h2>
            <p>Under UK data protection law, you have rights including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Your right of access</strong> - You have the right to ask us for copies of your personal information.</li>
              <li><strong>Your right to rectification</strong> - You have the right to ask us to rectify personal information you think is inaccurate.</li>
              <li><strong>Your right to erasure</strong> - You have the right to ask us to erase your personal information in certain circumstances.</li>
              <li><strong>Your right to restriction of processing</strong> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-2">
              <strong>TechTradeUK Limited</strong><br />
             Birmingham, UK<br />
              Email: info@techtradeitsolutions.com<br />
              Phone: +44 7776 839310
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
