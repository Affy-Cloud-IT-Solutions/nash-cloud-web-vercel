import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const opportunities = [
    {
        title: "Career Opportunities",
        description:
            "Join a global team of innovators and problem-solvers. At Nash Cloud IT Solutions, we offer dynamic opportunities for professionals passionate about IT, SAP, and digital transformation.",
        icon: <Briefcase className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Internship Programs",
        description:
            "Kickstart your career through our internship programs focused on SAP, software development, automation, and cloud computing. Learn from industry leaders and gain real-world experience.",
        icon: <GraduationCap className="w-10 h-10 text-[#00B4FF]" />,
    },
];

const OpportunitiesAndTraining = () => {
    return (
        <section
            id="opportunities"
            className="relative py-24 px-6 md:px-12 text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.95),_rgba(6,25,67,0.98))]"
        >
            {/* === Background Image === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80')", // tech training / workspace bg
                }}
            ></div>

            {/* === Ambient Glows === */}
            <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-[#00B4FF]/15 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* === Section Content === */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 bg-[#fff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,180,255,0.25)]">
                    Opportunities & Training
                </h2>
                <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
                    Empowering individuals to grow, innovate, and lead in the IT and SAP
                    ecosystem through structured training and exciting opportunities.
                </p>

                {/* === Content Cards === */}
                <div className="grid md:grid-cols-2 gap-10">
                    {opportunities.map((item, index) => (
                        <div
                            className="group relative rounded-2xl p-10 overflow-hidden
  bg-[linear-gradient(135deg,#0B172A_40%,#EAF4FF_120%)]
  border border-[#00B4FF]/30 backdrop-blur-lg
  shadow-[0_8px_30px_rgba(0,180,255,0.15)]
  hover:shadow-[0_10px_40px_rgba(0,180,255,0.35)]
  transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Glow overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#00B4FF]/15 to-transparent rounded-2xl"></div>

                            {/* Icon */}
                            <div className="relative z-10 flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-[#00B4FF]/15 border border-[#00B4FF]/40 shadow-[0_0_15px_rgba(0,180,255,0.25)]">
                                    {item.icon}
                                </div>
                            </div>

                            <h3 className="relative z-10 text-2xl font-semibold text-white mb-4 group-hover:text-[#00B4FF] transition-all duration-300">
                                {item.title}
                            </h3>

                            <p className="relative z-10 text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                                {item.description}
                            </p>
                        </div>

                    ))}

                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00B4FF]/10 blur-[180px] rounded-full"></div>
        </section>
    );
};

export default OpportunitiesAndTraining;
