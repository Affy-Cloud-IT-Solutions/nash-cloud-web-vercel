import React from "react";
import { motion } from "framer-motion";
import { Users, Server, LineChart, Smile, Cloud, TrendingUp, Cpu, ShoppingBag, Globe } from "lucide-react";

const sapServices = [
  {
    title: "SAP SuccessFactors (HXM)",
    icon: <Users size={32} />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    desc: "Optimize HR processes with comprehensive solutions for employee lifecycle management and improved workforce engagement.",
  },
  {
    title: "SAP S/4 HANA",
    icon: <Server size={32} />,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    desc: "Advanced ERP suite providing real-time analytics and streamlined workflows to support business scalability.",
  },
  {
    title: "SAP Analytics Cloud",
    icon: <LineChart size={32} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    desc: "Enhance data visualization and predictive analytics capabilities to transform business intelligence across the enterprise.",
  },
  {
    title: "SAP Customer Experience (CX)",
    icon: <Smile size={32} />,
    color: "text-orange-600",
    bg: "bg-orange-50",
    desc: "Deliver personalized customer experiences with integrated CRM solutions that optimize sales, service, and marketing.",
  },
  {
    title: "SAP Cloud Platform & ABAP Factory",
    icon: <Cloud size={32} />,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    desc: "Develop and extend SAP applications with a flexible, cloud-based development environment.",
  },
  {
    title: "SAP Sales Cloud",
    icon: <TrendingUp size={32} />,
    color: "text-rose-600",
    bg: "bg-rose-50",
    desc: "Enhance sales performance with tools that enable better lead management, forecasting, and customer insights.",
  },
  {
    title: "SAP Business Technology Platform",
    icon: <Cpu size={32} />,
    color: "text-purple-600",
    bg: "bg-purple-50",
    desc: "Drive innovation with an integrated platform that enables custom applications and efficient data management.",
  },
  {
    title: "SAP Ariba & Procurement",
    icon: <ShoppingBag size={32} />,
    color: "text-amber-600",
    bg: "bg-amber-50",
    desc: "Digitize and streamline the entire procurement process, from strategic sourcing to supplier management and payments.",
  },
  {
    title: "SAP Fieldglass & Contingent Workforce",
    icon: <Globe size={32} />,
    color: "text-teal-600",
    bg: "bg-teal-50",
    desc: "Effectively manage your external workforce and services procurement with full visibility and control.",
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Core SAP Offerings</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From Next-Gen ERP to Human Experience Management, discover our tailored SAP capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sapServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
