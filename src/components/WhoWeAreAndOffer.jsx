import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Building2,
    Rocket,
    Target,
    Lightbulb,
    Users,
    TrendingUp,
    CheckCircle2,
    ArrowRight,
    Briefcase,
    GraduationCap,
    Code2,
    Zap,
    Shield,
    Clock,
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    Circle,
    Star
} from "lucide-react";

const WhoWeAreAndOffer = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(0);
    const autoPlayRef = useRef(null);
    const navigate = useNavigate();

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const controls = {
        whoWeAre: useAnimation(),
        whatWeOffer: useAnimation(),
    };

    useEffect(() => {
        if (isInView) {
            controls.whoWeAre.start("visible");
            controls.whatWeOffer.start("visible");
        }
    }, [isInView, controls]);

    // Auto-play logic
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setDirection(1);
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlaying]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const stats = [
        { icon: Briefcase, value: "10+", label: "Years Experience", color: "text-blue-400" },
        { icon: Users, value: "100+", label: "Experts Deployed", color: "text-cyan-400" },
        { icon: Building2, value: "50+", label: "Enterprise Clients", color: "text-indigo-400" },
        { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-green-400" },
    ];

    const slides = [
        {
            id: 0,
            title: "Who We Are",
            subtitle: "Your Trusted Technology Partner",
            content: "We are a specialist technology and consulting partner delivering SAP services, AI solutions, and digital transformation support across public and private sectors. With over 10 years of industry experience, we combine technical expertise, top talent, and strategic insight to help organisations accelerate their digital journey and build long-term capability.",
            secondaryContent: "We are also committed to developing future-ready professionals through our training and internship programmes, bridging the digital skills gap and preparing talent for an AI-driven world.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
            badges: [
                { icon: Shield, text: "ISO 27001 Certified", subtext: "Enterprise Security" },
                { icon: Clock, text: "10+ Years", subtext: "Of Excellence" }
            ],
            keyPoints: [
                { icon: Target, text: "Strategic Digital Transformation" },
                { icon: Lightbulb, text: "Innovation-Driven Approach" },
                { icon: Rocket, text: "Scalable Solutions" },
                { icon: Clock, text: "24/7 Enterprise Support" }
            ]
        },
        {
            id: 1,
            title: "Services",
            subtitle: "End-to-End Digital Transformation",
            content: "We deliver comprehensive SAP SuccessFactors and HR technology solutions that transform your HR operations. Our deep expertise ensures seamless implementation, integration, and optimization of enterprise systems.",
            secondaryContent: "From quality engineering to testing services, we provide end-to-end support that ensures your systems perform at their best, driving operational excellence across your organization.",
            image: "https://images.unsplash.com/photo-1551434678-e076c2235a32?q=80&w=2070&auto=format&fit=crop",
            badges: [
                { icon: Code2, text: "SAP Experts", subtext: "Certified Professionals" },
                { icon: Shield, text: "Quality Assured", subtext: "Enterprise Testing" }
            ],
            keyPoints: [
                { icon: CheckCircle2, text: "SAP SuccessFactors Expertise" },
                { icon: CheckCircle2, text: "Quality Engineering & Testing" },
                { icon: CheckCircle2, text: "System Integration" },
                { icon: CheckCircle2, text: "Performance Optimization" }
            ],
            path: "/sap-services"
        },
        {
            id: 2,
            title: "Resourcing",
            subtitle: "Top Talent, Seamless Integration",
            content: "We provide skilled consultants and technical resources that integrate seamlessly into your teams. Our rigorous vetting process ensures you get professionals who deliver immediate impact.",
            secondaryContent: "Whether you need short-term expertise or long-term team augmentation, we match the right talent to your specific requirements, ensuring cultural and technical fit.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
            badges: [
                { icon: Users, text: "Top 1% Talent", subtext: "Rigorous Vetting" },
                { icon: TrendingUp, text: "Quick Deployment", subtext: "Reduced Time-to-Hire" }
            ],
            keyPoints: [
                { icon: CheckCircle2, text: "Skilled Consultants" },
                { icon: CheckCircle2, text: "Immediate Impact" },
                { icon: CheckCircle2, text: "Cultural Fit Guaranteed" },
                { icon: CheckCircle2, text: "Flexible Engagement" }
            ],
            path: "/resourcing"
        },
        {
            id: 3,
            title: "Internship & Training",
            subtitle: "Building Future-Ready Professionals",
            content: "Our hands-on training programmes are designed to bridge the digital skills gap. We combine theoretical knowledge with practical experience, preparing talent for an AI-driven world.",
            secondaryContent: "Through our internship programmes, we offer real-world projects, mentorship from industry experts, and a clear pathway to becoming industry-ready professionals.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
            badges: [
                { icon: GraduationCap, text: "Industry-Ready", subtext: "Practical Training" },
                { icon: Star, text: "Expert Mentorship", subtext: "1-on-1 Guidance" }
            ],
            keyPoints: [
                { icon: CheckCircle2, text: "Hands-on Experience" },
                { icon: CheckCircle2, text: "Industry-Ready Professionals" },
                { icon: CheckCircle2, text: "Real-World Projects" },
                { icon: CheckCircle2, text: "Certification Programs" }
            ],
            path: "/opportunities"
        }
    ];

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
        if (isAutoPlaying) {
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 10000);
        }
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const currentSlideData = slides[currentSlide];

    return (
        <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-28 overflow-hidden" id="about">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1e293b_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] opacity-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 mb-6">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                            Your Trusted Partner
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        Driving Digital Excellence
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Empowering businesses with cutting-edge technology solutions and expert guidance
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 group-hover:scale-110 transition-transform">
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Carousel Section */}
                <div className="relative">
                    {/* Auto-play Controls */}
                    <div className="absolute -top-16 right-0 flex items-center gap-3 z-20">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all"
                        >
                            {isAutoPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                        </button>
                    </div>

                    {/* Main Carousel */}
                    <div className="relative overflow-hidden rounded-3xl min-h-[600px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <div className="relative w-full h-full">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={currentSlideData.image}
                                            alt={currentSlideData.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex items-center p-8 md:p-12">
                                        <div className="max-w-2xl">
                                            {/* Slide Indicator */}
                                            <div className="flex gap-2 mb-6">
                                                {slides.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => goToSlide(idx)}
                                                        className={`transition-all duration-300 ${idx === currentSlide
                                                                ? "w-8 h-1 bg-blue-500"
                                                                : "w-4 h-1 bg-slate-600 hover:bg-slate-500"
                                                            } rounded-full`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Badge */}
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                                                <Building2 className="w-3 h-3 text-blue-400" />
                                                <span className="text-xs font-semibold text-blue-400">
                                                    {currentSlideData.subtitle}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                                {currentSlideData.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                                                {currentSlideData.content}
                                            </p>
                                            <p className="text-slate-400 leading-relaxed mb-8">
                                                {currentSlideData.secondaryContent}
                                            </p>

                                            {/* Key Points */}
                                            <div className="grid grid-cols-2 gap-3 mb-8">
                                                {currentSlideData.keyPoints.map((point, idx) => {
                                                    const Icon = point.icon;
                                                    return (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <Icon className="w-4 h-4 text-green-400" />
                                                            <span className="text-sm text-slate-300">{point.text}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* CTA Button */}
                                            {currentSlideData.path && (
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => navigate(currentSlideData.path)}
                                                    className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                                >
                                                    Learn More
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </motion.button>
                                            )}
                                        </div>

                                        {/* Floating Badges */}
                                        <div className="absolute bottom-8 right-8 flex flex-col gap-3">
                                            {currentSlideData.badges.map((badge, idx) => {
                                                const Icon = badge.icon;
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: 50 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                                        className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-xl p-3 border border-slate-700 shadow-xl"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Icon className="w-8 h-8 text-blue-400" />
                                                            <div>
                                                                <div className="text-sm font-semibold text-white">{badge.text}</div>
                                                                <div className="text-xs text-slate-400">{badge.subtext}</div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all z-20"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 transition-all z-20"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Slide Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`transition-all duration-300 ${idx === currentSlide
                                        ? "w-10 h-2 bg-blue-500"
                                        : "w-6 h-2 bg-slate-600 hover:bg-slate-500"
                                    } rounded-full`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreAndOffer;