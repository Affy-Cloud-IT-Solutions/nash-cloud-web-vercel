import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen", role: "COO, TechManufacture Ltd.", avatar: "SC",
    industry: "Manufacturing", color: "#00b4b5",
    text: "Affy Cloud transformed our production planning and inventory management. We went from spreadsheets to a fully automated Odoo system in just 8 weeks. Order fulfillment accuracy improved by 40% in the first quarter alone.",
    stars: 5, metric: { value: "40%", label: "Improvement in order accuracy" },
  },
  {
    name: "James Okonkwo", role: "CFO, RetailPlus Group", avatar: "JO",
    industry: "Retail", color: "#0D47A1",
    text: "The accounting and inventory modules work seamlessly together. Bank reconciliation that used to take 2 days now takes 20 minutes. Affy Cloud's team was professional, transparent, and genuinely cared about our success.",
    stars: 5, metric: { value: "6×", label: "Faster bank reconciliation" },
  },
  {
    name: "Priya Sharma", role: "CEO, HealthServe Clinics", avatar: "PS",
    industry: "Healthcare", color: "#00b4b5",
    text: "We needed a compliance-conscious ERP handling both operations and HR across multiple locations. Affy Cloud delivered a tailored Odoo solution. Our HR onboarding time dropped from 3 weeks to just 3 days.",
    stars: 5, metric: { value: "85%", label: "Reduction in onboarding time" },
  },
  {
    name: "Marcus Webb", role: "VP Operations, LogiTrack", avatar: "MW",
    industry: "Logistics", color: "#0D47A1",
    text: "Implementing Odoo for our fleet management and warehouse operations was seamless with Affy Cloud. Real-time visibility across 8 warehouses has cut our operational costs by nearly a quarter.",
    stars: 5, metric: { value: "24%", label: "Reduction in operational costs" },
  },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((direction) => {
    setDir(direction);
    setCur((p) => (p + direction + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[cur];

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" style={{ background: "#f8f8fb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(13, 71, 161,0.1)", color: "#0D47A1" }}>
            Client Stories
          </span>
          <h2 className="font-bold text-gray-900 mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            Real Results from{" "}
            <span style={{ color: "#0D47A1" }}>Real Businesses</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500">
            Don't take our word for it — hear from businesses we've transformed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

          {/* Sidebar — desktop only (lg+) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3">
            {testimonials.map((test, i) => (
              <motion.button
                key={test.name}
                onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 focus:outline-none"
                style={{
                  background:   cur === i ? "rgba(0,180,181,0.06)" : "transparent",
                  borderColor:  cur === i ? "rgba(0,180,181,0.32)" : "#e8e8ec",
                }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: test.color }}>
                  {test.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-800 truncate">{test.name}</p>
                  <p className="text-xs text-gray-400 truncate">{test.role}</p>
                </div>
                {cur === i && (
                  <div className="w-1.5 h-6 rounded-full flex-shrink-0" style={{ background: "#00b4b5" }} />
                )}
              </motion.button>
            ))}
          </div>

          {/* Main testimonial card */}
          <div className="lg:col-span-8 relative overflow-hidden">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={cur}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border p-5 sm:p-7 md:p-10"
                style={{
                  background:   "#0a0a0b",
                  borderColor:  `${t.color}28`,
                  boxShadow:    `0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px ${t.color}15`,
                }}
              >
                {/* Quote icon + stars */}
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${t.color}20` }}>
                    <Quote size={20} style={{ color: t.color }} />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ delay: i * 0.06 }}>
                        <Star size={14} fill={t.color} style={{ color: t.color }} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-white mb-6 sm:mb-8">
                  "{t.text}"
                </p>

                {/* Author + metric */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: t.color }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">{t.name}</p>
                      <p className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{t.role}</p>
                      <span className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full mt-1 inline-block"
                        style={{ background: `${t.color}20`, color: t.color }}>
                        {t.industry}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl px-4 sm:px-5 py-3 border flex-shrink-0 self-start sm:self-auto"
                    style={{ background: `${t.color}12`, borderColor: `${t.color}30` }}>
                    <p className="text-xl sm:text-2xl font-bold" style={{ color: t.color }}>{t.metric.value}</p>
                    <p className="text-[10px] sm:text-xs mt-0.5 max-w-[140px]"
                      style={{ color: "rgba(255,255,255,0.45)" }}>{t.metric.label}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation row */}
            <div className="flex items-center justify-between mt-4 sm:mt-5">
              {/* Dot indicators */}
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                    className="rounded-full transition-all duration-300 focus:outline-none"
                    style={{
                      width:      i === cur ? 22 : 8,
                      height:     8,
                      background: i === cur ? "#00b4b5" : "rgba(0,180,181,0.22)",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => go(-1)}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all focus:outline-none"
                  style={{ borderColor: "#e8e8ec", color: "#929695" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00b4b5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#929695")}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => go(1)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white focus:outline-none"
                  style={{ background: "#00b4b5" }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
