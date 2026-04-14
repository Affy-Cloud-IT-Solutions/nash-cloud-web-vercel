import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-10 lg:px-24 mt-10">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-6">Terms & Conditions</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-GB')}</strong></p>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the website and services provided by <strong>TechTradeUK Limited</strong> ("Company", "we", "us", or "our"). By accessing or using our website, you agree to be bound by these Terms.
            </p>
            <p className="mt-2">
              <strong>TechTradeUK Limited</strong> is registered in England & Wales. Company No: 10940432. VAT No: 288183364.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">2. Services Provided</h2>
            <p>
              We provide enterprise-grade IT, SAP, Automation, and Consulting services. The details of specific services will be outlined in separate mutually agreed contracts or statements of work. Information on this website is for general informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">3. User Responsibilities</h2>
            <p>When using our website, you agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide accurate and complete information when contacting us.</li>
              <li>Not engage in any unlawful, fraudulent, or harmful activity on our site.</li>
              <li>Not attempt to disrupt or interfere with the security or functionality of the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, and images, is the property of TechTradeUK Limited and is protected by UK and international copyright laws. You may not reproduce, distribute, or create derivative works without our explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by UK law, TechTradeUK Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">6. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">7. Contact Us</h2>
            <p>
              For any questions regarding these Terms, you can contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@techtradeitsolutions.com<br />
              <strong>Registered Office:</strong> 16 Burman Road, Birmingham, England, B90 2BD
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
