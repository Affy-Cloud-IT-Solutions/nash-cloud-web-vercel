import React from "react";
import {
    Users, Briefcase, Target, BookOpen, DollarSign,
    GitBranch, BarChart3, Cloud, ArrowRight, Sparkles,
    CheckCircle, Zap, Shield, TrendingUp
} from "lucide-react";

const sapServices = [
    {
        title: "Employee Central & Payroll",
        description: "Core HR, global payroll, time, and benefits management designed to streamline workforce administration and ensure compliance across regions.",
        icon: <Users className="w-10 h-10" />,
        align: "left",
        tags: ["Core HR", "Payroll", "Compliance"]
    },
    {
        title: "Recruiting & Onboarding",
        description: "Attract, hire, and onboard top talent seamlessly with intelligent recruiting workflows and engaging onboarding experiences.",
        icon: <Briefcase className="w-10 h-10" />,
        align: "right",
        tags: ["Recruitment", "Onboarding", "Talent"]
    },
    {
        title: "Performance & Goals",
        description: "Align organisational objectives, develop talent, and continuously evaluate workforce performance with data-driven insights.",
        icon: <Target className="w-10 h-10" />,
        align: "left",
        tags: ["Performance", "Goals", "Analytics"]
    },
    {
        title: "Learning Management (LMS)",
        description: "Drive continuous learning, upskilling, and compliance through a scalable and modern learning management ecosystem.",
        icon: <BookOpen className="w-10 h-10" />,
        align: "right",
        tags: ["LMS", "Upskilling", "Compliance"]
    },
    {
        title: "Compensation Management",
        description: "Manage pay, rewards, and incentive programmes efficiently while ensuring fairness, transparency, and performance alignment.",
        icon: <DollarSign className="w-10 h-10" />,
        align: "left",
        tags: ["Compensation", "Rewards", "Incentives"]
    },
    {
        title: "Succession & Development",
        description: "Build strong leadership pipelines and future-ready talent through structured succession planning and development strategies.",
        icon: <GitBranch className="w-10 h-10" />,
        align: "right",
        tags: ["Leadership", "Succession", "Development"]
    },
    {
        title: "Workforce Analytics",
        description: "Make smarter, data-driven HR decisions with real-time workforce analytics, dashboards, and predictive insights.",
        icon: <BarChart3 className="w-10 h-10" />,
        align: "left",
        tags: ["Analytics", "Predictive", "Dashboards"]
    },
    {
        title: "Integration & Middleware Expertise",
        description: "We specialise in complex integrations using SAP CPI, Fivetran, Dell Boomi, MuleSoft, SAP BTP extensions, and API-based integrations.",
        icon: <Cloud className="w-10 h-10" />,
        align: "right",
        tags: ["Integration", "Middleware", "API"]
    },
];

const SapServicesPage = () => {
    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0a1428] to-[#061943]">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[20%] left-[15%] w-[3px] h-[3px] bg-[#00B4FF] rounded-full animate-ping"></div>
                <div className="absolute top-[50%] right-[10%] w-[2px] h-[2px] bg-[#0D47A1] rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-[30%] left-[80%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping delay-2000"></div>
            </div>

            {/* Enhanced Ambient Glows */}
            <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-[#00B4FF]/10 blur-[180px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[15%] left-[10%] w-[550px] h-[550px] bg-[#0D47A1]/20 blur-[220px] rounded-full"></div>
            <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-[#00B4FF]/5 blur-[150px] rounded-full"></div>

            {/* Header Section with Badge */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24 pb-16 mt-10">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#00B4FF]/20">
                    <Sparkles className="w-4 h-4 text-[#00B4FF]" />
                    <span className="text-sm text-gray-300">Enterprise Solutions</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-[#00B4FF] via-[#2B7FFF] to-[#0D47A1] bg-clip-text text-transparent">
                        SAP Services
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Unlock a modern, digital HR experience with our end-to-end SAP SuccessFactors expertise.
                    We help organisations streamline HR processes, enhance employee engagement, and build a
                    scalable, future-ready workforce.
                </p>

                {/* Key Stats */}
                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    {[
                        { label: "Years of Expertise", value: "10+" },
                        { label: "Successful Deployments", value: "50+" },
                        { label: "SAP Certified", value: "100%" }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-full px-6 py-2 border border-white/10">
                            <CheckCircle className="w-4 h-4 text-[#00B4FF]" />
                            <span className="text-sm">
                                <span className="font-bold text-white">{stat.value}</span>
                                <span className="text-gray-400 ml-1">{stat.label}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Timeline Layout */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-28">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-[#00B4FF]/40 via-[#00B4FF]/60 to-[#00B4FF]/20 transform -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-24">
                    {sapServices.map((service, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center gap-12 ${service.align === "right" ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Icon Container with Animation */}
                            <div className="relative flex-shrink-0 z-20">
                                <div className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#0D47A1]/80 to-[#00B4FF]/20 backdrop-blur-xl border-2 border-[#00B4FF]/50 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                    <div className="text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl bg-[#00B4FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Step Number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] flex items-center justify-center text-xs font-bold shadow-lg">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Timeline Connector Dot */}
                            <div className={`absolute top-1/2 w-4 h-4 rounded-full bg-[#00B4FF] border-4 border-[#061943] shadow-lg hidden md:block ${service.align === "left" ? "right-[calc(50%-2rem)]" : "left-[calc(50%-2rem)]"
                                }`}></div>

                            {/* Content Card with Glassmorphism */}
                            <div className="relative group flex-1">
                                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00B4FF]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4FF]/10 hover:-translate-y-2">

                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D47A1]/20 via-[#00B4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-[#00B4FF] mb-4 group-hover:text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {service.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.tags.map((tag, idx) => (
                                                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Subtle CTA */}
                                        {/* <button className="inline-flex items-center gap-1 text-sm text-[#00B4FF] hover:text-white transition-colors duration-300">
                                            Learn More <ArrowRight className="w-3 h-3" />
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Bottom Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00B4FF]/30 to-transparent"></div>
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#00B4FF]/5 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default SapServicesPage;