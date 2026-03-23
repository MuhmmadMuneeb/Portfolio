import React from "react"
import { motion } from "framer-motion"

const Crausal = () => {
  const data = [
    { id: 1, path: "/career.svg" },
    { id: 2, path: "/colorlib.svg" },
    { id: 3, path: "/masai.svg" },
    { id: 4, path: "/upwork.svg" },
    { id: 5, path: "/hostinger.svg" },
    { id: 6, path: "/frontend.svg" },
  ]

  // We triple the data to ensure there's never a gap during the loop
  const loopData = [...data, ...data, ...data]

  return (
    <div className="py-20 flex flex-col items-center overflow-hidden">
      {/* Label with signature Cyan accent */}
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center roboto-mono-500 font-bold text-sm tracking-[0.3em] uppercase text-white/40 mb-10"
      >
        Trusted by & Featured in
      </motion.h1>
      
      {/* 🎭 The Mask Container: Fades the left and right edges */}
      <div className="relative w-full max-w-[1200px]">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#19181c] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#19181c] to-transparent pointer-events-none" />

        {/* 🏃 The Animation Track */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-16 items-center flex-nowrap"
            animate={{
              x: ["0%", "-33.33%"], // Moves one full set of logos
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Adjust speed here (higher is slower)
                ease: "linear",
              },
            }}
            // Pause on hover
            style={{ willChange: "transform" }}
            whileHover={{ transition: { duration: 60 } }} // Slows down significantly on hover
          >
            {loopData.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center min-w-[150px] h-20"
              >
                <motion.img
                  src={item.path}
                  alt="logo"
                  whileHover={{ scale: 1.1, filter: "brightness(1.5)" }}
                  className="h-8 md:h-10 cursor-pointer object-contain grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mt-16" />
    </div>
  )
}

export default Crausal