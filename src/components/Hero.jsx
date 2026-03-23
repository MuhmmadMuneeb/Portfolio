import React, { useState, useEffect } from 'react'
import Crausal from './Crausal'
import Sun from './Sun'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const bgTranslateX = useTransform(springX, [-500, 500], [20, -20]);
  const bgTranslateY = useTransform(springY, [-500, 500], [20, -20]);
  const textRotationY = useTransform(springX, [-500, 500], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const nameVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black perspective-1000">
      <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

      <motion.div
        style={{ x: springX, y: springY }}
        className='absolute left-[50%] top-20 z-0'
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sun />
        </motion.div>
      </motion.div>

      {/* 🖋️ Main Content */}
      <motion.div 
        style={{ rotateY: textRotationY }}
        className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4"
      >
        {/* --- GAP IMPROVEMENT 1: Increased gap between letters (gap-4 to gap-6) --- */}
        <div className="overflow-hidden flex gap-2 md:gap-8 mb-4">
          {"MUNEEB".split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -20, color: "#66d9ed" }}
              className='text-[70px] md:text-[154px] text-white hero-title uppercase leading-none inline-block cursor-default select-none'
              style={{ textShadow: "0 20px 50px rgba(0,0,0,0.8)" }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* --- GAP IMPROVEMENT 2: Added more vertical space (mt-10) --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="flex flex-col items-center mt-10 md:mt-12"
        >
            <motion.p
            className='roboto-mono-500 text-sm md:text-2xl text-[#66d9ed] tracking-[1em] uppercase'
            animate={{ letterSpacing: ["0.6em", "0.8em", "0.6em"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
            Architecting the Modern Web
            </motion.p>
            
            {/* Tagline divider with extra margin top */}
            <div className="w-16 h-[1px] bg-white/20 mt-8" />
        </motion.div>

        {/* --- GAP IMPROVEMENT 3: Pushed Scroll Indicator lower for air (bottom-32) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-28 md:bottom-32 flex flex-col items-center gap-6"
        >
          <span className="text-[10px] text-white/30 tracking-[0.5em] uppercase">Discovery</span>
          <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
             <motion.div 
                animate={{ y: [-80, 80] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#66d9ed] to-transparent"
             />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 w-full z-30">
        <Crausal />
      </div>

      <motion.div
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-[-5%] -z-10 bg-[url('/hero.jpg')] bg-cover bg-no-repeat grayscale-[40%] brightness-[0.6]"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
    </section>
  )
}

export default Hero