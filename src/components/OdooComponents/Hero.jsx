import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, CalendarCheck, Users, TrendingUp,
  Calculator, Package, UserCog, Factory, CheckCircle, Star,
} from "lucide-react";

const ODOO = "#714b67";
const CTA  = "#05adae";

const industries = [
  "Manufacturing",
  "Retail & Commerce",
  "Service Businesses",
  "Healthcare",
  "Distribution Networks",
];

const moduleData = [
  { icon: Users,      label: "CRM",      value: "2,847", color: ODOO },
  { icon: TrendingUp, label: "Sales",    value: "$94K",  color: CTA  },
  { icon: Calculator, label: "Finance",  value: "98%",   color: ODOO },
  { icon: Package,    label: "Inventory",value: "1,204", color: CTA  },
  { icon: UserCog,    label: "HR",       value: "124",   color: ODOO },
  { icon: Factory,    label: "MFG",      value: "48 WO", color: CTA  },
];

const chartBars = [38, 52, 44, 68, 58, 82, 72, 94, 78, 100, 86, 94];

function AnimatedCounter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - start) / duration, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const [idx,    setIdx]   = useState(0);
  const [text,   setText]  = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const phrase = industries[idx];
    if (typing) {
      if (text.length < phrase.length) {
        const t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2200);
      return () => clearTimeout(t);
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 28);
        return () => clearTimeout(t);
      }
      setIdx((i) => (i + 1) % industries.length);
      setTyping(true);
    }
  }, [text, typing, idx]);

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-white"
      style={{ minHeight: "100svh" }}
    >
      {/* Very subtle decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "rgba(113,75,103,0.07)" }}
        />
        <div
          className="absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full blur-[140px]"
          style={{ background: "rgba(5,173,174,0.06)" }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── Left: Content ── */}
          <div className="lg:col-span-6 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border mb-6 sm:mb-7"
              style={{ background: "rgba(113,75,103,0.07)", borderColor: "rgba(113,75,103,0.2)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: ODOO }} />
              <span className="text-xs sm:text-sm font-medium" style={{ color: ODOO }}>
                Certified Odoo Consultants
              </span>
              <Star size={11} fill={ODOO} style={{ color: ODOO, flexShrink: 0 }} />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h1
                className="font-bold leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)", color: "#1e1b1b" }}
              >
                Transform Your Business
              </h1>

              {/* Typewriter industry line */}
              <div
                className="font-bold leading-[1.1] tracking-tight my-1 sm:my-2"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
                  minHeight: "1.15em",
                  color: ODOO,
                }}
              >
                {text}
                <span className="animate-pulse" style={{ color: CTA, marginLeft: 2 }}>|</span>
              </div>

              <h1
                className="font-bold leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)", color: "#1e1b1b" }}
              >
                with <span style={{ color: ODOO }}>Odoo</span> ERP
              </h1>
            </motion.div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-5 mb-7 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: "#6b6073" }}
            >
              We implement, customize, and integrate Odoo ERP end-to-end — automating
              every department so you can focus on growth, not operations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 28px rgba(5,173,174,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => go("#contact")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-white rounded-xl w-full xs:w-auto"
                style={{ background: CTA }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => go("#services")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl border transition-all duration-200 w-full xs:w-auto"
                style={{ borderColor: "#ede8eb", color: "#1e1b1b", background: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ODOO;
                  e.currentTarget.style.color = ODOO;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ede8eb";
                  e.currentTarget.style.color = "#1e1b1b";
                }}
              >
                <CalendarCheck size={16} style={{ color: CTA }} />
                View Services
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4 pt-6 border-t justify-center lg:justify-start"
              style={{ borderColor: "#ede8eb" }}
            >
              <div className="flex -space-x-2 flex-shrink-0">
                {["S", "J", "P", "A"].map((l, i) => (
                  <div key={i}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                    style={{ borderColor: "#fff", background: i % 2 === 0 ? ODOO : CTA }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill={ODOO} style={{ color: ODOO }} />
                  ))}
                </div>
                <p className="text-xs mt-0.5 whitespace-nowrap" style={{ color: "#9e97a3" }}>
                  Trusted by <span className="font-semibold" style={{ color: "#1e1b1b" }}>50+ businesses</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: ERP Dashboard Visual ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 hidden md:block"
          >
            <div className="relative mx-auto" style={{ maxWidth: 480 }}>
              {/* Soft shadow behind card */}
              <div
                className="absolute inset-4 rounded-3xl blur-2xl opacity-20 -z-10"
                style={{ background: ODOO }}
              />

              {/* Main dashboard card */}
              <div
                className="rounded-2xl border overflow-hidden"
                style={{
                  background: "#111118",
                  borderColor: "rgba(113,75,103,0.25)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(113,75,103,0.12)",
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center justify-between px-4 sm:px-5 py-3 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: CTA }} />
                    <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Odoo ERP · Live Dashboard
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                      <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  {/* Revenue + chart */}
                  <div className="mb-4">
                    <div className="flex items-end justify-between mb-2">
                      <div>
                        <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Total Revenue</p>
                        <p className="text-xl sm:text-2xl font-bold text-white">$1.24M</p>
                        <p className="text-xs font-medium mt-0.5" style={{ color: CTA }}>↑ 12.3% this quarter</p>
                      </div>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>Last 12 months</p>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {chartBars.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.6 + i * 0.04, duration: 0.5, ease: "easeOut" }}
                          className="flex-1 rounded-t-sm"
                          style={{
                            background:
                              i === chartBars.length - 1
                                ? CTA
                                : `rgba(5,173,174,${0.12 + (i / chartBars.length) * 0.35})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Module tiles */}
                  <div className="grid grid-cols-3 gap-2">
                    {moduleData.map((mod, i) => (
                      <motion.div
                        key={mod.label}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="rounded-xl p-2.5 sm:p-3 border cursor-default"
                        style={{ background: `${mod.color}12`, borderColor: `${mod.color}28` }}
                      >
                        <mod.icon size={13} style={{ color: mod.color }} className="mb-1.5" />
                        <p className="text-xs sm:text-sm font-bold text-white leading-none mb-0.5">{mod.value}</p>
                        <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.38)" }}>{mod.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating pill — top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.45 }}
                className="absolute -top-4 -right-4 lg:-right-6 rounded-2xl border hidden sm:flex items-center gap-2.5 px-3.5 py-2.5"
                style={{
                  background: "#fff",
                  borderColor: "#ede8eb",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(5,173,174,0.1)" }}>
                  <TrendingUp size={14} style={{ color: CTA }} />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-none" style={{ color: "#1e1b1b" }}>Sales ↑ 8%</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "#9e97a3" }}>$94K / month</p>
                </div>
              </motion.div>

              {/* Floating pill — bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.65, duration: 0.45 }}
                className="absolute -bottom-4 -left-4 lg:-left-6 rounded-2xl border hidden sm:flex items-center gap-2.5 px-3.5 py-2.5"
                style={{
                  background: "#fff",
                  borderColor: "#ede8eb",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(113,75,103,0.1)" }}>
                  <CheckCircle size={14} style={{ color: ODOO }} />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-none" style={{ color: "#1e1b1b" }}>Go-live Complete</p>
                  <p className="text-[10px] mt-0.5" style={{ color: ODOO }}>Inventory synced ✓</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-14 sm:mt-16 md:mt-20 pt-7 border-t grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6"
          style={{ borderColor: "#ede8eb" }}
        >
          {[
            { target: 20, suffix: "+", label: "Projects Delivered" },
            { target: 20,  suffix: "+", label: "Happy Clients" },
            { target: 8,   suffix: "+", label: "Years Experience" },
            { target: 99,  suffix: "%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums" style={{ color: ODOO }}>
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <p className="text-xs sm:text-sm mt-1" style={{ color: "#9e97a3" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
