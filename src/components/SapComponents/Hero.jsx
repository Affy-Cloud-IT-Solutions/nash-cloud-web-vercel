import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 bg-white overflow-hidden" id="home">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-50/30 opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8"
        >
          Power Your Intelligent Enterprise with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            SAP Solutions
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your business processes, enhance customer experiences, and drive sustainable growth with the world's leading enterprise software suite.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
