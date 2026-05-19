import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    ShieldCheck,
    Sparkles,
    Zap,
    Network,
    Building2,
    Award,
    Star,
    Users,
    Briefcase,
} from "lucide-react";

import sapLogo from "../assets/SAPLogo.jpg";
import odooLogo from "../assets/OdooLogo.png";
import zohoLogo from "../assets/ZOHOLogo.png";
import focusLogo from "../assets/focus-logo.png";

const platforms = [
    { name: "SAP", color: "from-blue-400 to-blue-600", logo: sapLogo },
    { name: "Odoo", color: "from-indigo-400 to-indigo-600", logo: odooLogo },
    { name: "Zoho", color: "from-yellow-400 to-orange-500", logo: zohoLogo },
    { name: "Focus Softnet", color: "from-red-400 to-red-600", logo: focusLogo },
];

const EnhancedHome = () => {
    const navigate = useNavigate();
    const [currentPlatform, setCurrentPlatform] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <style>{`
                @keyframes slide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(8px); opacity: 0; }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes aurora {
                    0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.3; }
                    50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.3); opacity: 0.5; }
                    100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 0.3; }
                }
                @keyframes shimmerFlow {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes floatLight {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    25% { transform: translateY(-15px) translateX(10px); }
                    50% { transform: translateY(5px) translateX(-5px); }
                    75% { transform: translateY(-5px) translateX(15px); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-400 { animation-delay: 0.4s; }
                .animation-delay-600 { animation-delay: 0.6s; }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                .animate-scroll {
                    animation: scroll 1.5s ease-in-out infinite;
                }
                .animate-aurora {
                    animation: aurora 15s ease-in-out infinite;
                }
                .animate-float-light {
                    animation: floatLight 8s ease-in-out infinite;
                }
            `}</style>

            <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#05050A] pt-10" id="home">

                {/* ===== BREATHTAKING PREMIUM BACKGROUND ===== */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">

                    {/* Deep Abyss Base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#05050A] via-[#0A0A18] to-[#05050A]" />

                    {/* Northern Lights / Aurora Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] rounded-full animate-aurora"
                            style={{
                                background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1), rgba(6,182,212,0.08), rgba(236,72,153,0.05))',
                                filter: 'blur(80px)',
                            }}
                        />
                        <div className="absolute bottom-[10%] right-[5%] w-[70%] h-[50%] rounded-full animate-aurora"
                            style={{
                                animationDelay: '-5s',
                                background: 'linear-gradient(225deg, rgba(139,92,246,0.12), rgba(59,130,246,0.08), rgba(6,182,212,0.06), rgba(168,85,247,0.04))',
                                filter: 'blur(100px)',
                            }}
                        />
                    </div>

                    {/* Ethereal Light Beams */}
                    <div className="absolute inset-0">
                        <div className="absolute top-[-20%] left-[10%] w-[1px] h-[140%] bg-gradient-to-b from-transparent via-blue-400/15 to-transparent transform rotate-12" />
                        <div className="absolute top-[-20%] left-[30%] w-[2px] h-[140%] bg-gradient-to-b from-transparent via-purple-400/8 to-transparent transform -rotate-6" />
                        <div className="absolute top-[-20%] left-[50%] w-[1px] h-[140%] bg-gradient-to-b from-transparent via-cyan-400/12 to-transparent transform rotate-8" />
                        <div className="absolute top-[-20%] left-[70%] w-[1.5px] h-[140%] bg-gradient-to-b from-transparent via-pink-400/6 to-transparent transform -rotate-10" />
                        <div className="absolute top-[-20%] left-[85%] w-[1px] h-[140%] bg-gradient-to-b from-transparent via-blue-400/10 to-transparent transform rotate-5" />
                    </div>

                    {/* Cinematic Light Leaks */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-[40%] h-[30%] bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-[35%] h-[25%] bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl" />
                        <div className="absolute top-[40%] right-[10%] w-[25%] h-[35%] bg-gradient-to-bl from-cyan-500/4 to-transparent rounded-full blur-3xl" />
                    </div>

                    {/* Floating Glass Orbs */}
                    <div className="absolute top-[15%] right-[15%] w-72 h-72 animate-float-light">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/8 via-transparent to-purple-500/5 backdrop-blur-3xl" />
                        <div className="absolute inset-[15%] rounded-full bg-white/5 backdrop-blur-2xl" />
                        <div className="absolute inset-[30%] rounded-full bg-blue-400/10 blur-xl" />
                    </div>
                    <div className="absolute bottom-[20%] left-[10%] w-96 h-96 animate-float-light" style={{ animationDelay: '-4s' }}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-purple-500/6 via-transparent to-pink-500/4 backdrop-blur-3xl" />
                        <div className="absolute inset-[20%] rounded-full bg-white/4 backdrop-blur-2xl" />
                        <div className="absolute inset-[35%] rounded-full bg-purple-400/8 blur-xl" />
                    </div>

                    {/* Subtle Particle Field */}
                    <div className="absolute inset-0">
                        {[...Array(80)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: `${2 + Math.random() * 4}px`,
                                    height: `${2 + Math.random() * 4}px`,
                                    background: `radial-gradient(circle, rgba(255,255,255,${0.1 + Math.random() * 0.2}), transparent)`,
                                    animation: `fadeInUp ${3 + Math.random() * 4}s ease-in-out infinite`,
                                    animationDelay: `${Math.random() * 6}s`,
                                    opacity: 0.2 + Math.random() * 0.3,
                                }}
                            />
                        ))}
                    </div>

                    {/* Elegant Corner Accents */}
                    <div className="absolute top-0 left-0 w-48 h-48">
                        <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-white/8 rounded-tl-3xl" />
                        <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-white/5 rounded-tl-2xl" />
                    </div>
                    <div className="absolute top-0 right-0 w-48 h-48">
                        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/8 rounded-tr-3xl" />
                        <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-white/5 rounded-tr-2xl" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-48 h-48">
                        <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/8 rounded-bl-3xl" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-white/5 rounded-bl-2xl" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-48 h-48">
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-white/8 rounded-br-3xl" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-white/5 rounded-br-2xl" />
                    </div>

                    {/* Sophisticated Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.015]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 40%, white 1.5px, transparent 1.5px)`,
                            backgroundSize: '60px 60px',
                        }}
                    />

                    {/* Mouse-Interactive Highlight */}
                    <div
                        className="absolute w-[500px] h-[500px] rounded-full transition-all duration-500 ease-out pointer-events-none"
                        style={{
                            background: `radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)`,
                            left: mousePosition.x - 250,
                            top: mousePosition.y - 250,
                            filter: 'blur(40px)',
                        }}
                    />

                    {/* Dark Vignette Frame */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#05050A]/30 via-transparent to-[#05050A]/30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/20 via-transparent to-[#05050A]/40" />

                    {/* Subtle Scan Line */}
                    <div className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)`,
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
                    <div className="text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-[#00B4FF]" />
                            <span className="text-sm text-gray-300">Trusted by industry leaders worldwide</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight"
                        >
                            <span className="bg-gradient-to-r from-white via-[#00B4FF] to-[#7C3AED] bg-clip-text text-transparent animate-gradient">
                                Transform Your Business
                            </span>
                            <br />
                            <span className="text-white">With TechTrade</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl max-w-3xl mx-auto mb-6"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="inline-block font-bold bg-gradient-to-r from-[#00B4FF] via-[#7C3AED] to-[#00B4FF] bg-clip-text text-transparent animate-gradient"
                            >
                                Analyse. Automate. Accelerate.
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-gray-400"
                            >
                                {" "}— We deliver expert SAP solutions, innovative IT strategies, and industry-leading training that drives real results.
                            </motion.span>
                        </motion.p>
                        {/* Platform Rotator */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-slate-700/50 mb-8"
                        >
                            <span className="text-slate-300 font-medium">Enterprise Expertise in</span>
                            <div className="relative w-64 h-9 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPlatform}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -30, opacity: 0 }}
                                        transition={{ duration: 0.4, type: "spring" }}
                                        className="absolute inset-0 flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center overflow-hidden shrink-0 border border-white/10">
                                            <img
                                                src={platforms[currentPlatform].logo}
                                                alt={platforms[currentPlatform].name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${platforms[currentPlatform].color} font-bold text-xl md:text-2xl`}>
                                            {platforms[currentPlatform].name}
                                        </span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                        >
                            <button
                                onClick={() => navigate('/about', { state: { scrollTo: 'about-techtrade' } })}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] text-white font-semibold text-lg shadow-lg shadow-[#00B4FF]/20 hover:shadow-[#00B4FF]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                Discover Our Story
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => {
                                    const el = document.getElementById('partners');
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                            >
                                Explore Our Partners
                                <Zap className="w-4 h-4" />
                            </button>
                        </motion.div>

                        {/* Stats Row */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
                        >
                            {[
                                { value: "9+", label: "Years of Excellence", icon: Award },
                                { value: "500+", label: "Projects Delivered", icon: Briefcase },
                                { value: "200+", label: "Professionals Trained", icon: Users },
                                { value: "98%", label: "Client Satisfaction", icon: Star },
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="text-center group">
                                        <div className="flex justify-center mb-2">
                                            <div className="p-2 rounded-xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0D47A1]/10 group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6 text-[#00B4FF]" />
                                            </div>
                                        </div>
                                        <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </motion.div> */}
                    </div>
                </div>

                {/* Floating Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
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
                            {!isCollapsed ? (
                                <motion.div
                                    key="expanded"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex items-center gap-6 px-6 py-3"
                                >
                                    <div className="flex items-center gap-2 shrink-0">
                                        <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                                        <span className="text-sm text-slate-300 whitespace-nowrap">
                                            Enterprise-Grade Solutions
                                        </span>
                                    </div>

                                    <div className="w-px h-4 bg-slate-700 shrink-0" />

                                    <div className="flex items-center gap-2 shrink-0">
                                        <Network className="w-4 h-4 text-cyan-400 shrink-0" />
                                        <span className="text-sm text-slate-300 whitespace-nowrap">
                                            Seamless Integration
                                        </span>
                                    </div>

                                    <div className="w-px h-4 bg-slate-700 shrink-0" />

                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="flex -space-x-2 shrink-0">
                                            {[sapLogo, odooLogo, zohoLogo, focusLogo].map((logo, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -2 }}
                                                    className="w-8 h-8 bg-white rounded-full p-1 shadow-lg shrink-0"
                                                >
                                                    <img
                                                        src={logo}
                                                        alt=""
                                                        className="w-full h-full object-contain"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                        <span className="text-sm font-semibold text-white whitespace-nowrap">
                                            Official Partners
                                        </span>
                                    </div>
                                </motion.div>
                            ) : (
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
        </>
    );
};

export default EnhancedHome;