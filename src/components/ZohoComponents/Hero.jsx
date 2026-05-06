import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 bg-white overflow-hidden" id="home">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-blue-100/40 via-blue-50/30 to-transparent rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-slate-100/40 via-slate-50/30 to-transparent rounded-full blur-[150px]"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D47A1 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0D47A1]/20 to-transparent" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0D47A1]/10 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0D47A1]/20 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50 mb-8 shadow-sm"
          >
            <Sparkles className="text-[#0D47A1] w-4 h-4" />
            <span className="text-[#0D47A1] text-xs font-bold uppercase tracking-[0.2em]">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Your Life's Work,{" "}
            <br className="hidden md:block" />
            Powered by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] via-[#1E88E5] to-[#00B4FF]">
                Our Life's Work
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-[#0D47A1]/20 to-[#00B4FF]/20 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A unique and powerful software suite to transform the way you work.
            Designed for businesses of all sizes, built by a company that values
            your privacy and delivers exceptional results.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#0D47A1] to-[#0D47A1] text-white hover:from-[#0B3D8B] hover:to-[#0B3D8B] shadow-lg hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-white text-[#0D47A1] border-2 border-[#0D47A1] hover:bg-blue-50 hover:border-[#0B3D8B] transition-all duration-300 flex items-center justify-center gap-3"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div> */}

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Shield, text: "Enterprise Security" },
              { icon: Zap, text: "Lightning Fast" },
              { icon: Star, text: "99.9% Uptime" },
              { icon: Sparkles, text: "AI-Powered" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0D47A1] transition-colors duration-300 cursor-default"
              >
                <item.icon className="w-4 h-4 text-[#0D47A1]" />
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0D47A1]" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;