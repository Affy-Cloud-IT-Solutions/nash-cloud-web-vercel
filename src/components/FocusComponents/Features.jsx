import React from "react";
import { motion } from "framer-motion";
import { CloudRain, Sliders, Smartphone, CheckCircle } from "lucide-react";

const features = [
  {
    title: "Cloud-Ready Architecture",
    desc: "Deploy securely on the cloud for anywhere-access and reduced IT infrastructure overhead.",
    icon: <CloudRain size={28} />,
  },
  {
    title: "Highly Customizable",
    desc: "Adapt the system precisely to your unique business workflows without rigid constraints.",
    icon: <Sliders size={28} />,
  },
  {
    title: "Mobile Accessibility",
    desc: "Stay connected on the go with dedicated mobile applications for essential ERP and CRM modules.",
    icon: <Smartphone size={28} />,
  },
  {
    title: "Regulatory Compliance",
    desc: "Built-in statutory compliance tools designed to meet local and international standards effortlessly.",
    icon: <CheckCircle size={28} />,
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Built for Flexibility. Designed for Growth.</h2>
            <p className="text-lg text-slate-600 mb-8">
              Focus Softnet stands out by delivering solutions that don't force you to change how you work. Instead, the software adapts to your proven operational methods.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working on customizable ERP solutions" 
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
