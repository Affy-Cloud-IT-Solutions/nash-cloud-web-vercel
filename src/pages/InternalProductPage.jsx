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
    Kanban
} from "lucide-react";
import TrackImage from '/images/TrackImage.jpeg'
import TutorioImage from '/images/TutorioImage.jpeg'

const products = [
    {
        title: "Worklynx",
        description:
            "A smart productivity platform built to streamline organizational workflows, automate manual processes, and enhance team collaboration with intuitive task management and performance insights.",
        icon: <Cpu className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1600&q=80",
        align: "left",
    },
    {
        title: "What A Recruiter",
        description:
            "A next-gen AI-powered job search and recruitment portal connecting global talent with organizations. Designed to make hiring smarter, faster, and more human-centered.",
        icon: <Briefcase className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
        align: "right",
    },
    {
        title: "Metamind",
        description:
            "An AI-powered startup studio that transforms raw ideas into investable ventures. Provides deep market analysis, AI-generated roadmaps, and professional pitch deck construction.",
        icon: <BrainCircuit className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
        align: "left",
    },
    {
        title: "Restro Management",
        description:
            "A comprehensive restaurant management ecosystem. Handle table bookings, kitchen displays, inventory control, and real-time financial reporting in one unified dashboard.",
        icon: <Utensils className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
        align: "right",
    },
    {
        title: "Laundry Management",
        description:
            "Modernizing the laundry industry with full digital workflows. Features include garment tagging, wash cycle tracking, automated delivery scheduling, and multi-branch management.",
        icon: <Shirt className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1600&q=80",
        align: "left",
    },
    {
        title: "CRM Construction",
        description:
            "Specialized CRM built for the construction industry. Track site progress, manage complex contracts, monitor lead pipelines, and provide clients with dedicated project portals.",
        icon: <Building2 className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://plus.unsplash.com/premium_photo-1733306696471-807493ff845b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        align: "right",
    },
    {
        title: "Byethecar",
        description:
            "An AI-driven marketplace for used vehicles. Empowers sellers with accurate price estimations and buyers with verified listings and secure, transparent transaction tools.",
        icon: <Car className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1600&q=80",
        align: "left",
    },
    {
        title: "Tutorio",
        description:
            "A personalized e-learning platform built to empower learners through interactive courses, live mentoring, and AI-driven progress tracking for enhanced learning outcomes.",
        icon: <GraduationCap className="w-10 h-10 text-[#00B4FF]" />,
        img: TutorioImage,
        align: "right",
    },
    {
        title: "T-Rack",
        description:
            "An advanced ticketing and issue-tracking tool that enables teams to efficiently manage support requests, monitor progress, and ensure accountability across departments in real-time.",
        icon: <Ticket className="w-10 h-10 text-[#00B4FF]" />,
        img: TrackImage,
        align: "left",
    },
    {
        title: "Fleet Management",
        description:
            "High-performance fleet tracking and analytics. Optimize routes in real-time, monitor driver behavior, and cut operational costs with detailed fuel and maintenance analytics.",
        icon: <Truck className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
        align: "right",
    },
    {
        title: "Nexus",
        description:
            "A hyperlocal marketplace designed to connect city-based buyers and sellers. Features real-time in-app chat, secure payment processing, and verified local business listings.",
        icon: <Store className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1600&q=80",
        align: "left",
    },
    {
        title: "PMS",
        description:
            "A powerful Project Management System built for modern teams. Streamline task assignments, visualize project timelines, and foster seamless collaboration to deliver faster.",
        icon: <Kanban className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1600&q=80",
        align: "right",
    },
];

const InternalProduct = () => {
    return (
        <section className="relative min-h-screen overflow-hidden text-white bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">
            {/* === Background Image === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>

            {/* === Ambient Glows === */}
            <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-[#00B4FF]/20 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* === Header === */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-28 pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,180,255,0.3)]">
                    Internal Products
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    At <span className="text-[#00B4FF] font-semibold">Tech Trade Consulting</span>, we design
                    innovative digital products that redefine business processes and empower users with
                    intelligent, scalable, and seamless experiences.
                </p>
            </div>

            {/* === Alternating Product Cards === */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-28 pb-28 px-6 md:px-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-12 ${product.align === "right" ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Product Image */}
                        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,180,255,0.2)] group">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#061943]/40 to-[#061943]/90"></div>
                        </div>

                        {/* Product Info */}
                        <div className="relative w-full md:w-1/2 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#00B4FF]/30 hover:border-[#00B4FF]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,180,255,0.3)]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-4 bg-[#0D47A1]/40 rounded-full border border-[#00B4FF]/40">
                                    {product.icon}
                                </div>
                                <h3 className="text-3xl font-semibold text-[#00B4FF]">
                                    {product.title}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-md leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* === Bottom Glow === */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default InternalProduct;
