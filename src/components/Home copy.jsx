import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight, ShieldCheck, Sparkles, ChevronRight, Zap,
    TrendingUp, Users, Clock, Star, CheckCircle, Play,
    BarChart3, Briefcase, Target, Award
} from "lucide-react";

import sapLogo from "../assets/SAPLogo.jpg";
import odooLogo from "../assets/OdooLogo.png";
import zohoLogo from "../assets/ZOHOLogo.png";
import focusLogo from "../assets/focus-logo.png";

const platforms = [
    { name: "SAP", color: "from-blue-500 to-cyan-500", logo: sapLogo, rating: 4.9, clients: "2,500+" },
    { name: "Odoo", color: "from-indigo-500 to-purple-500", logo: odooLogo, rating: 4.8, clients: "1,800+" },
    { name: "Zoho", color: "from-amber-500 to-orange-500", logo: zohoLogo, rating: 4.7, clients: "1,200+" },
    { name: "Focus Softnet", color: "from-rose-500 to-pink-500", logo: focusLogo, rating: 4.8, clients: "900+" },
];

const stats = [
    { icon: Briefcase, value: "500+", label: "Projects Delivered", color: "text-blue-400" },
    { icon: Users, value: "98%", label: "Client Retention", color: "text-green-400" },
    { icon: Clock, value: "24/7", label: "Support Available", color: "text-purple-400" },
    { icon: TrendingUp, value: "3x", label: "ROI Increase", color: "text-amber-400" },
];

const Home = () => {
    const [currentPlatform, setCurrentPlatform] = useState(0);
    const [activeStat, setActiveStat] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlatform((prev) => (prev + 1) % platforms.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20"
            id="home"
        >
            {/* Modern Minimalist Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Subtle Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-cyan-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/10 to-pink-600/10 blur-[120px] rounded-full" />

                {/* Diagonal Lines Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
                </svg>
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16"
            >
                {/* Premium Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-xl">
                        <div className="relative">
                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-blue-400 rounded-full blur-sm"
                            />
                        </div>
                        <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                            #1 Trusted Implementation Partner
                        </span>
                        <Sparkles className="w-3 h-3 text-yellow-400" />
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6">
                        Transform Your Business
                        <br />
                        <span className="relative inline-block mt-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                                With Enterprise Power
                            </span>
                            <motion.div
                                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        We deploy, customize, and scale world-class ERP and CRM solutions tailored to your business.
                        Seamlessly connect your operations and accelerate growth with our trusted implementation strategies.
                    </p>
                </motion.div>

                {/* Rotating Platform Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center mb-12"
                >
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-1 border border-slate-700/50">
                        <div className="flex items-center gap-4">
                            <div className="px-4 py-2 text-slate-400 font-medium">Expertise in:</div>
                            <div className="relative w-48">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPlatform}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -30, opacity: 0 }}
                                        transition={{ duration: 0.4, type: "spring" }}
                                        className={`text-transparent bg-clip-text bg-gradient-to-r ${platforms[currentPlatform].color} font-bold text-2xl text-center`}
                                    >
                                        {platforms[currentPlatform].name}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })}
                        className="group relative px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-blue-600/30"
                    >
                        <span className="relative z-10">Explore Platforms</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="relative z-10"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700"
                            initial={{ x: "100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-10 py-4 rounded-xl bg-slate-800/80 backdrop-blur-xl text-white font-bold text-lg border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-3 hover:shadow-xl group"
                    >
                        Consult an Expert
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.02 }}
                            onHoverStart={() => setActiveStat(index)}
                            onHoverEnd={() => setActiveStat(null)}
                            className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="p-2 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50">
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-400">{stat.label}</div>

                            <AnimatePresence>
                                {activeStat === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute -top-2 -right-2"
                                    >
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Platform Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Trusted by Industry Leaders</h2>
                        <p className="text-slate-400">Partnering with world-class enterprise solutions</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={platform.name}
                                whileHover={{ y: -8, scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })}
                                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white/95 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>

                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="text-sm text-white font-semibold">{platform.rating}</span>
                                        </div>
                                        <span className="text-xs text-slate-500">•</span>
                                        <span className="text-sm text-slate-400">{platform.clients} clients</span>
                                    </div>

                                    <div className="flex items-center justify-center gap-1 text-xs text-slate-400">
                                        <CheckCircle className="w-3 h-3 text-green-400" />
                                        <span>Certified Partner</span>
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;