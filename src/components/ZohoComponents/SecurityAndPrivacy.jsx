import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, EyeOff, Server } from "lucide-react";

const features = [
  {
    title: "Privacy as a Promise",
    desc: "We do not own your data, we never sell it, and we never will. Your data is yours.",
    icon: <EyeOff size={28} />,
  },
  {
    title: "End-to-End Security",
    desc: "Enterprise-grade encryption in transit and at rest secures your most sensitive information.",
    icon: <Lock size={28} />,
  },
  {
    title: "Compliance Ready",
    desc: "Built to comply with strict international regulations including GDPR, HIPAA, and SOC 2.",
    icon: <Shield size={28} />,
  },
  {
    title: "Global Data Centers",
    desc: "Your data is hosted in highly secure, physically guarded facilities around the world.",
    icon: <Server size={28} />,
  }
];

const SecurityAndPrivacy = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Security & Privacy First</h2>
            <p className="text-lg text-slate-400 mb-8">
              At Zoho, privacy isn't an afterthought. It's built into the core of everything we do. We run our own data centers and network infrastructure to guarantee complete control over security.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndPrivacy;
