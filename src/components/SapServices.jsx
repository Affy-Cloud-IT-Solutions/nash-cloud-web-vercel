import React from "react";
import { motion } from "framer-motion";
import { ServerCog, Rocket, Cloud, Wrench } from "lucide-react";

const sapServices = [
    {
        title: "SAP Implementation & Integration",
        description:
            "Implement SAP solutions tailored to your enterprise needs — unifying systems, automating workflows, and enhancing operational efficiency.",
        icon: <ServerCog className="w-10 h-10 text-[#0D47A1]" />,
    },
    {
        title: "SAP S/4HANA Migration",
        description:
            "Seamlessly migrate to SAP S/4HANA with optimized performance, minimal downtime, and intelligent real-time analytics.",
        icon: <Rocket className="w-10 h-10 text-[#0D47A1]" />,
    },
    {
        title: "SAP Cloud & Analytics",
        description:
            "Leverage SAP Cloud and Analytics to transform data into actionable insights and drive smarter, data-backed decisions.",
        icon: <Cloud className="w-10 h-10 text-[#0D47A1]" />,
    },
    {
        title: "SAP Managed & Support Services",
        description:
            "Our managed SAP services ensure high availability, proactive monitoring, and continuous improvement across your digital landscape.",
        icon: <Wrench className="w-10 h-10 text-[#0D47A1]" />,
    },
];

const SapServices = () => {
    return (
        <section
            id="sap"
            className="relative py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-[#0D47A1]"
        >
            {/* Solar Ovals Background */}
            <div className="absolute inset-0">
                {/* Large Central Solar Oval */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-200/40 to-cyan-200/30 rounded-full blur-80 opacity-70"></div>

                {/* Top Left Solar Oval */}
                <div className="absolute top-20 left-10 w-[500px] h-[250px] bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-60 opacity-60 rotate-12"></div>

                {/* Bottom Right Solar Oval */}
                <div className="absolute bottom-20 right-10 w-[600px] h-[300px] bg-gradient-to-tl from-cyan-100/40 to-transparent rounded-full blur-70 opacity-60 -rotate-6"></div>

                {/* Top Right Solar Oval */}
                <div className="absolute top-32 right-20 w-[400px] h-[200px] bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-50 opacity-50 rotate-45"></div>

                {/* Bottom Left Solar Oval */}
                <div className="absolute bottom-32 left-20 w-[450px] h-[225px] bg-gradient-to-tr from-cyan-100/35 to-transparent rounded-full blur-55 opacity-55 -rotate-45"></div>
            </div>

            {/* Animated Orbital Rings */}
            <div className="absolute inset-0">
                {/* Large Orbital Ring */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-200/30 rounded-full"
                    style={{
                        width: '600px',
                        height: '300px',
                    }}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 4,
                            repeat: Infinity,
                        }
                    }}
                />

                {/* Medium Orbital Ring */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-200/25 rounded-full"
                    style={{
                        width: '400px',
                        height: '200px',
                    }}
                    animate={{
                        rotate: -360,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 3,
                            repeat: Infinity,
                        }
                    }}
                />

                {/* Small Orbital Ring */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-300/20 rounded-full"
                    style={{
                        width: '250px',
                        height: '125px',
                    }}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                        }
                    }}
                />
            </div>

            {/* Floating Orbital Planets */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full shadow-lg"
                        style={{
                            left: '50%',
                            top: '50%',
                        }}
                        animate={{
                            x: [
                                Math.cos((i * 45) * Math.PI / 180) * 300,
                                Math.cos((i * 45 + 180) * Math.PI / 180) * 300
                            ],
                            y: [
                                Math.sin((i * 45) * Math.PI / 180) * 150,
                                Math.sin((i * 45 + 180) * Math.PI / 180) * 150
                            ],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            x: {
                                duration: Math.random() * 10 + 15,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            y: {
                                duration: Math.random() * 10 + 15,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            scale: {
                                duration: 2,
                                repeat: Infinity,
                            }
                        }}
                    />
                ))}
            </div>

            {/* Glowing Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-300/40 rounded-full blur-sm"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                        }}
                        animate={{
                            y: [null, -20, 0],
                            x: [null, Math.random() * 10 - 5],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-20"
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] bg-clip-text text-transparent mb-4">
                    SAP Services
                </h2>
                <p className="text-[#0D47A1]/80 text-lg max-w-3xl mx-auto font-medium">
                    Empower your digital transformation journey with our comprehensive SAP
                    expertise — connecting innovation with intelligence.
                </p>
            </motion.div>

            {/* Zig-Zag Layout */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-20">
                {sapServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -80 : 80,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Connecting Line */}
                        <div
                            className={`absolute hidden md:block top-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent ${index % 2 === 0 ? "left-[50%]" : "right-[50%]"
                                }`}
                        ></div>

                        {/* Icon Bubble */}
                        <div
                            className="p-6 rounded-full border-2 border-[#0D47A1]/30 
  bg-white/90 backdrop-blur-sm
  shadow-[0_0_30px_rgba(13,71,161,0.3)] 
  hover:shadow-[0_0_45px_rgba(13,71,161,0.4)] 
  transition-all duration-500 relative overflow-hidden flex items-center justify-center group hover:scale-110"
                        >
                            <div className="relative z-10 text-[#0D47A1]">
                                {React.cloneElement(service.icon, {
                                    className: "w-10 h-10",
                                })}
                            </div>
                        </div>

                        {/* Service Card */}
                        <div
                            className="relative max-w-md text-center md:text-left p-8 rounded-2xl border-2 border-[#0D47A1]/20 
  bg-white/95 backdrop-blur-sm
  shadow-[0_8px_40px_rgba(13,71,161,0.2)] 
  hover:shadow-[0_12px_50px_rgba(13,71,161,0.3)] 
  transition-all duration-500 group hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-semibold mb-3 text-[#0D47A1] relative z-10 group-hover:text-[#00B4FF] transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-[#0D47A1]/80 text-sm leading-relaxed relative z-10">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Solar Oval */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-blue-200/30 to-transparent rounded-full blur-60 opacity-50"></div>
        </section>
    );
};

export default SapServices;
// stop stop stop stop stop sotp sopt stop 