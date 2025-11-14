import React from "react";
import { Cpu, Briefcase, BarChart3, BookOpen } from "lucide-react";
import TrackImage from '/images/TrackImage.jpeg'
import TutorioImage from '/images/TutorioImage.jpeg'

const products = [
    {
        title: "EaseUp",
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
        title: "T-Rack",
        description:
            "An advanced ticketing and issue-tracking tool that enables teams to efficiently manage support requests, monitor progress, and ensure accountability across departments in real-time.",
        icon: <BarChart3 className="w-10 h-10 text-[#00B4FF]" />,
        img: TrackImage,
        align: "left",
    },
    {
        title: "Tutorio",
        description:
            "A personalized e-learning platform built to empower learners through interactive courses, live mentoring, and AI-driven progress tracking for enhanced learning outcomes.",
        icon: <BookOpen className="w-10 h-10 text-[#00B4FF]" />,
        img: TutorioImage,
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
                    At <span className="text-[#00B4FF] font-semibold">Nash Cloud IT Solutions</span>, we design
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
