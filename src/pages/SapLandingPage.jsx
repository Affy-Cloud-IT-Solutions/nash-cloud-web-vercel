import React, { useEffect } from "react";
import Hero from "../components/SapComponents/Hero";
import Services from "../components/SapComponents/Services";
import WhyChoose from "../components/SapComponents/WhyChoose";
import Stats from "../components/SapComponents/Stats";
import CTA from "../components/SapComponents/CTA";

const SapLandingPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
      <Hero />
      <Services />
      <WhyChoose />
      <Stats />
      <CTA />
    </div>
  );
};

export default SapLandingPage;
