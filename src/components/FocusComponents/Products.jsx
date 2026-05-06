import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, ArrowRight, CheckCircle2, Star, Zap } from "lucide-react";

import focusXLogo from "../../assets/Focus-x-black.png";
import focusCrmLogo from "../../assets/FOCUS-CRM.png";
import centraHcmLogo from "../../assets/centra-HCM.jpg";

const products = [
  {
    category: "Focus X (ERP)",
    icon: focusXLogo,
    isImage: true,
    color: "text-blue-600",
    bg: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverBg: "hover:bg-blue-50/50",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    shadow: "shadow-blue-100",
    desc: "Optimize sales, accounting, procurement, fixed assets, and operations.",
    badge: "Flagship",
    items: [
      { name: "Focus X", desc: "Flagship Cloud ERP solution for enterprises." },
      { name: "Focus WMS", desc: "Warehouse management for inventory tracking." },
      { name: "Focus MRP", desc: "Manufacturing planning & shop floor control." },
      { name: "Focus POS", desc: "Smart point-of-sale for retail operations." },
    ]
  },
  {
    category: "Focus (CRM)",
    icon: focusCrmLogo,
    isImage: true,
    color: "text-red-600",
    bg: "bg-red-50",
    borderColor: "border-red-200",
    hoverBg: "hover:bg-red-50/50",
    gradientFrom: "from-red-500",
    gradientTo: "to-red-600",
    shadow: "shadow-red-100",
    desc: "Centralize data, manage contacts, and nurture leads to drive sales.",
    badge: "Essential",
    items: [
      { name: "Focus CRM", desc: "Comprehensive customer relationship suite." },
      { name: "Focus REMS", desc: "Real estate management & property tracking." },
      { name: "Focus AUTO", desc: "Automotive software for dealerships." },
      { name: "Focus EDU", desc: "Smart education management platform." },
    ]
  },
  {
    category: "Centra (HCM)",
    icon: centraHcmLogo,
    isImage: true,
    color: "text-green-600",
    bg: "bg-green-50",
    borderColor: "border-green-200",
    hoverBg: "hover:bg-green-50/50",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
    shadow: "shadow-green-100",
    desc: "Handle employee data, payroll, and HR tasks from any device.",
    badge: "Modern",
    items: [
      { name: "Focus HCM", desc: "Core HR & workforce management system." },
      { name: "Recruitment", desc: "Streamlined applicant tracking & onboarding." },
      { name: "Payroll", desc: "Compliant & easy-to-use payroll processing." },
      { name: "Performance", desc: "Advanced performance appraisal systems." },
    ]
  },
  {
    category: "AI & Automation",
    icon: null,
    isImage: false,
    color: "text-purple-600",
    bg: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverBg: "hover:bg-purple-50/50",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    shadow: "shadow-purple-100",
    desc: "Drive intelligent automation and actionable insights.",
    badge: "Cutting Edge",
    items: [
      { name: "Focus AI", desc: "Smart algorithms integrated into workflows." },
      { name: "WhatsApp Bot", desc: "Instant customer query responses & updates." },
      { name: "Predictive BI", desc: "Advanced business intelligence software." },
      { name: "Smart Automation", desc: "Predictive maintenance & work orders." },
    ]
  }
];

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.23, 1, 0.32, 1]
    }}
    whileHover={{ y: -8 }}
    className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#0D47A1]/30 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
  >
    {/* Top Color Indicator */}
    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-b-full bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo}`} />

    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-blue-50/0 group-hover:to-blue-50/40 transition-all duration-500 pointer-events-none" />

    {/* Badge */}
    <div className="absolute top-6 right-6 z-10">
      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${product.borderColor} ${product.bg} ${product.color} transition-all duration-300`}>
        {product.badge}
      </span>
    </div>

    {/* Logo & Header */}
    <div className="flex items-start gap-5 mb-6 relative z-10">
      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl ${product.bg} border-2 ${product.borderColor} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-500 overflow-hidden`}>
        {/* Background Pattern inside logo container */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />

        {product.isImage ? (
          <img
            src={product.icon}
            alt={`${product.category} Logo`}
            className="relative w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <Bot size={36} className={`${product.color} relative group-hover:scale-110 transition-transform duration-500`} />
        )}
      </div>

      <div className="flex-1 pt-2">
        <h3 className="text-xl md:text-2xl font-bold text-[#061943] group-hover:text-[#0D47A1] transition-colors duration-300 mb-1">
          {product.category}
        </h3>
        <div className="flex items-center gap-2">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <p className="text-sm text-slate-500 font-medium">{product.desc}</p>
        </div>
      </div>
    </div>

    {/* Feature Items Grid */}
    <div className="grid sm:grid-cols-2 gap-3 mb-6 relative z-10">
      {product.items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className={`group/item p-4 rounded-xl ${product.bg} border ${product.borderColor} hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-default`}
        >
          <div className="flex items-start gap-2 mb-1">
            <CheckCircle2 size={14} className={`${product.color} mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform`} />
            <h4 className="font-bold text-slate-800 text-sm group-hover/item:text-slate-900 transition-colors">
              {item.name}
            </h4>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed ml-6">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

    {/* <motion.button
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} text-white hover:shadow-lg ${product.shadow} group/btn relative z-10`}
    >
      Explore {product.category.split(' ')[0]}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </motion.button> */}
  </motion.div>
);

const Products = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden" id="products">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-r from-blue-100/30 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-l from-slate-100/30 to-transparent rounded-full blur-[100px]"
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D47A1 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border-2 border-blue-200/50 mb-8 shadow-sm"
          >
            <Sparkles className="text-[#0D47A1] w-4 h-4" />
            <span className="text-[#0D47A1] text-xs font-bold uppercase tracking-[0.2em]">
              Complete Suite
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Core Product{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#00B4FF]">
                Suites
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-[#0D47A1]/20 to-[#00B4FF]/20 rounded-full -mb-1"
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From comprehensive ERP and CRM systems to intelligent AI-driven workflows —
            everything your business needs to scale.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Modules" },
            { number: "4", label: "Core Suites" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}

      </div>
    </section>
  );
};

export default Products;