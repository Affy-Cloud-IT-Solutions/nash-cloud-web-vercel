import React from "react";
import {
    Cpu,
    Briefcase,
    BarChart3,
    BookOpen,
    BrainCircuit,
    Utensils,
    Shirt,
    Building2,
    Car,
    GraduationCap,
    Ticket,
    Truck,
    Store,
    Kanban,
    ArrowRight,
    Sparkles,
    Zap,
    Shield,
    TrendingUp
} from "lucide-react";
import TrackImage from '/images/TrackImage.jpeg'
import TutorioImage from '/images/TutorioImage.jpeg'
import { motion } from "framer-motion";

const products = [
    {
        title: "Worklynx",
        description: "A smart productivity platform built to streamline organizational workflows, automate manual processes, and enhance team collaboration with intuitive task management and performance insights.",
        icon: <Cpu className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["Productivity", "Workflow", "Collaboration"]
    },
    {
        title: "What A Recruiter",
        description: "A next-gen AI-powered job search and recruitment portal connecting global talent with organizations. Designed to make hiring smarter, faster, and more human-centered.",
        icon: <Briefcase className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80", align: "right",
        tags: ["Recruitment", "AI-Powered", "Talent"]
    },
    {
        title: "Metamind",
        description: "An AI-powered startup studio that transforms raw ideas into investable ventures. Provides deep market analysis, AI-generated roadmaps, and professional pitch deck construction.",
        icon: <BrainCircuit className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["AI", "Startup", "Innovation"]
    },
    {
        title: "Restro Management",
        description: "A comprehensive restaurant management ecosystem. Handle table bookings, kitchen displays, inventory control, and real-time financial reporting in one unified dashboard.",
        icon: <Utensils className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
        align: "right",
        tags: ["Restaurant", "Inventory", "Analytics"]
    },
    {
        title: "Laundry Management",
        description: "Modernizing the laundry industry with full digital workflows. Features include garment tagging, wash cycle tracking, automated delivery scheduling, and multi-branch management.",
        icon: <Shirt className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["Laundry", "Automation", "Multi-Branch"]
    },
    {
        title: "CRM Construction",
        description: "Specialized CRM built for the construction industry. Track site progress, manage complex contracts, monitor lead pipelines, and provide clients with dedicated project portals.",
        icon: <Building2 className="w-10 h-10" />,
        img: "https://plus.unsplash.com/premium_photo-1733306696471-807493ff845b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        align: "right",
        tags: ["Construction", "CRM", "Project Management"]
    },
    {
        title: "Byethecar",
        description: "An AI-driven marketplace for used vehicles. Empowers sellers with accurate price estimations and buyers with verified listings and secure, transparent transaction tools.",
        icon: <Car className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["Marketplace", "AI", "Automotive"]
    },
    {
        title: "Tutorio",
        description: "A personalized e-learning platform built to empower learners through interactive courses, live mentoring, and AI-driven progress tracking for enhanced learning outcomes.",
        icon: <GraduationCap className="w-10 h-10" />,
        img: TutorioImage,
        align: "right",
        tags: ["E-Learning", "Education", "AI-Driven"]
    },
    {
        title: "T-Rack",
        description: "An advanced ticketing and issue-tracking tool that enables teams to efficiently manage support requests, monitor progress, and ensure accountability across departments in real-time.",
        icon: <Ticket className="w-10 h-10" />,
        img: TrackImage,
        align: "left",
        tags: ["Ticketing", "Support", "Real-Time"]
    },
    {
        title: "Fleet Management",
        description: "High-performance fleet tracking and analytics. Optimize routes in real-time, monitor driver behavior, and cut operational costs with detailed fuel and maintenance analytics.",
        icon: <Truck className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
        align: "right",
        tags: ["Fleet", "Analytics", "Optimization"]
    },
    {
        title: "Nexus",
        description: "A hyperlocal marketplace designed to connect city-based buyers and sellers. Features real-time in-app chat, secure payment processing, and verified local business listings.",
        icon: <Store className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["Marketplace", "Local", "Secure"]
    },
    {
        title: "PMS",
        description: "A powerful Project Management System built for modern teams. Streamline task assignments, visualize project timelines, and foster seamless collaboration to deliver faster.",
        icon: <Kanban className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1600&q=80",
        align: "right",
        tags: ["Project Management", "Collaboration", "Timeline"]
    },
];

