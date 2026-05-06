import React, { useEffect } from "react";
import Hero from "../components/FocusComponents/Hero";
import Products from "../components/FocusComponents/Products";
import Industries from "../components/FocusComponents/Industries";
import Features from "../components/FocusComponents/Features";
import Stats from "../components/FocusComponents/Stats";
import CTA from "../components/FocusComponents/CTA";

const FocusLandingPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
      <Hero />
      <Products />
      <Features />
      <Stats />
      <Industries />
      <CTA />
    </div>
  );
};

export default FocusLandingPage;
