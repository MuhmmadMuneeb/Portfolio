import { section } from 'framer-motion/client'
import React from 'react'

const Experties = () => {
  const data = [
  {
    id: 1,
    heading: "Backend",
    heading2: " Development",
    underlineColor: "#de048b",
    desc: "Experience building REST APIs using Node.js and Express, working with MongoDB, authentication (JWT), and server-side logic.",
    logo: "./pc.svg"
  },
  {
    id: 2,
    heading: "Frontend Dev",
    heading2: " React.js",
    underlineColor: "#2b48d9",
    desc: "Skilled in creating responsive user interfaces using React, Tailwind CSS, and modern JavaScript with focus on clean UI and UX.",
    logo: "./react.svg"
  },
  {
    id: 3,
    heading: "Full Stack",
    heading2: " MERN",
    underlineColor: "#ff6b2b",
    desc: "Building full-stack applications using MongoDB, Express, React, and Node.js with real-world features like authentication and APIs.",
    logo: "./flutter.svg"
  },
]

  return (
    <section className='bg-[#19181c] min-h-screen flex flex-col  items-center relative py-16'>
      <h1 className='text-[80px] text-center text-white hero-title mb-5'>My Experties</h1>
      <div className='flex justify-center items-center' >
        {data.map((item) => (
          <div key={item.id} className='border-[#a3a3a3] border-2 w-[400px] h-[350px] flex flex-col px-10  justify-center'>
            <div className='flex  gap-5'>
              <img className='h-11' src={`${item.logo}`} alt="" />
              <h1 className="text-[30px] font-poppins font-bold leading-none text-white mb-5">
                <span className="relative z-10 inline-block">
                  {item.heading}
                  <span
                    style={{ backgroundColor: item.underlineColor }}
                    className="absolute left-0 bottom-0 w-full h-2 z-[-1]"
                  ></span>
                </span>
                <br />
                {item.heading2}

              </h1>
            </div>
            <div>
              <div className="text-gray-300 font-mono max-w-md">
                <span className="text-gray-500">&lt;h3&gt;</span>
                <div className="border-l  roboto-mono-500  w-2xs border-gray-500 ml-3 pl-4 my-2">
                  {item.desc}
                </div>
                <span className="text-gray-500">&lt;/h3&gt;</span>

              </div>
            </div>
          </div>
        ))}

      </div>
      <div className='relative bottom-7  '>
        <img className='h-80 opacity-20' src="/code.png" alt="" />
      </div>
    </section>
  )
}

export default Experties
