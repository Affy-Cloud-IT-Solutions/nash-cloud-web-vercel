import React from "react";
import {
    Users,
    Briefcase,
    Cloud,
    Code,
    Handshake,
} from "lucide-react";

const consultingServices = [
    {
        title: "Consultants & Analysts",
        description:
            "We provide highly skilled consultants and analysts across ERP, SAP, and digital domains, enabling organisations to meet future requirements with cost-efficient and niche expertise.",
        icon: <Users className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80", // consultants meeting
        align: "left",
    },
    {
        title: "Technical & Engineering Roles",
        description:
            "Access specialised engineering talent including QA, DevOps, cloud, AI, and automation professionals supporting modern digital delivery pipelines.",
        icon: <Code className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80", // engineers coding
        align: "right",
    },
    {
        title: "Cloud, Data & Integration Specialists",
        description:
            "We supply cloud engineers, data specialists, and integration consultants with expertise in AWS, Azure, GCP, SAP CPI, Boomi, MuleSoft, and API-based architectures.",
        icon: <Cloud className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80", // cloud & data
        align: "left",
    },
    {
        title: "Project & Delivery Leadership",
        description:
            "Ensure successful execution with experienced project managers, delivery managers, scrum masters, and agile coaches driving governance and delivery excellence.",
        icon: <Briefcase className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80", // project management
        align: "right",
    },
    {
        title: "Professional & Functional Specialists",
        description:
            "From HR and SAP SuccessFactors consultants to change management and learning specialists, we provide functional expertise for workforce transformation.",
        icon: <Handshake className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80", // HR & collaboration
        align: "left",
    },
];

const ResourceAndConsultingPage = () => {
    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
                }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#00B4FF]/20 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* Header */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-28 pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,180,255,0.3)]">
                    Resourcing
                </h1>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    With our extensive talent network and over 15 years of cross-industry experience, we help organisations reduce hiring risks, accelerate delivery, build long-term capability, and create sustainable talent pipelines.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-10 space-y-20">
                <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-[#00B4FF]/30 via-[#0D47A1]/60 to-[#00B4FF]/30 transform -translate-x-1/2"></div>

                {consultingServices.map((service, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col md:flex-row items-center ${service.align === "right" ? "md:flex-row-reverse" : ""
                            } gap-10`}
                    >
                        {/* Card */}
                        <div className="relative group flex-1 p-10 rounded-2xl border border-[#00B4FF]/30 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,180,255,0.15)] hover:shadow-[0_0_50px_rgba(0,180,255,0.35)] transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D47A1]/30 to-[#00B4FF]/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                            <div className="relative z-10 flex items-center gap-4 mb-4">
                                <div className="p-4 bg-[#0D47A1]/50 rounded-full border border-[#00B4FF]/40">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-[#00B4FF] group-hover:text-white transition-all duration-300">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="relative z-10 text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="hidden md:block flex-1 h-[250px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#0D47A1]/40 to-[#061943]/60 border border-[#00B4FF]/20 shadow-[0_0_20px_rgba(0,180,255,0.1)]">
                            <div
                                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                                style={{ backgroundImage: `url(${service.img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#061943]/80"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default ResourceAndConsultingPage;
