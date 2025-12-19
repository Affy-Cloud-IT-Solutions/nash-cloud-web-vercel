import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle,
    ShieldCheck,
    Workflow,
    Layers,
    Activity,
    Sparkles,
} from "lucide-react";

const qaServices = [
    {
        title: "Test Management",
        description:
            "Full lifecycle test planning, execution, monitoring, and reporting to ensure quality alignment across delivery stages.",
        icon: <Workflow className="w-8 h-8 text-[#00B4FF]" />,
    },
    {
        title: "End-to-End Testing",
        description:
            "Validation of complete business processes across integrated systems to ensure seamless functionality and data flow.",
        icon: <Layers className="w-8 h-8 text-[#00B4FF]" />,
    },
    {
        title: "SAP SIT & UAT Services",
        description:
            "Structured System Integration Testing and smooth User Acceptance Testing to ensure SAP solutions meet business expectations.",
        icon: <CheckCircle className="w-8 h-8 text-[#00B4FF]" />,
    },
    {
        title: "Operational Acceptance Testing (OAT)",
        description:
            "Ensuring operational readiness before go-live, including support processes, monitoring, and stability validation.",
        icon: <Activity className="w-8 h-8 text-[#00B4FF]" />,
    },
    {
        title: "Non-Functional Testing (NFT)",
        description:
            "Comprehensive performance, security, resilience, and scalability testing to ensure systems perform under real-world conditions.",
        icon: <ShieldCheck className="w-8 h-8 text-[#00B4FF]" />,
    },
];

const QAEngineeringServicesPage = () => {
    return (
        <section className="relative min-h-screen overflow-hidden text-white bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">

            {/* 🔹 Background Image – Abstract Tech Grid */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-25 mix-blend-lighten"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1644062418815-4e3b6a5fa6f4?auto=format&fit=crop&w=1600&q=80')",
                }}
            />

            {/* 🔹 Secondary Background – Soft Data Flow */}
            <div
                className="absolute bottom-0 left-0 w-full h-[55%] bg-no-repeat bg-bottom bg-cover opacity-18 mix-blend-lighten"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1600&q=80')",
                }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-[#00B4FF]/20 blur-[180px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-[#0D47A1]/30 blur-[220px] rounded-full"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-28">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B4FF]/10 text-[#00B4FF] text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Quality Engineering
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent">
                        QA Engineering Services
                    </h1>

                    <p className="text-lg md:text-xl text-[#CBD5E1] max-w-4xl mx-auto leading-relaxed">
                        Ensure quality, reliability, and seamless delivery with our
                        comprehensive QA Engineering services. We provide end-to-end testing
                        solutions designed to minimise risk, accelerate releases, and
                        enhance user confidence.
                    </p>
                </motion.div>

                {/* Services */}
                <div className="grid sm:grid-cols-2 gap-10 mb-20">
                    {qaServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="relative group p-10 rounded-2xl border border-[#00B4FF]/30 bg-white/5 backdrop-blur-xl
                            shadow-[0_0_30px_rgba(0,180,255,0.15)]
                            hover:shadow-[0_0_50px_rgba(0,180,255,0.35)]
                            transition-all duration-500"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D47A1]/25 to-[#00B4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10 flex items-start gap-5">
                                <div className="p-4 rounded-xl bg-[#00B4FF]/15 border border-[#00B4FF]/40">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#00B4FF] mb-3 group-hover:text-white transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <p className="text-lg text-[#CBD5E1] leading-relaxed">
                        With strong domain knowledge and proven methodologies, we help
                        organisations deliver high-quality digital products with confidence,
                        stability, and speed.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default QAEngineeringServicesPage;
