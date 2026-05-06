import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, TrendingUp, Calculator, Package, UserCog, Factory,
  Megaphone, ShoppingCart, CheckCircle2, ArrowRight, X,
} from "lucide-react";

const ODOO = "#714b67";
const CTA  = "#05adae";

const CATS = ["All", "Sales", "Finance", "Operations", "People", "Marketing"];

const services = [
  {
    id: "crm", category: "Sales", icon: Users, color: ODOO,
    title: "CRM", subtitle: "Customer Relationship Management",
    shortDesc: "Track leads, manage pipelines, close deals faster with AI-powered insights.",
    features: [
      "Visual drag-and-drop sales pipeline",
      "Automated lead scoring & assignment",
      "360° customer view across all channels",
      "Activity tracking & smart follow-ups",
      "Revenue forecasting & reporting",
      "Email & calendar integration",
    ],
    impact: { value: "35%", label: "Average increase in deal close rate" },
  },
  {
    id: "sales", category: "Sales", icon: TrendingUp, color: CTA,
    title: "Sales", subtitle: "Sales Management & Automation",
    shortDesc: "From quotes to orders — automate your entire sales workflow in one place.",
    features: [
      "Professional quotation builder",
      "Automated order confirmation workflows",
      "Customer-specific pricing & pricebooks",
      "Upselling & cross-selling suggestions",
      "eSignature for remote approvals",
      "Customer portal with order tracking",
    ],
    impact: { value: "28%", label: "Reduction in sales cycle length" },
  },
  {
    id: "accounting", category: "Finance", icon: Calculator, color: ODOO,
    title: "Accounting", subtitle: "Financial Management & Compliance",
    shortDesc: "Real-time financial visibility, automated reconciliation, always compliant.",
    features: [
      "Automated bank reconciliation",
      "Multi-currency & multi-company support",
      "Tax computation & filing assistance",
      "Real-time P&L and balance sheet",
      "Invoice automation & payment reminders",
      "Budget management & cash flow forecasting",
    ],
    impact: { value: "60%", label: "Reduction in manual accounting time" },
  },
  {
    id: "inventory", category: "Operations", icon: Package, color: CTA,
    title: "Inventory", subtitle: "Warehouse & Stock Management",
    shortDesc: "Real-time stock control, smart replenishment, multi-warehouse management.",
    features: [
      "Real-time stock level monitoring",
      "Multi-warehouse & multi-location support",
      "Automated reorder rules & procurement",
      "Lot, serial, and expiry date tracking",
      "Barcode & RFID scanning integration",
      "Inventory valuation & costing methods",
    ],
    impact: { value: "45%", label: "Reduction in stock-out incidents" },
  },
  {
    id: "hr", category: "People", icon: UserCog, color: ODOO,
    title: "HR & Payroll", subtitle: "Human Resources Management",
    shortDesc: "Manage your entire employee lifecycle — from hiring to offboarding.",
    features: [
      "Applicant tracking & recruitment pipeline",
      "Automated payroll with tax handling",
      "Leave, attendance & time-off management",
      "Performance appraisal & goal tracking",
      "Employee self-service portal",
      "Org chart, contracts & document management",
    ],
    impact: { value: "40%", label: "Reduction in HR administrative tasks" },
  },
  {
    id: "manufacturing", category: "Operations", icon: Factory, color: CTA,
    title: "Manufacturing", subtitle: "Production Planning & MRP",
    shortDesc: "Plan production, manage BOMs, and optimize shop floor efficiency.",
    features: [
      "Bills of Materials (BOM) management",
      "Production scheduling & work orders",
      "Work center capacity planning",
      "Quality control checkpoints & tests",
      "Real-time WIP tracking",
      "MRP engine for demand-driven planning",
    ],
    impact: { value: "22%", label: "Improvement in overall equipment effectiveness" },
  },
  {
    id: "marketing", category: "Marketing", icon: Megaphone, color: ODOO,
    title: "Marketing", subtitle: "Campaigns & Automation",
    shortDesc: "Run data-driven campaigns, automate nurturing, and track ROI across channels.",
    features: [
      "Email campaign builder with segmentation",
      "SMS & WhatsApp marketing",
      "Marketing automation flows & triggers",
      "Social media scheduling & management",
      "A/B testing for campaigns",
      "Lead scoring, nurturing & attribution",
    ],
    impact: { value: "42%", label: "Average increase in email open rates" },
  },
  {
    id: "ecommerce", category: "Marketing", icon: ShoppingCart, color: CTA,
    title: "eCommerce", subtitle: "Online Store & Website Builder",
    shortDesc: "Launch a professional online store, fully connected to your Odoo ERP.",
    features: [
      "Drag & drop website & store builder",
      "Product catalog with variants & bundles",
      "Payment gateway integrations",
      "Real-time inventory & price sync",
      "Customer account & order portal",
      "SEO tools, analytics & conversion tracking",
    ],
    impact: { value: "31%", label: "Average uplift in online conversions" },
  },
];

const cardAnim = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -14, scale: 0.97, transition: { duration: 0.22 } },
};

