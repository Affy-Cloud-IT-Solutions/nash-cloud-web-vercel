import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Mail, 
  Code, 
  Calculator, 
  HeadphonesIcon, 
  Briefcase, 
  BarChart, 
  CalendarCheck,
  Megaphone,
  Server
} from "lucide-react";

const serviceSuites = [
  { 
    category: "Zoho CRM Plus", 
    icon: <Users size={28} />,
    desc: "A unified customer experience platform that bridges the gap between sales, marketing, and customer service.",
    apps: ["CRM", "Desk", "SalesIQ", "Social"],
    color: "text-blue-500", 
    bg: "bg-blue-50" 
  },
  { 
    category: "Zoho Finance Plus", 
    icon: <Calculator size={28} />,
    desc: "An integrated suite of financial apps to manage your accounting, invoicing, subscriptions, and expenses.",
    apps: ["Books", "Invoice", "Expense", "Inventory"],
    color: "text-green-500", 
    bg: "bg-green-50" 
  },
  { 
    category: "Zoho Marketing Plus", 
    icon: <Megaphone size={28} />,
    desc: "Unify all your marketing activities and measure success with a single, collaborative marketing platform.",
    apps: ["Campaigns", "Social", "Webinars", "Analytics"],
    color: "text-red-500", 
    bg: "bg-red-50" 
  },
  { 
    category: "Zoho Workspace", 
    icon: <Mail size={28} />,
    desc: "A broad suite of productivity and collaboration apps engineered to get work done effectively from anywhere.",
    apps: ["Mail", "Cliq", "Writer", "Show"],
    color: "text-purple-500", 
    bg: "bg-purple-50" 
  },
  { 
    category: "Zoho People Plus", 
    icon: <Briefcase size={28} />,
    desc: "Deliver exceptional employee experiences with a unified HR platform for global workforces.",
    apps: ["People", "Recruit", "Expense", "Connect"],
    color: "text-pink-500", 
    bg: "bg-pink-50" 
  },
  {
    category: "Zoho IT Management",
    icon: <Server size={28} />,
    desc: "Align your IT to business with secure, scalable, and resilient enterprise-grade IT management solutions.",
    apps: ["ServiceDesk Plus", "Endpoint Central", "Site24x7", "Log360"],
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Business Ecosystem</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Run your entire business on Zoho—our unified platform offers over 50 integrated applications to manage your sales, marketing, finance, HR, and IT operations seamlessly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceSuites.map((suite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${suite.bg} ${suite.color} rounded-2xl flex items-center justify-center mb-6`}>
                {suite.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{suite.category}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-1">{suite.desc}</p>
              
              <div className="mt-auto">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Popular Apps</h4>
                <div className="flex flex-wrap gap-2">
                  {suite.apps.map((app, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
