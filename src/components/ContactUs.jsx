import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error"
    const [serverMessage, setServerMessage] = useState("");

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters.";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear field error on change
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }

        //  Reset success/error message on typing
        if (submitStatus) {
            setSubmitStatus(null);
            setServerMessage("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setSubmitStatus(null);
        setServerMessage("");

        try {
            await axios.post("https://techtradeitsolutions.com/api/contact", {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
            });

            setSubmitStatus("success");
            setServerMessage("Your message has been sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } catch (error) {
            setSubmitStatus("error");
            if (error.response?.data?.message) {
                setServerMessage(error.response.data.message);
            } else {
                setServerMessage("Something went wrong. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen pt-24 pb-16 px-6 md:px-16 text-white bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] relative overflow-hidden"
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
                    Let's build the future of HR Tech together.
                    Reach out to explore how we can help you transform your HR systems and digital operations.
                </p>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-6 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-[#00B4FF]/20 shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-500"
                >
                    <h3 className="text-2xl font-semibold text-[#00B4FF] mb-2">
                        Get in Touch
                    </h3>

                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-300 mb-2 text-sm">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${errors.name
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#00B4FF]/20 focus:border-[#00B4FF]"
                                }`}
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-400 text-xs">{errors.name}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-300 mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${errors.email
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#00B4FF]/20 focus:border-[#00B4FF]"
                                }`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-400 text-xs">{errors.email}</p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-gray-300 mb-2 text-sm">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${errors.message
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#00B4FF]/20 focus:border-[#00B4FF]"
                                }`}
                        ></textarea>
                        {errors.message && (
                            <p className="mt-1 text-red-400 text-xs">{errors.message}</p>
                        )}
                    </div>

                    {/* Success / Error Message */}
                    {submitStatus === "success" && (
                        <div className="px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                            {serverMessage}
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                            {serverMessage}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-2 px-8 py-3 bg-gradient-to-r from-[#0d47a1] to-[#00B4FF] rounded-full font-semibold text-white transition-all duration-300 cursor-pointer ${loading
                            ? "opacity-60 cursor-not-allowed"
                            : "hover:shadow-[0_0_25px_rgba(0,180,255,0.5)] hover:scale-105"
                            }`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {/* Office Info */}
                <div className="relative flex flex-col justify-center p-8 rounded-2xl overflow-hidden border border-[#00B4FF]/20 shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-500">
                    <div
                        className="absolute inset-0 bg-cover bg-center brightness-[0.8] contrast-[1.1]"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061943]/80 via-[#0d47a1]/70 to-[#061943]/90"></div>

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
                                    <a href="mailto:info@techtradeitsolutions.com" className="text-gray-200 hover:underline">
                                        info@techtradeitsolutions.com
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                                <p>
                                    <a href="tel:+447776839310" className="text-gray-200 hover:underline">
                                        +44 7776 839310
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Collaboration Line */}
            <div className="mt-13 flex flex-col items-center justify-center text-center">
                <p className="text-xs md:text-sm text-gray-400 tracking-wide">
                    A strategic collaboration with{" "}
                    <a
                        href="https://www.affyclouditsolutions.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#01b2b7] font-semibold hover:underline"
                    >
                        Affy Cloud Solution
                    </a>
                </p>
                <div className="mt-3 h-[1px] w-40 bg-gradient-to-r from-transparent via-[#00B4FF]/50 to-transparent"></div>
            </div>
        </section>
    );
};

export default ContactUs;