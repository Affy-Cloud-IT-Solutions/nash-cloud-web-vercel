import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Years of Excellence in Software Solutions" },
  { value: "1M+", label: "Satisfied Users Across the Globe" },
  { value: "27+", label: "International Offices" },
  { value: "15+", label: "Countries with Active Deployments" }
];

const Stats = () => {
  return (
    <section className="py-20 bg-red-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-md">
                {stat.value}
              </h3>
              <p className="text-red-100 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
