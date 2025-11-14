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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-lg bg-[#061943]/70 shadow-md" : "bg-transparent"
                }`}
        >
            {/* Gradient Top Line */}
            <div className="h-[3px] bg-gradient-to-r from-[#0d47a1] via-[#00B4FF] to-[#0d47a1]" />

            {/* Navbar Content */}
            <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
                <div
                    className="text-2xl md:text-3xl font-bold tracking-wide text-white cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <span className="text-[#00B4FF]">Nash</span> Cloud IT Solutions
                </div>

                <ul className="hidden md:flex space-x-10 text-gray-200 font-medium">
                    <li
                        className="relative group cursor-pointer"
                        onClick={() => handleScroll("home")}
                    >
                        Home
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-[#00B4FF] transition-colors duration-300"
                        >
                            About Us
                        </Link>
                    </li>
                    <li
                        className="relative group cursor-pointer"
                        onClick={() => handleScroll("testimonials")}
                    >
                        Testimonials
                    </li>
                    <li
                        className="relative group cursor-pointer"
                        onClick={() => handleScroll("contact")}
                    >
                        Contact Us
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div
                    className="md:hidden flex flex-col cursor-pointer space-y-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </div>
            </nav>
            a
            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-[#0d47a1]/90 backdrop-blur-md border-t border-[#00B4FF]/20 py-4">
                    <ul className="flex flex-col items-center space-y-4 text-gray-100">
                        <li onClick={() => { handleScroll("home"); setMenuOpen(false); }}>Home</li>
                        <li>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                        </li>
                        <li onClick={() => { handleScroll("testimonials"); setMenuOpen(false); }}>Testimonials</li>
                        <li onClick={() => { handleScroll("contact"); setMenuOpen(false); }}>Contact Us</li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
