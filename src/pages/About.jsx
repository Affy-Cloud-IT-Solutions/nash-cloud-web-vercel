import React from "react";
import { Globe2, Rocket, Gem } from "lucide-react";

/* 🖼 About Images */
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";

const aboutImages = [
    about1,
    about2,
    about3,
    about4,
    about5,
    about6,
];

const About = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen pt-28 pb-16 px-6 md:px-16 overflow-hidden
      bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] text-white"
        >
            {/* 🌌 Background Tech Glows */}
            <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#0D47A1]/30 blur-[150px] rounded-full" />
            <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00B4FF]/20 blur-[180px] rounded-full" />

            {/* 🔹 Header */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(0,180,255,0.3)]">
                    <span className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent">
                        About Us
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
                    Nash Tech Consulting is a leading technology consulting company
                    specializing in{" "}
                    <span className="text-[#00B4FF] font-semibold">IT</span>,{" "}
                    <span className="text-[#00B4FF] font-semibold">SAP</span>, and{" "}
                    <span className="text-[#00B4FF] font-semibold">
                        Digital Transformation
                    </span>{" "}
                    services. We help enterprises scale, innovate, and achieve excellence
                    in a digital-first world.
                </p>

                <p className="text-gray-400 text-md leading-relaxed max-w-2xl mx-auto">
                    We believe in building lasting partnerships through innovation,
                    reliability, and transparency — empowering clients to achieve global
                    success through technology.
                </p>
            </div>

            {/* 🖼 IMAGE GALLERY */}
            <div className="relative z-10 mt-16 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                {aboutImages.map((img, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl
            border border-[#00B4FF]/20
            shadow-[0_0_25px_rgba(0,180,255,0.15)]
            hover:shadow-[0_0_40px_rgba(0,180,255,0.35)]
            transition-all duration-500"
                    >
                        <img
                            src={img}
                            alt={`About ${index + 1}`}
                            className="w-full h-56 object-cover
              transform group-hover:scale-110
              transition-transform duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061943]/60 via-transparent to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
            </div>

            {/* 💠 Cards Section */}
            <div className="relative z-10 mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {[
                    {
                        title: "Our Vision",
                        text: "To become the trusted global partner for digital transformation — enabling businesses to innovate fearlessly.",
                        Icon: Globe2,
                    },
                    {
                        title: "Our Mission",
                        text: "Deliver top-tier IT and SAP solutions that fuel growth, agility, and sustainable success for our clients.",
                        Icon: Rocket,
                    },
                    {
                        title: "Our Values",
                        text: "Integrity, innovation, and customer-centric excellence — driving everything we create and deliver.",
                        Icon: Gem,
                    },
                ].map(({ title, text, Icon }, index) => (
                    <div
                        key={index}
                        className="group relative p-10 rounded-2xl overflow-hidden
            border border-[#00B4FF]/20 backdrop-blur-lg bg-white/5
            shadow-[0_0_25px_rgba(0,180,255,0.15)]
            hover:shadow-[0_0_40px_rgba(0,180,255,0.35)]
            transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Glow Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/10 via-transparent to-[#0D47A1]/20
            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Icon */}
                        <div className="relative z-10 flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full
            bg-gradient-to-br from-[#0D47A1]/40 to-[#00B4FF]/30
            border border-[#00B4FF]/30 group-hover:border-[#00B4FF]/50 transition-all duration-500">
                            <Icon className="w-8 h-8 text-[#00B4FF] group-hover:text-white transition-colors duration-500" />
                        </div>

                        {/* Title */}
                        <h3 className="relative z-10 text-2xl font-semibold text-[#00B4FF] mb-3 text-center
            group-hover:text-white transition-colors duration-500">
                            {title}
                        </h3>

                        {/* Text */}
                        <p className="relative z-10 text-gray-300 leading-relaxed text-center">
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Decorative Divider */}
            <div className="relative z-10 mt-20 max-w-6xl mx-auto h-[2px]
      bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent" />
        </section>
    );
};

export default About;
