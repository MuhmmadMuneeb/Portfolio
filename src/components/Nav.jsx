import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "home", id: "home" },
    { name: "expertise", id: "expertise" },
    { name: "work", id: "work" },
    { name: "about me", id: "about" },
    { name: "contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Mobile click handler
  const handleMobileClick = (id) => {
    setOpen(false); 
    setTimeout(() => scrollToSection(id), 200); 
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex justify-between items-center relative z-20 px-5 md:px-10 h-20 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/20 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <motion.h1 className="text-2xl md:text-3xl text-white font-bold">
          <span className="text-[#66d9ed]">Muneeb</span>.
          <span className="text-[#bb78ff]">_</span>
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <motion.ul className="flex flex-row gap-10 items-center">
            {navLinks.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative roboto-mono-500 text-white text-[16px] uppercase tracking-wider cursor-pointer hover:text-[#66d9ed] transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
                <span className="text-[#bcbfc2] text-[10px] absolute -right-4 -top-1">
                  0{i + 1}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#66d9ed] transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden text-white text-3xl cursor-pointer z-30"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-2xl w-full overflow-hidden z-25"
          >
            <ul className="flex flex-col gap-6 px-10 py-10 text-white">
              {navLinks.map((item, i) => (
                <li
                  key={i}
                  className="text-2xl uppercase font-bold hover:text-[#66d9ed] cursor-pointer"
                  onClick={() => handleMobileClick(item.id)}
                >
                  <span className="text-[#bcbfc2] text-sm">0{i + 1}.</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;