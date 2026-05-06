import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Zoho has completely revolutionized the way we handle our customer relationships. It's an indispensable part of our daily workflow.",
    author: "Sarah Jenkins",
    role: "VP of Sales, TechCorp",
    company: "TechCorp"
  },
  {
    quote: "Moving our finance and HR to the Zoho ecosystem was the best decision we made. The integration is seamless and the interface is incredibly intuitive.",
    author: "David Chen",
    role: "Operations Director, Globex",
    company: "Globex"
  },
  {
    quote: "With Zoho, we finally have a unified suite that scales with our rapid growth without breaking the bank.",
    author: "Maria Rodriguez",
    role: "Founder, StartupX",
    company: "StartupX"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by Visionaries</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what leaders from around the world are saying about their experience with Zoho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
            >
              <div className="text-4xl text-green-200 absolute top-4 left-4 font-serif">"</div>
              <p className="text-slate-700 italic mb-8 relative z-10 pt-4">{test.quote}</p>
              <div>
                <h4 className="font-bold text-slate-900">{test.author}</h4>
                <p className="text-sm text-slate-500">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
