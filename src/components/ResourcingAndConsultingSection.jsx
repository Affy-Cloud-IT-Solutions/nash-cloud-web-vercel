import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Sparkles, Target, Zap, Shield, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResourcingAndConsultingSection = () => {
    const navigate = useNavigate();

    // Feature cards data
    const features = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Strategic Talent Acquisition",
            description: "Pre-vetted professionals aligned with your business goals"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Rapid Deployment",
            description: "Onboard skilled talent in weeks, not months"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Risk Mitigation",
            description: "Guaranteed quality with our rigorous vetting process"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Reach",
            description: "Access to talent across 50+ countries"
        }
    ];

    return (
        <section className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{ y: -100, x: Math.random() * 100 }}
                        animate={{
                            y: [0, 1000],
                            x: [0, Math.sin(i) * 50]
                        }}
                        transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                        style={{
                            left: `${10 + (i * 7)}%`,
                            opacity: 0.3 + Math.random() * 0.4
                        }}
                    />
                ))}
            </div>

            {/* Enhanced Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-400/5 blur-[100px] rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full 
                                     bg-white/5 backdrop-blur-sm border border-white/10 
                                     text-cyan-300 text-sm font-semibold mb-8 
                                     hover:bg-white/10 transition-colors cursor-pointer"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Talent & Consulting Excellence
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Resourcing &
                            </span>
                            <br />
                            <span className="text-white">Consulting Solutions</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-300 leading-relaxed mb-10"
                        >
                            Scale your workforce with elite, agile talent across <span className="text-cyan-300 font-semibold">SAP</span>,{" "}
                            <span className="text-blue-300 font-semibold">Digital Transformation</span>,{" "}
                            <span className="text-indigo-300 font-semibold">Cloud</span>, and{" "}
                            <span className="text-purple-300 font-semibold">AI</span> initiatives.
                            Our experts integrate seamlessly to accelerate your success.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-8 mb-10"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-400">98%</div>
                                <div className="text-sm text-gray-400">Client Retention</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400">500+</div>
                                <div className="text-sm text-gray-400">Experts Deployed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-indigo-400">24/7</div>
                                <div className="text-sm text-gray-400">Global Support</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/resourcing")}
                                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 
                                         text-white font-semibold overflow-hidden shadow-2xl
                                         hover:shadow-cyan-500/25 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 
                                              group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    Explore Solutions
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/contact")}
                                className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm 
                                         border border-white/10 text-white font-semibold
                                         hover:bg-white/10 hover:border-white/20 
                                         transition-all duration-300"
                            >
                                Schedule Consultation
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] 
                                         backdrop-blur-sm border border-white/10
                                         hover:border-cyan-500/30 hover:bg-white/10 
                                         transition-all duration-300 cursor-pointer flex flex-col items-center"
                            >
                                {/* Card Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
                                              rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>

                                {/* Icon */}
                                <div className="relative mb-4 inline-flex p-3 rounded-xl 
                                              bg-gradient-to-br from-cyan-500/20 to-blue-500/20
                                              group-hover:from-cyan-500/30 group-hover:to-blue-500/30
                                              transition-all duration-300">
                                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="relative text-lg font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="relative text-sm text-gray-400 leading-relaxed text-center">
                                    {feature.description}
                                </p>


                                {/* Arrow Indicator */}
                                <div className="relative mt-4 text-cyan-400 opacity-0 
                                              group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ResourcingAndConsultingSection;