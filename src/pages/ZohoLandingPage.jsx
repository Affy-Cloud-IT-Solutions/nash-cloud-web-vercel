import React, { useEffect } from "react";
import Hero from "../components/ZohoComponents/Hero";
import Services from "../components/ZohoComponents/Services";
import CoreValues from "../components/ZohoComponents/CoreValues";
import Stats from "../components/ZohoComponents/Stats";
import SecurityAndPrivacy from "../components/ZohoComponents/SecurityAndPrivacy";
import Testimonials from "../components/ZohoComponents/Testimonials";
import CTA from "../components/ZohoComponents/CTA";
import zohoProductsImg from "../assets/ZohoProducts.jpg";

const ZohoLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      <main>
        <Hero />

        {/* Full Screen Image Section */}
        <section className="w-full bg-slate-50 py-12">
          <div className="max-w-[1400px] mx-auto px-6">
            <img
              src={zohoProductsImg}
              alt="Zoho Products Ecosystem"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </section>

        <Services />
        <CoreValues />
        <SecurityAndPrivacy />
        <Stats />
        <Testimonials />
        {/* <CTA /> */}
      </main>
    </div>
  );
};

export default ZohoLandingPage;
