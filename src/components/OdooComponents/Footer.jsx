import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github, ArrowUpRight } from "lucide-react";

const ODOO = "#714b67";
const CTA  = "#05adae";

const quickLinks  = [
  { label: "Home",      href: "#home" },
  { label: "Services",  href: "#services" },
  { label: "Process",   href: "#process" },
  { label: "About Us",  href: "#about" },
  { label: "Contact",   href: "#contact" },
];

const serviceLinks = [
  "CRM Implementation",
  "Sales Automation",
  "Accounting & Finance",
  "Inventory Management",
  "HR & Payroll",
  "Manufacturing (MRP)",
  "Marketing Automation",
  "eCommerce",
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn",  color: "#0a66c2" },
  { icon: Twitter,  href: "#", label: "Twitter/X", color: "#1d9bf0" },
  { icon: Youtube,  href: "#", label: "YouTube",   color: "#ff0000" },
  { icon: Github,   href: "#", label: "GitHub",    color: "#888" },
];

export default function Footer() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden" style={{ background: "#1e1b1b" }}>
      {/* Top accent rule */}
      <div className="h-[2px]" style={{ background: ODOO }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <button onClick={() => go("#home")} className="mb-4 sm:mb-5 block focus:outline-none">
              <img
                src="https://affycloudsolution.com/static/media/affy_logo.7354960bda008279c013.png"
                alt="Affy Cloud IT Solutions"
                className="h-8 sm:h-9 w-auto object-contain"
                loading="lazy"
              />
            </button>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 max-w-xs"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Certified Odoo Consultants helping businesses streamline
              operations, reduce costs, and accelerate growth.
            </p>
            {/* Partner badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border mb-5"
              style={{ background: `${ODOO}20`, borderColor: `${ODOO}50` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: ODOO }} />
              <span className="text-xs font-semibold" style={{ color: "#c9a8bc" }}>Certified Odoo Consultants</span>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 focus:outline-none"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = s.color + "55";
                    e.currentTarget.style.background  = s.color + "18";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background  = "transparent";
                  }}
                >
                  <s.icon size={15} style={{ color: "rgba(255,255,255,0.5)" }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5"
              style={{ color: "rgba(255,255,255,0.35)" }}>Navigation</h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.href)}
                    className="text-xs sm:text-sm transition-colors duration-200 focus:outline-none text-left"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a8bc")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5"
              style={{ color: "rgba(255,255,255,0.35)" }}>Services</h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span
                    className="text-xs sm:text-sm cursor-default transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5"
              style={{ color: "rgba(255,255,255,0.35)" }}>Contact</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 mb-5 sm:mb-6">
              {[
                { icon: Phone,  href: "tel:+919131395883",                             value: "🇮🇳 +91 9131395883" },
                { icon: Phone,  href: "tel:+447768460741",                             value: "🇬🇧 +44 7768460741" },
                { icon: Mail,   href: "mailto:mustafa.hasan@affyclouditsolutions.com", value: "mustafa.hasan@affyclouditsolutions.com" },
                { icon: Mail,   href: "mailto:info@affyclouditsolutions.com",          value: "info@affyclouditsolutions.com" },
                { icon: MapPin, href: null,                                             value: "India · UK · Remote Global" },
              ].map((c, i) => (
                <li key={i}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${CTA}18` }}>
                      <c.icon size={14} style={{ color: CTA }} />
                    </div>
                    {c.href ? (
                      <a href={c.href}
                        className="text-xs sm:text-sm leading-snug break-all transition-colors"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {c.value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer CTA */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: `0 6px 20px ${CTA}40` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("#contact")}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2"
              style={{ background: CTA }}
            >
              Book Free Consultation <ArrowUpRight size={14} />
            </motion.button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Affy Cloud IT Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
