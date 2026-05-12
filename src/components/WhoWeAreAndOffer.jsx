import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Building2,
    Rocket,
    Target,
    Lightbulb,
    Users,
    TrendingUp,
    CheckCircle2,
    ArrowRight,
    Briefcase,
    GraduationCap,
    Code2,
    Zap,
    Shield,
    Clock
} from "lucide-react";

const WhoWeAreAndOffer = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const controls = {
        whoWeAre: useAnimation(),
        whatWeOffer: useAnimation(),
    };

    useEffect(() => {
        if (isInView) {
            controls.whoWeAre.start("visible");
            controls.whatWeOffer.start("visible");
        }
    }, [isInView, controls]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const stats = [
        { icon: Briefcase, value: "10+", label: "Years Experience", color: "text-blue-400" },
        { icon: Users, value: "100+", label: "Experts Deployed", color: "text-cyan-400" },
        { icon: Building2, value: "50+", label: "Enterprise Clients", color: "text-indigo-400" },
        { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-green-400" },
    ];

    const offerings = [
        {
            icon: Code2,
            title: "Services",
            description: "End-to-end digital transformation with deep expertise in SAP SuccessFactors and HR technologies",
            color: "from-blue-500 to-cyan-500",
            // path: "/sap-landing"
            path: "/sap-services"


        },
        {
            icon: Users,
            title: "Resourcing",
            description: "Top talent and skilled resources that integrate seamlessly into your teams",
            color: "from-indigo-500 to-purple-500",
            path: "/resourcing"
        },
        {
            icon: GraduationCap,
            title: "Internship & Training",
            description: "Hands-on programmes designed to bridge the digital skills gap",
            color: "from-emerald-500 to-teal-500",
            path: "/opportunities"
        }
    ];

    return (
        <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-28 overflow-hidden" id="about">

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1e293b_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] opacity-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 mb-6">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                            Your Trusted Partner
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        Driving Digital Excellence
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Empowering businesses with cutting-edge technology solutions and expert guidance
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 group-hover:scale-110 transition-transform">
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* WHO WE ARE Section */}
                <motion.div
                    initial="hidden"
                    animate={controls.whoWeAre}
                    variants={fadeInUp}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 "
                >
                    {/* Image with Enhanced Styling */}
                    <motion.div
                        variants={fadeInLeft}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                alt="Who We Are"
                                className="w-full h-[400px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -left-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-4 shadow-2xl border border-slate-700 hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <Shield className="w-8 h-8 text-blue-400" />
                                <div>
                                    <div className="text-sm font-semibold text-white">ISO 27001 Certified</div>
                                    <div className="text-xs text-slate-400">Enterprise Security</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={fadeInRight} className="space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                <Building2 className="w-3 h-3 text-blue-400" />
                                <span className="text-xs font-semibold text-blue-400">About Us</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Who We Are
                            </h3>
                        </div>

                        <p className="text-slate-300 leading-relaxed">
                            We are a specialist technology and consulting partner delivering SAP services, AI solutions,
                            and digital transformation support across public and private sectors. With over 10 years
                            of industry experience, we combine technical expertise, top talent, and strategic insight
                            to help organisations accelerate their digital journey and build long-term capability.
                        </p>

                        <p className="text-slate-300 leading-relaxed">
                            We are also committed to developing future-ready professionals through our training and
                            internship programmes, bridging the digital skills gap and preparing talent for an AI-driven world.
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <span className="text-sm text-slate-400">10+ Years of Excellence</span>
                        </div>

                        {/* Key Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                { icon: Target, text: "Strategic Digital Transformation" },
                                { icon: Lightbulb, text: "Innovation-Driven Approach" },
                                { icon: Rocket, text: "Scalable Solutions" },
                                { icon: Clock, text: "24/7 Enterprise Support" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span className="text-sm text-slate-300">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* WHAT WE OFFER Section */}
                <motion.div
                    initial="hidden"
                    animate={controls.whatWeOffer}
                    variants={fadeInUp}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                            <Rocket className="w-3 h-3 text-purple-400" />
                            <span className="text-xs font-semibold text-purple-400">Our Services</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            What We Offer
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Comprehensive solutions tailored to meet your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offerings.map((offering, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                onHoverStart={() => setHoveredCard(idx)}
                                onHoverEnd={() => setHoveredCard(null)}
                                onClick={() => navigate(offering.path)}
                                className="relative group cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${offering.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} />
                                <div className="relative h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">

                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <offering.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-2xl font-bold text-white mb-3">
                                        {offering.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        {offering.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {offering.title === "Services" && (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                                    <span className="text-sm text-slate-400">SAP SuccessFactors Expertise</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                                    <span className="text-sm text-slate-400">Quality Engineering & Testing</span>
                                                </div>
                                            </>
                                        )}
                                        {offering.title === "Resourcing" && (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                                    <span className="text-sm text-slate-400">Skilled Consultants</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                                    <span className="text-sm text-slate-400">Immediate Impact</span>
                                                </div>
                                            </>
                                        )}
                                        {offering.title === "Internship & Training" && (
                                            <>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                                    <span className="text-sm text-slate-400">Hands-on Experience</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                                    <span className="text-sm text-slate-400">Industry-Ready Professionals</span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Hover Arrow */}
                                    <AnimatePresence>
                                        {hoveredCard === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="absolute bottom-8 right-8"
                                            >
                                                <ArrowRight className="w-5 h-5 text-blue-400" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAreAndOffer;