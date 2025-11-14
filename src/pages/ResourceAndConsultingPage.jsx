import React from "react";
import { Users, Briefcase, Globe, LineChart, Handshake } from "lucide-react";
import ITConsultingImage from '/images/ITConsultingImage.jpeg'
import globalConnectImage from '/images/globalConnectImage.jpeg'
import PartnershipAndAdvisory from '/images/PartnershipAndAdvisory.jpeg'
const consultingServices = [
    {
        title: "Strategic IT Consulting",
        description:
            "Helping organizations define and execute technology roadmaps that align business goals with innovation-driven growth and operational excellence.",
        icon: <LineChart className="w-10 h-10 text-[#00B4FF]" />,
        img: ITConsultingImage,
        align: "left",
    },
    {
        title: "Resource Augmentation",
        description:
            "Providing skilled IT professionals and SAP consultants who integrate seamlessly with your teams to scale productivity and ensure project success.",
        icon: <Users className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80", // teamwork developers
        align: "right",
    },
    {
        title: "Global Talent Outsourcing",
        description:
            "Connecting businesses with top-tier global talent through flexible engagement models that ensure speed, cost-efficiency, and quality delivery.",
        icon: <Globe className="w-10 h-10 text-[#00B4FF]" />,
        img: globalConnectImage, // global network
        align: "left",
    },
    {
        title: "Project Delivery Consulting",
        description:
            "Ensuring efficient and risk-free project delivery by combining technical excellence, agile methodologies, and real-world implementation expertise.",
        icon: <Briefcase className="w-10 h-10 text-[#00B4FF]" />,
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80", // agile team board
        align: "right",
    },
    {
        title: "Partnership & Advisory Services",
        description:
            "Offering long-term strategic advisory to help enterprises adapt, innovate, and grow in the ever-evolving digital landscape.",
        icon: <Handshake className="w-10 h-10 text-[#00B4FF]" />,
        img: PartnershipAndAdvisory, // handshake
        align: "left",
    },
];

const ResourceAndConsultingPage = () => {
    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-[linear-gradient(180deg,_rgba(7,12,28,0.96),_rgba(6,25,67,0.98))]">
            {/* === Background === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>

            {/* === Ambient Glows === */}
            <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#00B4FF]/20 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* === Header === */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-28 pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,180,255,0.3)]">
                    Resourcing & Consulting
                </h1>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    At{" "}
                    <span className="text-[#00B4FF] font-semibold">
                        Nash Cloud IT Solutions
                    </span>
                    , we deliver smart, scalable, and people-driven consulting services
                    that empower enterprises to thrive in the digital era.
                </p>
            </div>

            {/* === Staggered Flow Layout === */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-10 space-y-20">
                {/* Connector Line */}
                <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-[#00B4FF]/30 via-[#0D47A1]/60 to-[#00B4FF]/30 transform -translate-x-1/2"></div>

                {consultingServices.map((service, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col md:flex-row items-center ${service.align === "right" ? "md:flex-row-reverse" : ""
                            } gap-10`}
                    >
                        {/* Connector Dot */}
                        <div
                            className={`absolute top-[50%] w-5 h-5 bg-[#00B4FF] rounded-full border-4 border-[#061943] shadow-[0_0_25px_rgba(0,180,255,0.6)] ${service.align === "left"
                                ? "right-[50%] translate-x-2"
                                : "left-[50%] -translate-x-2"
                                } hidden md:block`}
                        ></div>

                        {/* === Card === */}
                        <div
                            className="relative group flex-1 p-10 rounded-2xl border border-[#00B4FF]/30 bg-white/5 backdrop-blur-xl 
              shadow-[0_0_30px_rgba(0,180,255,0.15)] hover:shadow-[0_0_50px_rgba(0,180,255,0.35)] transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D47A1]/30 to-[#00B4FF]/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                            <div className="relative z-10 flex items-center gap-4 mb-4">
                                <div className="p-4 bg-[#0D47A1]/50 rounded-full border border-[#00B4FF]/40">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-[#00B4FF] group-hover:text-white transition-all duration-300">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="relative z-10 text-gray-300 text-md leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* === Decorative Background Box (Image) === */}
                        <div
                            className="hidden md:block flex-1 h-[250px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#0D47A1]/40 to-[#061943]/60 border border-[#00B4FF]/20 shadow-[0_0_20px_rgba(0,180,255,0.1)]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                                style={{
                                    backgroundImage: `url(${service.img})`,
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#061943]/80"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* === Bottom Glow === */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/10 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default ResourceAndConsultingPage;
