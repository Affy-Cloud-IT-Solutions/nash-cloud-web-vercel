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
  ChevronRight,
  BarChart3,
  Globe,
  Lock,
  Smartphone
} from "lucide-react";

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: Globe, text: "Global Business Suite", color: "text-blue-600" },
    { icon: Lock, text: "Privacy First", color: "text-indigo-500" },
    { icon: Smartphone, text: "Mobile Ready", color: "text-cyan-500" },
    { icon: BarChart3, text: "Real-Time Insights", color: "text-blue-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "80M+", label: "Users Worldwide", icon: Users },
    { value: "100+", label: "Business Apps", icon: Database },
    { value: "99.9%", label: "Uptime SLA", icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-white pt-20" id="home">

      {/* Background Elements - Zoho Blue Theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">

        {/* Simple Wave SVG Background */}
        <div className="absolute inset-0 w-full h-full opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#0D47A1" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        {/* Simple Circle Pattern SVG */}
        <div className="absolute inset-0 w-full h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#0D47A1" />
                <circle cx="0" cy="0" r="1.5" fill="#0D47A1" />
                <circle cx="60" cy="60" r="1.5" fill="#0D47A1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>

        {/* Soft Gradient Shading - Zoho Blue Theme */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-indigo-50/30" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-50/10 to-transparent" />

        {/* Subtle Glow - Zoho Blue */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-r from-blue-100/10 via-transparent to-indigo-100/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 mt-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 tracking-tight leading-[1.2] mb-6">
            Your Life's Work,
            <br />
            Powered by
            <span className="relative inline-block ml-4">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
                Zoho
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
            A unique and powerful software suite to transform the way you work.
            Designed for businesses of all sizes, built by a company that values
            your privacy and delivers exceptional results. <strong className="text-blue-600">Zoho</strong> —
            empowering businesses worldwide with cloud-based excellence.
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
                <span className="text-sm font-medium text-slate-600">Zoho Features:</span>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 mb-12"
        >
          {[
            { icon: Shield, text: "Enterprise Security" },
            { icon: Zap, text: "Lightning Fast" },
            { icon: CheckCircle2, text: "99.9% Uptime" },
            { icon: Sparkles, text: "AI-Powered" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              <item.icon className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-600">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;