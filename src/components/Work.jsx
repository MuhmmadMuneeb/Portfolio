import React from 'react';
import { motion } from "framer-motion";

const Work = () => {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="work" className='bg-[#19181c] min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden'>

            {/* 🔥 LEFT CONTENT: Project Details */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='flex flex-col gap-6 max-w-xl z-10'
            >
                <motion.div variants={fadeUp} className="flex flex-col">
                    <span className='text-[#66d9ed] roboto-mono-500 uppercase tracking-[0.3em] text-sm mb-2'>
                        Featured Project
                    </span>
                    <h1 className='text-6xl md:text-8xl font-extrabold hero-title leading-tight text-white'>
                        My <br /> Work
                    </h1>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="w-24 h-1 bg-[#66d9ed] rounded-full"
                />

                <motion.p
                    variants={fadeUp}
                    className='roboto-mono-500 tracking-wide text-lg md:text-xl text-gray-300 leading-relaxed'
                >
                    I specialize in building full-stack solutions where performance meets design.
                    From scalable E-commerce platforms to real-time administrative dashboards,
                    I turn complex requirements into seamless digital experiences.
                </motion.p>

                {/* Project Tech Tags */}
                <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
                    {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
                        <span key={tech} className="px-3 py-1 border border-[#66d9ed]/30 text-[#66d9ed] text-xs rounded-full bg-[#66d9ed]/5">
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-fit mt-4 px-8 py-4 bg-transparent border border-[#66d9ed] text-[#66d9ed] font-bold rounded-xl shadow-lg hover:bg-[#66d9ed] hover:text-black transition-all uppercase tracking-wider text-sm'
                >
                    <a href="#projects">
                        View All Projects
                    </a>
                </motion.button>
            </motion.div>

            {/* 🎬 RIGHT CONTENT: Video/Showcase */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center items-center'
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#66d9ed]/10 blur-[120px] rounded-full"></div>

                <div className="relative group w-full max-w-[600px]">
                    {/* Decorative Border Frame */}
                    <div className="absolute -inset-2 border border-[#66d9ed]/20 rounded-3xl group-hover:border-[#66d9ed]/50 transition-all duration-500"></div>

                    {/* The Video Container */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#1e1e22]"
                    >
                        <video
                            src="./out.webm"
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Playback Overlay Hint */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] text-white font-bold tracking-widest uppercase">Live Demo</span>
                        </div>
                    </motion.div>

                    {/* Floating Tech Stack Icon (Visual Flourish) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 w-16 h-16 bg-[#19181c] border border-[#66d9ed]/40 rounded-2xl flex items-center justify-center shadow-2xl z-20"
                    >
                        <span className="text-[#66d9ed] text-2xl font-bold">M</span>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
};

export default Work;