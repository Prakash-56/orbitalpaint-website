"use client";

import { motion } from "framer-motion";
import { FaFilePdf, FaArrowDown } from "react-icons/fa";

export default function BrochurePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#03224c] to-[#08306a] text-white px-4 py-20 relative overflow-hidden">
      
      {/* Animated Background Orbits */}
      <div className="absolute top-0 right-0 w-96 h-96 border-4 border-blue-500 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 border-4 border-purple-500 rounded-full opacity-20 animate-ping-slow"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-2xl"
      >
        <FaFilePdf className="mx-auto text-6xl mb-6 text-red-500 animate-bounce" />
        <h2 className="text-4xl md:text-5xl font-bold mb-4">📄 Download Brochure</h2>
        <p className="text-lg md:text-xl mb-8">
          Our detailed brochure for OrbitalPaint Solutions training is coming soon!  
          Stay tuned for hands-on workshops, industry experts, and certifications.
        </p>

        {/* Download Button (disabled for now, can enable later) */}
        <button
          className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition cursor-not-allowed"
        >
          <FaArrowDown /> Download PDF
        </button>

        {/* Optional Email Notification */}
        <p className="mt-6 text-sm text-gray-300">
          We will provide it soon. Stay connected with us !
          Your application for training may prompt us to work faster.
        </p>
      </motion.div>

      {/* Floating Dots */}
      <div className="absolute top-10 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce-slow opacity-50"></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-blue-400 rounded-full animate-bounce-slow opacity-40"></div>
    </section>
  );
}