const InternalProduct = () => {
    return (
        <section className="relative min-h-screen overflow-hidden text-white bg-gradient-to-b from-[#0a0f1f] via-[#0a1428] to-[#061943]">

            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-[20%] left-[10%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping"></div>
                    <div className="absolute top-[60%] left-[85%] w-[3px] h-[3px] bg-[#0D47A1] rounded-full animate-ping delay-1000"></div>
                    <div className="absolute top-[80%] left-[20%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping delay-2000"></div>
                </div>
            </div>

            {/* Enhanced Ambient Glows */}
            <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-[#00B4FF]/10 blur-[180px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[15%] right-[5%] w-[600px] h-[600px] bg-[#0D47A1]/20 blur-[220px] rounded-full"></div>
            <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-[#00B4FF]/5 blur-[150px] rounded-full"></div>

            {/* Header Section with Stats */}
            <div className="relative z-10 max-w-6xl mx-auto text-center px-6 pt-24 pb-20 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#00B4FF]/20"
                >
                    <Sparkles className="w-4 h-4 text-[#00B4FF]" />
                    <span className="text-sm text-gray-300">Innovation Portfolio</span>
                </motion.div>

                <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-[#00B4FF] via-[#2B7FFF] to-[#0D47A1] bg-clip-text text-transparent">
                        Internal Products
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                    At <span className="text-[#00B4FF] font-semibold relative inline-block">
                        Tech Trade Consulting
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent"></div>
                    </span>, we engineer transformative digital solutions that drive innovation,
                    streamline operations, and deliver exceptional user experiences across industries.
                </p>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                    {[
                        { label: "Live Products", value: "12+", icon: <Zap className="w-5 h-5" /> },
                        { label: "Active Clients", value: "50+", icon: <TrendingUp className="w-5 h-5" /> },
                        { label: "Industries Served", value: "8+", icon: <Shield className="w-5 h-5" /> },
                        { label: "Team Members", value: "30+", icon: <Briefcase className="w-5 h-5" /> }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#00B4FF]/30 transition-all duration-300">
                            <div className="flex items-center justify-center gap-2 text-[#00B4FF] mb-2">
                                {stat.icon}
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                            </div>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Cards with Enhanced Design */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-32 pb-32 px-6 md:px-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`group flex flex-col lg:flex-row items-center gap-12 ${product.align === "right" ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image Container with Overlay Effects */}
                        <div className="relative w-full lg:w-1/2">
                            <div className="relative h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#061943] via-[#061943]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                {/* Image Hover Overlay */}
                                <div className="absolute inset-0 bg-[#00B4FF]/0 group-hover:bg-[#00B4FF]/10 transition-colors duration-500"></div>

                                {/* Decorative Border */}
                                <div className="absolute inset-0 rounded-2xl border border-[#00B4FF]/0 group-hover:border-[#00B4FF]/50 transition-all duration-500"></div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] rounded-lg px-3 py-1 shadow-lg">
                                <span className="text-xs font-semibold">{product.tags[0]}</span>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="relative w-full lg:w-1/2">
                            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00B4FF]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4FF]/10 group-hover:transform group-hover:translate-y-[-4px]">

                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00B4FF]/0 via-[#00B4FF]/5 to-[#00B4FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="relative">
                                    {/* Icon with Animation */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0D47A1]/20 border border-[#00B4FF]/30 group-hover:scale-110 transition-transform duration-300">
                                            <div className="text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                                                {product.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                            {product.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Line */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-24 h-[2px] bg-gradient-to-r from-[#00B4FF] to-transparent hidden lg:block ${product.align === "right" ? "-left-32" : "-right-32"
                                }`}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00B4FF]/30 to-transparent"></div>
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#00B4FF]/5 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default InternalProduct;