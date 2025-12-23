import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    const techFonts = {
        orbitron: "font-['Orbitron'] font-black tracking-wider",
        rajdhani: "font-['Rajdhani'] font-bold tracking-tight",
        exo: "font-['Exo_2'] font-extrabold tracking-tight",
        audiowide: "font-['Audiowide'] tracking-wider",
        titillium: "font-['Titillium_Web'] font-black tracking-normal",
    };

    const selectedFont = techFonts.orbitron; // Change this to try different fonts

    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
                    }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#061943]/95 via-[#061943]/85 to-transparent" />
            </div>

            {/* Tagline aligned left */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className={`${selectedFont} text-[2.45rem] md:text-[4.25rem] lg:text-[5.5rem] leading-[1.5] md:leading-[0.95] lg:leading-[0.95] text-white`}>
                            <div className="mb-6">Your Partner in</div>
                            <div className="space-y-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="text-[#00B4FF]"
                                >
                                    Digital Skills,
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="text-[#0D9DFF]"
                                >
                                    Talent,
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.1, duration: 1 }}
                                    className="text-[#00D4FF]"
                                >
                                    and Transformation
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Import all tech fonts */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700;900&display=swap');
      `}</style>
        </section>
    );
};

export default Home;