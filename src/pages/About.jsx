import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Globe2, Rocket, Gem,
  ArrowRight, CheckCircle2,
  Briefcase, Users, Award,
  Sparkles, Zap, Shield,
  TrendingUp, Code, Coffee,
  Star, ChevronRight, PlayCircle
} from "lucide-react";

/* All image imports removed */

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>

      {/* ========== HERO SECTION ========== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 20% 40%, #0A0F2A 0%, #050814 100%)"
        }}
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-[#00B4FF]/15 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
          <div className="absolute top-[60%] left-[40%] w-[400px] h-[400px] bg-[#0D47A1]/25 rounded-full blur-[100px] animate-pulse-slow delay-500" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B4FF]/20 to-transparent" style={{ animation: 'slide 8s linear infinite' }} />
          <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" style={{ animation: 'slide 12s linear infinite' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-[#00B4FF]" />
            <span className="text-sm text-gray-300">Trusted by industry leaders</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#00B4FF] to-[#7C3AED] bg-clip-text text-transparent animate-gradient">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">With TechTrade</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Analyse. Automate. Accelerate. — We deliver expert SAP solutions,
            innovative IT strategies, and industry-leading training that drives real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button
              onClick={() => {
                const el = document.getElementById('about-techtrade');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium text-lg hover:bg-white/10 hover:border-[#00B4FF]/50 transition-all duration-300 hover:-translate-y-1"
            >
              Discover Our Story
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00B4FF]/20 group-hover:bg-[#00B4FF]/40 transition-colors">
                <ArrowRight className="w-4 h-4 text-[#00B4FF] group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-600">
            {[
              { value: "9+", label: "Years of Excellence", icon: Award },
              { value: "50+", label: "Happy Clients", icon: Briefcase },
              { value: "200+", label: "Professionals Trained", icon: Users },
              { value: "100%", label: "Client Satisfaction", icon: Star },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6 text-[#00B4FF]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION (Former Hero Section) ========== */}
      <section
        id="about-techtrade"
        className="relative py-28 px-6 md:px-16 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #050814 0%, #0A0F2A 50%, #050814 100%)"
        }}
      >
        {/* Background Glows */}
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#0D47A1]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00B4FF]/15 blur-[180px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00B4FF] text-sm font-semibold mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About TechTrade
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Analyse. Automate. Accelerate. — We don't just implement technology,
              we transform businesses and the people behind them.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-[#00B4FF]/20 bg-white/5 backdrop-blur-sm p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  We transform businesses through technology, talent, and trust.
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Founded over 9 years ago, TechTrade IT Solutions has grown into a trusted
                    partner for organisations across the UK and beyond, delivering expert SAP
                    services, innovative IT solutions, and industry-leading training.
                  </p>
                  <p>
                    We exist to close the gap between technology and talent. Whether you're
                    looking to streamline your SAP landscape, modernise your IT infrastructure,
                    or develop your workforce's digital skills — we bring the expertise, energy,
                    and commitment to make it happen.
                  </p>
                </div>
              </div>

              {/* Stats Grid - Enhanced */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "9+", label: "Years in Business", color: "from-blue-500 to-cyan-500" },
                  { value: "50+", label: "Clients Served", color: "from-purple-500 to-pink-500" },
                  { value: "200+", label: "Professionals Trained", color: "from-emerald-500 to-teal-500" },
                  { value: "15+", label: "Industries Covered", color: "from-orange-500 to-red-500" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-center overflow-hidden hover:border-[#00B4FF]/30 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Features Grid (Replacing Images) */}
            <div className="grid gap-6">
              {[
                {
                  icon: Shield,
                  title: "SAP Specialists",
                  description: "Our consultants have lived it, implemented it, and optimised it across industries."
                },
                {
                  icon: TrendingUp,
                  title: "Practical Training",
                  description: "Our trainers work inside the systems they teach, delivering immediately useful learning."
                },
                {
                  icon: Code,
                  title: "End-to-End Support",
                  description: "From strategy to go-live and beyond, we're with you at every stage."
                },
                {
                  icon: Coffee,
                  title: "People-First Approach",
                  description: "Technology only works when people do. We never lose sight of the humans behind every system."
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#00B4FF]/30 hover:bg-white/10 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0D47A1]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#00B4FF]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== VISION & VALUES SECTION ========== */}
      <section id="vision-values" className="relative py-28 px-6 md:px-16 overflow-hidden bg-[#050814]">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300B4FF\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00B4FF] text-sm font-semibold mb-4">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vision & Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our vision and values guide every engagement, every delivery, and every relationship.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Globe2,
                title: "Our Vision",
                text: "Empowering every business to thrive in a digital world. Technology should be an enabler, not a barrier.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Rocket,
                title: "Our Purpose",
                text: "To simplify technology, grow talent, and drive transformation — one business at a time.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Gem,
                title: "Our Values",
                text: "Client success, agility, inclusivity, continuous learning, excellence, and empowering people.",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-[#00B4FF]/30 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0D47A1]/20 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#00B4FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP & CULTURE SECTION ========== */}
      <section className="relative py-28 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-[#050814] to-[#0A0F2A]">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#00B4FF]/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00B4FF] text-sm font-semibold mb-4">
              Leadership & Culture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Team Behind TechTrade
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced leaders and a culture that empowers everyone to do their best work.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Leadership Team */}
            <div id="leadership" className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#00B4FF] to-[#7C3AED] rounded-full" />
                  <h3 className="text-2xl font-bold text-white">Leadership Team</h3>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      name: "Akbar Khan",
                      role: "Director of Technology",
                      description: "Akbar leads TechTrade's technology vision and SAP practice, bringing deep technical expertise and a passion for building solutions that genuinely work."
                    },
                    {
                      name: "Amer Rashid",
                      role: "Director",
                      description: "Amer oversees strategic direction, client relationships, and business growth, connecting the right talent to the right opportunities."
                    }
                  ].map((leader, index) => (
                    <div key={index} className="p-6 rounded-xl border border-white/10 bg-[#0A0F2A]/50 hover:border-[#00B4FF]/20 transition-all">
                      <h4 className="text-xl font-bold text-white mb-1">{leader.name}</h4>
                      <p className="text-[#00B4FF] text-sm font-semibold mb-3">{leader.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{leader.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Culture */}
            <div id="culture" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-[#7C3AED] to-[#00B4FF] rounded-full" />
                <h3 className="text-2xl font-bold text-white">Life at TechTrade</h3>
              </div>
              <p className="text-gray-300 mb-8">
                A flexible, collaborative, and human-first culture where people feel trusted,
                inspired, and empowered to build the future of technology.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Flexible & Comfortable Working",
                    text: "We empower our team to do their best work — wherever and however that looks."
                  },
                  {
                    title: "A Culture of Collaboration",
                    text: "Ideas are shared openly, challenges are tackled together, and wins are celebrated as a team."
                  },
                  {
                    title: "Always Learning, Always Growing",
                    text: "We invest in our people's growth at every stage through knowledge-sharing and development."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-[#0A0F2A]/30">
                    <CheckCircle2 className="w-5 h-5 text-[#00B4FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY TECHTRADE SECTION ========== */}
      <section id="why-techtrade" className="relative py-28 px-6 md:px-16 overflow-hidden bg-[#050814]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00B4FF]/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00B4FF] text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why TechTrade?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choosing the right SAP and IT partner is one of the most important decisions
              a business can make. Here's why clients trust us.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SAP Specialists",
                text: "Our consultants have lived it, implemented it, and optimised it across industries."
              },
              {
                title: "Practical Training",
                text: "Our trainers work inside the systems they teach, delivering learning that is immediately relevant."
              },
              {
                title: "End-to-End Support",
                text: "From strategy and design to go-live and beyond, we're with you at every stage."
              },
              {
                title: "People-First Approach",
                text: "We never lose sight of the humans behind every system. Technology only works when people do."
              },
              {
                title: "UK-Based, Globally Minded",
                text: "Rooted in the UK with a global perspective, we understand local challenges and international opportunities."
              },
              {
                title: "No Jargon, Just Results",
                text: "We communicate clearly, work transparently, and focus on outcomes that matter to your business."
              }
            ].map((item, index) => (
              <div key={index} className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#00B4FF]/30 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00B4FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-[#00B4FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          {/* <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] text-white font-semibold text-lg shadow-lg shadow-[#00B4FF]/20 hover:shadow-[#00B4FF]/40 transition-all duration-300 hover:-translate-y-1">
                Start the conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
                Learn more about us
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;