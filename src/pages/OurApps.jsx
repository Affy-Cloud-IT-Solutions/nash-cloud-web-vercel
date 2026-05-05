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
} from "lucide-react";

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
  },
  {
    name: "Nexus",
    tagline: "Buy & Sell Within Your City",
    desc: "Hyperlocal marketplace connecting buyers & sellers.",
    features: ["Local Listings", "In-app Chat", "Secure Payments", "Ratings"],
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
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-16 px-4 md:px-12 bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Heading */}
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our Products & Platforms
        </h2>
        <p className="text-slate-600 mt-3 text-base md:text-lg">
          Built to solve real-world business problems — from startups to
          enterprises.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0D47A1] text-white w-9 h-9 rounded-full items-center justify-center shadow-lg"
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth mt-6 py-3 snap-x snap-mandatory px-4"
        >
          {apps.map((app, index) => (
            <div
              key={index}
              className="min-w-[85%] sm:min-w-[320px] md:min-w-[360px] snap-center bg-white/95 rounded-3xl p-6 border border-slate-200 shadow-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#0D47A1] via-[#1E88E5] to-[#00B4FF] mb-5" />

              {/* ICON + NAME */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0D47A1] shadow-sm">
                  {(() => {
                    const Icon = appIcons[app.name] || Boxes;
                    return <Icon size={22} />;
                  })()}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {app.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{app.tagline}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-600 mt-5 leading-relaxed">
                {app.desc}
              </p>

              {/* FEATURES */}
              <div className="mt-6 space-y-3">
                {app.features.slice(0, 4).map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    {(() => {
                      const Icon = featureIcons(f);
                      return <Icon size={16} className="text-[#0D47A1]" />;
                    })()}
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0D47A1] text-white w-9 h-9 rounded-full items-center justify-center shadow-lg"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default OurApps;
