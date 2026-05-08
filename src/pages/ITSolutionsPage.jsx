import React from "react";
import {
    Cpu, Settings, Cloud, ShieldCheck, BarChart3,
    Database, Globe, Smartphone, Network, GitBranch,
    Sparkles, Zap, Award, TrendingUp, Code, Server,
    Layers, Lock, CloudCog, LineChart, Users, Briefcase, BrainCircuit
} from "lucide-react";

const solutions = [
    {
        title: "Digital Transformation",
        description: "Empowering organizations to modernize infrastructure and adopt next-gen technologies for operational agility and business scalability.",
        icon: <Cpu className="w-10 h-10" />,
        tags: ["Modernization", "Agility", "Scalability"],
        category: "Core Services"
    },
    {
        title: "Automation & AI Integration",
        description: "Leveraging AI and intelligent automation to streamline business processes, reduce errors, and enhance decision-making efficiency.",
        icon: <Settings className="w-10 h-10" />,
        tags: ["AI", "Automation", "Efficiency"],
        category: "Advanced Tech"
    },
    {
        title: "Cloud Infrastructure",
        description: "Building secure, scalable, and high-performing cloud ecosystems with AWS, Azure, and Google Cloud for modern digital enterprises.",
        icon: <Cloud className="w-10 h-10" />,
        tags: ["AWS", "Azure", "GCP"],
        category: "Infrastructure"
    },
    {
        title: "Cybersecurity & Compliance",
        description: "Protecting digital assets with proactive threat detection, identity management, and compliance frameworks tailored to your industry.",
        icon: <ShieldCheck className="w-10 h-10" />,
        tags: ["Security", "Compliance", "Threat Detection"],
        category: "Security"
    },
    {
        title: "Data Analytics & Insights",
        description: "Turning raw data into actionable insights through advanced analytics, dashboards, and predictive models for better business outcomes.",
        icon: <BarChart3 className="w-10 h-10" />,
        tags: ["Analytics", "Predictive", "Dashboards"],
        category: "Data"
    },
    {
        title: "DevOps & CI/CD",
        description: "Accelerating software delivery with automated pipelines, infrastructure as code, and continuous integration/deployment best practices.",
        icon: <GitBranch className="w-10 h-10" />,
        tags: ["DevOps", "CI/CD", "Automation"],
        category: "Development"
    },
    {
        title: "Database Management",
        description: "Optimizing data storage, migration, and performance with expertise in SQL, NoSQL, and cloud-native database solutions.",
        icon: <Database className="w-10 h-10" />,
        tags: ["SQL", "NoSQL", "Migration"],
        category: "Data"
    },
    {
        title: "Enterprise Architecture",
        description: "Designing robust IT frameworks that align technology infrastructure with business strategy for long-term growth.",
        icon: <Network className="w-10 h-10" />,
        tags: ["Architecture", "Strategy", "Frameworks"],
        category: "Core Services"
    },
    {
        title: "Mobile & Web Development",
        description: "Building responsive, high-performance applications with modern frameworks, ensuring seamless user experiences across all devices.",
        icon: <Smartphone className="w-10 h-10" />,
        tags: ["Mobile", "Web", "Responsive"],
        category: "Development"
    },
    {
        title: "IT Infrastructure Management",
        description: "End-to-end management of servers, networks, and systems ensuring maximum uptime, performance, and reliability.",
        icon: <Server className="w-10 h-10" />,
        tags: ["Servers", "Networks", "Reliability"],
        category: "Infrastructure"
    },
    {
        title: "Microservices Architecture",
        description: "Modernizing legacy systems with scalable microservices, containerization using Docker and Kubernetes for agility.",
        icon: <Layers className="w-10 h-10" />,
        tags: ["Microservices", "Docker", "Kubernetes"],
        category: "Architecture"
    },
    {
        title: "IT Strategy Consulting",
        description: "Strategic technology roadmap development, vendor selection, and digital maturity assessment for informed decision-making.",
        icon: <TrendingUp className="w-10 h-10" />,
        tags: ["Strategy", "Roadmap", "Consulting"],
        category: "Core Services"
    }
];

const ITSolutionsPage = () => {
    // Group solutions by category
    const groupedSolutions = solutions.reduce((acc, solution) => {
        if (!acc[solution.category]) {
            acc[solution.category] = [];
        }
        acc[solution.category].push(solution);
        return acc;
    }, {});

    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0a1428] to-[#061943]">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping"></div>
                <div className="absolute top-[30%] right-[8%] w-[3px] h-[3px] bg-[#0D47A1] rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-[25%] left-[15%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping delay-1400"></div>
                <div className="absolute top-[60%] right-[20%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[40%] left-[80%] w-[3px] h-[3px] bg-[#0D47A1] rounded-full animate-ping delay-2100"></div>
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-[#00B4FF]/10 blur-[180px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-[#0D47A1]/20 blur-[220px] rounded-full"></div>
            <div className="absolute top-[40%] left-[40%] w-[450px] h-[450px] bg-[#00B4FF]/5 blur-[160px] rounded-full"></div>

            {/* Header Section */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24 pb-12 mt-10">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#00B4FF]/20">
                    <Sparkles className="w-4 h-4 text-[#00B4FF]" />
                    <span className="text-sm text-gray-300">Enterprise Technology</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-[#00B4FF] via-[#2B7FFF] to-[#0D47A1] bg-clip-text text-transparent">
                        IT Solutions
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Transform your enterprise with end-to-end IT solutions — from automation to cloud transformation,
                    designed to scale with your business and drive digital excellence.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                    {[
                        { label: "Solutions Delivered", value: "50+", icon: <Code className="w-5 h-5" /> },
                        { label: "Tech Experts", value: "40+", icon: <Users className="w-5 h-5" /> },
                        { label: "Success Rate", value: "99%", icon: <Award className="w-5 h-5" /> },
                        { label: "Active Clients", value: "35+", icon: <Briefcase className="w-5 h-5" /> }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#00B4FF]/30 transition-all duration-300">
                            <div className="flex items-center justify-center gap-2 text-[#00B4FF] mb-2">
                                {stat.icon}
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                            </div>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Solutions by Category */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-28">
                {Object.entries(groupedSolutions).map(([category, categorySolutions]) => (
                    <div key={category} className="mb-16 last:mb-0">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00B4FF]/30"></div>
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#00B4FF]/30">
                                <Zap className="w-4 h-4 text-[#00B4FF]" />
                                <h2 className="text-lg font-semibold text-[#00B4FF]">{category}</h2>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00B4FF]/30"></div>
                        </div>

                        {/* Solutions Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categorySolutions.map((solution, idx) => (
                                <div
                                    key={idx}
                                    className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00B4FF]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00B4FF]/10"
                                >
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D47A1]/20 via-[#00B4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0D47A1]/20 border border-[#00B4FF]/30 group-hover:scale-110 transition-transform duration-300">
                                            <div className="text-[#00B4FF] group-hover:text-white transition-colors duration-300">
                                                {solution.icon}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {solution.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {solution.tags.map((tag, tagIdx) => (
                                                <span key={tagIdx} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {/* Bottom Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00B4FF]/30 to-transparent"></div>
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#00B4FF]/5 blur-[200px] rounded-full"></div>
        </section>
    );
};

export default ITSolutionsPage;