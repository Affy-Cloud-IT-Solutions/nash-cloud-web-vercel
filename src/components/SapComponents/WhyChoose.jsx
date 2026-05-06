import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Lock } from "lucide-react";

const reasons = [
  {
    title: "Global Standardization",
    desc: "Unify your business operations across regions with SAP's universally recognized best practices.",
    icon: <Globe size={28} />,
  },
  {
    title: "Real-Time Intelligence",
    desc: "Make split-second decisions backed by SAP S/4HANA's powerful in-memory computing.",
    icon: <Zap size={28} />,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Protect your most sensitive data with robust, industry-leading security frameworks.",
    icon: <Lock size={28} />,
  },
  {
    title: "Proven Reliability",
    desc: "Rely on a platform trusted by 99% of the world's largest companies.",
    icon: <ShieldCheck size={28} />,
  }
];

const WhyChoose = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose SAP?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            SAP isn't just software; it's a strategic investment in the future scalability and agility of your enterprise.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
