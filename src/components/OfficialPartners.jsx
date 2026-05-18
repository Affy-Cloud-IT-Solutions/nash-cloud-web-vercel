import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Local Logo Imports
import sapLogo from "../assets/SAPLogo.jpg";
import odooLogo from "../assets/OdooLogo.png";
import zohoLogo from "../assets/ZOHOLogo.png";
import focusLogo from "../assets/focus-logo.png";

const partners = [
  {
    name: "SAP",
    logo: sapLogo,
    desc: "Scalable ERP solutions for digital transformation and operational efficiency.",
    color: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/20",
    link: "/sap-landing",
    badge: "Enterprise",
    features: ["ERP Suite", "Cloud Solutions", "Analytics"]
  },
  {
    name: "Odoo",
    logo: odooLogo,
    desc: "All-in-one business management platform designed for modern, agile organizations.",
    color: "from-indigo-400 to-indigo-600",
    shadow: "shadow-indigo-500/20",
    link: "/odoo-services",
    badge: "Popular",
    features: ["Open Source", "Modular Apps", "Community"]
  },
  {
    name: "Zoho",
    logo: zohoLogo,
    desc: "Comprehensive cloud-based suite for CRM, finance, and end-to-end business productivity.",
    color: "from-yellow-400 to-orange-500",
    shadow: "shadow-orange-500/20",
    link: "/zoho-services",
    badge: "Cloud Native",
    features: ["CRM Suite", "Finance", "Automation"]
  },
  {
    name: "Focus Softnet",
    logo: focusLogo,
    desc: "Advanced, highly customizable ERP solutions tailored specifically for growing enterprises.",
    color: "from-red-400 to-red-600",
    shadow: "shadow-red-500/20",
    link: "/focus-services",
    badge: "Customizable",
    features: ["Custom ERP", "Scalable", "Integration"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const OfficialPartners = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-[#020817]" id="partners">
      {/* Premium Dark Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <Sparkles className="text-blue-400 w-4 h-4" />
            <span className="text-slate-300 text-sm font-semibold uppercase tracking-wider">
              Certified Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Official Implementation{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Partners
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            We collaborate with industry-leading platforms to deliver reliable,
            scalable, and future-ready solutions for your business.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {[
              { icon: ShieldCheck, text: "Certified Experts" },
              { icon: Zap, text: "Seamless Integration" },
              { icon: Star, text: "Proven Success" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5"
              >
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-slate-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 place-items-stretch"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={cardVariants}
              onClick={() => partner.link && navigate(partner.link)}
              className={`group relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer overflow-hidden shadow-2xl hover:${partner.shadow}`}
            >
              {/* Animated Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${partner.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-300 rounded-full group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-md border border-white/5">
                  {partner.badge}
                </span>
              </div>

              {/* Logo Container (White background to frame logos properly) */}
              <div className="relative h-32 flex items-center justify-center mb-8 bg-white rounded-2xl p-4 shadow-inner group-hover:scale-105 transition-transform duration-500 mt-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                  {partner.name}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-1">
                  {partner.desc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {partner.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 text-[11px] font-medium bg-slate-800 text-slate-300 rounded-lg group-hover:bg-white/10 group-hover:text-white transition-colors duration-300 border border-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    Explore More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OfficialPartners;