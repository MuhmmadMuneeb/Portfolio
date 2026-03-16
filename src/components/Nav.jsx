import React from 'react'

const Nav = () => {
  return (
    <div className='absolute w-full'>

      <nav className='flex items-center  relative z-10 px-10 h-24'>
        <h1 className='text-3xl  text-white'><span className='text-[#66d9ed] font-space'>TamalSen</span>. <span className='text-[#bb78ff]'>_</span></h1>
        <div className='absolute left-[30%]'>
          <ul className='flex justify-around items-center [&>li]:roboto-mono-500 [&>li>span]:text-[#bcbfc2] [&>span]:apple-system-500 [&>li>span]:text-xs [&>li>span]:absolute  [&>li>span]:-right-2 [&>li>span]:-top-2 [&>li]:relative gap-10 [&>li]:text-white [&>li]:text-[20px] [&>li]:cursor-pointer [&>li]:hover:text-[#66d9ed] '>
            <li>// home <span className=''>01</span></li>
            <li>// expertise <span>02</span></li>
            <li>// work <span>03</span></li>
            <li>// experience <span>04</span></li>
            <li>// contact <span>05</span></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
