import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-50 p-12 md:p-20 rounded-3xl border border-blue-100 shadow-xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Accelerate Your SAP Journey</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Partner with our experts to seamlessly deploy, manage, and optimize your SAP ecosystem for unparalleled agility and growth.
        </p>
      </motion.div>
    </section>
  );
};

export default CTA;
