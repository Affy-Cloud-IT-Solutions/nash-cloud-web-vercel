import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  Wrench,
  Building2,
  Utensils,
  HeartPulse,
  GraduationCap,
  Plane,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

const industries = [
  {
    name: "Distribution & Wholesale",
    icon: Truck,
    desc: "Streamline supply chain and inventory control with intelligent automation and real-time tracking.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    shadow: "shadow-blue-100",
    features: ["Inventory Control", "Supply Chain", "Order Management"]
  },
  {
    name: "Logistics & Transport",
    icon: Plane,
    desc: "Optimize fleet, routes, and delivery operations with AI-powered logistics management.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    textColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    shadow: "shadow-cyan-100",
    features: ["Fleet Tracking", "Route Optimization", "Delivery Management"]
  },
  {
    name: "Process Manufacturing",
    icon: Factory,
    desc: "Manage formulas, quality, and batch production with precision and compliance.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
    shadow: "shadow-indigo-100",
    features: ["Formula Management", "Quality Control", "Batch Processing"]
  },
  {
    name: "Discrete Manufacturing",
    icon: Wrench,
    desc: "Control parts, BOMs, and product assembly with end-to-end visibility.",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    shadow: "shadow-orange-100",
    features: ["BOM Management", "Assembly Control", "Parts Tracking"]
  },
  {
    name: "Support & Facilities",
    icon: Building2,
    desc: "Automate tasks, schedules, and compliance for seamless facility operations.",
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    shadow: "shadow-green-100",
    features: ["Task Automation", "Compliance", "Scheduling"]
  },
  {
    name: "Accommodation & Food",
    icon: Utensils,
    desc: "Enhance bookings, menus, and guest service with integrated hospitality solutions.",
    color: "from-red-500 to-red-600",
    bg: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    shadow: "shadow-red-100",
    features: ["Booking System", "Menu Management", "Guest Services"]
  },
  {
    name: "Social & Nonprofit",
    icon: HeartPulse,
    desc: "Track donations, budgets, and outreach impact with transparency and accountability.",
    color: "from-pink-500 to-pink-600",
    bg: "bg-pink-50",
    textColor: "text-pink-600",
    borderColor: "border-pink-200",
    shadow: "shadow-pink-100",
    features: ["Donation Tracking", "Budget Management", "Impact Analytics"]
  },
  {
    name: "Engineering Services",
    icon: GraduationCap,
    desc: "Simplify job costing and project workflows with specialized engineering tools.",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    shadow: "shadow-purple-100",
    features: ["Job Costing", "Project Workflows", "Resource Planning"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Industries = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden" id="industries">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-l from-blue-100/30 to-transparent rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-r from-slate-100/30 to-transparent rounded-full blur-[120px]"
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
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border-2 border-blue-200/50 mb-8 shadow-sm"
          >
            <Sparkles className="text-[#0D47A1] w-4 h-4" />
            <span className="text-[#0D47A1] text-xs font-bold uppercase tracking-[0.2em]">
              Industry Solutions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Tailored by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#00B4FF]">
                Industry
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
            Focus Softnet provides specialized modules adapted to the unique
            challenges of your industry.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#0D47A1]/30 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
              >
                {/* Top Color Indicator */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-b-full bg-gradient-to-r ${industry.color}`} />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-blue-50/0 group-hover:to-blue-50/30 transition-all duration-500 pointer-events-none" />

                {/* Icon Container */}
                <div className={`relative w-16 h-16 mx-auto mb-5 rounded-2xl ${industry.bg} border-2 ${industry.borderColor} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl" />
                  <IconComponent size={28} className={`${industry.textColor} relative group-hover:scale-110 transition-transform duration-500`} />
                </div>

                {/* Content */}
                <div className="text-center mb-5">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <h3 className="text-lg font-bold text-[#061943] group-hover:text-[#0D47A1] transition-colors duration-300">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {industry.desc}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {industry.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 text-[10px] font-semibold rounded-lg ${industry.bg} ${industry.textColor} border ${industry.borderColor} group-hover:shadow-sm transition-all duration-300`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                {/* <div className="text-center">
                  <motion.button
                    whileHover={{ x: 3 }}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${industry.textColor} group/link transition-colors duration-300`}
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </motion.button>
                </div> */}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: "25+", label: "Years of Industry Experience" },
            { number: "500+", label: "Enterprise Clients Worldwide" },
            { number: "8+", label: "Industry Specializations" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-slate-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-10 pt-10 border-t-2 border-slate-100 text-center"
        >
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Specialized solutions designed to meet the unique demands of your industry
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;