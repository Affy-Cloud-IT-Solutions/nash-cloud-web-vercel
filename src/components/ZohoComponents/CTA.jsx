import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 p-12 md:p-20 rounded-3xl border border-slate-100 shadow-xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Ready to do your best work?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore the Zoho Ecosystem today and transform the way your business operates with our unified suite of applications.
        </p>
      </motion.div>
    </section>
  );
};

export default CTA;
