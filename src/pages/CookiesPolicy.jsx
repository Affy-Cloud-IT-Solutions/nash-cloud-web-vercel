import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-10 lg:px-24 mt-10">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-lg border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-6">Cookies Policy</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p><strong>Last Updated: {new Date().toLocaleDateString('en-GB')}</strong></p>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">1. Introduction</h2>
            <p>
              This Cookies Policy explains how <strong>TechTradeUK Limited</strong> uses cookies and similar technologies to recognise you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">2. What are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">3. How We Use Cookies</h2>
            <p>We use first and third-party cookies for several reasons:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features.</li>
              <li><strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use.</li>
              <li><strong>Analytics and Customisation Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used, or to help us customise our website for you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">4. How Can I Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@techtradeitsolutions.com<br />
              <strong>Address:</strong> 16 Burman Road, Birmingham, UK
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
