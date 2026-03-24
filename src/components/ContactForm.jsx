import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- PASTE YOUR IDS HERE ---
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID; 
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    console.log(SERVICE_ID,TEMPLATE_ID,PUBLIC_KEY)

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
      }, () => {
        setStatus('error');
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c0e] relative overflow-hidden">
      {/* 🌌 Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#66d9ed]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#bb78ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            Let's <span className="text-[#66d9ed]">Build</span> Something.
          </motion.h2>
          <p className="text-gray-400 font-medium max-w-lg mx-auto">
            Ready to start your next project? Drop a message below and I'll get back to you within 24 hours.
          </p>
        </div>

        <form 
          ref={form} 
          onSubmit={sendEmail}
          className="grid grid-cols-1 gap-8 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div className="space-y-5">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#66d9ed] font-black ml-1 block mb-2">Full Name</label>
              <input 
                type="text" 
                name="from_name" // Matches EmailJS Template
                required 
                placeholder="John Doe"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl p-4 text-white outline-none focus:ring-2 focus:ring-[#66d9ed]/50 transition-all placeholder:text-gray-700"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#66d9ed] font-black ml-1 block mb-2">Email Address</label>
              <input 
                type="email" 
                name="reply_to" // Matches EmailJS Template
                required 
                placeholder="john@example.com"
                className="w-full bg-[#16161a] border border-white/5 rounded-2xl p-4 text-white outline-none focus:ring-2 focus:ring-[#66d9ed]/50 transition-all placeholder:text-gray-700"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#bb78ff] font-black ml-1 block mb-2">Project Details</label>
            <textarea 
              name="message" // Matches EmailJS Template
              required 
              rows="6" 
              placeholder="Tell me about your vision..."
              className="w-full bg-[#16161a] border border-white/5 rounded-2xl p-4 text-white outline-none focus:ring-2 focus:ring-[#bb78ff]/50 transition-all resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending}
            type="submit"
            className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all relative overflow-hidden group ${
              isSending ? 'bg-gray-800 text-gray-500' : 'bg-white text-black hover:bg-[#66d9ed]'
            }`}
          >
            <span className="relative z-10">{isSending ? "Sending..." : "Deploy Message"}</span>
          </motion.button>

          {/* Status Feedback */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0 }}
                className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 text-center text-sm font-bold"
              >
                ✓ Message delivered successfully.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-400 text-center text-sm font-bold"
              >
                ✕ Error sending message. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;