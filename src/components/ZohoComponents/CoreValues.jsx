import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    title: "Long-term commitment",
    desc: "30+ years of running a profitable organization gives us a good sense of challenges that a growing business faces.",
    icon: <Target className="text-blue-600" size={32} />
  },
  {
    title: "Customer-first philosophy",
    desc: "In all these years, it’s our customers’ trust and goodwill that has helped us establish a strong position in the market.",
    icon: <Heart className="text-red-600" size={32} />
  },
  {
    title: "Privacy and security",
    desc: "We do not own or sell your data, and we most certainly do not bank on advertising-based business models.",
    icon: <Shield className="text-green-600" size={32} />
  },
  {
    title: "Focus on R&D",
    desc: "Software is our craft and we back it up with our relentless investments in research and development.",
    icon: <Lightbulb className="text-yellow-600" size={32} />
  }
];

const CoreValues = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">The core values that drive us</h2>
          <p className="text-lg text-slate-600">Built with patience. Guided by purpose.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm shrink-0">
                {val.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
