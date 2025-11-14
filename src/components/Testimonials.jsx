import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const partners = [
    {
        name: "SAP Partner",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    },
    {
        name: "HCC Limited",
        img: "/images/testimonials/hccLogo.jpg",
    },
    {
        name: "Mitsubishi Electric",
        img: "/images/testimonials/mitsubishi.png",
    },
    {
        name: "Salesforce Services",
        img: "/images/testimonials/salesforce.png",
    },
    {
        name: "Siemens",
        img: "/images/SiemensImage.png",
    },
    {
        name: "Oracle Cloud",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },
];

// Animation for continuous horizontal movement
const marqueeAnimation = {
    animate: {
        x: ["0%", "-100%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
            },
        },
    },
};

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative py-24 px-6 md:px-12 overflow-hidden text-[#0D47A1]
      bg-gradient-to-br from-[#E3F2FD] via-white to-[#E1F5FE]"
            aria-label="Partners & Testimonials"
        >
            {/* === Background Glows === */}
            <div className="absolute top-[15%] left-[5%] w-[250px] h-[250px] bg-[#00B4FF]/20 blur-[160px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[15%] right-[5%] w-[300px] h-[300px] bg-[#0D47A1]/15 blur-[200px] rounded-full animate-pulse"></div>

            {/* === Heading === */}
            <div className="relative z-10 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4"
                >
                    Trusted by{" "}
                    <span className="bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] bg-clip-text text-transparent">
                        Global Partners
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#0D47A1]/80 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                    Collaborating with enterprises worldwide to build scalable, intelligent
                    digital ecosystems.
                </motion.p>
            </div>

            {/* === Scrolling Partner Cards === */}
            <div className="relative z-10 overflow-hidden">
                <motion.div
                    variants={marqueeAnimation}
                    animate="animate"
                    className="flex gap-8 md:gap-10 items-center w-max"
                >
                    {/* Duplicate partners array to create continuous loop effect */}
                    {[...partners, ...partners].map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{
                                scale: 1.08,
                                rotate: 1.5,
                                boxShadow: "0px 0px 25px rgba(13,71,161,0.25)",
                            }}
                            className="relative w-[150px] h-[140px] md:w-[180px] md:h-[160px]
              flex flex-col items-center justify-center rounded-2xl
              bg-white/70 backdrop-blur-xl border border-[#0D47A1]/20
              shadow-[0_4px_15px_rgba(13,71,161,0.1)]
              hover:shadow-[0_6px_25px_rgba(13,71,161,0.25)]
              overflow-hidden cursor-pointer transition-all duration-500"
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#E3F2FD]/70 via-transparent to-[#00B4FF]/10 opacity-0 hover:opacity-100 transition duration-500"></div>

                            {/* Logo */}
                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-[90px] h-auto object-contain filter contrast-110 grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Company Name */}
                            <h3 className="text-xs md:text-sm font-semibold text-[#0D47A1] mt-2 hover:text-[#00B4FF] transition-colors duration-300">
                                {p.name}
                            </h3>

                            {/* Stars */}
                            <div className="flex mt-1">
                                {[...Array(5)].map((_, idx) => (
                                    <FaStar
                                        key={idx}
                                        className="text-yellow-400 text-[10px] md:text-xs drop-shadow-[0_0_3px_rgba(255,215,0,0.4)]"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* === Bottom Accent Line === */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent"
            ></motion.div>
        </section>
    );
};

export default Testimonials;
