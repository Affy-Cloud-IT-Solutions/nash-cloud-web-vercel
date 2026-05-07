import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const ODOO = "#0D47A1";
const CTA  = "#00B4FF";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen,      setMenuOpen]      = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50"
        style={{ contain: "layout" }}
      >
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px) saturate(150%)",
            borderBottom: scrolled ? "1px solid #ede8eb" : "1px solid rgba(237,232,235,0.5)",
            boxShadow: scrolled ? "0 2px 12px rgba(13, 71, 161,0.08)" : "none",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between transition-all duration-300"
            style={{ height: scrolled ? 60 : 72 }}
          >
            {/* Logo */}
            <button onClick={() => scrollTo("#home")} className="flex-shrink-0 focus:outline-none">
              <img
                src="https://affycloudsolution.com/static/media/affy_logo.7354960bda008279c013.png"
                alt="Affy Cloud IT Solutions"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const active = activeSection === id;
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none whitespace-nowrap"
                    style={{ color: active ? ODOO : "#4a4450" }}
                    onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = ODOO; }}
                    onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "#4a4450"; }}
                  >
                    {active && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full"
                        style={{ background: ODOO }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200"
                style={{ color: "#4a4450" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ODOO)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4450")}
              >
                Contact
              </button>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(5,173,174,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl"
                style={{ background: CTA }}
              >
                Book Demo
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center focus:outline-none flex-shrink-0"
              style={{ background: "rgba(13, 71, 161,0.08)" }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ color: ODOO }}
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
              style={{
                width: "min(320px, 85vw)",
                background: "#fff",
                borderLeft: "1px solid #ede8eb",
                boxShadow: "-8px 0 32px rgba(13, 71, 161,0.12)",
              }}
            >
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b" style={{ borderColor: "#ede8eb" }}>
                <img
                  src="https://affycloudsolution.com/static/media/affy_logo.7354960bda008279c013.png"
                  alt="Affy Cloud"
                  className="h-7 w-auto object-contain"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center focus:outline-none"
                  style={{ background: "rgba(13, 71, 161,0.08)" }}
                >
                  <X size={18} style={{ color: ODOO }} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
                {navLinks.map((link, i) => {
                  const id = link.href.replace("#", "");
                  const active = activeSection === id;
                  return (
                    <motion.button
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                      onClick={() => scrollTo(link.href)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl mb-1.5 text-left transition-all duration-200 focus:outline-none"
                      style={{
                        background: active ? "rgba(13, 71, 161,0.07)" : "transparent",
                        border: `1px solid ${active ? "rgba(13, 71, 161,0.2)" : "#f0eaee"}`,
                      }}
                    >
                      <span className="text-base font-medium" style={{ color: active ? ODOO : "#4a4450" }}>
                        {link.label}
                      </span>
                      <ChevronRight size={16} style={{ color: active ? ODOO : "#c4b8c0" }} />
                    </motion.button>
                  );
                })}
              </nav>

              <div className="px-4 pb-6 pt-2 border-t" style={{ borderColor: "#ede8eb" }}>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-4 text-base font-semibold text-white rounded-xl mt-3"
                  style={{ background: CTA }}
                >
                  Book Free Demo
                </motion.button>
                <p className="text-center text-xs mt-3" style={{ color: "#9e97a3" }}>
                  Certified Odoo Consultants
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
