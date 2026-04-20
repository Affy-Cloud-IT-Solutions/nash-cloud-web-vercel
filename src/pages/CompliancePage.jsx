

import React from "react";
import { Shield, Lock, CheckCircle, FileText } from "lucide-react";
import simpleBusiness from "../assets/sb.jpg";
import ico from "../assets/ico.png";
import barclay from "../assets/barclay.png";

const CompliancePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-10 lg:px-24 mt-10">
            <div className="max-w-4xl mx-auto">



                <div className="bg-white p-8 md:p-12 shadow-sm rounded-lg border border-gray-100">

                    <h1 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-6">
                        Compliance &amp; Insurance
                    </h1>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            At TechTrade IT Solutions, we are committed to maintaining the highest standards of
                            professionalism, data protection, and risk management. We ensure that our clients are
                            fully protected when working with us.
                        </p>

                        <hr className="border-gray-200" />

                        {/* ── Section 1: Insurance ── */}
                        <section>
                            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-[#00B4FF]" />
                                Professional Indemnity &amp; Business Insurance
                            </h2>
                            <p>
                                TechTradeUK Limited maintains comprehensive business insurance, including Professional
                                Indemnity, Public Liability, and Employers' Liability cover, to safeguard our clients
                                and operations.
                            </p>
                            <ul className="list-none mt-2 space-y-1">
                                <li><strong>Policy Number:</strong> BHPR5503429XB1</li>
                                <li><strong>Coverage Period:</strong> 15 April 2026 – 14 April 2027</li>
                            </ul>
                            <p className="mt-2">
                                Our insurance policy provides protection against claims arising from professional
                                services, including errors, omissions, and liabilities associated with IT consulting
                                and technology services.
                            </p>
                            <p className="mt-2 text-sm italic">
                                Proof of insurance documentation is available upon request.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        {/* ── Section 2: Data Protection ── */}
                        <section>
                            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-[#00B4FF]" />
                                Data Protection &amp; ICO Registration
                            </h2>
                            <p>
                                We are registered with the Information Commissioner's Office (ICO) and comply with
                                all applicable UK data protection laws, including UK GDPR and the Data Protection
                                Act 2018.
                            </p>
                            <p className="mt-2">
                                <strong>ICO Registration Number:</strong> CSN0277762
                            </p>
                            <p className="mt-2">
                                We are committed to ensuring that all client, candidate, and business data is handled
                                securely, confidentially, and in compliance with regulatory standards.
                            </p>
                        </section>

                        <hr className="border-gray-200" />

                        {/* ── Section 3: GDPR Statement (NEW) ── */}
                        <section>
                            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#00B4FF]" />
                                GDPR Statement
                            </h2>
                            <p>
                                TechTradeUK Limited is fully compliant with the UK General Data Protection Regulation
                                (UK GDPR) and the Data Protection Act 2018. We take our data protection obligations
                                seriously and have implemented appropriate technical and organisational measures to
                                safeguard all personal data we process.
                            </p>
                            <ul className="list-disc pl-6 mt-3 space-y-1">
                                <li>Personal data is collected only for specified, explicit, and legitimate purposes.</li>
                                <li>Data is not retained for longer than necessary and is securely deleted when no longer required.</li>
                                <li>Individuals have the right to access, rectify, or erase their personal data upon request.</li>
                                <li>We do not sell or share personal data with third parties without lawful basis.</li>
                            </ul>
                            <p className="mt-3 text-sm italic">
                                For data subject requests or privacy enquiries, please contact us directly.
                            </p>
                        </section>

                        <hr className="border-gray-200" />


                        {/* ── Section 4: Contact for Verification ── */}
                        <section>
                            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#00B4FF]" />
                                Contact for Verification
                            </h2>

                            <p>
                                For verification of our compliance, insurance, or data protection details,
                                please contact us:
                            </p>

                            <ul className="mt-2 space-y-1">
                                <li><strong>Email:</strong> info@techtradeitsolutions.com</li>
                                <li><strong>Phone:</strong> +44 7776 839310</li>
                            </ul>
                        </section>
                        {/* ── Section 4: Our Commitment ── */}
                        {/* <section>
                            <h2 className="text-xl font-semibold text-[#00B4FF] mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#00B4FF]" />
                                Our Commitment
                            </h2>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Secure handling of client and candidate data</li>
                                <li>Compliance with UK regulations and standards</li>
                                <li>Transparent and accountable service delivery</li>
                                <li>Continuous improvement of risk and compliance processes</li>
                            </ul>
                            <p className="mt-4">
                                For further information or verification, please contact us directly.
                            </p>


                        </section> */}

                        {/* ── Logos ── */}
                        <hr className="border-gray-200 mt-6" />
                        <div className="flex flex-wrap gap-6 pt-6">
                            <img src={barclay} alt="Insurance Logo" className="h-12 object-contain" />
                            <img src={simpleBusiness} alt="Simple Business Logo" className="h-12 object-contain" />
                            <img src={ico} alt="ICO Logo" className="h-12 object-contain" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompliancePage;