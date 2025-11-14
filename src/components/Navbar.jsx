import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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

            {/* Navbar Content */}
            <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="text-xl md:text-2xl font-bold text-white cursor-pointer tracking-wide hover:text-[#00B4FF] transition-all"
                >
                    <span className="text-[#00B4FF]">Nash</span> Cloud IT Solutions
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center space-x-10 text-gray-200 font-medium">
                    {[
                        { label: "Home", id: "home" },
                        { label: "Testimonials", id: "testimonials" },
                        { label: "Opportunities & Training", id: "opportunities" },
                        { label: "Contact Us", id: "contact" },
                    ].map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className="relative cursor-pointer group transition-all duration-300"
                        >
                            <span className="group-hover:text-[#00B4FF]">{item.label}</span>
                            <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#00B4FF] transition-all duration-300 group-hover:w-full"></div>
                        </li>
                    ))}

                    {/* About Button */}
                    <li>
                        <Link
                            to="/about"
                            className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] 
              text-white font-semibold shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:shadow-[0_0_30px_rgba(0,180,255,0.6)] 
              hover:scale-105 transition-all duration-300"
                        >
                            About Us
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div
                    className="md:hidden flex flex-col cursor-pointer space-y-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span
                        className={`w-7 h-[2px] rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px] bg-[#00B4FF]" : "bg-white"
                            }`}
                    ></span>
                    <span
                        className={`w-7 h-[2px] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "bg-white"
                            }`}
                    ></span>
                    <span
                        className={`w-7 h-[2px] rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px] bg-[#00B4FF]" : "bg-white"
                            }`}
                    ></span>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 w-full bg-[#061943]/80 backdrop-blur-lg border-t border-[#00B4FF]/30 py-6 
          flex flex-col items-center space-y-6 shadow-[0_0_25px_rgba(0,180,255,0.25)] transition-all duration-500"
                >
                    {[
                        { label: "Home", id: "home" },
                        { label: "Testimonials", id: "testimonials" },
                        { label: "Opportunities & Training", id: "opportunities" },
                        { label: "Contact Us", id: "contact" },
                    ].map((item) => (
                        <span
                            key={item.id}
                            onClick={() => {
                                handleScroll(item.id);
                                setMenuOpen(false);
                            }}
                            className="text-gray-200 text-lg hover:text-[#00B4FF] transition-all duration-300"
                        >
                            {item.label}
                        </span>
                    ))}

                    {/* About Us Button in Mobile */}
                    <Link
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="px-8 py-2 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] 
            text-white font-semibold shadow-[0_0_20px_rgba(0,180,255,0.3)] hover:shadow-[0_0_30px_rgba(0,180,255,0.5)] 
            hover:scale-105 transition-all duration-300"
                    >
                        About Us
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
