import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Puzzle, Layers, Zap, LifeBuoy, CheckCircle2, XCircle, ChevronRight } from "lucide-react";

const ODOO = "#714b67";
const CTA = "#05adae";

const features = [
  {
    icon: Code2, title: "Expert Odoo Developers", stat: "50+", statLabel: "Certified Devs",
    description: "A certified team with deep expertise across all Odoo versions — ensuring best-practice implementations every time.",
  },
  {
    icon: Puzzle, title: "Custom-Built Solutions", stat: "100%", statLabel: "Custom Fit",
    description: "No generic templates. Every module is configured to match your exact workflows, industry requirements, and business logic.",
  },
  {
    icon: Layers, title: "Scalable Architecture", stat: "10x", statLabel: "Scalability",
    description: "We build for today and tomorrow — modular, future-proof implementations that scale without expensive re-dos.",
  },
  {
    icon: Zap, title: "Fast, Agile Delivery", stat: "8wk", statLabel: "Avg. Go-Live",
    description: "Transparent milestones, weekly sprints, and clear communication. Average go-live in just 6–10 weeks.",
  },
  {
    icon: LifeBuoy, title: "Dedicated Ongoing Support", stat: "24/7", statLabel: "Support SLA",
    description: "We don't disappear post-launch. Our support team provides training, bug fixes, upgrades, and continuous optimization.",
  },
];

const comparison = [
  { feature: "Certified Odoo expertise", us: true, other: false },
  { feature: "Custom module development", us: true, other: false },
  { feature: "Post-deployment support", us: true, other: "Paid add-on" },
  { feature: "Data migration assistance", us: true, other: false },
  { feature: "Dedicated project manager", us: true, other: false },
  { feature: "Training & documentation", us: true, other: "Basic only" },
  { feature: "Ongoing optimization reviews", us: true, other: false },
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const feat = features[activeIdx];

  return (
    <section id="about" className="py-10 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(113,75,103,0.08)", color: ODOO }}>
            Why Affy Cloud
          </span>
          <h2 className="font-bold leading-tight mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#1e1b1b" }}>
            The Partner You Can <span style={{ color: ODOO }}>Rely On</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg" style={{ color: "#6b6073" }}>
            We're not just implementors — we're long-term ERP partners invested in your growth.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 w-full"
          >
            {features.map((f, i) => {
              const active = activeIdx === i;
              return (
                <motion.button
                  key={f.title}
                  onClick={() => setActiveIdx(i)}
                  whileHover={{ x: active ? 0 : 3 }}
                  className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl border text-left transition-all duration-200 focus:outline-none w-full"
                  style={{
                    background: active ? "rgba(113,75,103,0.06)" : "#fff",
                    borderColor: active ? "rgba(113,75,103,0.25)" : "#ede8eb",
                  }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: active ? "rgba(113,75,103,0.12)" : "rgba(113,75,103,0.06)" }}>
                    <f.icon size={18} style={{ color: active ? ODOO : "#c4b8c0" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold leading-snug mb-0.5" style={{ color: active ? "#1e1b1b" : "#4a4450" }}>
                      {f.title}
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "#9e97a3" }}>{f.description}</p>
                  </div>
                  <ChevronRight size={16} className="flex-shrink-0 mt-1"
                    style={{ color: active ? ODOO : "#ede8eb", transform: active ? "rotate(90deg)" : "none", transition: "all 0.2s" }} />
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:sticky lg:top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
                className="rounded-2xl p-6 sm:p-8 border mb-4"
                style={{ background: "#faf8f9", borderColor: "rgba(113,75,103,0.18)" }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(113,75,103,0.1)" }}>
                  <feat.icon size={26} style={{ color: ODOO }} />
                </div>
                <span className="text-3xl sm:text-4xl font-bold block mb-0.5" style={{ color: ODOO }}>
                  {feat.stat}
                </span>
                <span className="text-xs uppercase tracking-wider block mb-4" style={{ color: "#c4b8c0" }}>
                  {feat.statLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "#1e1b1b" }}>{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b6073" }}>{feat.description}</p>
                <div className="flex items-center gap-2 mt-5 pt-4 border-t" style={{ borderColor: "#ede8eb" }}>
                  <CheckCircle2 size={15} style={{ color: CTA }} />
                  <span className="text-xs" style={{ color: "#9e97a3" }}>Included in every engagement</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => setShowComparison((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 focus:outline-none"
              style={{
                background: showComparison ? "rgba(113,75,103,0.05)" : "#fff",
                borderColor: showComparison ? "rgba(113,75,103,0.25)" : "#ede8eb",
                color: showComparison ? ODOO : "#6b6073",
              }}
            >
              <span>Compare us to traditional ERP vendors</span>
              <motion.span animate={{ rotate: showComparison ? 180 : 0 }} transition={{ duration: 0.2 }}>↓</motion.span>
            </button>

            <AnimatePresence>
              {showComparison && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.32 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 overflow-x-auto rounded-2xl border" style={{ borderColor: "#ede8eb" }}>
                    <table className="w-full min-w-[360px] text-sm">
                      <thead>
                        <tr className="border-b" style={{ borderColor: "#ede8eb", background: "#faf8f9" }}>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#9e97a3" }}>Feature</th>
                          <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider" style={{ color: ODOO }}>Affy Cloud</th>
                          <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider" style={{ color: "#9e97a3" }}>Others</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.map((row, i) => (
                          <motion.tr
                            key={row.feature}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.04 }}
                            className="border-b last:border-0"
                            style={{ borderColor: "#f5f0f3", background: i % 2 === 0 ? "#fff" : "#faf8f9" }}
                          >
                            <td className="px-4 py-3 text-xs sm:text-sm" style={{ color: "#4a4450" }}>{row.feature}</td>
                            <td className="px-4 py-3 text-center">
                              <CheckCircle2 size={15} className="mx-auto" style={{ color: CTA }} />
                            </td>
                            <td className="px-4 py-3 text-center">
                              {row.other === true ? (
                                <CheckCircle2 size={15} className="mx-auto" style={{ color: "#c4b8c0" }} />
                              ) : row.other === false ? (
                                <XCircle size={15} className="mx-auto" style={{ color: "#f9a8b8" }} />
                              ) : (
                                <span className="text-[10px]" style={{ color: "#9e97a3" }}>{row.other}</span>
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
