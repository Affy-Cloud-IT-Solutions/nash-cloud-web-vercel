import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

// Pages
import About from "./pages/About";
import SapServicesPage from "./pages/SapServicesPage";
import ITSolutionsPage from "./pages/ITSolutionsPage";
import ResourceAndConsultingPage from "./pages/ResourceAndConsultingPage";
import InternalProductPage from "./pages/InternalProductPage";
import OpportunitiesAndTrainingPage from "./pages/OpportunitiesAndTrainingPage";
import DigitalTransformationServicesPage from "./pages/DigitalTransformationServicesPage";
import QAEngineeringServicesPage from "./pages/QAEngineeringServicesPage";
import OurApps from "./components/OurApps";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CompliancePage from "./pages/CompliancePage";
import OdooLandingPage from "./pages/OdooLandingPage";
import ZohoLandingPage from "./pages/ZohoLandingPage";
import FocusLandingPage from "./pages/FocusLandingPage";
import SapLandingPage from "./pages/SapLandingPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sap-services" element={<SapServicesPage />} />
        <Route path="/internal-product" element={<InternalProductPage />} />
        <Route path="/opportunities" element={<OpportunitiesAndTrainingPage />} />
        <Route path="/resourcing" element={<ResourceAndConsultingPage />} />
        <Route path="/it-solutions" element={<ITSolutionsPage />} />
        <Route path="/digital-transformation" element={<DigitalTransformationServicesPage />} />
        <Route path="/qa-engineering" element={<QAEngineeringServicesPage />} />
        {/* <Route path="/our-apps" element={<OurApps />} /> */}
        <Route path="/odoo-services" element={<OdooLandingPage />} />
        <Route path="/zoho-services" element={<ZohoLandingPage />} />
        <Route path="/focus-services" element={<FocusLandingPage />} />
        <Route path="/sap-landing" element={<SapLandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/compliance" element={<CompliancePage />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </Router>
  );
};

export default App;
