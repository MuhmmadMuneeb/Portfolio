import React from 'react';
import { motion } from 'framer-motion';

const Experties = () => {
  const data = [
    {
      id: 1,
      heading: "Backend",
      heading2: " Development",
      color: "#de048b", // Pink
      desc: "Experience building REST APIs using Node.js and Express, working with MongoDB, authentication (JWT), and server-side logic.",
      logo: "/pc.svg"
    },
    {
      id: 2,
      heading: "Frontend Dev",
      heading2: " React.js",
      color: "#2b48d9", // Blue
      desc: "Skilled in creating responsive user interfaces using React, Tailwind CSS, and modern JavaScript with focus on clean UI and UX.",
      logo: "/react.svg"
    },
    {
      id: 3,
      heading: "Full Stack",
      heading2: " MERN",
      color: "#ff6b2b", // Orange
      desc: "Building full-stack applications using MongoDB, Express, React, and Node.js with real-world features like authentication and APIs.",
      logo: "/flutter.svg"
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="expertise" className='bg-[#19181c] min-h-screen flex flex-col items-center relative py-24 overflow-hidden'>
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#66d9ed]/5 blur-[120px] pointer-events-none rounded-full" />

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-6xl md:text-[80px] text-center text-white hero-title mb-16 z-10'
      >
        My <span className='text-[#66d9ed]'>Expertise</span>
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center gap-8 z-10 px-6'
      >
        {data.map((item) => (
          <motion.div 
            key={item.id} 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className='relative group border-[#2a2a2e] border-2 w-full sm:w-[380px] h-[400px] flex flex-col px-10 justify-center bg-[#1e1e22]/50 backdrop-blur-sm rounded-2xl overflow-hidden'
          >
            {/* Hover Glow Effect */}
            <div 
              style={{ backgroundColor: item.color }} 
              className="absolute -bottom-20 -right-20 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            />

            <div className='flex items-start gap-5 mb-6'>
              <motion.img 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className='h-12 w-12 object-contain' 
                src={item.logo} 
                alt="" 
              />
              <h1 className="text-[28px] font-bold leading-tight text-white uppercase tracking-tight">
                <span className="relative z-10 inline-block">
                  {item.heading}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ backgroundColor: item.color }}
                    className="absolute left-0 bottom-1 w-full h-2 z-[-1] opacity-70"
                  ></motion.span>
                </span>
                <br />
                <span className='opacity-80'>{item.heading2}</span>
              </h1>
            </div>

            <div className="text-gray-300 font-mono">
              <span className="text-gray-600 text-sm">&lt;p&gt;</span>
              <div className="border-l-2 roboto-mono-500 border-gray-700 ml-3 pl-4 my-3 text-base leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors">
                {item.desc}
              </div>
              <span className="text-gray-600 text-sm">&lt;/p&gt;</span>
            </div>

            {/* Bottom Accent Line */}
            <div 
              style={{ backgroundColor: item.color }}
              className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Background Code Image with subtle floating animation */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className='mt-12 opacity-10 grayscale invert'
      >
        <img className='h-64' src="/code.png" alt="" />
      </motion.div>
    </section>
  );
};

export default Experties;