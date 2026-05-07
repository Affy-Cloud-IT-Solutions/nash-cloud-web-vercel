import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, Send, CheckCircle, MapPin,
  Users, TrendingUp, Calculator, Package, UserCog, Factory, Megaphone, ShoppingCart,
} from "lucide-react";

const ODOO = "#0D47A1";
const CTA  = "#00B4FF";

const contactInfo = [
  { icon: Phone,  label: "India",       value: "+91 9131395883",                              href: "tel:+919131395883" },
  { icon: Phone,  label: "UK",          value: "+44 7768460741",                              href: "tel:+447768460741" },
  { icon: Mail,   label: "Mustafa Hasan", value: "mustafa.hasan@affyclouditsolutions.com",    href: "mailto:mustafa.hasan@affyclouditsolutions.com" },
  { icon: Mail,   label: "General",     value: "info@affyclouditsolutions.com",               href: "mailto:info@affyclouditsolutions.com" },
  { icon: MapPin, label: "Delivery",    value: "India · UK · Remote Global",                  href: null },
];

const moduleOptions = [
  { id: "crm",           icon: Users,        label: "CRM",          color: ODOO },
  { id: "sales",         icon: TrendingUp,   label: "Sales",        color: CTA  },
  { id: "accounting",    icon: Calculator,   label: "Accounting",   color: ODOO },
  { id: "inventory",     icon: Package,      label: "Inventory",    color: CTA  },
  { id: "hr",            icon: UserCog,      label: "HR & Payroll", color: ODOO },
  { id: "manufacturing", icon: Factory,      label: "Manufacturing",color: CTA  },
  { id: "marketing",     icon: Megaphone,    label: "Marketing",    color: ODOO },
  { id: "ecommerce",     icon: ShoppingCart, label: "eCommerce",    color: CTA  },
];

export default function ContactSection() {
  const [form,            setForm]           = useState({ name: "", email: "", company: "", message: "" });
  const [selectedModules, setSelectedModules]= useState([]);
  const [submitted,       setSubmitted]      = useState(false);
  const [focused,         setFocused]        = useState("");

  const toggle = (id) =>
    setSelectedModules((p) => p.includes(id) ? p.filter((m) => m !== id) : [...p, id]);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputStyle = (name) => ({
    borderColor:  focused === name ? ODOO : "#ede8eb",
    boxShadow:    focused === name ? "0 0 0 3px rgba(13, 71, 161,0.1)" : "none",
    outline:      "none",
    transition:   "border-color 0.2s, box-shadow 0.2s",
  });

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-12 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(13, 71, 161,0.08)", color: ODOO }}>
            Get In Touch
          </span>
          <h2 className="font-bold leading-tight mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#1e1b1b" }}>
            Start Your <span style={{ color: ODOO }}>Odoo Journey</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg" style={{ color: "#6b6073" }}>
            Tell us about your project and we'll respond within 24 hours with a tailored plan.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c4b8c0" }}>
              Contact Details
            </h3>

            {contactInfo.map((item, i) => (
              <motion.div
                key={`${item.label}-${i}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 3 }}
                className="flex items-start gap-3 sm:gap-4 p-4 rounded-2xl border transition-all duration-200"
                style={{ background: "#faf8f9", borderColor: "#ede8eb" }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(5,173,174,0.1)" }}>
                  <item.icon size={17} style={{ color: CTA }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#c4b8c0" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href}
                      className="text-sm font-medium break-all transition-colors duration-200"
                      style={{ color: "#1e1b1b" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = CTA)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#1e1b1b")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: "#6b6073" }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex items-center gap-3 p-4 rounded-2xl border mt-1"
              style={{ background: "rgba(5,173,174,0.05)", borderColor: "rgba(5,173,174,0.2)" }}>
              <div className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0" style={{ background: "#22c55e" }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: "#4a4450" }}>
                Average response: <span className="font-semibold" style={{ color: "#1e1b1b" }}>under 24 hours</span>
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center p-10 sm:p-14 rounded-2xl border min-h-[420px]"
                  style={{ borderColor: "rgba(5,173,174,0.2)", background: "rgba(5,173,174,0.04)" }}
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.15 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(5,173,174,0.1)" }}>
                    <CheckCircle size={32} style={{ color: CTA }} />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1e1b1b" }}>Message Received!</h3>
                  <p className="text-sm sm:text-base max-w-xs" style={{ color: "#6b6073" }}>
                    Our team will get back to you within 24 hours with a tailored proposal.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="rounded-2xl border p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-5"
                  style={{ borderColor: "#ede8eb" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name",  label: "Full Name",  placeholder: "John Smith",       type: "text",  required: true },
                      { name: "email", label: "Work Email", placeholder: "john@company.com", type: "email", required: true },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: "#4a4450" }}>
                          {f.label} {f.required && <span style={{ color: ODOO }}>*</span>}
                        </label>
                        <input
                          type={f.type} name={f.name} value={form[f.name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(f.name)}
                          onBlur={() => setFocused("")}
                          required={f.required}
                          placeholder={f.placeholder}
                          className="w-full px-4 py-3 rounded-xl border text-sm placeholder-gray-400"
                          style={{ color: "#1e1b1b", ...inputStyle(f.name) }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: "#4a4450" }}>Company Name</label>
                    <input
                      type="text" name="company" value={form.company}
                      onChange={handleChange}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused("")}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 rounded-xl border text-sm placeholder-gray-400"
                      style={{ color: "#1e1b1b", ...inputStyle("company") }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2.5" style={{ color: "#4a4450" }}>
                      Interested Modules{" "}
                      <span className="text-xs font-normal" style={{ color: "#9e97a3" }}>(select all that apply)</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {moduleOptions.map((mod) => {
                        const on = selectedModules.includes(mod.id);
                        return (
                          <motion.button
                            type="button" key={mod.id}
                            whileTap={{ scale: 0.93 }}
                            onClick={() => toggle(mod.id)}
                            className="flex flex-col items-center gap-1 p-2.5 sm:p-3 rounded-xl border text-center transition-all focus:outline-none"
                            style={{
                              background:   on ? `${mod.color}08` : "#faf8f9",
                              borderColor:  on ? `${mod.color}40` : "#ede8eb",
                            }}
                          >
                            <mod.icon size={16} style={{ color: on ? mod.color : "#c4b8c0" }} />
                            <span className="text-[9px] sm:text-[10px] font-medium leading-tight"
                              style={{ color: on ? mod.color : "#9e97a3" }}>
                              {mod.label}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: "#4a4450" }}>
                      Project Details <span style={{ color: ODOO }}>*</span>
                    </label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      required rows={4}
                      placeholder="Describe your business, current challenges, and what you'd like to achieve with Odoo..."
                      className="w-full px-4 py-3 rounded-xl border text-sm placeholder-gray-400 resize-none"
                      style={{ color: "#1e1b1b", ...inputStyle("message") }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 28px rgba(5,173,174,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl flex items-center justify-center gap-2"
                    style={{ background: CTA }}
                  >
                    <Send size={17} />
                    Send My Project Brief
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: "#c4b8c0" }}>
                    We respond within 24 hours · No spam, ever
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
