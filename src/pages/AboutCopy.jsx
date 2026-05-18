// import React from "react";
// import { Globe2, Rocket, Gem } from "lucide-react";

// /* 🖼 About Images */
// import about1 from "../assets/about1.png";
// import about2 from "../assets/about2.png";
// import about3 from "../assets/about3.png";
// import about4 from "../assets/about4.png";
// import about5 from "../assets/about5.png";
// import about6 from "../assets/about6.png";

// const aboutImages = [
//     about1,
//     about2,
//     about3,
//     about4,
//     about5,
//     about6,
// ];

// const About = () => {
//     return (
//         <section
//             id="about"
//             className="relative min-h-screen pt-28 pb-16 px-6 md:px-16 overflow-hidden
//       bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] text-white"
//         >
//             {/* 🌌 Background Tech Glows */}
//             <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#0D47A1]/30 blur-[150px] rounded-full" />
//             <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00B4FF]/20 blur-[180px] rounded-full" />

//             {/* 🔹 Header */}
//             <div className="relative z-10 max-w-5xl mx-auto text-center">
//                 <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(0,180,255,0.3)]">
//                     <span className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent">
//                         About Us
//                     </span>
//                 </h1>

//                 <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
//                     Tech Trade Consulting is a leading technology consulting company
//                     specializing in{" "}
//                     <span className="text-[#00B4FF] font-semibold">IT</span>,{" "}
//                     <span className="text-[#00B4FF] font-semibold">SAP</span>, and{" "}
//                     <span className="text-[#00B4FF] font-semibold">
//                         Digital Transformation
//                     </span>{" "}
//                     services. We help enterprises scale, innovate, and achieve excellence
//                     in a digital-first world.
//                 </p>

//                 <p className="text-gray-400 text-md leading-relaxed max-w-2xl mx-auto">
//                     We believe in building lasting partnerships through innovation,
//                     reliability, and transparency — empowering clients to achieve global
//                     success through technology.
//                 </p>
//             </div>

//             {/* 🖼 IMAGE GALLERY */}
//             <div className="relative z-10 mt-16 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {aboutImages.map((img, index) => (
//                     <div
//                         key={index}
//                         className="group relative overflow-hidden rounded-2xl
//             border border-[#00B4FF]/20
//             shadow-[0_0_25px_rgba(0,180,255,0.15)]
//             hover:shadow-[0_0_40px_rgba(0,180,255,0.35)]
//             transition-all duration-500"
//                     >
//                         <img
//                             src={img}
//                             alt={`About ${index + 1}`}
//                             className="w-full h-56 object-cover
//               transform group-hover:scale-110
//               transition-transform duration-700"
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#061943]/60 via-transparent to-transparent
//             opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                     </div>
//                 ))}
//             </div>

//             {/* 💠 Cards Section */}
//             <div className="relative z-10 mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//                 {[
//                     {
//                         title: "Our Vision",
//                         text: "To become the trusted global partner for digital transformation — enabling businesses to innovate fearlessly.",
//                         Icon: Globe2,
//                     },
//                     {
//                         title: "Our Mission",
//                         text: "Deliver top-tier IT and SAP solutions that fuel growth, agility, and sustainable success for our clients.",
//                         Icon: Rocket,
//                     },
//                     {
//                         title: "Our Values",
//                         text: "Integrity, innovation, and customer-centric excellence — driving everything we create and deliver.",
//                         Icon: Gem,
//                     },
//                 ].map(({ title, text, Icon }, index) => (
//                     <div
//                         key={index}
//                         className="group relative p-10 rounded-2xl overflow-hidden
//             border border-[#00B4FF]/20 backdrop-blur-lg bg-white/5
//             shadow-[0_0_25px_rgba(0,180,255,0.15)]
//             hover:shadow-[0_0_40px_rgba(0,180,255,0.35)]
//             transition-all duration-500 transform hover:-translate-y-2"
//                     >
//                         {/* Glow Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/10 via-transparent to-[#0D47A1]/20
//             opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//                         {/* Icon */}
//                         <div className="relative z-10 flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full
//             bg-gradient-to-br from-[#0D47A1]/40 to-[#00B4FF]/30
//             border border-[#00B4FF]/30 group-hover:border-[#00B4FF]/50 transition-all duration-500">
//                             <Icon className="w-8 h-8 text-[#00B4FF] group-hover:text-white transition-colors duration-500" />
//                         </div>

//                         {/* Title */}
//                         <h3 className="relative z-10 text-2xl font-semibold text-[#00B4FF] mb-3 text-center
//             group-hover:text-white transition-colors duration-500">
//                             {title}
//                         </h3>

