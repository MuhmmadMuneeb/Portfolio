import React from 'react';
import { motion } from "framer-motion";

const Profile = () => {

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
        <section id='about' className='bg-[#19181c] min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden'>

            {/* 🔥 LEFT CONTENT */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='flex flex-col gap-6 max-w-xl z-10'
            >
                <motion.h1
                    variants={fadeUp}
                    className='text-5xl md:text-7xl lg:text-8xl font-extrabold hero-title leading-tight text-white'
                >
                    <span className='text-[#66d9ed]'>About</span> Me
                </motion.h1>

                <motion.div
                    variants={fadeUp}
                    className="w-24 h-1 bg-[#66d9ed] rounded-full"
                />

                <motion.p
                    variants={fadeUp}
                    className='roboto-mono-500 tracking-wide text-lg md:text-xl text-gray-300 leading-relaxed'
                >
                    Crafting the web, one pixel and one endpoint at a time. I’m a full-stack engineer who lives at the intersection of aesthetics and efficiency. Using the MERN stack, I transform bold ideas into high-performance applications, ensuring every interaction is as seamless as the logic powering it behind the scenes.
                </motion.p>

                <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-fit px-8 py-4 bg-[#66d9ed] text-black font-bold rounded-xl shadow-lg hover:shadow-[#66d9ed]/40 transition-all uppercase tracking-wider text-sm'
                >
                    Learn More →
                </motion.button>
            </motion.div>

            {/* 🎬 RIGHT IMAGE SECTION */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-full lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center items-center'
            >
                {/* Decorative Background Elements */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[110%] h-[110%] border border-[#66d9ed]/10 rounded-full"
                />
                
                {/* Main Glow */}
                <div className="absolute inset-0 bg-[#66d9ed]/10 blur-[100px] rounded-full"></div>

                {/* The Image Wrapper */}
                <div className="relative group">
                    {/* Animate-on-hover border frame */}
                    <div className="absolute -inset-4 border border-[#66d9ed]/30 rounded-3xl transition-all duration-500 group-hover:inset-0 group-hover:border-[#66d9ed]"></div>
                    
                    <motion.img
                        src="./myimg.jpeg" 
                        alt="Developer portrait"
                        whileHover={{ scale: 1.02 }}
                        className="relative w-full max-w-[450px] aspect-[4/5] object-cover rounded-2xl shadow-2xl z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    />
                    
                    {/* Experience Badge / Floating Tag */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-6 -left-6 bg-[#1e1e22] border border-white/10 p-4 rounded-2xl shadow-2xl z-20 hidden md:block"
                    >
                        <p className="text-[#66d9ed] font-bold text-2xl">MERN</p>
                        <p className="text-gray-400 text-xs uppercase tracking-widest">Specialist</p>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    )
}

export default Profile;