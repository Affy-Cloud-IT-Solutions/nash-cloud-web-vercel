import React from "react";
import { Cpu, Settings, Cloud, ShieldCheck, BarChart3 } from "lucide-react";

const solutions = [
    {
        title: "Digital Transformation",
        description:
            "Empowering organizations to modernize infrastructure and adopt next-gen technologies for operational agility and business scalability.",
        icon: <Cpu className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Automation & AI Integration",
        description:
            "Leveraging AI and intelligent automation to streamline business processes, reduce errors, and enhance decision-making efficiency.",
        icon: <Settings className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Building secure, scalable, and high-performing cloud ecosystems with AWS, Azure, and Google Cloud for modern digital enterprises.",
        icon: <Cloud className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Cybersecurity & Compliance",
        description:
            "Protecting digital assets with proactive threat detection, identity management, and compliance frameworks tailored to your industry.",
        icon: <ShieldCheck className="w-10 h-10 text-[#00B4FF]" />,
    },
    {
        title: "Data Analytics & Insights",
        description:
            "Turning raw data into actionable insights through advanced analytics, dashboards, and predictive models for better business outcomes.",
        icon: <BarChart3 className="w-10 h-10 text-[#00B4FF]" />,
    },
];

const ITSolutionsPage = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">
            {/* === Background Image (Tech Grid) === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>

            {/* === Ambient Glows === */}
            <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-[#00B4FF]/20 blur-[180px] rounded-full"></div>
            <div className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[220px] rounded-full"></div>

            {/* === Page Header === */}
            <div className="relative z-10 text-center px-6 mt-20 mb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,180,255,0.3)]">
                    IT Solutions
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Transform your enterprise with end-to-end IT solutions — from automation to
                    cloud transformation, designed to scale with your business.
                </p>
            </div>

            {/* === Horizontal Workflow === */}
            <div className="relative z-10 w-full overflow-x-auto pb-10">
                <div className="flex justify-start items-center gap-10 md:gap-16 px-8 md:px-16 min-w-[1100px] relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-[#00B4FF]/30 via-[#0D47A1]/60 to-[#00B4FF]/30 -translate-y-1/2"></div>

                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="relative group flex flex-col items-center text-center w-[220px] md:w-[250px]"
                        >
                            {/* Connector Node */}
                            <div className="absolute top-1/2 w-5 h-5 bg-[#00B4FF] rounded-full border-4 border-[#061943] shadow-[0_0_20px_rgba(0,180,255,0.6)] -translate-y-1/2 z-0"></div>

                            {/* Floating Card */}
                            <div className="relative z-10 mt-12 p-8 rounded-2xl border border-[#00B4FF]/30 bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] transition-all duration-500 hover:-translate-y-2">
                                <div className="flex justify-center mb-4">{solution.icon}</div>
                                <h3 className="text-xl font-semibold text-[#00B4FF] mb-2 group-hover:text-white transition-all duration-300">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* === Footer Glow === */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default ITSolutionsPage;