//                         {/* Text */}
//                         <p className="relative z-10 text-gray-300 leading-relaxed text-center">
//                             {text}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* Decorative Divider */}
//             <div className="relative z-10 mt-20 max-w-6xl mx-auto h-[2px]
//       bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent" />
//         </section>
//     );
// };

// export default About;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Globe2, Rocket, Gem } from "lucide-react";

/* 🖼 About Images */
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import WhoWeAreAndOffer from "../components/WhoWeAreAndOffer";

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
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-16 overflow-hidden
      bg-[linear-gradient(180deg,_rgb(7,12,28),_rgb(6,25,67))] text-white"
    >
      {/* 🌌 Background Tech Glows */}
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#0D47A1]/30 blur-[150px] rounded-full" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00B4FF]/20 blur-[180px] rounded-full" />

      {/* 🔹 Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(0,180,255,0.3)]">
          <span className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] bg-clip-text text-transparent">
            About Us
          </span>
        </h1>

        <p className="text-[#00B4FF] text-2xl md:text-3xl font-semibold leading-relaxed mb-4 max-w-3xl mx-auto">
          Analyse. Automate. Accelerate.
        </p>

      </div>

      <div id="about-techtrade" className="relative z-10 mt-12 max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-[2rem] border border-[#00B4FF]/15 bg-white/5 p-8 shadow-[0_0_45px_rgba(0,180,255,0.12)] backdrop-blur-xl">
          <span className="inline-flex items-center rounded-full border border-[#00B4FF]/30 bg-[#0B1F42]/80 px-4 py-2 text-sm font-semibold text-[#B3D7FF]">
            TechTrade IT Solutions
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            We transform businesses through technology, talent, and trust.
          </h2>

          <div className="mt-5 space-y-5 text-gray-300 leading-relaxed text-base md:text-lg">
            <p>
              At TechTrade IT Solutions, we don’t just implement technology — we
              transform businesses and the people behind them. Founded over 9
              years ago, we have grown into a trusted partner for organisations
              across the UK and beyond, delivering expert SAP services,
              innovative IT solutions, and industry-leading training and
              resourcing.
            </p>
            <p>
              We exist to close the gap between technology and talent. Whether
              you’re looking to streamline your SAP landscape, modernise your IT
              infrastructure, or develop the digital skills of your workforce,
              TechTrade brings the expertise, the energy, and the commitment to
              make it happen.
            </p>
            <p>
              Our clients range from ambitious SMEs to large enterprises — all
              united by one thing: a desire to grow, adapt, and lead in a
              digital world. And we’re right there with them, every step of the
              way.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { value: "9+", label: "Years in Business" },
              { value: "50+", label: "Clients Served" },
              { value: "200+", label: "Professionals Trained" },
              { value: "15+", label: "Industries Covered" },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#00B4FF]/10 bg-[#07122e]/80 p-5 text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
          {/* 
                    <a
                        href="https://www.techtradeitsolutions.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0D47A1]/20 transition duration-300 hover:-translate-y-0.5"
                    >
                        Visit TechTrade
                    </a> */}
        </div>

        <div className="grid grid-cols-2 gap-4 h-full content-start">
          <img
            src={about1}
            alt="TechTrade team"
            className="h-56 w-full rounded-2xl object-cover border border-[#00B4FF]/10 shadow-xl hover:border-[#00B4FF]/30 hover:scale-[1.02] transition-all duration-300"
          />
          <img
            src={about2}
            alt="TechTrade workspace"
            className="h-56 w-full rounded-2xl object-cover border border-[#00B4FF]/10 shadow-xl hover:border-[#00B4FF]/30 hover:scale-[1.02] transition-all duration-300"
          />
          <img
            src={about3}
            alt="TechTrade collaboration"
            className="h-56 w-full rounded-2xl object-cover border border-[#00B4FF]/10 shadow-xl hover:border-[#00B4FF]/30 hover:scale-[1.02] transition-all duration-300"
          />
          <img
            src={about4}
            alt="TechTrade innovation"
            className="h-56 w-full rounded-2xl object-cover border border-[#00B4FF]/10 shadow-xl hover:border-[#00B4FF]/30 hover:scale-[1.02] transition-all duration-300"
          />
          <img
            src={about5}
            alt="TechTrade training"
            className="h-56 w-full rounded-2xl object-cover border border-[#00B4FF]/10 shadow-xl hover:border-[#00B4FF]/30 hover:scale-[1.02] transition-all duration-300"
          />
          <img
            src={about6}
            alt="TechTrade delivery"
            className="h-56 w-full rounded-2xl object-cover border border-[#00B4FF]/10 shadow-xl hover:border-[#00B4FF]/30 hover:scale-[1.02] transition-all duration-300"
          />
        </div>
      </div>

      <div id="vision-values" className="relative z-10 mt-16 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vision & Values
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our vision and values guide every engagement, every delivery, and
            every relationship.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Our Vision",
              text: "Empowering every business to thrive in a digital world. Technology should be an enabler, not a barrier.",
              Icon: Globe2,
            },
            {
              title: "Our Purpose",
              text: "To simplify technology, grow talent, and drive transformation — one business at a time.",
              Icon: Rocket,
            },
            {
              title: "Our Values",
              text: "We focus on client success, agility, inclusivity, continuous learning, excellence, and empowering people.",
              Icon: Gem,
            },
          ].map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={index}
                className="rounded-[2rem] border border-[#00B4FF]/15 bg-white/5 p-8 shadow-[0_0_35px_rgba(0,180,255,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D47A1]/10 text-[#00B4FF] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div id="leadership" className="relative z-10 mt-16 max-w-7xl mx-auto grid gap-8 xl:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-[#00B4FF]/15 bg-white/5 p-8 shadow-[0_0_35px_rgba(0,180,255,0.12)]">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-300 max-w-3xl">
              Experienced leaders who combine SAP expertise, technology
              strategy, and business transformation delivery.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-[#00B4FF]/10 bg-[#07122e]/80 p-8">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Akbar Khan
              </h3>
              <p className="text-[#00B4FF] font-semibold mb-4">
                Director of Technology
              </p>
              <p className="text-gray-300 leading-relaxed">
                Akbar leads TechTrade’s technology vision and SAP practice,
                bringing deep technical expertise and a passion for building
                solutions that genuinely work. He believes technology’s true
                purpose is to make people’s lives easier — and that belief
                drives everything the team does.
              </p>
            </div>
            <div className="rounded-3xl border border-[#00B4FF]/10 bg-[#07122e]/80 p-8">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Amer Rashid
              </h3>
              <p className="text-[#00B4FF] font-semibold mb-4">Director</p>
              <p className="text-gray-300 leading-relaxed">
                Amer oversees TechTrade’s strategic direction, client
                relationships, and business growth. He brings clarity to
                complexity and connects the right talent to the right
                opportunities while ensuring TechTrade always delivers on its
                promises.
              </p>
            </div>
          </div>
        </div>

        <div id="culture" className="rounded-[2rem] border border-[#00B4FF]/15 bg-white/5 p-8 shadow-[0_0_35px_rgba(0,180,255,0.12)]">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Life at TechTrade
            </h2>
            <p className="text-gray-300 max-w-3xl">
              A flexible, collaborative, and human-first culture where people
              feel trusted, inspired, and empowered to build the future of technology.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Flexible & Comfortable Working",
                text: "We offer a flexible working environment that empowers our team to do their best work — wherever and however that looks.",
              },
              {
                title: "A Culture of Collaboration",
                text: "Ideas are shared openly, challenges are tackled together, and wins are celebrated as a team.",
              },
              {
                title: "Always Learning, Always Growing",
                text: "From knowledge-sharing sessions to professional development, we invest in our people’s growth at every stage.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#00B4FF]/10 bg-[#07122e]/80 p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Why TechTrade Section */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <div id="why-techtrade" className="rounded-[2rem] border border-[#00B4FF]/15 bg-[#07122e]/90 p-8 shadow-[0_0_45px_rgba(0,180,255,0.14)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why TechTrade
              </h2>
              <p className="mt-3 text-gray-300 max-w-3xl">
                Choosing the right SAP and IT partner is one of the most
                important decisions a business can make.
              </p>
            </div>
            {/* <a
              href="https://www.techtradeitsolutions.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0D47A1] to-[#00B4FF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5"
            >
              Start the conversation
            </a> */}
          </div>
          <WhoWeAreAndOffer />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SAP Specialists",
                text: "Our consultants don’t just know SAP in theory — they’ve lived it, implemented it, and optimised it across industries.",
              },
              {
                title: "Practical Training",
                text: "Our trainers work inside the systems they teach, delivering learning that is relevant and immediately useful.",
              },
              {
                title: "End-to-End Support",
                text: "From strategy and design to go-live and beyond, we’re with you at every stage of your journey.",
              },
              {
                title: "People-First Approach",
                text: "We never lose sight of the humans behind every system. Technology only works when people do.",
              },
              {
                title: "UK-Based, Globally Minded",
                text: "Rooted in the UK with a global perspective, we understand local challenges and international opportunities.",
              },
              {
                title: "No Jargon, Just Results",
                text: "We communicate clearly, work transparently, and focus on outcomes that matter to your business.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#00B4FF]/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Decorative Divider */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/40 to-transparent" />
    </section>
  );
};

export default About;
