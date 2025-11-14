import React from "react";

const products = [
    {
        name: "EaseUp",
        tagline: "Simplify productivity. Amplify impact.",
        description:
            "EaseUp is an internal productivity suite designed for cross-functional collaboration. It enables task management, automation workflows, and centralized communication — helping teams reduce friction and boost efficiency. With advanced analytics and AI-driven insights, EaseUp empowers managers to track performance and employees to stay focused on what matters most.",
        img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "What a Recruiter",
        tagline: "Reimagining the way talent meets opportunity.",
        description:
            "What a Recruiter is our in-house job portal that transforms recruitment with AI-driven candidate matching, automated screening, and intelligent scheduling. Designed for HR professionals and enterprises, it provides powerful analytics dashboards, integrated communication tools, and real-time recruitment tracking to make hiring smarter and faster.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "T-Rack",
        tagline: "Manage tickets. Track progress. Deliver excellence.",
        description:
            "T-Rack is a fully customizable internal ticketing and issue-tracking system built for IT teams. It features dynamic workflows, SLA management, and real-time escalation handling. With advanced reports, automation, and integration support, T-Rack ensures that every request — from bug reports to feature enhancements — is managed efficiently and transparently.",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    },
    {
        name: "Tutorio",
        tagline: "Learning made smart, personal, and engaging.",
        description:
            "Tutorio is an intelligent e-learning platform designed for personalized education. It combines interactive lessons, adaptive learning paths, and AI-powered progress tracking. Whether it’s onboarding employees or training students, Tutorio offers seamless content delivery, live class integrations, and data-driven performance metrics — redefining digital learning experiences.",
        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    },
];

const InternalProducts = () => {
    return (
        <section
            id="products"
            className="relative py-28 px-6 md:px-12 overflow-hidden 
      bg-gradient-to-br from-[#E3F2FD] via-[#F8FBFF] to-[#E1F5FE]"
        >
            {/* === Subtle Light Gradient Accents === */}
            <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#00B4FF]/15 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[15%] left-[5%] w-[500px] h-[500px] bg-[#0D47A1]/10 blur-[200px] rounded-full"></div>

            {/* === Header === */}
            <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(13,71,161,0.3)]">
                    Internal Products
                </h2>
                <p className="text-[#0D47A1]/80 text-lg max-w-3xl mx-auto leading-relaxed">
                    At Nash Cloud IT Solutions, we don’t just deliver client projects — we innovate.
                    Our in-house products are designed to solve real enterprise challenges through
                    intelligent automation, data-driven decision-making, and beautifully engineered technology.
                </p>
            </div>

            {/* === Product Showcase === */}
            <div className="relative z-10 max-w-7xl mx-auto space-y-32">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* === Product Image === */}
                        <div className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl group">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-[200px] md:h-[300px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 opacity-70 group-hover:opacity-90 transition duration-500"></div>
                        </div>

                        {/* === Product Details === */}
                        <div className="md:w-1/2 text-left px-2 md:px-10">
                            <h3 className="text-3xl font-bold text-[#0D47A1] mb-2 tracking-wide">
                                {product.name}
                            </h3>
                            <p className="text-[#0D47A1]/70 italic mb-4">{product.tagline}</p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Floating Glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00B4FF]/10 blur-[180px] rounded-full opacity-40"></div>
                    </div>
                ))}
            </div>

            {/* === Footer Glow === */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00B4FF]/10 blur-[180px] rounded-full"></div>
        </section>
    );
};

export default InternalProducts;
