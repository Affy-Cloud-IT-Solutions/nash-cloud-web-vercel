import React from "react";
import { GraduationCap, Users, Briefcase, BookOpen, Rocket } from "lucide-react";

const opportunities = [
    {
        title: "Corporate Training Programs",
        description:
            "Hands-on enterprise training sessions designed to upskill professionals in SAP, IT infrastructure, and automation tools — guided by industry experts.",
        icon: <GraduationCap className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Internship Opportunities",
        description:
            "Real-world exposure for fresh graduates and learners through immersive internship programs focused on practical skill-building and mentorship.",
        icon: <Briefcase className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Mentorship Initiatives",
        description:
            "Our mentorship programs connect emerging talent with seasoned professionals, providing personalized guidance and growth-driven feedback.",
        icon: <Users className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Skill Development & Workshops",
        description:
            "Interactive workshops and hackathons that help individuals master advanced technologies and real-time enterprise problem-solving.",
        icon: <BookOpen className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Career Acceleration",
        description:
            "Empowering young professionals with career-oriented training, leadership grooming, and guidance for global tech placements.",
        icon: <Rocket className="w-10 h-10 text-[#00B4FF]" />,
    },
];

const OpportunitiesAndTrainingPage = () => {
    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">
            {/* === Background Image === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>

            {/* === Ambient Blue Glows === */}
            <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-[#00B4FF]/25 blur-[180px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-[#0D47A1]/30 blur-[220px] rounded-full"></div>

            {/* === Header Section === */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-28 pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,180,255,0.3)]">
                    Opportunities & Training
                </h1>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    At <span className="text-[#00B4FF] font-semibold">Nash Cloud IT Solutions</span>, we believe in shaping
                    the next generation of tech innovators. Our programs foster skill development, innovation,
                    and real-world experience to prepare you for global opportunities.
                </p>
            </div>

            {/* === Hero Highlight Section === */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10 mb-20">
                <div className="relative w-full md:w-1/2 h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,180,255,0.2)] group">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
                        alt="Training"
                        className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#061943]/40 to-[#061943]/90"></div>
                </div>

                <div className="relative w-full md:w-1/2 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#00B4FF]/30 hover:border-[#00B4FF]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,180,255,0.3)]">
                    <h3 className="text-3xl font-semibold text-[#00B4FF] mb-4">Empowering Future Innovators</h3>
                    <p className="text-gray-300 text-md leading-relaxed">
                        We collaborate with global enterprises and mentors to deliver hands-on, transformative learning experiences.
                        Our training initiatives are designed to bridge the gap between education and industry — preparing you to
                        lead with confidence, creativity, and real-world expertise.
                    </p>
                </div>
            </div>

            {/* === Opportunities Grid === */}
            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 pb-28">
                {opportunities.map((item, index) => (
                    <div
                        key={index}
                        className="group relative p-8 rounded-2xl border border-[#00B4FF]/30 bg-white/5 backdrop-blur-xl 
            shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] hover:-translate-y-2 
            transition-all duration-500 text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[#0D47A1]/40 rounded-full border border-[#00B4FF]/40 group-hover:border-[#00B4FF]/80 transition-all duration-500">
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#00B4FF] mb-2 group-hover:text-white transition-all duration-300">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* === Bottom Glow === */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default OpportunitiesAndTrainingPage;
