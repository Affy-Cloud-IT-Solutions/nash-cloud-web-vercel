import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/TechTradeLogo.png";

/* ================= SERVICES LIST ================= */
const servicesList = [
    { label: "Digital Transformation", path: "/digital-transformation" },
    // { label: "QA Engineering", path: "/qa-engineering" },
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
    const [isLightBg, setIsLightBg] = useState(true);
    const navigate = useNavigate();

    /* ================= LANDING PAGE NAVIGATION ================= */
    const handleScroll = (id, path = "/") => {
        navigate(path, { state: { scrollTo: id } });
        setMenuOpen(false);
        setServicesOpen(false);
        setAboutOpen(false);
    };

    /* ================= SCROLL EFFECT & BACKGROUND DETECTION ================= */
    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect background color at navbar position
            const navbarRect = document.querySelector('header')?.getBoundingClientRect();
            if (navbarRect) {
                const elementAtTop = document.elementsFromPoint(
                    window.innerWidth / 2,
                    navbarRect.bottom + 5
                )[0];

                if (elementAtTop) {
                    const bgColor = window.getComputedStyle(elementAtTop).backgroundColor;
                    // Extract RGB values
                    const rgb = bgColor.match(/\d+/g);
                    if (rgb) {
                        // Calculate luminance to determine if background is light or dark
                        const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
                        setIsLightBg(luminance > 0.5);
                    }
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // Initial check

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ================= SCROLL LOCK WHEN MENU OPEN ================= */
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    // Dynamic text color based on background
    const textColor = isLightBg ? "text-gray-800" : "text-white";
    const hoverColor = "hover:text-[#00B4FF]";
    const mobileTextColor = isLightBg ? "text-gray-800" : "text-white";
    const mobileBgColor = isLightBg
        ? "bg-white"
        : "bg-[#060910]"; // Deep dark solid background for better readability

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                menuOpen
                    ? isLightBg
                        ? "bg-white shadow-xl border-b border-white/50"
                        : "bg-[#060910] shadow-xl border-b border-white/20"
                    : isScrolled
                    ? isLightBg
                        ? "bg-white/30 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-b border-white/50"
                        : "bg-black/30 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-b border-white/20"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            {/* Top Accent Line */}
            <div className="h-[0px] bg-gradient-to-r from-[#00B4FF] via-[#0D47A1] to-[#00B4FF]" />

            {/* ================= NAVBAR ================= */}
            <nav className="max-w-7xl mx-auto px-6 md:px-10 py-2 flex justify-between items-center">
                {/* Logo - with dynamic filter for dark mode */}
                <div onClick={() => navigate("/")} className="cursor-pointer">
                    <img
                        src={logo}
                        alt="Tech Trade IT Solutions"
                        className={`h-14 md:h-20 w-full object-contain transition-all duration-300 ${!isLightBg ? "brightness-0 invert" : ""}`}
                    />
                </div>

                {/* ================= DESKTOP MENU ================= */}
                <ul className={`hidden md:flex items-center space-x-10 font-medium ${textColor}`}>
                    <li
                        onClick={() => handleScroll("home")}
                        className={`cursor-pointer transition-colors duration-300 ${hoverColor}`}
                    >
                        Home
                    </li>

                    {/* SERVICES */}
                    <li className="relative group cursor-pointer">
                        <span className={`flex items-center gap-1 transition-colors duration-300 ${hoverColor}`}>
                            Services
                            <ChevronDown
                                size={16}
                                className="transition-transform duration-300 group-hover:rotate-180"
                            />
                        </span>

                        <div className="absolute top-full left-0 mt-4 w-60 bg-white/80 backdrop-blur-2xl rounded-xl border border-white/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
                            className={`cursor-pointer transition-colors duration-300 ${hoverColor}`}
                        >
                            SAP SuccessFactors
                        </Link>
                    </li>

                    <li
                        onClick={() => handleScroll("resource")}
                        className={`cursor-pointer transition-colors duration-300 ${hoverColor}`}
                    >
                        Resourcing
                    </li>

                    {/* ABOUT US DROPDOWN - Now matches other menu items */}
                    <li className="relative group cursor-pointer">
                        <span
                            onClick={() => navigate("/about")}
                            className={`flex items-center gap-1 transition-colors duration-300 ${hoverColor}`}
                        >
                            About Us
                            <ChevronDown
                                size={16}
                                className="transition-transform duration-300 group-hover:rotate-180"
                            />
                        </span>

                        <div className="absolute top-full right-0 mt-4 w-60 bg-white/80 backdrop-blur-2xl rounded-xl border border-white/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
                            : isLightBg
                                ? "bg-gray-800"
                                : "bg-white"
                            }`}
                    />
                    <span
                        className={`w-7 h-[2px] rounded-full transition ${menuOpen ? "opacity-0" : isLightBg ? "bg-gray-800" : "bg-white"
                            }`}
                    />
                    <span
                        className={`w-7 h-[2px] rounded-full transition ${menuOpen
                            ? "-rotate-45 -translate-y-[7px] bg-[#00B4FF]"
                            : isLightBg
                                ? "bg-gray-800"
                                : "bg-white"
                            }`}
                    />
                </div>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
                <div className={`md:hidden absolute top-full left-0 w-full h-[calc(100vh-100%)] ${mobileBgColor} border-t border-white/10 py-10 flex flex-col items-center space-y-8 shadow-2xl overflow-y-auto`}>
                    <span
                        onClick={() => handleScroll("home")}
                        className={`text-lg cursor-pointer ${mobileTextColor}`}
                    >
                        Home
                    </span>

                    {/* MOBILE SERVICES */}
                    <div className="w-full flex flex-col items-center">
                        <span
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className={`flex items-center gap-2 text-lg cursor-pointer transition ${servicesOpen ? "text-[#00B4FF]" : mobileTextColor
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
                            <div className={`mt-4 w-[85%] ${isLightBg ? "bg-gray-50" : "bg-white/5"} rounded-xl border ${isLightBg ? "border-gray-200" : "border-white/10"} overflow-hidden transition-all duration-300`}>
                                {servicesList.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setServicesOpen(false);
                                        }}
                                        className={`block w-full px-5 py-4 text-sm ${isLightBg ? "text-gray-700 border-gray-100" : "text-gray-300 border-white/5"} border-b last:border-b-0 hover:bg-[#00B4FF]/10 hover:text-[#00B4FF] transition text-center`}
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
                            className={`text-lg cursor-pointer ${mobileTextColor}`}
                        >
                            SAP SuccessFactors
                        </Link>
                    </span>

                    <span
                        onClick={() => handleScroll("resource")}
                        className={`text-lg cursor-pointer ${mobileTextColor}`}
                    >
                        Resourcing
                    </span>

                    {/* MOBILE ABOUT US */}
                    <div className="w-full flex flex-col items-center">
                        <span
                            onClick={() => setAboutOpen(!aboutOpen)}
                            className={`flex items-center gap-2 text-lg cursor-pointer transition ${aboutOpen ? "text-[#00B4FF]" : mobileTextColor
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
                            <div className={`mt-4 w-[85%] ${isLightBg ? "bg-gray-50" : "bg-white/5"} rounded-xl border ${isLightBg ? "border-gray-200" : "border-white/10"} overflow-hidden transition-all duration-300`}>
                                {aboutList.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            handleScroll(item.id, "/about");
                                        }}
                                        className={`block w-full px-5 py-4 text-sm ${isLightBg ? "text-gray-700 border-gray-100" : "text-gray-300 border-white/5"} border-b last:border-b-0 hover:bg-[#00B4FF]/10 hover:text-[#00B4FF] transition text-center cursor-pointer`}
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