import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[url('/hero.jpg')] w-screen h-screen bg-cover  bg-[center_40%] bg-no-repeat flex justify-center items-center">
      <div>
        <h1 className='text-[154px] text-center text-white hero-title mb-5'>Tamal Sen</h1>
        <p className='roboto-mono-500 text-center text-2xl text-white leading-5 tracking-[2.2px] uppercase'>MERN Developer, Front end & Backend Developer.</p>
      </div>
        
    </section>
  )
}

export default Hero
