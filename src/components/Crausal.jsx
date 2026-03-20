import React, { useRef, useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Crausal = () => {

  const data = [
    { id: 1, path: "/career.svg" },
    { id: 2, path: "/colorlib.svg" },
    { id: 3, path: "/masai.svg" },
    { id: 4, path: "/upwork.svg" },
    { id: 5, path: "/hostinger.svg" },
    { id: 6, path: "/frontend.svg" },
  ]

  const loopData = [...data, ...data]

  const sliderRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const slider = sliderRef.current

    const interval = setInterval(() => {
      if (!isHovered && slider) {
        slider.scrollLeft += 0.5   // 🔥 slower speed (smooth)
      }

      // infinite loop reset
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0
      }

    }, 20) // lower interval = smoother

    return () => clearInterval(interval)
  }, [isHovered])

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" })
  }

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" })
  }

  return (
    <div className=" py-12 flex justify-center">

      <div className="relative w-[800px]">
        <h1 className="text-center font-bold text-2xl text-white">As featured in</h1>
        {/* SLIDER */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-10 overflow-x-scroll no-scrollbar"
        >

          {loopData.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center min-w-[150px] h-24"
            >
              <img
                src={item.path}
                alt="logo"
                className="h-10 cursor-pointer object-contain opacity-60 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Crausal