import React from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    CheckCircle,
    Target,
    BookOpen,
    Users,
    Zap,
    TrendingUp,
    Sparkles,
    ArrowRight,
    Briefcase,
    Code,
    Cloud,
    Cpu,
    Database,
    Shield,
    Terminal,
    Server,
    Workflow,
    Network,
    Brain,
} from "lucide-react";

const OpportunitiesAndTrainingPage = () => {
    const features = [
        { icon: <BookOpen className="w-5 h-5" />, text: "Structured Training" },
        { icon: <Target className="w-5 h-5" />, text: "Real Projects" },
        { icon: <Users className="w-5 h-5" />, text: "Mentorship" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Career Growth" }
    ];

    const programmeCards = [
        {
            title: "SAP Specialization",
            icon: <Briefcase className="w-6 h-6" />,
            bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            items: ["HR & Payroll", "SuccessFactors", "Implementation", "Support"]
        },
        {
            title: "AI & Cloud",
            icon: <Cloud className="w-6 h-6" />,
            bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            items: ["Machine Learning", "AWS/Azure", "Automation", "Data Analytics"]
        },
        {
            title: "QA Engineering",
            icon: <Code className="w-6 h-6" />,
            bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            items: ["Test Automation", "Performance", "Security", "DevOps"]
        },
        {
            title: "Career Pathways",
            icon: <TrendingUp className="w-6 h-6" />,
            bg: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
            items: ["Consultant", "Engineer", "Analyst", "Specialist"]
        }
    ];

    const technologies = [
        "SAP", "Python", "AWS", "Azure", "AI/ML", "DevOps",
        "QA Testing", "Cybersecurity", "Data Analytics", "Agile"
    ];

    return (
        <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">

            {/* Hero Section with Background Image */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/80 to-[#1E293B]/90"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4" />
                            Future Talent Development
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Interns <span className="text-[#00B4FF]">Training</span><br />
                            <span className="text-3xl md:text-4xl font-normal mt-4 block">Digital & AI Professionals</span>
                        </h1>

                        <p className="text-xl text-[#CBD5E1] max-w-2xl mx-auto mb-10">
                            Building the next generation of tech talent for an AI-driven world
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                                >
                                    <div className="text-[#00B4FF]">
                                        {feature.icon}
                                    </div>
                                    <span className="text-white font-medium">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSciXvmJv264cS16pb9Bv59INzCcddjXZly78SUfYxFqSJp-Gw/viewform",
                                    "_blank"
                                )
                            }
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] 
  text-white font-semibold shadow-lg hover:shadow-xl 
  transition-all flex items-center gap-3 mx-auto"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>

                    </motion.div>
                </div>
            </section>

            {/* Programme Overview with Tech Background */}
            <section className="relative py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')",
                    }}
                ></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-[#00B4FF]/10 to-[#0D47A1]/10 mb-8">
                            <GraduationCap className="w-8 h-8 text-[#00B4FF]" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Comprehensive <span className="text-[#00B4FF]">Tech Training</span>
                        </h2>

                        <p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto">
                            Our programme combines structured learning with hands-on experience,
                            preparing you for careers in SAP, AI, Cloud, and Quality Engineering.
                        </p>
                    </motion.div>

                    {/* Programme Cards with Image Backgrounds */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {programmeCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
                            >
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/10 to-[#00B4FF]/10 group-hover:from-[#0D47A1]/20 group-hover:to-[#00B4FF]/20 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>

                                {/* Border effect */}
                                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-[#00B4FF]/30 transition-colors"></div>

                                {/* Content */}
                                <div className="relative h-full p-6 flex flex-col justify-between">
                                    {/* Top section with icon */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-r from-[#00B4FF]/10 to-[#0D47A1]/10 group-hover:from-[#00B4FF]/20 group-hover:to-[#0D47A1]/20 transition-all">
                                            <div className="text-[#00B4FF]">
                                                {card.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                                    </div>

                                    {/* Items list */}
                                    <div className="space-y-2">
                                        {card.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#00B4FF]"></div>
                                                <span className="text-sm text-white/80">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom indicator */}
                                    {/* <div className="pt-4 mt-4 border-t border-white/10 group-hover:border-[#00B4FF]/30 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-white/60">Learn more</span>
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00B4FF]/10 to-[#0D47A1]/10 flex items-center justify-center">
                                                <ArrowRight className="w-3 h-3 text-[#00B4FF]" />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-8 border border-white/10"
                    >
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <Cpu className="w-6 h-6 text-[#00B4FF]" />
                            <h3 className="text-2xl font-bold text-white">Tech Stack Mastery</h3>
                            <Code className="w-6 h-6 text-[#00B4FF]" />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {technologies.map((tech, index) => {
                                const icons = [
                                    <Cpu className="w-6 h-6" />,
                                    <Code className="w-6 h-6" />,
                                    <Cloud className="w-6 h-6" />,
                                    <Server className="w-6 h-6" />,
                                    <Database className="w-6 h-6" />,
                                    <Shield className="w-6 h-6" />,
                                    <Terminal className="w-6 h-6" />,
                                    <Workflow className="w-6 h-6" />,
                                    <Network className="w-6 h-6" />,
                                    <Brain className="w-6 h-6" />
                                ];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="group relative"
                                    >
                                        <div className="bg-gradient-to-br from-[#0D47A1]/10 to-[#00B4FF]/10 rounded-xl p-6 border border-white/10 group-hover:border-[#00B4FF]/30 transition-all duration-300">
                                            <motion.div
                                                animate={{
                                                    rotate: [0, 5, -5, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.2
                                                }}
                                                className="flex justify-center mb-4"
                                            >
                                                <div className="p-3 rounded-lg bg-gradient-to-r from-[#00B4FF]/20 to-[#0D47A1]/20">
                                                    {icons[index % icons.length]}
                                                </div>
                                            </motion.div>

                                            <div className="text-center">
                                                <div className="text-white font-semibold mb-2">{tech}</div>
                                                <div className="text-xs text-[#94A3B8]">Expert Level</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section with Pattern Background */}
            <section className="relative py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-5"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1920&q=80')",
                    }}
                ></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">
                                Why <span className="text-[#00B4FF]">Choose</span> Our Programme
                            </h2>

                            <div className="space-y-6">
                                {[
                                    "Industry-aligned curriculum with latest technologies",
                                    "Hands-on experience with real client projects",
                                    "Personalized mentorship from industry experts",
                                    "Direct pathway to employment opportunities",
                                    "Continuous learning and certification support",
                                    "Networking with professionals and alumni"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <CheckCircle className="w-6 h-6 text-[#00B4FF] mt-1 flex-shrink-0" />
                                        <span className="text-lg text-white">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="rounded-2xl overflow-hidden h-96"
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/80 to-transparent flex items-end p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Real Experience</h3>
                                        <p className="text-white/80">Work on actual projects from day one</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Gradient Background */}
            <section className="relative py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/90 via-[#0D47A1]/80 to-[#00B4FF]/90"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Launch Your <span className="text-[#00B4FF]">Tech Career</span>?
                        </h2>

                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Join our programme and become part of the next generation of digital innovators
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    window.open(
                                        "https://docs.google.com/forms/d/e/1FAIpQLSciXvmJv264cS16pb9Bv59INzCcddjXZly78SUfYxFqSJp-Gw/viewform",
                                        "_blank"
                                    )
                                }
                                className="px-10 py-4 rounded-full bg-white text-[#0D47A1] 
  font-semibold shadow-lg hover:shadow-xl 
  transition-all flex items-center gap-3"
                            >
                                Apply Now
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>


                            <button className="px-10 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">
                                Download Brochure
                            </button>
                        </div>

                        <p className="text-white/60 mt-8 text-sm">
                            Next intake starts in January 2024 • Limited seats available
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Floating elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#00B4FF] rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default OpportunitiesAndTrainingPage;