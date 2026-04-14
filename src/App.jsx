import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import About from "./pages/About";
import SapServicesPage from "./pages/SapServicesPage";
import ITSolutionsPage from "./pages/ITSolutionsPage";
import ResourceAndConsultingPage from "./pages/ResourceAndConsultingPage";
import InternalProductPage from "./pages/InternalProductPage";
import OpportunitiesAndTrainingPage from "./pages/OpportunitiesAndTrainingPage";
import DigitalTransformationServicesPage from "./pages/DigitalTransformationServicesPage";
import QAEngineeringServicesPage from "./pages/QAEngineeringServicesPage";

import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
