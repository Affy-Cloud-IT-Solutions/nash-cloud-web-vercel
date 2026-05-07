import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Rocket,
    Lightbulb,
    Wrench,
    Users,
    GraduationCap,
    ChevronRight,
    ArrowRight,
    Zap,
    Shield,
    Cpu,
    TrendingUp,
    Sparkles,
    Boxes
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
    {
        title: "SAP Services",
        description:
            "End-to-end SAP implementation, support, optimization, and integration services to maximize value and streamline processes.",
        icon: <Cpu className="w-6 h-6" />,
        features: ["Implementation", "Integration", "Migration", "Support"],
        link: "/sap-services"
    },
    {
        title: "Digital Transformation",
        description:
            "Modernize legacy systems with cloud, AI, and automation for scalable, agile, and measurable business outcomes.",
        icon: <TrendingUp className="w-6 h-6" />,
        features: ["Cloud Solutions", "AI Integration", "Automation", "Modernization"],
        link: "/digital-transformation"
    },
    {
        title: "QA Engineering",
        description:
            "Ensure reliability, performance, and security across applications with comprehensive testing and quality assurance.",
        icon: <Shield className="w-6 h-6" />,
        features: ["Test Automation", "Performance", "Security", "Continuous QA"],
        link: "/qa-engineering"
    },
    {
        title: "Resourcing",
        description:
            "Flexible resourcing with skilled consultants and engineers who integrate seamlessly to accelerate delivery.",
        icon: <Users className="w-6 h-6" />,
        features: ["Consultants", "Team Augmentation", "Staffing", "Skill Matching"],
        link: "/resourcing"
    },
    {
        title: "Interns Programme",
        description:
            "Develop future-ready talent across SAP, AI, cloud, and QA to bridge the digital skills gap.",
        icon: <GraduationCap className="w-6 h-6" />,
        features: ["Training", "Mentorship", "Projects", "Placement"],
        link: "/opportunities"
    },
    {
        title: "Bespoke Products",
        description:
            "Innovative in-house digital products designed to streamline operations, enhance productivity, and support scalable business growth.",
        icon: <Boxes className="w-5 h-5" />,
        features: [
            "Workflow Automation",
            "SaaS Platforms",
            "Analytics Dashboards",
            "Scalable Architecture"
        ],
        link: "/internal-product"
    }

];

const SapServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();


    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
            {/* Tech Pattern Background */}
            <div className="absolute inset-0 bg-[#F8FAFC]">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, #0D47A1 1px, transparent 1px),
                            linear-gradient(180deg, #0D47A1 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 -right-20 w-40 h-40 border border-[#0D47A1]/10 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-10 w-20 h-20 border border-[#00B4FF]/10 rounded-full"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Minimal Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-white/80 border border-blue-200 text-blue-700 text-sm font-medium shadow">
                        <Zap className="w-4 h-4" />
                        OUR EXPERTISE
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061943] mb-6">
                        Professional <span className="text-[#0D47A1]">Tech Services</span>
                    </h2>

                    <p className="text-[#475569] max-w-2xl mx-auto">
                        Comprehensive digital solutions to transform your business
                    </p>
                </motion.div>

                {/* Simplified Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                            // whileHover={{ scale: 1.02 }}
                            // transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative h-full flex"
                        >
                            {/* Card */}
                            <div
                                onClick={() => navigate(service.link)}
                                className="relative flex-1 bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#0D47A1]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/50 text-center flex flex-col items-center cursor-pointer h-full"
                            >
                                {/* Top accent line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D47A1] via-[#00B4FF] to-[#0D47A1] rounded-t-xl" />

                                {/* Icon Container */}
                                <div className="mb-6">
                                    <div className={`inline-flex p-3 rounded-lg ${hoveredIndex === index ? 'bg-gradient-to-r from-[#0D47A1]/10 to-[#00B4FF]/10' : 'bg-[#0D47A1]/5'} transition-colors duration-300`}>
                                        <div className={`${hoveredIndex === index ? 'text-[#0D47A1]' : 'text-[#0D47A1]/70'}`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content - NO hover animation on title */}
                                <h3 className="text-xl font-semibold text-[#061943] mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-[#475569] mb-6 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mt-auto justify-center">
                                    {service.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-[#0D47A1]/5 text-[#0D47A1] text-sm font-medium border border-[#0D47A1]/10"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SapServices;
// stop stopst stop stop stop sto psto stop stop stop
// stop sto sto pstop sto stop stop stop sto ptso