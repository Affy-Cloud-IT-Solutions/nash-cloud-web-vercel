import React from "react";
import { Users, Briefcase, Target, BookOpen, DollarSign, GitBranch, BarChart3, Cloud } from "lucide-react";

const sapServices = [
    {
        title: "Employee Central & Payroll",
        description:
            "Core HR, global payroll, time, and benefits management designed to streamline workforce administration and ensure compliance across regions.",
        icon: <Users className="w-10 h-10 text-[#00B4FF]" />,
        align: "left",
    },
    {
        title: "Recruiting & Onboarding",
        description:
            "Attract, hire, and onboard top talent seamlessly with intelligent recruiting workflows and engaging onboarding experiences.",
        icon: <Briefcase className="w-10 h-10 text-[#00B4FF]" />,
        align: "right",
    },
    {
        title: "Performance & Goals",
        description:
            "Align organisational objectives, develop talent, and continuously evaluate workforce performance with data-driven insights.",
        icon: <Target className="w-10 h-10 text-[#00B4FF]" />,
        align: "left",
    },
    {
        title: "Learning Management (LMS)",
        description:
            "Drive continuous learning, upskilling, and compliance through a scalable and modern learning management ecosystem.",
        icon: <BookOpen className="w-10 h-10 text-[#00B4FF]" />,
        align: "right",
    },
    {
        title: "Compensation Management",
        description:
            "Manage pay, rewards, and incentive programmes efficiently while ensuring fairness, transparency, and performance alignment.",
        icon: <DollarSign className="w-10 h-10 text-[#00B4FF]" />,
        align: "left",
    },
    {
        title: "Succession & Development",
        description:
            "Build strong leadership pipelines and future-ready talent through structured succession planning and development strategies.",
        icon: <GitBranch className="w-10 h-10 text-[#00B4FF]" />,
        align: "right",
    },
    {
        title: "Workforce Analytics",
        description:
            "Make smarter, data-driven HR decisions with real-time workforce analytics, dashboards, and predictive insights.",
        icon: <BarChart3 className="w-10 h-10 text-[#00B4FF]" />,
        align: "left",
    },
    {
        title: "Integration & Middleware Expertise",
        description:
            "We specialise in complex integrations using SAP CPI, Fivetran, Dell Boomi, MuleSoft, SAP BTP extensions, and API-based integrations.",
        icon: <Cloud className="w-10 h-10 text-[#00B4FF]" />,
        align: "right",
    },
];

const SapServicesPage = () => {
    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1920&q=80')",
                }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] bg-[#00B4FF]/20 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* Header */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-28 pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,180,255,0.3)]">
                    SAP Services
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Unlock a modern, digital HR experience with our end-to-end SAP
                    SuccessFactors expertise. We help organisations streamline HR
                    processes, enhance employee engagement, and build a scalable,
                    future-ready workforce.
                </p>
            </div>

            {/* Timeline Layout */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 space-y-20 pb-28">
                <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-[#00B4FF]/40 via-[#0D47A1]/60 to-[#00B4FF]/20 transform -translate-x-1/2"></div>

                {sapServices.map((service, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col md:flex-row items-center gap-10 ${service.align === "right" ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Icon */}
                        <div className="relative flex-shrink-0 flex justify-center items-center w-20 h-20 bg-[#0D47A1]/60 backdrop-blur-xl border border-[#00B4FF]/40 rounded-full shadow-[0_0_25px_rgba(0,180,255,0.25)]">
                            {service.icon}
                            <div className="absolute inset-0 rounded-full bg-[#00B4FF]/10 blur-md"></div>
                        </div>

                        {/* Connector Dot */}
                        <div
                            className={`absolute top-[50%] w-4 h-4 rounded-full bg-[#00B4FF] border-4 border-[#061943] shadow-[0_0_20px_rgba(0,180,255,0.6)]
              ${service.align === "left" ? "right-[50%] translate-x-2" : "left-[50%] -translate-x-2"} hidden md:block`}
                        ></div>

                        {/* Content Card */}
                        <div className="relative group flex-1 p-8 rounded-2xl border border-[#00B4FF]/30 bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] hover:-translate-y-2 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/20 to-[#00B4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

                            <h3 className="relative z-10 text-2xl font-semibold text-[#00B4FF] mb-4 group-hover:text-white transition-all duration-300">
                                {service.title}
                            </h3>
                            <p className="relative z-10 text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default SapServicesPage;
