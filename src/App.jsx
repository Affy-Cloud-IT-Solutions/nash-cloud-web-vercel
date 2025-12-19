import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SapServices from "./components/SapServices";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ITSolutions from "./components/ITSolutions";
import InternalProducts from "./components/InternalProducts";
import Testimonials from "./components/Testimonials";
import OpportunitiesAndTraining from "./components/OpportunitiesAndTraining";
import SapServicesPage from "./pages/SapServicesPage";
import ITSolutionsPage from "./pages/ITSolutionsPage";
import ResourceAndConsultingPage from "./pages/ResourceAndConsultingPage";
import InternalProductPage from "./pages/InternalProductPage";
import OpportunitiesAndTrainingPage from "./pages/OpportunitiesAndTrainingPage";
// Pages
import About from "./pages/About";
import WhoWeAreAndOffer from "./components/WhoWeAreAndOffer";
import Home from "./components/Home";
import DigitalTransformationServicesPage from "./pages/DigitalTransformationServicesPage";
import QAEngineeringServicesPage from "./pages/QAEngineeringServicesPage";
import ResourcingAndConsultingSection from "./components/ResourcingAndConsultingSection";
import ScrollToTop from "./components/ScrollToTop";

const LandingPage = () => (
  <>
    <section id="home"><Home /></section>

    <section id="whoweareandoffer"><WhoWeAreAndOffer /></section>

    <section id="sap"><SapServices /></section>

    <section id="opportunities"><OpportunitiesAndTraining /></section>

    <section id="products"><InternalProducts /></section>

    <section id="resource"><ResourcingAndConsultingSection /></section>

    {/* <section id="it-solutions"><ITSolutions /></section> */}

    <section id="testimonials"><Testimonials /></section>

    <section id="contact"><ContactUs /></section>

  </>
);

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
      </Routes>


      <Footer />
    </Router>
  );
};

export default App;
