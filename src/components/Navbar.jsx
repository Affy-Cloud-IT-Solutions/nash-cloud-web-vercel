import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

/* ================= SERVICES LIST ================= */
const servicesList = [
    { label: "SAP", path: "/sap-services" },
    { label: "Digital Transformation", path: "/digital-transformation" },
    { label: "QA Engineering", path: "/qa-engineering" },
    { label: "Bespoke Products", path: "/internal-product" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const handleScroll = (id) => {
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "backdrop-blur-xl bg-[#061943]/70 shadow-[0_0_25px_rgba(0,180,255,0.2)]"
                : "bg-transparent"
                }`}
        >
            {/* Top Gradient Line */}
            <div className="h-[3px] bg-gradient-to-r from-[#00B4FF] via-[#0D47A1] to-[#00B4FF]" />

            {/* ================= NAVBAR ================= */}
            <nav className="max-w-7xl mx-auto px-6 md:px-10 py-2 flex justify-between items-center">
                {/* Logo */}
                <div onClick={() => navigate("/")} className="cursor-pointer">
                    <img
                        src={logo}
                        alt="Nash Cloud IT Solutions"
                        className="h-8 md:h-12 w-auto object-contain"
                    />
                </div>

                {/* ================= DESKTOP MENU ================= */}
                <ul className="hidden md:flex items-center space-x-10 text-gray-200 font-medium">
                    <li onClick={() => handleScroll("home")} className="cursor-pointer">
                        <span className="hover:text-[#00B4FF]">Home</span>
                    </li>

                    {/* DESKTOP SERVICES */}
                    <li className="relative group cursor-pointer">
                        <span className="flex items-center gap-1 hover:text-[#00B4FF] transition">
                            Services
                            <ChevronDown
                                size={16}
                                className="transition-transform duration-300 group-hover:rotate-180"
                            />
                        </span>

                        <div
                            className="absolute top-full left-0 mt-4 w-60
              bg-[#061943]/90 backdrop-blur-xl
              rounded-xl border border-[#00B4FF]/20
              shadow-[0_10px_30px_rgba(0,180,255,0.25)]
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              translate-y-2 group-hover:translate-y-0
              transition-all duration-300"
                        >
                            {servicesList.map((service) => (
                                <Link
                                    key={service.path}
                                    to={service.path}
                                    className="block px-5 py-3 text-sm text-gray-200
                  hover:bg-[#00B4FF]/10 hover:text-[#00B4FF] transition"
                                >
                                    {service.label}
                                </Link>
                            ))}
                        </div>
                    </li>

                    <li onClick={() => handleScroll("opportunities")} className="cursor-pointer">
                        <span className="hover:text-[#00B4FF]">Interns Programme</span>
                    </li>

                    <li onClick={() => handleScroll("resource")} className="cursor-pointer">
                        <span className="hover:text-[#00B4FF]">Resourcing</span>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="ml-6 px-5 py-2 rounded-full
              bg-gradient-to-r from-[#0D47A1] to-[#00B4FF]
              text-white font-semibold
              shadow-[0_0_20px_rgba(0,180,255,0.4)]
              hover:shadow-[0_0_30px_rgba(0,180,255,0.6)]
              hover:scale-105 transition-all duration-300"
                        >
                            About Us
                        </Link>
                    </li>
                </ul>

                {/* ================= MOBILE TOGGLE ================= */}
                <div
                    className="md:hidden flex flex-col cursor-pointer space-y-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`w-7 h-[2px] rounded-full transition ${menuOpen ? "rotate-45 translate-y-[7px] bg-[#00B4FF]" : "bg-white"}`} />
                    <span className={`w-7 h-[2px] rounded-full transition ${menuOpen ? "opacity-0" : "bg-white"}`} />
                    <span className={`w-7 h-[2px] rounded-full transition ${menuOpen ? "-rotate-45 -translate-y-[7px] bg-[#00B4FF]" : "bg-white"}`} />
                </div>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 w-full
          bg-[#061943]/85 backdrop-blur-lg
          border-t border-[#00B4FF]/30 py-6
          flex flex-col items-center space-y-6"
                >
                    <span onClick={() => handleScroll("home")} className="text-lg text-gray-200">
                        Home
                    </span>

                    {/* MOBILE SERVICES */}
                    <div className="w-full flex flex-col items-center">
                        <span
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className={`flex items-center gap-2 text-lg cursor-pointer transition
                ${servicesOpen ? "text-[#00B4FF]" : "text-gray-200"}`}
                        >
                            Services
                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#00B4FF]" : ""
                                    }`}
                            />
                        </span>

                        {servicesOpen && (
                            <div
                                className="mt-4 w-[85%]
                bg-[#0B1F5C]/70 backdrop-blur-md
                rounded-xl border border-[#00B4FF]/20
                shadow-[0_8px_25px_rgba(0,180,255,0.15)]
                overflow-hidden"
                            >
                                {servicesList.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setServicesOpen(false);
                                        }}
                                        className="block w-full px-5 py-3 text-sm text-gray-300
                    border-b border-[#00B4FF]/10 last:border-b-0
                    hover:bg-[#00B4FF]/10 hover:text-[#00B4FF]
                    active:bg-[#00B4FF]/20 transition text-center"
                                    >
                                        {service.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <span onClick={() => handleScroll("opportunities")} className="text-lg text-gray-200">
                        Interns Programme
                    </span>

                    <span onClick={() => handleScroll("resource")} className="text-lg text-gray-200">
                        Resourcing
                    </span>

                    <Link
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="px-8 py-2 rounded-full
            bg-gradient-to-r from-[#0D47A1] to-[#00B4FF]
            text-white font-semibold"
                    >
                        About Us
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
