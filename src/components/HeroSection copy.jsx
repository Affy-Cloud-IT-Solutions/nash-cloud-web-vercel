import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    {
        id: 1,
        title: "SAP Services",
        subtitle: "Empowering enterprises with seamless SAP integration and business intelligence.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        link: "/sap-services",
    },
    {
        id: 2,
        title: "IT Solutions",
        subtitle: "Driving efficiency through intelligent automation and innovative IT delivery.",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
        link: "/it-solutions",
    },
    {
        id: 3,
        title: "Resourcing & Consulting",
        subtitle: "Delivering expertise and talent that help organizations achieve operational excellence.",
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
        link: "/resourcing",
    },
    {
        id: 4,
        title: "Internal Product",
        subtitle: "Building high-performing, scalable, and user-centric digital solutions for enterprises.",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
        link: "/internal-product",
    },
    {
        id: 5,
        title: "Opportunities & Training",
        subtitle: "Shaping future-ready talent through guided mentorship and real-world learning.",
        img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
        link: "/opportunities",
    },
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    // stop stop stop stop stop stop stop stop
    return (
        <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-white">
            {/* === BACKGROUND IMAGE === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80 animate-slowPan"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80')",
                }}
            ></div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(6,25,67,0.92),_rgba(7,12,28,0.95))]"></div>

            {/* Ambient Glow */}
            <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-[#00B4FF]/20 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[450px] h-[450px] bg-[#0D47A1]/25 blur-[180px] rounded-full"></div>

            {/* Header */}
            <div className="text-center mb-10 z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-[#00B4FF] mb-2 drop-shadow-[0_0_15px_rgba(0,180,255,0.4)]">
                    Our Expertise
                </h1>
                <p className="text-gray-300 text-lg">
                    Delivering excellence across SAP, IT, and Digital Consulting.
                </p>
            </div>

            {/* === Carousel === */}
            <div className="relative w-full flex justify-center items-center perspective-[1000px] h-[380px] md:h-[420px] z-10">
                {slides.map((slide, index) => {
                    const position = (index - current + slides.length) % slides.length;
                    let transform = "";
                    let opacity = 1;

                    if (position === 0) transform = "translateZ(200px)";
                    else if (position === 1 || position === slides.length - 1) {
                        transform = `translateX(${position === 1 ? "260px" : "-260px"}) rotateY(${position === 1 ? "-25deg" : "25deg"
                            }) translateZ(100px)`;
                        opacity = 0.85;
                    } else {
                        transform = `translateX(${position === 2 ? "420px" : "-420px"}) rotateY(${position === 2 ? "-45deg" : "45deg"
                            }) translateZ(-150px)`;
                        opacity = 0.3;
                    }

                    return (
                        <Link
                            to={slide.link}
                            key={slide.id}
                            className="absolute w-[280px] md:w-[340px] h-[220px] md:h-[250px] rounded-2xl overflow-hidden text-center transition-all duration-700 ease-in-out transform-gpu border border-[#00B4FF]/20 shadow-[0_0_25px_rgba(0,180,255,0.2)] hover:shadow-[0_0_40px_rgba(0,180,255,0.4)] hover:scale-[1.03]"
                            style={{
                                transform,
                                opacity,
                                zIndex: position === 0 ? 5 : 3 - Math.abs(position),
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0D47A1]/25 via-[#061943]/40 to-[#061943]/70 backdrop-blur-[2px]"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center h-full px-5">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2 drop-shadow-[0_0_10px_rgba(0,180,255,0.3)]">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-100 text-sm md:text-base">{slide.subtitle}</p>
                            </div>
                        </Link>
                    );
                })}

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-[8%] md:left-[14%] bg-white/10 hover:bg-[#00B4FF]/25 text-white/80 hover:text-[#00B4FF] text-3xl md:text-4xl p-2 md:p-3 rounded-full backdrop-blur-md border border-[#00B4FF]/30 transition-all duration-300 z-20"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-[8%] md:right-[14%] bg-white/10 hover:bg-[#00B4FF]/25 text-white/80 hover:text-[#00B4FF] text-3xl md:text-4xl p-2 md:p-3 rounded-full backdrop-blur-md border border-[#00B4FF]/30 transition-all duration-300 z-20"
                >
                    ❯
                </button>
            </div>

            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#00B4FF]/15 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default HeroSection;
