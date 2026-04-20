import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the cookie exists
    const consentValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('techtrade_cookie_consent='))
      ?.split('=')[1];

    if (!consentValue) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie to expire in 1 year
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    document.cookie = `techtrade_cookie_consent=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    setShowPopup(false);
  };

  const handleReject = () => {
    // Set cookie to expire in 1 year
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    document.cookie = `techtrade_cookie_consent=false; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.1)] z-50 p-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 font-medium text-center md:text-left">
          <p>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our <Link to="/cookies-policy" className="text-blue-600 hover:text-blue-800 transition-colors underline cursor-pointer">Cookie Policy</Link> for more details.
          </p>
        </div>
        <div className="flex flex-wrap shrink-0 gap-3 w-full md:w-auto justify-center">
          <Link to="/cookies-policy" className="text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center cursor-pointer">
            Learn More
          </Link>
          <button
            onClick={handleReject}
            className="bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer"
          >
            Reject All
          </button>

          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
