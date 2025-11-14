import React from 'react';
import { motion } from 'framer-motion';
import {
    ServerCog,
    Rocket,
    Cloud,
    Wrench,
    BarChart3,
    Zap,
} from 'lucide-react';

const SapServices = () => {
    const sapServices = [
        {
            title: "SAP Implementation & Integration",
            description:
                "Unify enterprise operations with tailored SAP implementations — enabling automation, consistency, and seamless scalability across departments.",
            icon: <ServerCog className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            features: ["Enterprise Automation", "Seamless Integration", "Department Scalability"],
            metrics: "95% Success Rate",
        },
        {
            title: "SAP S/4HANA Migration",
            description:
                "Migrate to S/4HANA with zero disruption. Experience faster analytics, intelligent automation, and a more responsive digital core.",
            icon: <Rocket className="w-8 h-8" />,
            color: "from-cyan-500 to-blue-600",
            features: ["Zero Disruption", "Faster Analytics", "Digital Core"],
            metrics: "2x Performance",
        },
        {
            title: "SAP Cloud & Analytics",
            description:
                "Turn data into business power. From SAP Analytics Cloud to predictive AI models, we help you visualize and act on real-time intelligence.",
            icon: <Cloud className="w-8 h-8" />,
            color: "from-teal-400 to-blue-500",
            features: ["Predictive AI", "Real-time Intelligence", "Cloud Analytics"],
            metrics: "50% Cost Reduction",
        },
        {
            title: "SAP Managed & Support Services",
            description:
                "Maximize uptime and efficiency with proactive monitoring, continuous optimization, and dedicated SAP support from our certified experts.",
            icon: <Wrench className="w-8 h-8" />,
            color: "from-emerald-500 to-teal-500",
            features: ["Proactive Monitoring", "24/7 Support", "Expert Optimization"],
            metrics: "99.9% Uptime",
        },
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden py-20 px-6">
            {/* Gradient background orbs */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-cyan-200/40 rounded-full blur-[140px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-[#0D47A1] font-semibold text-sm mb-6 shadow-sm">
                        Enterprise SAP Excellence
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#0D47A1] tracking-tight mb-6">
                        SAP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] via-blue-500 to-cyan-600">Services</span>
                    </h1>

                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive SAP solutions designed to empower your enterprise with automation, analytics, and intelligent cloud integration.
                    </p>
                </motion.div>

                {/* Grid of SAP Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {sapServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="group relative overflow-hidden rounded-3xl border border-blue-100 
                 bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50
                 shadow-[0_8px_20px_rgba(13,71,161,0.1)] 
                 hover:shadow-[0_15px_35px_rgba(13,71,161,0.2)] 
                 transition-all duration-700 backdrop-blur-md"
                        >
                            {/* Floating gradient border glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                      bg-gradient-to-br from-blue-200/30 via-cyan-200/20 to-white/10 blur-lg" />

                            {/* Header Section with Icon */}
                            <div className={`relative bg-gradient-to-r ${service.color} p-6`}>
                                <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm 
                         shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                        >
                                            <div className="text-white">{service.icon}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/80 text-sm mt-1">{service.metrics}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 blur-xl rounded-full"></div>
                                </div>
                            </div>

                            {/* Body Section */}
                            <div className="relative p-8 bg-white/70 backdrop-blur-xl">
                                <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div>
                                    <h4 className="text-base font-semibold text-[#0D47A1] mb-3 flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4 text-[#0D47A1]" />
                                        Key Features
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {service.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 
                           rounded-full border border-blue-100 shadow-sm 
                           hover:shadow-[0_0_12px_rgba(13,71,161,0.15)] transition-all duration-300"
                                            >
                                                <div
                                                    className={`w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r ${service.color}`}
                                                >
                                                    <Zap className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-800">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Glow line bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>



                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-center bg-gradient-to-r from-blue-100 via-cyan-50 to-white border border-blue-100 rounded-3xl p-10 shadow-[0_0_25px_rgba(13,71,161,0.15)] backdrop-blur-md"
                >
                    <h3 className="text-3xl font-bold text-[#0D47A1] mb-3">
                        Empower your enterprise with SAP intelligence
                    </h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Our SAP services integrate innovation, automation, and reliability — helping your business operate smarter, faster, and more efficiently.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SapServices;
// stop stop stpo stop stop stop sto stpo stop stpo 