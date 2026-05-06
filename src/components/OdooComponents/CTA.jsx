import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const ODOO = "#714b67";
const CTA  = "#05adae";

const benefits = [
  "Free 45-min strategy session",
  "No obligation quote",
  "Custom implementation roadmap",
  "Module recommendations",
];

export default function CTASection() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" style={{ background: "#f9f7f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(113,75,103,0.15)" }}>
          {/* Solid bg — Odoo wine purple */}
          <div className="absolute inset-0" style={{ background: ODOO }} />

          {/* Subtle dot pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                  style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                  <Sparkles size={14} className="text-white" />
                  <span className="text-xs sm:text-sm font-medium text-white">Ready to get started?</span>
                </div>

                <h2 className="font-bold text-white leading-tight mb-5"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}>
                  Transform Your Business with Odoo ERP
                </h2>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-7"
                  style={{ color: "rgba(255,255,255,0.75)" }}>
                  Join 50+ businesses that trusted Affy Cloud to implement, optimize,
                  and grow their operations with Odoo.
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
                  {benefits.map((b, i) => (
                    <motion.div key={b}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.09 }}
                      className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} style={{ color: CTA, flexShrink: 0 }} />
                      <span className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-2xl p-6 sm:p-8"
                style={{ background: "#fff" }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-1.5" style={{ color: "#1e1b1b" }}>Schedule a Free Call</h3>
                <p className="text-xs sm:text-sm mb-5" style={{ color: "#9e97a3" }}>
                  Drop your email and we'll prepare a tailored Odoo roadmap for you.
                </p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(5,173,174,0.1)" }}>
                      <CheckCircle2 size={28} style={{ color: CTA }} />
                    </div>
                    <p className="font-semibold mb-1" style={{ color: "#1e1b1b" }}>You're on the list!</p>
                    <p className="text-xs sm:text-sm" style={{ color: "#9e97a3" }}>We'll reach out within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your work email"
                      className="w-full px-4 py-3.5 rounded-xl text-sm placeholder-gray-400 focus:outline-none transition-all mb-3 border"
                      style={{ borderColor: "#ede8eb", color: "#1e1b1b" }}
                      onFocus={(e) => (e.target.style.borderColor = ODOO)}
                      onBlur={(e) => (e.target.style.borderColor = "#ede8eb")}
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(5,173,174,0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3.5 text-sm sm:text-base font-semibold text-white rounded-xl flex items-center justify-center gap-2"
                      style={{ background: CTA }}
                    >
                      Get My Free Roadmap <ArrowRight size={17} />
                    </motion.button>
                    <p className="text-center text-xs mt-3" style={{ color: "#c4b8c0" }}>
                      No spam · Unsubscribe anytime · Reply within 24h
                    </p>
                  </form>
                )}

                <div className="mt-5 pt-5 border-t" style={{ borderColor: "#ede8eb" }}>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full py-3 text-sm font-medium rounded-xl border transition-all focus:outline-none"
                    style={{ borderColor: "#ede8eb", color: "#6b6073" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = ODOO; e.currentTarget.style.color = ODOO; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ede8eb"; e.currentTarget.style.color = "#6b6073"; }}
                  >
                    Fill Detailed Project Brief →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
