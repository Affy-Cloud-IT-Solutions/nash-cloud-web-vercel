import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Star, ShieldCheck } from "lucide-react";
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
    desc: "Scalable ERP solutions for digital transformation and operational efficiency.", color: "#008FD3",
    link: "/sap-landing",
    badge: "Enterprise",
    features: ["ERP Suite", "Cloud Solutions", "Analytics"]
  },
  {
    name: "Odoo",
    logo: odooLogo,
    desc: "All-in-one business management platform designed for modern, agile organizations.",
    color: "#0D47A1",
    link: "/odoo-services",
    badge: "Popular",
    features: ["Open Source", "Modular Apps", "Community"]
  },
  {
    name: "Zoho",
    logo: zohoLogo,
    desc: "Comprehensive cloud-based suite for CRM, finance, and end-to-end business productivity.",
    color: "#F4AD0B",
    link: "/zoho-services",
    badge: "Cloud Native",
    features: ["CRM Suite", "Finance", "Automation"]
  },
  {
    name: "Focus Softnet",
    logo: focusLogo,
    desc: "Advanced, highly customizable ERP solutions tailored specifically for growing enterprises.",
    color: "#ED1C24",
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
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden" id="partners">
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-r from-blue-100/40 via-blue-50/30 to-transparent rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-l from-slate-100/40 via-slate-50/30 to-transparent rounded-full blur-[130px]"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D47A1 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-24"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border-2 border-blue-200/50 mb-8 shadow-sm"
          >
            <Sparkles className="text-[#0D47A1] w-4 h-4" />
            <span className="text-[#0D47A1] text-xs font-bold uppercase tracking-[0.2em]">
              Certified Excellence
            </span>
          </motion.div>

          {/* Main Heading with Highlight */}
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Official Implementation{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#00B4FF]">
                Partners
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-[#0D47A1]/20 to-[#00B4FF]/20 rounded-full -mb-1"
              />
            </span>
          </h2>

          {/* Description with Icons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed">
              We collaborate with industry-leading platforms to deliver reliable,
              scalable, and future-ready solutions for your business.
            </p>
            <div className="flex items-center gap-6">
              {[
                { icon: ShieldCheck, text: "Certified" },
                { icon: Zap, text: "Scalable" },
                { icon: Star, text: "Trusted" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-500"
                >
                  <item.icon className="w-4 h-4 text-[#0D47A1]" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={cardVariants}
              onClick={() => partner.link && navigate(partner.link)}
              className="group relative bg-white w-full rounded-2xl p-8 border border-slate-200 hover:border-[#0D47A1]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/50 flex flex-col cursor-pointer"            >
              {/* Color Indicator */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-b-full"
                style={{ backgroundColor: partner.color }}
              />

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-blue-50/0 group-hover:to-blue-50/40 transition-all duration-500 pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 rounded-full group-hover:bg-[#0D47A1]/10 group-hover:text-[#0D47A1] transition-colors duration-300">
                  {partner.badge}
                </span>
              </div>

              {/* Logo Container */}
              <div className="relative h-36 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="relative max-h-28 w-auto object-contain rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 relative">
                <h3 className="text-2xl font-bold text-[#061943] mb-4 group-hover:text-[#0D47A1] transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-[#475569] mb-6 leading-relaxed text-sm flex-1">
                  {partner.desc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {partner.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-[11px] font-medium bg-slate-50 text-slate-500 rounded-lg group-hover:bg-blue-50 group-hover:text-[#0D47A1] transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-auto pointer-events-none">
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r from-[#0D47A1] to-[#0D47A1] text-white hover:from-[#0B3D8B] hover:to-[#0B3D8B] hover:shadow-lg hover:shadow-blue-200/50 group/btn"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "500+", label: "Successful Implementations" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support & Maintenance" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-100 hover:border-blue-100 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t-2 border-slate-100 pt-10 text-center">
            <p className="text-slate-400 text-sm font-medium tracking-wide">
              Helping companies transform their digital landscape through certified implementations.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OfficialPartners;