export default function Services() {
  const [activeCat, setActiveCat] = useState("All");
  const [selected,  setSelected]  = useState(null);
  const panelRef = useRef(null);

  const filtered = activeCat === "All" ? services : services.filter((s) => s.category === activeCat);
  const detail   = services.find((s) => s.id === selected);

  const pick = (id) => {
    setSelected((p) => (p === id ? null : id));
    setTimeout(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 120);
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5"
            style={{ background: "rgba(113,75,103,0.08)", color: ODOO }}
          >
            What We Implement
          </span>
          <h2 className="font-bold leading-tight mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#1e1b1b" }}>
            Full Suite of <span style={{ color: ODOO }}>Odoo Modules</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg" style={{ color: "#6b6073" }}>
            Click any module card to explore capabilities and real-world impact.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {CATS.map((cat) => {
            const active = activeCat === cat;
            return (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActiveCat(cat); setSelected(null); }}
                className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none border"
                style={
                  active
                    ? { background: ODOO, color: "#fff", borderColor: ODOO }
                    : { background: "#fff", color: "#6b6073", borderColor: "#ede8eb" }
                }
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((svc, i) => (
              <ServiceCard
                key={svc.id}
                svc={svc}
                index={i}
                isSelected={selected === svc.id}
                onClick={() => pick(svc.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expandable detail panel */}
        <AnimatePresence>
          {detail && (
            <motion.div
              ref={panelRef}
              key={detail.id}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="rounded-2xl border p-5 sm:p-7 md:p-10"
                style={{
                  background: "#fff",
                  borderColor: `${detail.color}30`,
                  boxShadow: `0 4px 32px ${detail.color}12`,
                }}
              >
                <div className="flex justify-end mb-5 sm:mb-0">
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center gap-1.5 text-sm transition-colors focus:outline-none"
                    style={{ color: "#9e97a3" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1e1b1b")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9e97a3")}
                  >
                    <X size={16} /> Close
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Left */}
                  <div className="md:w-5/12">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: `${detail.color}10` }}
                    >
                      <detail.icon size={24} style={{ color: detail.color }} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest block mb-2" style={{ color: detail.color }}>
                      {detail.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1" style={{ color: "#1e1b1b" }}>{detail.title}</h3>
                    <p className="text-sm mb-3" style={{ color: "#9e97a3" }}>{detail.subtitle}</p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b6073" }}>{detail.shortDesc}</p>

                    <div className="rounded-xl p-4 border mb-5" style={{ background: `${detail.color}08`, borderColor: `${detail.color}20` }}>
                      <p className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: detail.color }}>
                        {detail.impact.value}
                      </p>
                      <p className="text-xs sm:text-sm" style={{ color: "#6b6073" }}>{detail.impact.label}</p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: `0 8px 24px rgba(5,173,174,0.3)` }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full py-3.5 px-5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2"
                      style={{ background: CTA }}
                    >
                      Get {detail.title} Implemented <ArrowRight size={15} />
                    </motion.button>
                  </div>

                  {/* Right: features */}
                  <div className="md:w-7/12">
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#c4b8c0" }}>
                      Key Capabilities
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {detail.features.map((feat, i) => (
                        <motion.div
                          key={feat}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07, duration: 0.35 }}
                          className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border"
                          style={{ background: "#fafaf8", borderColor: "#ede8eb" }}
                        >
                          <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: detail.color }} />
                          <span className="text-xs sm:text-sm leading-snug" style={{ color: "#4a4450" }}>{feat}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ServiceCard({ svc, index, isSelected, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={cardAnim}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="relative rounded-2xl p-4 sm:p-5 border cursor-pointer overflow-hidden select-none bg-white"
      style={{
        borderColor: isSelected ? `${svc.color}55` : hovered ? `${svc.color}35` : "#ede8eb",
        boxShadow: isSelected
          ? `0 8px 28px ${svc.color}14`
          : hovered
          ? `0 6px 20px rgba(0,0,0,0.07)`
          : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "all 0.22s ease",
      }}
    >
      {/* Selected bg tint */}
      {isSelected && (
        <div
          className="absolute inset-0 rounded-2xl"
          style={{ background: `${svc.color}05` }}
        />
      )}

      {/* Tag + check */}
      <div className="relative flex items-center justify-between mb-3 sm:mb-4">
        <span
          className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: `${svc.color}10`, color: svc.color }}
        >
          {svc.category}
        </span>
        {isSelected && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: svc.color }}>
            <CheckCircle2 size={11} className="text-white" />
          </motion.div>
        )}
      </div>

      {/* Icon */}
      <motion.div
        animate={{ rotate: hovered ? 5 : 0, scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
        style={{ background: `${svc.color}10` }}
      >
        <svc.icon size={20} style={{ color: svc.color }} />
      </motion.div>

      <h3 className="relative text-sm sm:text-base font-bold mb-1" style={{ color: "#1e1b1b" }}>{svc.title}</h3>
      <p className="relative text-xs leading-relaxed mb-3 sm:mb-4" style={{ color: "#9e97a3" }}>{svc.shortDesc}</p>

      <div className="relative flex items-center justify-between">
        <span className="text-xs font-semibold" style={{ color: svc.color }}>
          {isSelected ? "Tap to close ↑" : "Explore module →"}
        </span>
        <motion.div animate={{ x: hovered ? 3 : 0 }} transition={{ duration: 0.2 }}>
          <ArrowRight size={13} style={{ color: svc.color }} />
        </motion.div>
      </div>
    </motion.div>
  );
}
