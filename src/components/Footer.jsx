import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- Functional: Smooth Scroll Handler ---
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/MuhmmadMuneeb" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/muhamad-muneeb" },
    { icon: <FaTwitter />, href: "https://twitter.com/yourusername" },
    { icon: <FaInstagram />, href: "https://instagram.com/chmuneeb747" },
  ];

  return (
    <footer className="relative bg-[#0c0c0e] pt-20 pb-10 overflow-hidden">
      {/* 🌌 Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#66d9ed]/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#66d9ed]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* 🚀 Brand & Motto */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* Added Logo Integration */}
              <h2 className="text-3xl font-bold text-white tracking-tighter">
                <span className="text-[#66d9ed]">Muneeb</span>
                <span className="text-[#bb78ff]">.</span>
              </h2>
            </div>
            <p className="text-gray-400 roboto-mono-500 text-sm leading-relaxed max-w-xs">
              Building digital experiences that combine technical precision with creative design. Available for worldwide collaborations.
            </p>
          </div>

          {/* 🔗 Quick Navigation - Functional Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#66d9ed] uppercase tracking-[0.3em] text-xs font-bold">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm roboto-mono-500">
              {['home', 'expertise', 'work', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleScroll(e, `#${item}`)}
                    className="hover:text-white transition-colors cursor-pointer capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 📮 Newsletter/Contact Teaser - Functional Mailto */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#bb78ff] uppercase tracking-[0.3em] text-xs font-bold">Get In Touch</h3>
            <p className="text-gray-400 text-sm">Have a project in mind? Let's build it together.</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              
              className="bg-white text-black py-3 px-6 rounded-lg font-bold text-center text-xs uppercase tracking-widest hover:bg-[#66d9ed] transition-all cursor-pointer block"
            >
              Start a Conversation
            </motion.a>
          </div>
        </div>

        {/* 📱 Socials & Copyright - Functional External Links */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer" // Security best practice
                whileHover={{ y: -5, color: "#66d9ed" }}
                className="text-gray-500 text-xl transition-colors cursor-pointer"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              Designed & Developed by Muneeb © {currentYear}
            </p>
            <p className="text-white/10 text-[8px] roboto-mono-500">
              Built with React • Framer Motion • Tailwind v4
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;