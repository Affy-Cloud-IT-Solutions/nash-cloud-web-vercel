import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Shield,
    Cloud,
    CheckCircle,
    Sparkles,
} from "lucide-react";

const services = [
    {
        title: "AI & Automation",
        description:
            "Intelligent solutions that enhance efficiency, accuracy, and decision-making across enterprise processes.",
        icon: <Brain className="w-8 h-8 text-[#00B4FF]" />,
    },
    {
        title: "Software Testing & Quality Engineering",
        description:
            "Ensuring reliable, secure, and high-performing applications through comprehensive testing and quality assurance practices.",
        icon: <CheckCircle className="w-8 h-8 text-[#00B4FF]" />,
    },
    {
        title: "Cloud Platforms (AWS, Azure, GCP)",
        description:
            "Scalable and resilient cloud environments designed to support growth, innovation, and operational agility.",
        icon: <Cloud className="w-8 h-8 text-[#00B4FF]" />,
    },
    {
        title: "Cybersecurity Awareness (Coming Soon)",
        description:
            "Strengthening organisational awareness and readiness to defend against evolving digital threats.",
        icon: <Shield className="w-8 h-8 text-[#00B4FF]" />,
    },
];

const DigitalTransformationServicesPage = () => {
    return (
        <section className="relative min-h-screen overflow-hidden text-white bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">
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
                        Digital Transformation
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent">
                        Digital Transformation Services
                    </h1>

                    <p className="text-lg md:text-xl text-[#CBD5E1] max-w-4xl mx-auto leading-relaxed">
                        Empower your organisation to thrive in the AI-driven digital era with
                        our end-to-end digital transformation solutions. We help businesses
                        modernise systems, strengthen technology foundations, and accelerate
                        innovation.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 gap-10 mb-20">
                    {services.map((service, index) => (
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
                        With deep expertise across modern technologies, we help organisations
                        build secure, scalable, and future-ready digital capabilities that
                        support long-term growth and innovation.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default DigitalTransformationServicesPage;
