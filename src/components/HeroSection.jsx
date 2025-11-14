import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    {
        id: 1,
        title: "SAP Services",
        subtitle:
            "Empowering enterprises with seamless SAP integration and business intelligence.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        link: "/sap-services",
    },
    {
        id: 2,
        title: "IT Solutions",
        subtitle:
            "Driving efficiency through intelligent automation and innovative IT delivery.",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
        link: "/it-solutions",
    },
    {
        id: 3,
        title: "Resourcing & Consulting",
        subtitle:
            "Delivering expertise and talent that help organizations achieve operational excellence.",
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
        link: "/resourcing",
    },
    {
        id: 4,
        title: "Internal Product",
        subtitle:
            "Building high-performing, scalable, and user-centric digital solutions for enterprises.",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
        link: "/internal-product",
    },
    {
        id: 5,
        title: "Opportunities & Training",
        subtitle:
            "Shaping future-ready talent through guided mentorship and real-world learning.",
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
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden text-white pt-20 md:pt-32">
            {/* === BACKGROUND === */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(6,25,67,0.95),_rgba(7,12,28,0.98))]"></div>

            {/* Ambient Glows */}
            <div className="absolute top-[20%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00B4FF]/25 blur-[200px] rounded-full"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0D47A1]/30 blur-[240px] rounded-full"></div>

            {/* Header */}
            <div className="text-center mb-8 z-10 max-w-3xl md:max-w-5xl mx-auto px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#fff] mb-4 drop-shadow-[0_0_15px_rgba(0,180,255,0.4)]">
                    Our Expertise
                </h1>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                    Delivering excellence across{" "}
                    <span className="text-[#00B4FF] font-semibold">
                        SAP, IT, and Digital Consulting
                    </span>{" "}
                    — empowering businesses to evolve, scale, and succeed through
                    innovation.
                </p>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                    At{" "}
                    <span className="text-[#00B4FF] font-medium">
                        Nash Cloud IT Solutions
                    </span>
                    , we bring together technology expertise, strategic insight, and
                    modern design thinking to build solutions that enhance productivity,
                    accelerate digital transformation, and ensure long-term business
                    value.
                </p>
            </div>

            {/* === Wider Responsive Carousel === */}
            <div className="relative flex justify-center items-center w-[90%] max-w-[1600px] perspective-[1600px] h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] z-10 mt-6 md:mt-10">
                {slides.map((slide, index) => {
                    const position = (index - current + slides.length) % slides.length;
                    let transform = "";
                    let opacity = 1;
                    let scale = 1;

                    if (position === 0) {
                        transform = "translateZ(250px)";
                        scale = 1.05;
                        opacity = 1;
                    } else if (position === 1 || position === slides.length - 1) {
                        transform = `translateX(${position === 1 ? "350px" : "-350px"}) rotateY(${position === 1 ? "-25deg" : "25deg"}) translateZ(40px)`;
                        scale = 0.9;
                        opacity = 0.8;
                    } else {
                        transform = `translateX(${position === 2 ? "600px" : "-600px"}) rotateY(${position === 2 ? "-40deg" : "40deg"}) translateZ(-200px)`;
                        scale = 0.8;
                        opacity = 0.3;
                    }

                    return (
                        <Link
                            to={slide.link}
                            key={slide.id}
                            className="absolute w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px]
  rounded-3xl overflow-hidden text-center transition-all duration-700 ease-in-out transform-gpu group hover:scale-[1.05]"
                            style={{
                                transform,
                                opacity,
                                scale,
                                zIndex: position === 0 ? 10 : 5 - Math.abs(position),
                            }}
                        >
                            {/* === Card Background === */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00B4FF_0%,#0D47A1_60%,#081325_100%)] border border-[#00B4FF]/40 backdrop-blur-lg rounded-3xl shadow-[0_0_30px_rgba(0,180,255,0.2)] group-hover:shadow-[0_0_55px_rgba(0,180,255,0.45)] transition-all duration-700"></div>


                            {/* === Top Image Section === */}
                            <div className="relative h-[55%] sm:h-[60%] overflow-hidden rounded-t-3xl">
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1530]/70"></div>
                            </div>

                            {/* === Text Section === */}
                            <div className="relative h-[45%] px-5 py-5 flex flex-col items-center justify-center text-center">
                                <h2 className="text-xl sm:text-2xl font-semibold text-[#00B4FF] mb-2 drop-shadow-[0_0_10px_rgba(0,180,255,0.6)] group-hover:text-white transition-all duration-300">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm group-hover:text-gray-100 transition-colors duration-300">
                                    {slide.subtitle}
                                </p>
                            </div>

                            {/* === Glowing Outline Effect === */}
                            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#00B4FF]/70 shadow-[0_0_25px_rgba(0,180,255,0.2)] group-hover:shadow-[0_0_55px_rgba(0,180,255,0.5)] transition-all duration-700"></div>
                        </Link>

                    );
                })}

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-[3%] md:left-[5%] bg-white/10 hover:bg-[#00B4FF]/25 text-white/80 hover:text-[#00B4FF] text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-full backdrop-blur-md border border-[#00B4FF]/30 transition-all duration-300 z-20"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-[3%] md:right-[5%] bg-white/10 hover:bg-[#00B4FF]/25 text-white/80 hover:text-[#00B4FF] text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-full backdrop-blur-md border border-[#00B4FF]/30 transition-all duration-300 z-20"
                >
                    ❯
                </button>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[900px] sm:w-[1100px] md:w-[1300px] h-[350px] sm:h-[420px] bg-[#00B4FF]/15 blur-[180px] rounded-full"></div>
        </section>
    );
};

export default HeroSection;
// stop stop stop stop stop sto pstop sto psto psto p