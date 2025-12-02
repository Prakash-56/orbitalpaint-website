"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#03224c] to-[#08306b] text-white items-center justify-center p-6">

      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Contact 
        </motion.h1>

        <motion.p
          className="text-xl leading-relaxed font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          📞 <span className="font-semibold">+91 8523817445</span> <br />
          ✉️ <span className="font-semibold">connect@orbitalpaintsolutions.com</span>
        </motion.p>

        <motion.div
          className="mt-10 text-lg font-medium opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          We will provide the brochure soon. Stay connected with us! 🚀
        </motion.div>
      </motion.div>
    </div>
  );
}
