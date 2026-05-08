import React from "react";
import {
    Users,
    Briefcase,
    Cloud,
    Code,
    Handshake,
    Sparkles,
    CheckCircle,
    TrendingUp,
    Award
} from "lucide-react";

const consultingServices = [
    {
        title: "Consultants & Analysts",
        description: "We provide highly skilled consultants and analysts across ERP, SAP, and digital domains, enabling organisations to meet future requirements with cost-efficient and niche expertise.",
        icon: <Users className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["ERP", "SAP", "Digital Transformation"]
    },
    {
        title: "Technical & Engineering Roles",
        description: "Access specialised engineering talent including QA, DevOps, cloud, AI, and automation professionals supporting modern digital delivery pipelines.",
        icon: <Code className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
        align: "right",
        tags: ["QA", "DevOps", "AI", "Automation"]
    },
    {
        title: "Cloud, Data & Integration Specialists",
        description: "We supply cloud engineers, data specialists, and integration consultants with expertise in AWS, Azure, GCP, SAP CPI, Boomi, MuleSoft, and API-based architectures.",
        icon: <Cloud className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["AWS", "Azure", "GCP", "API"]
    },
    {
        title: "Project & Delivery Leadership",
        description: "Ensure successful execution with experienced project managers, delivery managers, scrum masters, and agile coaches driving governance and delivery excellence.",
        icon: <Briefcase className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
        align: "right",
        tags: ["Agile", "Governance", "Leadership"]
    },
    {
        title: "Professional & Functional Specialists",
        description: "From HR and SAP SuccessFactors consultants to change management and learning specialists, we provide functional expertise for workforce transformation.",
        icon: <Handshake className="w-10 h-10" />,
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
        align: "left",
        tags: ["HR", "Change Management", "Training"]
    },
];

const ResourceAndConsultingPage = () => {
    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0a1428] to-[#061943]">

            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[15%] left-[10%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping"></div>
                <div className="absolute top-[70%] right-[15%] w-[3px] h-[3px] bg-[#0D47A1] rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-[20%] left-[85%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping delay-2000"></div>
                <div className="absolute top-[40%] left-[45%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Ambient Glows */}
            <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-[#00B4FF]/10 blur-[180px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[550px] h-[550px] bg-[#0D47A1]/20 blur-[220px] rounded-full"></div>
            <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] bg-[#00B4FF]/5 blur-[150px] rounded-full"></div>

            {/* Header Section with Badge */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24 pb-16 mt-10">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#00B4FF]/20">
                    <Sparkles className="w-4 h-4 text-[#00B4FF]" />
                    <span className="text-sm text-gray-300">Talent Solutions</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-[#00B4FF] via-[#2B7FFF] to-[#0D47A1] bg-clip-text text-transparent">
                        Resource & Consulting
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    With our extensive talent network and over 15 years of cross-industry experience,
                    we help organisations reduce hiring risks, accelerate delivery, build long-term
                    capability, and create sustainable talent pipelines.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                    {[
                        { label: "Years of Excellence", value: "15+", icon: <Award className="w-5 h-5" /> },
                        { label: "Talent Network", value: "500+", icon: <Users className="w-5 h-5" /> },
                        { label: "Success Rate", value: "98%", icon: <TrendingUp className="w-5 h-5" /> },
                        { label: "Industries Served", value: "12+", icon: <Briefcase className="w-5 h-5" /> }
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

            {/* Enhanced Timeline Layout */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-28">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-[#00B4FF]/30 via-[#00B4FF]/60 to-[#00B4FF]/10 transform -translate-x-1/2 hidden lg:block"></div>

                <div className="space-y-32">
                    {consultingServices.map((service, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col lg:flex-row items-center gap-12 ${service.align === "right" ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Container with Effects */}
                            <div className="relative w-full lg:w-1/2 group">
                                <div className="relative h-[280px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#061943] via-[#061943]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                    {/* Image Overlay Border */}
                                    <div className="absolute inset-0 rounded-2xl border border-[#00B4FF]/0 group-hover:border-[#00B4FF]/40 transition-all duration-500"></div>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] rounded-lg px-3 py-1 shadow-lg">
                                    <span className="text-xs font-semibold">{service.tags[0]}</span>
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="relative w-full lg:w-1/2">
                                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00B4FF]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4FF]/10 hover:-translate-y-2">

                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D47A1]/20 via-[#00B4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="relative z-10">
                                        {/* Icon and Title */}
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0D47A1]/20 border border-[#00B4FF]/30 group-hover:scale-110 transition-transform duration-300">
                                                <div className="text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-300 text-base leading-relaxed mb-5">
                                            {service.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag, idx) => (
                                                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-[#00B4FF]/30 transition-colors duration-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Line */}
                                <div className={`absolute top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-r from-[#00B4FF] to-transparent hidden lg:block ${service.align === "right" ? "-left-28" : "-right-28"
                                    }`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00B4FF]/30 to-transparent"></div>
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#00B4FF]/5 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default ResourceAndConsultingPage;