import React from 'react'

const Work = () => {
    return (
        <section className='bg-[#19181c] h-screen flex justify-around '>
            <div>
                <h1 className='text-8xl font-extrabold hero-title leading-32'>My <br /> Work</h1>
                <p className='roboto-mono-500 tracking-wide text-2xl font-bold text-white w-[500px]'>Intermediate MERN Stack Developer experienced in building responsive web applications using React, Node.js, Express, and MongoDB, with a focus on performance, usability, and modern UI/UX.</p>
            </div>
            <div className='w-1/2'>
                <video
                    src="./out.webm"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className=" h-full object-cover"
                />
            </div>
        </section>
    )
}

export default Work
