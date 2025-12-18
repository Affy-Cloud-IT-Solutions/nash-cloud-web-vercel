import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InternalProducts = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Beautiful Background Image with Parallax */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-blue-50/80">
                    <motion.div
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent"
                    />
                </div>

                {/* Floating Particles Animation */}
                <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 50 - 25, 0],
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 10 + Math.random() * 10,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Subtle Moving Grid Pattern */}
            <motion.div
                animate={{
                    backgroundPosition: ["0px 0px", "50px 50px"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, #0D47A1 1px, transparent 1px),
                        linear-gradient(180deg, #0D47A1 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="relative max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 
                        rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 
                        text-blue-700 text-sm font-medium shadow-lg"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 h-4" />
                        </motion.div>
                        Bespoke Products
                    </motion.div>

                    {/* Title with Gradient Animation */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                    >
                        Our In-House{" "}
                        <motion.span
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 
                            bg-[length:200%_auto] bg-clip-text text-transparent"
                        >
                            Digital Solutions
                        </motion.span>
                    </motion.h2>

                    {/* Animated Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We build our own enterprise-grade software to solve real business challenges.
                        From workflow automation to smart analytics — designed for productivity and scale.
                    </motion.p>
                </motion.div>

                {/* Animated Product Showcase Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-3xl p-10 overflow-hidden"
                >
                    {/* Dynamic gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1E88E5] to-[#64B5F6]" />

                    {/* Animated gradient overlay */}
                    <motion.div
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_auto]"
                    />

                    {/* Floating abstract shapes */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, i % 2 === 0 ? -30 : 30, 0],
                                x: [0, i % 2 === 0 ? 20 : -20, 0],
                                rotate: i % 2 === 0 ? [0, 180, 360] : [360, 180, 0]
                            }}
                            transition={{
                                duration: 15 + i * 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.5
                            }}
                            className={`absolute rounded-${i === 0 ? "full" : i === 1 ? "2xl" : "lg"} ${i === 0 ? "w-32 h-32 bg-white/5" :
                                    i === 1 ? "w-24 h-24 bg-cyan-400/10" :
                                        "w-16 h-16 bg-white/10"
                                } blur-sm`}
                            style={{
                                top: `${20 + i * 20}%`,
                                left: `${10 + i * 25}%`
                            }}
                        />
                    ))}

                    {/* Diagonal pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(45deg, transparent 45%, white 50%, transparent 55%)`,
                            backgroundSize: '50px 50px'
                        }}
                    />

                    {/* Content container with subtle border */}
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Icon with glowing effect */}
                            <div className="relative">
                                {/* Outer glow ring */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30"
                                />

                                {/* Icon container */}
                                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg">
                                    {/* Inner shine */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/30 to-transparent" />

                                    {/* Icon */}
                                    <div className="relative">
                                        <Boxes className="w-20 h-20 text-[#0D47A1]" />
                                    </div>

                                    {/* Corner accents */}
                                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
                                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500 rounded-tr-lg" />
                                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500 rounded-bl-lg" />
                                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Title with gradient text */}
                                <h3 className="text-3xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-[#0D47A1] via-[#1E88E5] to-[#0D47A1] bg-clip-text text-transparent">
                                        Our Digital Product Portfolio
                                    </span>
                                </h3>

                                {/* Description */}
                                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                                    We develop proprietary software solutions that address specific enterprise needs.
                                    Each product is built with the same expertise we offer our clients, ensuring
                                    robustness, scalability, and innovation.
                                </p>

                                {/* Stats and CTA row */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    {/* Quick stats */}
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#0D47A1]">4+</div>
                                            <div className="text-sm text-gray-600">Products</div>
                                        </div>
                                        <div className="h-10 w-px bg-gray-300" />
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#1E88E5]">100%</div>
                                            <div className="text-sm text-gray-600">Scalable</div>
                                        </div>
                                    </div>

                                    {/* CTA button with arrow animation */}
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "#0D47A1"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate("/internal-product")}
                                        className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0D47A1] to-[#1E88E5] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <span>Explore Products</span>
                                        <div className="relative overflow-hidden w-5 h-5">
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="absolute"
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        {/* Feature chips with hover effects */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {["Cloud Native", "AI Enhanced", "Secure", "Scalable", "Modular"].map((tag, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            y: -3,
                                            backgroundColor: "rgba(13, 71, 161, 0.1)"
                                        }}
                                        className="px-5 py-3 rounded-xl bg-white border border-gray-200 hover:border-blue-200 transition-all text-center cursor-pointer"
                                    >
                                        <div className="text-sm font-medium text-gray-800">{tag}</div>
                                        <div className="text-xs text-gray-500 mt-1">Built-in</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default InternalProducts;