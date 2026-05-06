import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck, Zap } from "lucide-react";

const ODOO = "#714b67";
const CTA  = "#05adae";

const trustBadges = [
  { icon: Award,       label: "Certified Odoo Consultants", sub: "Official certification"  },
  { icon: ShieldCheck, label: "Enterprise Grade",           sub: "Bank-level security"     },
  { icon: Zap,         label: "Agile Delivery",             sub: "6–10 week avg go-live"   },
  { icon: Clock,       label: "24/7 Support",               sub: "Post-deployment care"    },
];

const clients = [
  "ManufactureCo", "RetailPlus", "FinTech Pro", "HealthCare Hub",
  "LogiTrack", "EduCore Systems", "AgriTech Now", "BuildRight",
  "FoodChain Ltd", "MedServe", "AutoParts Inc", "CleanEnergy Co",
];

function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        const start = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - start) / duration, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

function Counter({ target, suffix = "" }) {
  const { count, ref } = useCounter(target);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TrustBar() {
  return (
    <section className="overflow-hidden" style={{ background: "#f9f7f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">

        {/* Metric counters */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
          style={{ border: "1px solid #ede8eb", borderRadius: 16, overflow: "hidden", background: "#fff" }}
        >
          {[
            { target: 200, suffix: "+", label: "Projects Delivered", color: ODOO },
            { target: 50,  suffix: "+", label: "Satisfied Clients",  color: CTA  },
            { target: 8,   suffix: "+", label: "Years Experience",   color: ODOO },
            { target: 99,  suffix: "%", label: "Client Satisfaction",color: CTA  },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-8 sm:py-10 px-4 sm:px-6 text-center group"
              style={{ divideColor: "#ede8eb" }}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums mb-2"
                style={{ color: s.color }}>
                <Counter target={s.target} suffix={s.suffix} />
              </span>
              <span className="text-xs sm:text-sm font-medium" style={{ color: "#6b6073" }}>{s.label}</span>
              <div className="mt-3 h-0.5 w-0 group-hover:w-10 transition-all duration-500 rounded-full"
                style={{ background: s.color }} />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6">
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 p-4 rounded-xl border bg-white cursor-default transition-all"
              style={{ borderColor: "#ede8eb" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(113,75,103,0.08)" }}>
                <b.icon size={19} style={{ color: ODOO }} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug" style={{ color: "#1e1b1b" }}>{b.label}</p>
                <p className="text-xs mt-0.5" style={{ color: "#9e97a3" }}>{b.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="border-t border-b py-4 sm:py-5 overflow-hidden"
        style={{ background: "#fff", borderColor: "#ede8eb" }}>
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4 px-4"
          style={{ color: "#c4b8c0" }}>
          Trusted by businesses across industries
        </p>

        <div className="relative flex overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          {[0, 1].map((set) => (
            <motion.div
              key={set}
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              className="flex flex-shrink-0 items-center gap-4 pr-4"
              style={{ willChange: "transform" }}
            >
              {clients.map((name) => (
                <div
                  key={name}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-default"
                  style={{ borderColor: "#ede8eb", color: "#9e97a3" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = ODOO;
                    e.currentTarget.style.borderColor = "rgba(113,75,103,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#9e97a3";
                    e.currentTarget.style.borderColor = "#ede8eb";
                  }}
                >
                  {name}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
