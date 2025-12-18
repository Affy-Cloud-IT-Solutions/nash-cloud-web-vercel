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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D47A1]/5 text-[#0D47A1] text-sm font-medium mb-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#0D47A1]/30 transition-all duration-300 hover:shadow-lg text-center flex flex-col items-center">
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

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-[#061943] mb-3 group-hover:text-[#0D47A1] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-[#475569] mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-[#0D47A1]/5 text-[#0D47A1] text-sm font-medium border border-[#0D47A1]/10"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Learn More Button */}
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    onClick={() => {
                                        navigate(service.link);
                                    }}
                                    className="flex items-center gap-2 text-[#0D47A1] font-semibold text-sm group/btn"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </motion.button>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-r from-[#0D47A1]/5 to-[#00B4FF]/5 rounded-2xl p-8 md:p-12 border border-[#0D47A1]/10">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#061943] mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-[#475569] max-w-xl mx-auto mb-8">
                            Connect with our experts to discuss how our services can drive your digital success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] text-white font-semibold shadow-md hover:shadow-lg transition-shadow"
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 rounded-lg border border-[#0D47A1] text-[#0D47A1] font-semibold hover:bg-[#0D47A1]/5 transition-colors"
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SapServices;
// stop stopst stop stop stop sto psto stop stop stop
// stop sto sto pstop sto stop stop stop sto ptso