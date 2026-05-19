import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Sparkles, Shield, Cpu, Cloud, Lock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InternalProducts = () => {
    const navigate = useNavigate();

    const features = [
        { icon: Cloud, name: "Cloud Native", color: "text-cyan-400", bg: "bg-cyan-400/10" },
        { icon: Cpu, name: "AI Enhanced", color: "text-purple-400", bg: "bg-purple-400/10" },
        { icon: Lock, name: "Secure", color: "text-emerald-400", bg: "bg-emerald-400/10" },
        { icon: Zap, name: "High Performance", color: "text-amber-400", bg: "bg-amber-400/10" },
    ];

    return (
        <section className="relative py-14 px-4 overflow-hidden bg-[#020817]">
            {/* Premium Dark Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="relative max-w-7xl mx-auto z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-300 font-semibold text-sm tracking-wide uppercase">Built By Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        <span className="text-white">Our </span>
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                            In-House Bespoke Products
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                        Powerful custom software built to help grow your business.
                    </p>
                </motion.div>

                {/* Main Showcase Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-transparent overflow-hidden"
                >
                    {/* Glassmorphic Card */}
                    <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl overflow-hidden h-full">

                        {/* Internal Glow inside card */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

                        <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center relative z-10">

                            {/* Left Content */}
                            <div className="space-y-8">
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                    <Boxes className="w-10 h-10 text-blue-400" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                        Software Built By Us
                                    </h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        We don't just set up other systems—we build our own software from scratch. Our custom apps solve tough business problems easily.
                                    </p>
                                </div>

                                {/* Features Row */}
                                <div className="flex flex-wrap gap-3">
                                    {features.map((feature, idx) => {
                                        const Icon = feature.icon;
                                        return (
                                            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                                                <div className={`p-2 rounded-lg ${feature.bg} group-hover:scale-110 transition-transform`}>
                                                    <Icon className={`w-5 h-5 ${feature.color}`} />
                                                </div>
                                                <span className="text-sm font-semibold text-slate-300">{feature.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* CTA & Stats */}
                                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8">
                                    <div className="flex gap-8">
                                        <div>
                                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">4+</div>
                                            <div className="text-sm text-slate-500 font-medium">Custom Apps</div>
                                        </div>
                                        <div className="w-px h-12 bg-white/10" />
                                        <div>
                                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">100%</div>
                                            <div className="text-sm text-slate-500 font-medium">Built By Us</div>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate("/internal-product")}
                                        className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all w-full sm:w-auto justify-center"
                                    >
                                        Explore Portfolio
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Right Abstract Visual */}
                            <div className="relative h-[400px] lg:h-[450px] hidden md:block rounded-2xl overflow-hidden border border-white/10 bg-slate-950/50">
                                {/* Abstract Dashboard Representation */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6 gap-6">
                                    <div className="flex justify-between items-start">
                                        <div className="w-32 h-8 rounded-lg bg-white/5 animate-pulse" />
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20" />
                                            <div className="w-8 h-8 rounded-full bg-purple-500/20" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 flex-1">
                                        <div className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-4 relative overflow-hidden flex flex-col justify-between">
                                            <div className="w-16 h-4 rounded bg-white/10 mb-4" />
                                            <div className="w-full h-16 rounded bg-blue-500/20 mt-auto" />
                                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 blur-2xl" />
                                        </div>
                                        <div className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-4 relative overflow-hidden flex flex-col justify-between">
                                            <div className="w-16 h-4 rounded bg-white/10 mb-4" />
                                            <div className="flex items-end gap-2 h-16 mt-auto">
                                                <div className="w-1/3 h-full rounded-t bg-purple-500/20" />
                                                <div className="w-1/3 h-2/3 rounded-t bg-purple-500/40" />
                                                <div className="w-1/3 h-4/5 rounded-t bg-purple-500/30" />
                                            </div>
                                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/20 blur-2xl" />
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Overlay Element */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/4 right-8 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <div className="w-20 h-2 bg-white/20 rounded-full mb-2" />
                                            <div className="w-12 h-2 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InternalProducts;