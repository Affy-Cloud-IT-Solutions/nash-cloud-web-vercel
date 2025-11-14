import React from "react";

const Services = () => {
    return (
        <section
            id="services"
            className="py-20 bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] text-white text-center"
        >
            <h2 className="text-4xl font-bold text-[#00B4FF] mb-10">Our Services</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {["SAP", "IT & Automation", "Resourcing", "Product Services", "Interns"].map((service, i) => (
                    <div
                        key={i}
                        className="p-8 rounded-2xl bg-white/5 border border-[#00B4FF]/20 backdrop-blur-md hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-500"
                    >
                        <h3 className="text-2xl font-semibold text-[#00B4FF] mb-3">{service}</h3>
                        <p className="text-gray-300">
                            We deliver top-notch {service} solutions tailored for digital transformation.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
