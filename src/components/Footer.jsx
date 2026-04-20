


import React from "react";
import { useNavigate, Link } from "react-router-dom";
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
                            <li>
                                <button onClick={() => handleScroll("home")} className="hover:text-[#0D47A1] text-left cursor-pointer">Home</button>
                            </li>
                            <li>
                                <button onClick={() => handleScroll("sap")} className="hover:text-[#0D47A1] text-left cursor-pointer">Services</button>
                            </li>
                            {/* <li>
                                <button onClick={() => handleScroll("opportunities")} className="hover:text-[#0D47A1] text-left cursor-pointer">Interns Programme</button>
                            </li> */}
                            <li>
                                <button onClick={() => handleScroll("resource")} className="hover:text-[#0D47A1] text-left cursor-pointer">Resourcing</button>
                            </li>
                            <li>
                                <Link to="/compliance" className="hover:text-[#0D47A1] text-left cursor-pointer transition-colors duration-200">Compliance</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">Services</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>SAP Solutions</li>
                            <li>IT & Automation</li>
                            <li>Resourcing / Consulting</li>
                            <li>Product Services</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">Contact</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>United Kingdom</li>
                            <li>info@techtradeitsolutions.com</li>
                            <li>+44 7776 839310</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-700 text-sm">
                        {/* <div>
                            © {new Date().getFullYear()} Tech Trade IT Solutions. All rights reserved.
                        </div> */}
                        <div className="flex gap-4 mt-2 sm:mt-0 text-[14px]">
                            <Link to="/privacy-policy" className="hover:text-[#0D47A1] cursor-pointer transition-colors duration-200">Privacy Policy</Link>
                            <span className="text-gray-300">|</span>
                            <Link to="/cookies-policy" className="hover:text-[#0D47A1] cursor-pointer transition-colors duration-200">Cookies Policy</Link>
                            <span className="text-gray-300">|</span>
                            <Link to="/terms-and-conditions" className="hover:text-[#0D47A1] cursor-pointer transition-colors duration-200">Terms & Conditions</Link>
                            <span className="text-gray-300">|</span>

                        </div>

                        <div className="mt-3 text-sm text-gray-600 text-center">
                            <span>Fully Insured </span>
                            <span className="mx-2">|</span>
                            <span>  ICO Registered (CSN0277762) </span>
                            <span className="mx-2">|</span>
                            <span>GDPR Compliant</span>
                        </div>
                    </div>
                </div>


                {/* Legal / Registration Strip */}
                <div className="border-t border-gray-200 bg-[#EBF5FF]/60">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-4.5 flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">

                        {/* Company name + reg details */}
                        <p className="text-[#0D47A1] font-semibold text-[15px] tracking-wide">
                            TechTradeUK Limited is trading as TechTrade IT Solutions
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1.5 text-gray-600 text-[14px]">
                            <span>Registered in England &amp; Wales</span>
                            <span className="hidden md:inline text-gray-300">|</span>
                            <span>
                                Company No: <span className="font-medium text-gray-700">10940432</span>
                            </span>
                            {/* <span className="hidden md:inline text-gray-300">|</span>
                            <span>
                                VAT No: <span className="font-medium text-gray-700">288183364</span>
                            </span> */}
                        </div>
                    </div>

                    {/* Copyright + Registered Office */}
                    <div className="border-t border-gray-200/70 py-3.5 px-6 md:px-10 text-center text-gray-600 text-[14px]">
                        Copyright © {new Date().getFullYear()} Registered Office: 16 Burman Road, Birmingham, England, B90 2BD
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;