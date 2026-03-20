import React from 'react'
import Crausal from './Crausal'
import Sun from './Sun'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <section className="relative bg-[url('/hero.jpg')] w-full h-screen bg-cover bg-[center_40%] bg-no-repeat">
      <motion.div
        className='absolute left-[55%] top-28'
        initial={{ x: '-50%' }}
        animate={{ x: ['-60%', '-40%', '-60%'] }} 
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sun />
      </motion.div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className='text-[154px] text-white hero-title mb-5 uppercase'>
          Muneeb
        </h1>

        <p className='roboto-mono-500 text-2xl text-white tracking-[2.2px] uppercase'>
          MERN Developer, Front end & Backend Developer.
        </p>
      </div>

      <div className="absolute bottom-0 w-full">
        <Crausal />
      </div>

    </section>
  )
}

export default Hero