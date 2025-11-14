import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative text-white">
            {/* top accent line */}
            <div className="h-[3px] bg-gradient-to-r from-[#0D47A1] via-[#00B4FF] to-[#0D47A1]" />

            <div className="bg-[linear-gradient(180deg,_rgb(6,25,67),_rgb(7,12,28))]">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-extrabold">
                            <span className="text-[#00B4FF]">Nash</span> Cloud IT Solutions
                        </div>
                        <p className="text-gray-300 mt-3">
                            Enterprise-grade IT, SAP, Automation & Consulting services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#home" className="hover:text-white">Home</a></li>
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><a href="#services" className="hover:text-white">Services</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>SAP Solutions</li>
                            <li>IT & Automation</li>
                            <li>Resourcing / Consulting</li>
                            <li>Product Services</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00B4FF]">Contact</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>United Kingdom</li>
                            <li>contact@nashcloudit.com</li>
                            <li>+44 7776 839310</li>
                        </ul>
                    </div>
                </div>

                {/* bottom bar */}
                {/* bottom bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
                        <div>© {new Date().getFullYear()} Nash Cloud IT Solutions. All rights reserved.</div>

                        <div className="flex gap-4 mt-2 sm:mt-0">
                            <a href="#" className="hover:text-white">Privacy</a>
                            <a href="#" className="hover:text-white">Terms</a>
                        </div>
                    </div>

                    {/* powered by section */}
                    <div className="text-center py-3 text-gray-400 text-xs border-t border-white/10">
                        Powered by <span className="text-[#00B4FF] font-semibold">Affy Cloud IT Solutions</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
