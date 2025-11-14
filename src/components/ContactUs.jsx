import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="min-h-screen pt-24 pb-20 px-6 md:px-16 text-white bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] relative overflow-hidden"
        >
            {/* Ambient Glows */}
            <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#00B4FF]/20 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#0D47A1]/25 blur-[200px] rounded-full"></div>

            {/* Header */}
            <div className="relative z-10 text-center mb-14">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 bg-[#fff] bg-clip-text text-transparent">
                    Contact Us
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Let’s build the future of HR Tech together.
                    Reach out to explore how we can help you transform your HR systems and digital operations.
                </p>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-[#00B4FF]/20 shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-500"
                >
                    <h3 className="text-2xl font-semibold text-[#00B4FF] mb-2">
                        Get in Touch
                    </h3>

                    <div>
                        <label className="block text-gray-300 mb-2 text-sm">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#00B4FF]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B4FF] transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#00B4FF]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B4FF] transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2 text-sm">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#00B4FF]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00B4FF] transition-all duration-300 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 px-8 py-3 bg-gradient-to-r from-[#0d47a1] to-[#00B4FF] rounded-full font-semibold text-white hover:shadow-[0_0_25px_rgba(0,180,255,0.5)] hover:scale-105 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Office Info (with Background Image) */}
                {/* Office Info (with Background Image) */}
                {/* Office Info (with Visible Background Image) */}
                <div
                    className="relative flex flex-col justify-center p-8 rounded-2xl overflow-hidden border border-[#00B4FF]/20 shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-500"
                >
                    {/* ✅ Background Image — visible and vibrant */}
                    <div
                        className="absolute inset-0 bg-cover bg-center brightness-[0.8] contrast-[1.1]"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80')",
                        }}
                    ></div>

                    {/* ✅ Subtle overlay for text clarity */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061943]/80 via-[#0d47a1]/70 to-[#061943]/90"></div>

                    {/* ✅ Content */}
                    <div className="relative z-10 text-white">
                        <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                            Office Information
                        </h3>

                        <div className="space-y-6 text-gray-300">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-1">Office</h4>
                                <p>Birmingham, United Kingdom</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                                <p>
                                    <a
                                        href="mailto:Masterakbarkhan@outlook.com"
                                        className="text-gray-200 hover:underline"
                                    >
                                        Masterakbarkhan@outlook.com
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                                <p>
                                    <a
                                        href="tel:+447776839310"
                                        className="text-gray-200 hover:underline"
                                    >
                                        +44 7776 839310
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Decorative line */}
                        <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent"></div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ContactUs;
