import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Sparkles, Users, BookOpen, Target, Zap, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OpportunitiesAndTraining = () => {
    const navigate = useNavigate();

    const features = [
        { icon: <Target className="w-5 h-5" />, text: "Industry-focused curriculum" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Hands-on project experience" },
        { icon: <Users className="w-5 h-5" />, text: "Personalized mentorship" },
        { icon: <Zap className="w-5 h-5" />, text: "AI & digital skills training" },
    ];

    return (
        <section
            id="interns-training"
            className="relative py-20 lg:py-28 overflow-hidden bg-[#060B1A]"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, #00B4FF 1px, transparent 1px),
                            linear-gradient(180deg, #00B4FF 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#00B4FF] rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Glow Effects */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0D47A1]/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00B4FF]/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B4FF]/10 text-[#00B4FF] text-sm font-medium mb-6 border border-[#00B4FF]/20">
                        <Sparkles className="w-4 h-4" />
                        TALENT DEVELOPMENT
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Interns <span className="text-[#00B4FF]">Training Programme</span>
                    </h2>

                    <p className="text-[#94A3B8] max-w-2xl mx-auto">
                        Building the next generation of digital & AI professionals
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Card Background */}
                    <div className="relative bg-gradient-to-br from-[#0B172A] to-[#1A2332] rounded-2xl overflow-hidden border border-[#1E293B]">
                        {/* Top Glow Effect */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent"></div>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0"
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-12 lg:p-16">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Column */}
                                <div>
                                    {/* Icon */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                        className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0D47A1]/10 border border-[#00B4FF]/20 mb-8"
                                    >
                                        <GraduationCap className="w-10 h-10 text-[#00B4FF]" />
                                    </motion.div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                        Developing Future-Ready Digital Professionals
                                    </h3>

                                    <p className="text-[#94A3B8] mb-8 leading-relaxed">
                                        At Nash Tech Consulting, we're passionate about building professionals
                                        who thrive in an AI-driven world. Our programme bridges the digital skills
                                        gap and creates sustainable capability pipelines across public and private sectors.
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * index }}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                            >
                                                <div className="p-2 rounded-lg bg-gradient-to-br from-[#00B4FF]/10 to-[#0D47A1]/10">
                                                    {feature.icon}
                                                </div>
                                                <span className="text-white text-sm">{feature.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-8">
                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { value: "100%", label: "Practical Training" },
                                            { value: "24/7", label: "Mentor Support" },
                                            { value: "Real", label: "Project Experience" },
                                            { value: "Industry", label: "Certifications" },
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + index * 0.1 }}
                                                className="p-6 rounded-xl bg-gradient-to-br from-[#0D47A1]/10 to-[#00B4FF]/10 border border-[#00B4FF]/20 text-center"
                                            >
                                                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                                                <div className="text-sm text-[#94A3B8]">{stat.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        className="p-6 rounded-xl bg-gradient-to-r from-[#0D47A1]/20 to-transparent border-l-4 border-[#00B4FF]"
                                    >
                                        <p className="text-white/90 italic mb-4">
                                            "Inspired by industry leaders like Sparta Global and FDM,
                                            we combine structured training with real-world experience
                                            to create confident, capable professionals."
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] flex items-center justify-center">
                                                <GraduationCap className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">Program Director</div>
                                                <div className="text-sm text-[#94A3B8]">Nash Tech Consulting</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="mt-12 pt-8 border-t border-white/10"
                            >
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-2">
                                            Ready to develop future talent?
                                        </h4>
                                        <p className="text-[#94A3B8]">
                                            Partner with us to build your organization's digital capability
                                        </p>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group px-8 py-3 rounded-lg bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] text-white font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-[#00B4FF]/20 transition-all"
                                        onClick={() => navigate("/opportunities")}
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-6 text-sm text-[#94A3B8]">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00B4FF]"></div>
                            <span>SAP Training</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00B4FF]"></div>
                            <span>AI & Machine Learning</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00B4FF]"></div>
                            <span>Cloud Technologies</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00B4FF]"></div>
                            <span>QA Engineering</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OpportunitiesAndTraining;
// stop sto psto pstop sto stop sto psto psto sto sto sto ts o