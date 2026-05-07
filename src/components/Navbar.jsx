import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/TechTradeLogo.png";

/* ================= SERVICES LIST ================= */
const servicesList = [
    { label: "Digital Transformation", path: "/digital-transformation" },
    { label: "QA Engineering", path: "/qa-engineering" },
    { label: "Bespoke Products", path: "/internal-product" },
];

/* ================= ABOUT LIST ================= */
const aboutList = [
    { label: "About TechTrade", id: "about-techtrade" },
    { label: "Vision and Values", id: "vision-values" },
    { label: "Leadership Team", id: "leadership" },
    { label: "Life at TechTrade", id: "culture" },
    { label: "Why TechTrade!", id: "why-techtrade" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    /* ================= LANDING PAGE NAVIGATION ================= */
    const handleScroll = (id, path = "/") => {
        navigate(path, { state: { scrollTo: id } });
        setMenuOpen(false);
        setServicesOpen(false);
        setAboutOpen(false);
    };

    /* ================= SCROLL EFFECT ================= */
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/50 backdrop-blur-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                : "bg-white/50 backdrop-blur-[40px]"
                }`}
        >
            {/* Top Accent Line */}
            <div className="h-[2px] bg-gradient-to-r from-[#00B4FF] via-[#0D47A1] to-[#00B4FF]" />

            {/* ================= NAVBAR ================= */}
            <nav className="max-w-7xl mx-auto px-6 md:px-10 py-2 flex justify-between items-center">
                {/* Logo */}
                <div onClick={() => navigate("/")} className="cursor-pointer">
                    <img
                        src={logo}
                        alt="Tech Trade IT Solutions"
                        className="h-14 md:h-20 w-auto object-contain"
                    />
                </div>

                {/* ================= DESKTOP MENU ================= */}
                <ul className="hidden md:flex items-center space-x-10 text-gray-800 font-medium">
                    <li
                        onClick={() => handleScroll("home")}
                        className="cursor-pointer hover:text-[#00B4FF] transition-colors duration-300"
                    >
                        Home
                    </li>

                    {/* SERVICES */}
                    <li className="relative group cursor-pointer">
                        <span className="flex items-center gap-1 hover:text-[#00B4FF] transition-colors duration-300">
                            Services
                            <ChevronDown
                                size={16}
                                className="transition-transform duration-300 group-hover:rotate-180"
                            />
                        </span>

                        <div className="absolute top-full left-0 mt-4 w-60 bg-white/80 backdrop-blur-2xl rounded-xl border border-white/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            {servicesList.map((service) => (
                                <Link
                                    key={service.path}
                                    to={service.path}
                                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#00B4FF]/10 hover:text-[#00B4FF] transition"
                                >
                                    {service.label}
                                </Link>
                            ))}
                        </div>
                    </li>

                    <li>
                        <Link
                            to="/sap-services"
                            className="cursor-pointer hover:text-[#00B4FF] transition-colors duration-300"
                        >
                            SAP SuccessFactors
                        </Link>
                    </li>

                    <li
                        onClick={() => handleScroll("resource")}
                        className="cursor-pointer hover:text-[#00B4FF] transition-colors duration-300"
                    >
                        Resourcing
                    </li>

                    {/* ABOUT US DROPDOWN */}
                    <li className="relative group cursor-pointer">
                        <div
                            onClick={() => navigate("/about")}
                            className="ml-6 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            About Us
                            <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        <div className="absolute top-full right-0 mt-4 w-60 bg-white/80 backdrop-blur-2xl rounded-xl border border-white/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            {aboutList.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleScroll(item.id, "/about");
                                    }}
                                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#00B4FF]/10 hover:text-[#00B4FF] transition cursor-pointer"
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </li>
                </ul>

                {/* ================= MOBILE TOGGLE ================= */}
                <div
                    className="md:hidden flex flex-col cursor-pointer space-y-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span
                        className={`w-7 h-[2px] rounded-full transition ${menuOpen
                            ? "rotate-45 translate-y-[7px] bg-[#00B4FF]"
                            : "bg-gray-800"
                            }`}
                    />
                    <span
                        className={`w-7 h-[2px] rounded-full transition ${menuOpen ? "opacity-0" : "bg-gray-800"
                            }`}
                    />
                    <span
                        className={`w-7 h-[2px] rounded-full transition ${menuOpen
                            ? "-rotate-45 -translate-y-[7px] bg-[#00B4FF]"
                            : "bg-gray-800"
                            }`}
                    />
                </div>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-2xl border-t border-white/20 py-6 flex flex-col items-center space-y-6 shadow-lg">
                    <span
                        onClick={() => handleScroll("home")}
                        className="text-lg text-gray-800 cursor-pointer"
                    >
                        Home
                    </span>

                    {/* MOBILE SERVICES */}
                    <div className="w-full flex flex-col items-center">
                        <span
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className={`flex items-center gap-2 text-lg cursor-pointer transition ${servicesOpen ? "text-[#00B4FF]" : "text-gray-800"
                                }`}
                        >
                            Services
                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#00B4FF]" : ""
                                    }`}
                            />
                        </span>

                        {servicesOpen && (
                            <div className="mt-4 w-[85%] bg-gray-50/90 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden">
                                {servicesList.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setServicesOpen(false);
                                        }}
                                        className="block w-full px-5 py-3 text-sm text-gray-700 border-b last:border-b-0 hover:bg-[#00B4FF]/10 hover:text-[#00B4FF] transition text-center"
                                    >
                                        {service.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <span>
                        <Link
                            to="/sap-services"
                            onClick={() => {
                                setMenuOpen(false);
                                setServicesOpen(false);
                            }}
                            className="text-lg text-gray-800 cursor-pointer"
                        >
                            SAP SuccessFactors
                        </Link>
                    </span>

                    <span
                        onClick={() => handleScroll("resource")}
                        className="text-lg text-gray-800 cursor-pointer"
                    >
                        Resourcing
                    </span>

                    {/* MOBILE ABOUT US */}
                    <div className="w-full flex flex-col items-center">
                        <span
                            onClick={() => setAboutOpen(!aboutOpen)}
                            className={`flex items-center gap-2 text-lg cursor-pointer transition ${aboutOpen ? "text-[#00B4FF]" : "text-gray-800"
                                }`}
                        >
                            About Us
                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${aboutOpen ? "rotate-180 text-[#00B4FF]" : ""
                                    }`}
                            />
                        </span>

                        {aboutOpen && (
                            <div className="mt-4 w-[85%] bg-gray-50/90 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden">
                                {aboutList.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            handleScroll(item.id, "/about");
                                        }}
                                        className="block w-full px-5 py-3 text-sm text-gray-700 border-b last:border-b-0 hover:bg-[#00B4FF]/10 hover:text-[#00B4FF] transition text-center cursor-pointer"
                                    >
                                        {item.label}
                                    </div>
                                ))}
                                <Link
                                    to="/about"
                                    onClick={() => setMenuOpen(false)}
                                    className="block w-full px-5 py-3 text-sm font-bold text-[#0D47A1] hover:bg-[#00B4FF]/10 transition text-center"
                                >
                                    View Full About Page
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;