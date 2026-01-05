import React from "react";

const WhoWeAreAndOffer = () => {
    return (
        <section className="bg-[#0A192F] py-20">
            <div className="max-w-7xl mx-auto px-6 space-y-28">

                {/* WHO WE ARE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0D47A1]/40 to-transparent blur-2xl rounded-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                            alt="Who We Are"
                            className="relative z-10 w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#E2E8F0] mb-6">
                            Who We Are
                        </h2>

                        <p className="text-[#94A3B8] leading-relaxed text-justify">
                            We are a specialist technology and consulting partner delivering
                            SAP services, AI solutions, and digital transformation support
                            across public and private sectors. With over 10 years of industry
                            experience, we combine technical expertise, top talent, and
                            strategic insight to help organisations accelerate their digital
                            journey and build long-term capability.
                        </p>

                        <p className="text-[#94A3B8] leading-relaxed mt-4 text-justify">
                            We are also committed to developing future-ready professionals
                            through our training and internship programmes, bridging the
                            digital skills gap and preparing talent for an AI-driven world.
                        </p>

                        <div className="mt-8 w-20 h-1 bg-[#00B4FF] rounded-full"></div>
                    </div>
                </div>

                {/* WHAT WE OFFER */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Image */}
                    <div className="lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0D47A1]/40 to-transparent blur-2xl rounded-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                            alt="What We Offer"
                            className="relative z-10 w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                        />

                    </div>

                    {/* Content */}
                    <div className="lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#E2E8F0] mb-6">
                            What We Offer
                        </h2>

                        <p className="text-[#94A3B8] leading-relaxed text-justify">
                            <span className="font-medium text-[#E2E8F0]">Services:</span>{" "}
                            We deliver end-to-end digital transformation, combining deep expertise in
                            SAP SuccessFactors and HR technologies with bespoke product solutions,
                            along with comprehensive Quality Engineering and Testing services.
                        </p>

                        <p className="text-[#94A3B8] leading-relaxed mt-4 text-justify">
                            <span className="font-medium text-[#E2E8F0]">Resourcing:</span>{" "}
                            We provide top talent and skilled resources, including experienced
                            consultants who integrate seamlessly into your teams and deliver
                            immediate, measurable impact.
                        </p>

                        <p className="text-[#94A3B8] leading-relaxed mt-4 text-justify">
                            <span className="font-medium text-[#E2E8F0]">Internship & Training:</span>{" "}
                            We also offer hands-on internship and training programmes designed to
                            bridge the digital skills gap and develop the next generation of
                            industry-ready professionals.
                        </p>

                        <div className="mt-8 w-20 h-1 bg-[#00B4FF] rounded-full"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhoWeAreAndOffer;
