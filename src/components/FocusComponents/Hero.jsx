import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Grid3x3,
  ChevronRight
} from "lucide-react";

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: Cloud, text: "Cloud-Hosted Solutions", color: "text-blue-500" },
    { icon: Database, text: "Customizable Platforms", color: "text-purple-500" },
    { icon: Shield, text: "Enterprise Security", color: "text-green-500" },
    { icon: TrendingUp, text: "Industry-Specific", color: "text-orange-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "500+", label: "Enterprise Clients", icon: Users },
    { value: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { value: "24/7", label: "Expert Support", icon: CheckCircle2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-br from-white via-red-50/20 to-white pt-20" id="home">

      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">

        {/* Simple Wave SVG Background */}
        <div className="absolute inset-0 w-full h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#dc2626" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        {/* Simple Circle Pattern SVG */}
        <div className="absolute inset-0 w-full h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#dc2626" />
                <circle cx="0" cy="0" r="1.5" fill="#dc2626" />
                <circle cx="60" cy="60" r="1.5" fill="#dc2626" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>

        {/* Soft Gradient Shading */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-50/30 via-transparent to-orange-50/30" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-100/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50/10 to-transparent" />

        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-r from-red-100/10 via-transparent to-orange-100/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 tracking-tight leading-[1.2] mb-6">
            Achieve Digital
            <br />
            Transformation with
            <span className="relative inline-block ml-4">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                Focus Softnet
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
            Cloud-hosted, customizable, and industry-specific ERP, CRM, and HCM solutions
            tailored for SMEs and Enterprises across the globe.
          </p>
        </motion.div>

        {/* Rotating Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gradient-to-r from-slate-50 to-white backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-200 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Grid3x3 className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-600">Enterprise Features:</span>
              </div>
              <div className="relative w-48 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="flex items-center gap-2"
                  >
                    {React.createElement(features[currentFeature].icon, {
                      className: `w-4 h-4 ${features[currentFeature].color}`
                    })}
                    <span className="text-sm font-semibold text-slate-800">
                      {features[currentFeature].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-red-50/30 backdrop-blur-sm rounded-xl p-6 text-center border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                  <stat.icon className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;