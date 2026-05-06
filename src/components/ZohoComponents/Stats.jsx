import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Users Globally", value: "100M+" },
  { label: "Countries Served", value: "150+" },
  { label: "Employees Worldwide", value: "15,000+" },
  { label: "Years in Business", value: "25+" },
  { label: "Products", value: "50+" },
];

const Stats = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Business Software. Our Craft. Our Passion.</h2>
          <p className="text-xl text-slate-400 font-medium">Made in India. Made for the World.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
