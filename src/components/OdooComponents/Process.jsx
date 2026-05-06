import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Wrench, Link2, Rocket, Headphones, CheckCircle2 } from "lucide-react";

const ODOO = "#714b67";
const CTA  = "#05adae";

const steps = [
  {
    number: "01", icon: Search, color: ODOO,
    title: "Requirement Analysis", tagline: "Understand before we build",
    duration: "Week 1–2",
    description: "We start with a thorough discovery phase — mapping your workflows, identifying bottlenecks, and crafting a clear ERP roadmap aligned with your business outcomes.",
    deliverables: ["Business process mapping", "Gap analysis report", "Project scope & roadmap", "Module recommendations"],
  },
  {
    number: "02", icon: Wrench, color: CTA,
    title: "Customization", tagline: "Built exactly for you",
    duration: "Week 3–6",
    description: "Our developers configure and customize Odoo to match your exact processes — from custom fields to complex business logic and automated workflows.",
    deliverables: ["Custom module development", "Workflow automation setup", "UI/UX configuration", "Staging environment testing"],
  },
  {
    number: "03", icon: Link2, color: ODOO,
    title: "Integration", tagline: "Connect your ecosystem",
    duration: "Week 5–7",
    description: "We connect Odoo with your existing tools — payment gateways, logistics, e-commerce platforms, and third-party APIs — into one cohesive system.",
    deliverables: ["Third-party API integrations", "Data migration & cleansing", "Legacy system connections", "Integration testing"],
  },
  {
    number: "04", icon: Rocket, color: CTA,
    title: "Deployment", tagline: "Go-live with confidence",
    duration: "Week 7–9",
    description: "Smooth, zero-downtime go-live with comprehensive staff training, UAT sign-off, and dedicated hypercare support during the critical first weeks.",
    deliverables: ["Production environment setup", "User acceptance testing", "Staff training & docs", "Go-live hypercare"],
  },
  {
    number: "05", icon: Headphones, color: ODOO,
    title: "Support & Maintenance", tagline: "We stay with you",
    duration: "Ongoing",
    description: "Post-deployment isn't the end. We provide ongoing technical support, Odoo version upgrades, performance optimizations, and feature enhancements.",
    deliverables: ["24/7 technical helpdesk", "Regular Odoo upgrades", "Performance monitoring", "Continuous improvement"],
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section
      id="process"
      className="py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#f9f7f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(113,75,103,0.08)", color: ODOO }}>
            Our Process
          </span>
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#1e1b1b" }}>
            How We Deliver Your <span style={{ color: ODOO }}>Odoo Solution</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg" style={{ color: "#6b6073" }}>
            A proven methodology that minimises risk and maximises ROI. Tap a step to explore.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-2 sm:gap-2.5 min-w-max sm:min-w-0 sm:justify-center">
            {steps.map((s, i) => (
              <motion.button
                key={s.number}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none whitespace-nowrap border"
                style={
                  active === i
                    ? { background: s.color, color: "#fff", borderColor: s.color }
                    : { background: "#fff", color: "#6b6073", borderColor: "#ede8eb" }
                }
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0"
                  style={active === i ? { background: "rgba(255,255,255,0.25)", color: "#fff" } : { background: "#f0eaee", color: ODOO }}>
                  {i + 1}
                </span>
                <span className="hidden sm:inline">{s.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="w-full h-1 rounded-full mb-8 sm:mb-10 overflow-hidden" style={{ background: "#ede8eb" }}>
          <motion.div
            className="h-full rounded-full"
            animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            style={{ background: ODOO }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start"
          >
            <div>
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${step.color}12` }}>
                  <step.icon size={22} style={{ color: step.color }} />
                </div>
                <div className="pt-1">
                  <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: step.color }}>Step {step.number}</span>
                  <span className="text-xs" style={{ color: "#9e97a3" }}>{step.tagline}</span>
                </div>
              </div>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", color: "#1e1b1b" }}>{step.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#6b6073" }}>{step.description}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border"
                style={{ background: `${step.color}08`, borderColor: `${step.color}25`, color: step.color }}>
                Timeline: {step.duration}
              </div>
            </div>

            <div className="rounded-2xl border p-5 sm:p-7 bg-white" style={{ borderColor: `${step.color}25` }}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#c4b8c0" }}>Key Deliverables</h4>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {step.deliverables.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.09, duration: 0.32 }}
                    className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl"
                    style={{ background: "#f9f7f5" }}
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0" style={{ color: step.color }} />
                    <span className="text-xs sm:text-sm font-medium" style={{ color: "#4a4450" }}>{d}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-6 sm:mt-8 pt-5 border-t" style={{ borderColor: "#ede8eb" }}>
                <button
                  onClick={() => setActive((p) => Math.max(0, p - 1))}
                  disabled={active === 0}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all disabled:opacity-30 focus:outline-none border"
                  style={{ background: "#fff", color: "#6b6073", borderColor: "#ede8eb" }}
                >
                  ← Prev
                </button>
                <span className="text-xs" style={{ color: "#c4b8c0" }}>{active + 1} / {steps.length}</span>
                {active < steps.length - 1 ? (
                  <button
                    onClick={() => setActive((p) => p + 1)}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-none"
                    style={{ background: step.color }}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-none"
                    style={{ background: CTA }}
                  >
                    Start →
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
