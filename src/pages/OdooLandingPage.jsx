import React, { useEffect } from "react";
import Hero from "../components/OdooComponents/Hero";
import TrustBar from "../components/OdooComponents/TrustBar";
import Services from "../components/OdooComponents/Services";
import WhyChooseUs from "../components/OdooComponents/WhyChooseUs";
import Process from "../components/OdooComponents/Process";
import Testimonials from "../components/OdooComponents/Testimonials";
import CTA from "../components/OdooComponents/CTA";
import ContactSection from "../components/OdooComponents/ContactSection";
import ScrollProgress from "../components/OdooComponents/ScrollProgress";

const OdooLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <ScrollProgress />

      {/* Main Content */}
      <main>
        <Hero />
        {/* <TrustBar /> */}
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <CTA />
        <ContactSection />
      </main>

      {/* Footer left out as requested */}
    </div>
  );
};

export default OdooLandingPage;
