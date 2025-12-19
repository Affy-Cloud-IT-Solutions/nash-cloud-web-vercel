import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InternalProducts = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-16 md:py-20 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80" />
            </div>

            {/* Moving Grid (lighter on mobile) */}
            <motion.div
                animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-5 md:opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, #0D47A1 1px, transparent 1px),
                        linear-gradient(180deg, #0D47A1 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="relative max-w-5xl mx-auto">
                {/* Header */}
                <motion.div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-white/80 border border-blue-200 text-blue-700 text-sm font-medium shadow">
                        <Sparkles className="w-4 h-4" />
                        Bespoke Products
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our In-House{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Digital Solutions
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        We build enterprise-grade software to solve real business challenges —
                        designed for productivity and scale.
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div className="relative rounded-3xl p-6 sm:p-8 md:p-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1E88E5] to-[#64B5F6]" />

                    <div className="relative bg-white/95 rounded-2xl p-6 sm:p-8 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-lg">
                                    <Boxes className="w-14 h-14 sm:w-16 sm:h-16 text-[#0D47A1]" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#0D47A1]">
                                    Our Digital Product Portfolio
                                </h3>

                                <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
                                    We develop proprietary software solutions addressing enterprise needs —
                                    robust, scalable, and innovation-driven.
                                </p>

                                {/* Stats + CTA */}
                                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
                                    <div className="flex gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#0D47A1]">4+</div>
                                            <div className="text-sm text-gray-600">Products</div>
                                        </div>
                                        <div className="h-10 w-px bg-gray-300 hidden sm:block" />
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#1E88E5]">100%</div>
                                            <div className="text-sm text-gray-600">Scalable</div>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate("/internal-product")}
                                        className="flex items-center gap-3 px-7 py-3 rounded-xl
                                        bg-gradient-to-r from-[#0D47A1] to-[#1E88E5]
                                        text-white font-semibold shadow-md"
                                    >
                                        Explore Products
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        {/* Feature Chips */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                {["Cloud Native", "AI Enhanced", "Secure", "Scalable", "Modular"].map((tag, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-center"
                                    >
                                        <div className="text-sm font-medium text-gray-800">{tag}</div>
                                        <div className="text-xs text-gray-500">Built-in</div>
                                    </div>
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
