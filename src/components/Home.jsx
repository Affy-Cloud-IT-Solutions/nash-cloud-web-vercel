import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
    Sparkles,
    Globe,
    Zap,
    Network,
    Building2,
    Award,
    Star,
    Users,
    CheckCircle2
} from "lucide-react";

import sapLogo from "../assets/SAPLogo.jpg";
import odooLogo from "../assets/OdooLogo.png";
import zohoLogo from "../assets/ZOHOLogo.png";
import focusLogo from "../assets/focus-logo.png";

const platforms = [
    { name: "SAP", color: "from-blue-400 to-blue-600", logo: sapLogo, gradient: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30" },
    { name: "Odoo", color: "from-indigo-400 to-indigo-600", logo: odooLogo, gradient: "from-indigo-500/20 to-purple-500/20", border: "border-indigo-500/30" },
    { name: "Zoho", color: "from-yellow-400 to-orange-500", logo: zohoLogo, gradient: "from-orange-500/20 to-amber-500/20", border: "border-orange-500/30" },
    { name: "Focus Softnet", color: "from-red-400 to-red-600", logo: focusLogo, gradient: "from-rose-500/20 to-pink-500/20", border: "border-rose-500/30" },
];

const Home = () => {
    const [currentPlatform, setCurrentPlatform] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        let timer;

        if (!isCollapsed) {
            timer = setTimeout(() => {
                setIsCollapsed(true);
            }, 5000);
        }

        return () => clearTimeout(timer);
    }, [isCollapsed]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlatform((prev) => (prev + 1) % platforms.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020817] pt-20" id="home">

            {/* Premium Animated Background - Lowest z-index */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-r from-blue-900/30 to-cyan-900/30 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-l from-indigo-900/30 to-purple-900/30 blur-[150px] rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-800/10 via-transparent to-purple-800/10 blur-[120px] rounded-full" />

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 animate-pulse" />
            </div>

            {/* Main Content - Medium z-index */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20">

                {/* Top Status Badge */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
                        <div className="relative">
                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                            <div className="absolute inset-0 bg-blue-400 rounded-full blur-sm animate-ping opacity-50" />
                        </div>
                        <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                            Enterprise Implementation Partners
                        </span>
                        <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                    </div>
                </motion.div> */}

                {/* Main Hero Section Side by Side */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 mb-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight mb-6">
                            Transform With
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                                Enterprise Power
                            </span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            We deploy, customize, and scale world-class ERP and CRM solutions tailored to your business.
                            Seamlessly connect your operations with our trusted implementation strategies.
                        </p>

                        {/* Platform Rotator */}
                        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-slate-700/50 mb-4">
                            <span className="text-slate-300 font-medium">Expertise in</span>
                            <div className="relative w-44 h-8 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentPlatform}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -30, opacity: 0 }}
                                        transition={{ duration: 0.4, type: "spring" }}
                                        className={`absolute inset-0 flex items-center text-transparent bg-clip-text bg-gradient-to-r ${platforms[currentPlatform].color} font-bold text-xl`}
                                    >
                                        {platforms[currentPlatform].name}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300"
                        >
                            Explore Enterprise Solutions
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.button>
                    </motion.div>

                    {/* Right Side - Premium Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 grid grid-cols-2 gap-4"
                    >
                        {[
                            { icon: Building2, value: "500+", label: "Projects Delivered", color: "text-blue-400", bg: "from-blue-500/10 to-blue-600/5" },
                            { icon: Globe, value: "25+", label: "Countries Served", color: "text-cyan-400", bg: "from-cyan-500/10 to-cyan-600/5" },
                            { icon: Users, value: "98%", label: "Client Satisfaction", color: "text-green-400", bg: "from-green-500/10 to-green-600/5" },
                            { icon: Award, value: "4.9", label: "Client Rating", color: "text-yellow-400", bg: "from-yellow-500/10 to-yellow-600/5" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.bg} backdrop-blur-sm border border-white/10 p-6 group cursor-pointer`}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Star className="w-3 h-3 text-yellow-400" />
                                        </div>
                                    </div>
                                    <div className={`text-3xl font-bold text-white mb-1 ${stat.value === "4.9" ? "flex items-baseline gap-1" : ""}`}>
                                        {stat.value}
                                        {stat.value === "4.9" && <span className="text-sm text-slate-400">/5</span>}
                                    </div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Floating Trust Badge - HIGHEST Z-INDEX */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[9999] hidden lg:flex pointer-events-auto"
            >
                <motion.div
                    layout
                    transition={{
                        duration: 0.35,
                        type: "spring",
                        stiffness: 220,
                        damping: 22,
                    }}
                    onClick={() => setIsCollapsed(false)}
                    className="overflow-hidden cursor-pointer rounded-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl"
                >
                    <AnimatePresence mode="wait">

                        {/* EXPANDED */}
                        {!isCollapsed ? (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25 }}
                                className="flex items-center gap-6 px-6 py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-yellow-400" />
                                    <span className="text-sm text-slate-300">
                                        Enterprise-Grade Solutions
                                    </span>
                                </div>

                                <div className="w-px h-4 bg-slate-700" />

                                <div className="flex items-center gap-2">
                                    <Network className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm text-slate-300">
                                        Seamless Integration
                                    </span>
                                </div>

                                <div className="w-px h-4 bg-slate-700" />

                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[sapLogo, odooLogo, zohoLogo, focusLogo].map((logo, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -2 }}
                                                className="w-8 h-8 bg-white rounded-full p-1 shadow-lg"
                                            >
                                                <img
                                                    src={logo}
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <span className="text-sm font-semibold text-white">
                                        Official Partners
                                    </span>
                                </div>
                            </motion.div>
                        ) : (

                            /* COLLAPSED */
                            <motion.div
                                key="collapsed"
                                initial={{ opacity: 0, width: 120 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-3 px-4 py-2.5"
                            >
                                <div className="flex -space-x-2">
                                    {[sapLogo, odooLogo, zohoLogo, focusLogo].map((logo, i) => (
                                        <div
                                            key={i}
                                            className="w-7 h-7 bg-white rounded-full p-1 shadow-lg"
                                        >
                                            <img
                                                src={logo}
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <span className="text-sm font-medium text-white whitespace-nowrap">
                                    Official Partners
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;