import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
    const navigate = useNavigate();

    const handleScroll = (id) => {
        navigate("/", { state: { scrollTo: id } });
    };

    return (
        <footer className="relative text-white">
            {/* Top accent line */}
            <div className="h-[3px] bg-gradient-to-r from-[#0D47A1] via-[#00B4FF] to-[#0D47A1]" />

            <div className="bg-gradient-to-tl from-[#E3F2FD] via-[#F8FBFF] to-[#E1F5FE]">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-extrabold">
                            {/* <span className="text-[#00B4FF]">Nash</span> Cloud IT Solutions */}
                            <img
                                src={logo}
                                alt="Tech Trade IT Solutions"
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-600 mt-3">
                            Enterprise-grade IT, SAP, Automation & Consulting services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                            <li className="">
                                <button
                                    onClick={() => handleScroll("home")}
                                    className="hover:text-[#0D47A1] text-left cursor-pointer"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll("sap")}
                                    className="hover:text-[#0D47A1] text-left cursor-pointer"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll("opportunities")}
                                    className="hover:text-[#0D47A1] text-left cursor-pointer"
                                >
                                    Interns Programme
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll("resource")}
                                    className="hover:text-[#0D47A1] text-left cursor-pointer"
                                >
                                    Resourcing
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">
                            Services
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>SAP Solutions</li>
                            <li>IT & Automation</li>
                            <li>Resourcing / Consulting</li>
                            <li>Product Services</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>United Kingdom</li>
                            <li>info@techtradeitsolutions.com</li>
                            <li>+44 7776 839310</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-700 text-sm">
                        <div>
                            © {new Date().getFullYear()} Tech Trade IT Solutions. All rights
                            reserved.
                        </div>

                        <div className="flex gap-4 mt-2 sm:mt-0">
                            <span className="hover:text-[#0D47A1] cursor-pointer">Privacy</span>
                            <span className="hover:text-[#0D47A1] cursor-pointer">Terms</span>
                        </div>
                    </div>

                    {/* Powered by */}
                    <div className="text-center py-3 text-gray-700 text-xs border-t border-white/10">
                        Powered by{" "}
                        <span className="text-[#00B4FF] font-semibold">
                            Affy Cloud IT Solutions
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
