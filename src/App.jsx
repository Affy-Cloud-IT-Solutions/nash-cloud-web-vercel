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

const LandingPage = () => (
  <>
    <section id="home"><HeroSection /></section>

    <section id="sap"><SapServices /></section>

    <section id="it-solutions"><ITSolutions /></section>

    <section id="products"><InternalProducts /></section>

    <section id="opportunities"><OpportunitiesAndTraining /></section>

    <section id="testimonials"><Testimonials /></section>

    <section id="contact"><ContactUs /></section>

    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sap-services" element={<SapServicesPage />} />
        <Route path="/internal-product" element={<InternalProductPage />} />
        <Route path="/opportunities" element={<OpportunitiesAndTrainingPage />} />
        <Route path="/resourcing" element={<ResourceAndConsultingPage />} />
        <Route path="/it-solutions" element={<ITSolutionsPage />} />

      </Routes>
    </Router>
  );
};

export default App;
