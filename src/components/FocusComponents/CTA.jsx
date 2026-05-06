import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="pb-10 px-6 md:px-12 bg-slate-50 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 via-white to-red-50 p-12 md:p-20 rounded-3xl border border-red-100 shadow-xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Ready to Optimize Your Business?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore Focus Softnet's powerful ERP, CRM, and HCM solutions and see how our tailored modules can drive your digital transformation today.
        </p>
      </motion.div>
    </section>
  );
};

export default CTA;
