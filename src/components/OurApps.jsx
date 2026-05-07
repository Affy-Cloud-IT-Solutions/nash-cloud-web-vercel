import React, { useRef } from "react";
import {
  Boxes,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Utensils,
  Shirt,
  Building2,
  Car,
  GraduationCap,
  Ticket,
  Truck,
  Store,
  Kanban,
  BarChart3,
  CreditCard,
  Map,
  Users,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const apps = [
  {
    name: "Metamind",
    tagline: "From Idea to Launch — AI Does the Heavy Lifting",
    desc: "An AI-powered startup studio that transforms raw ideas into investable ventures.",
    features: [
      "Idea Viability & Market Analysis",
      "AI Roadmap Generator",
      "Pitch Deck Builder",
      "Startup Community",
    ],
    badge: "AI-Powered",
  },
  {
    name: "Restro Management",
    tagline: "Run Your Restaurant Smarter",
    desc: "All-in-one restaurant platform managing orders, kitchen, and finances.",
    features: [
      "Table Management",
      "Kitchen Display",
      "Inventory Control",
      "Billing System",
    ],
    badge: "Popular",
  },
  {
    name: "Laundry Management",
    tagline: "Simplify Every Spin Cycle",
    desc: "Digitise laundry workflows from intake to delivery.",
    features: [
      "Garment Tagging",
      "Wash Tracking",
      "Delivery Scheduling",
      "Multi-branch Support",
    ],
    badge: "New",
  },
  {
    name: "CRM Construction",
    tagline: "Built for Construction Workflows",
    desc: "CRM tailored for construction projects and operations.",
    features: [
      "Lead Pipeline",
      "Contract Management",
      "Site Tracking",
      "Client Portal",
    ],
    badge: "Industry",
  },
  {
    name: "Byethecar",
    tagline: "Sell Your Used Car Smartly",
    desc: "AI-powered used car marketplace and seller toolkit.",
    features: [
      "Price Estimation",
      "Verified Listings",
      "Buyer Matching",
      "Secure Transactions",
    ],
    badge: "AI-Powered",
  },
  {
    name: "Tutorio",
    tagline: "Learning Without Limits",
    desc: "AI-powered LMS for enterprises and educators.",
    features: [
      "Course Builder",
      "Interactive Learning",
      "Analytics",
      "Certification Engine",
    ],
    badge: "AI-Powered",
  },
  {
    name: "T-rack",
    tagline: "Manage Every Issue Effortlessly",
    desc: "Smart ticketing and support system.",
    features: [
      "Smart Routing",
      "SLA Tracking",
      "Multi-channel Support",
      "Automation",
    ],
    badge: "Smart",
  },
  {
    name: "Fleet Management",
    tagline: "Track Every Vehicle in Real Time",
    desc: "Advanced fleet tracking and analytics platform.",
    features: [
      "GPS Tracking",
      "Route Optimisation",
      "Driver Monitoring",
      "Fuel Analytics",
    ],
    badge: "Real-Time",
  },
  {
    name: "Nexus",
    tagline: "Buy & Sell Within Your City",
    desc: "Hyperlocal marketplace connecting buyers & sellers.",
    features: ["Local Listings", "In-app Chat", "Secure Payments", "Ratings"],
    badge: "Local",
  },
  {
    name: "PMS",
    tagline: "Plan, Assign, Deliver Faster",
    desc: "Powerful project management system for teams.",
    features: [
      "Task Assignment",
      "Timeline Tracking",
      "Collaboration",
      "File Sharing",
    ],
    badge: "Essential",
  },
];

const appIcons = {
  Metamind: BrainCircuit,
  "Restro Management": Utensils,
  "Laundry Management": Shirt,
  "CRM Construction": Building2,
  Byethecar: Car,
  Tutorio: GraduationCap,
  "T-rack": Ticket,
  "Fleet Management": Truck,
  Nexus: Store,
  PMS: Kanban,
};

const featureIcons = (feature) => {
  if (feature.toLowerCase().includes("analysis")) return BarChart3;
  if (feature.toLowerCase().includes("payment")) return CreditCard;
  if (feature.toLowerCase().includes("tracking")) return Map;
  if (feature.toLowerCase().includes("community")) return Users;
  if (feature.toLowerCase().includes("management")) return Settings;
  return CheckCircle2;
};

const OurApps = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden" id="products">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-l from-blue-100/30 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-r from-slate-100/30 to-transparent rounded-full blur-[100px]"
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D47A1 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border-2 border-blue-200/50 mb-8 shadow-sm"
          >
            <Sparkles className="text-[#0D47A1] w-4 h-4" />
            <span className="text-[#0D47A1] text-xs font-bold uppercase tracking-[0.2em]">
              Our Ecosystem
            </span>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Our Products &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#00B4FF]">
                  Platforms
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-[#0D47A1]/20 to-[#00B4FF]/20 rounded-full -mb-1"
                />
              </span>
            </h2>
            <p className="text-slate-600 mt-6 text-lg leading-relaxed">
              Built to solve real-world business problems — from startups to
              enterprises.
            </p>
          </div>
        </motion.div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative">
          {/* Left Arrow - positioned on left side of carousel */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl bg-white border-2 border-slate-200 hover:border-[#0D47A1] hover:bg-blue-50 text-slate-600 hover:text-[#0D47A1] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 -ml-6 lg:-ml-8"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Right Arrow - positioned on right side of carousel */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl bg-[#0D47A1] hover:bg-[#0B3D8B] text-white flex items-center justify-center shadow-lg hover:shadow-xl shadow-blue-200/50 transition-all duration-300 -mr-6 lg:-mr-8"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Gradient Fade Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-blue-50/30 to-transparent z-10 pointer-events-none" />

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-8 px-4 -mx-4 snap-x snap-mandatory"
          >
            {apps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -8 }}
                className="min-w-[85%] sm:min-w-[340px] md:min-w-[380px] snap-center group relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#0D47A1]/30 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 h-full flex flex-col">
                  {/* Color Indicator Bar */}
                  <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0D47A1] via-[#1E88E5] to-[#00B4FF] mb-6 group-hover:w-32 transition-all duration-500" />

                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-50 to-blue-100 text-[#0D47A1] rounded-full border border-blue-200/50 group-hover:shadow-sm transition-all duration-300">
                      {app.badge}
                    </span>
                  </div>

                  {/* ICON + NAME + TAGLINE */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-500">
                      {(() => {
                        const Icon = appIcons[app.name] || Boxes;
                        return (
                          <Icon size={24} className="text-[#0D47A1]" />
                        );
                      })()}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-[#061943] group-hover:text-[#0D47A1] transition-colors duration-300">
                        {app.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <p className="text-sm text-slate-500 font-medium">
                          {app.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {app.desc}
                  </p>

                  {/* FEATURES */}
                  <div className="space-y-3 mb-6">
                    {app.features.slice(0, 4).map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 text-sm text-slate-600 group/feature"
                      >
                        <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center group-hover/feature:bg-[#0D47A1] group-hover/feature:text-white transition-all duration-300">
                          {(() => {
                            const Icon = featureIcons(f);
                            return <Icon size={14} className="transition-colors duration-300" />;
                          })()}
                        </div>
                        <span className="font-medium">{f}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button - commented out as in original */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApps;