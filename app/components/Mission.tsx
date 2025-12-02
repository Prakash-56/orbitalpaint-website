"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative flex items-center justify-start h-[550px] md:h-[650px] bg-cover bg-center bg-no-repeat px-6 md:px-16"
      style={{ backgroundImage: "url('/mission-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Card - Left Aligned */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-3xl bg-[#0b2a55]/80 backdrop-blur-md p-10 rounded-2xl shadow-xl"
        style={{ marginLeft: "0" }} // You can adjust left spacing here
      >
        {/* Title Animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          className="text-white text-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          At OrbitalPaint Solutions, our mission is to provide “flawless paint
          inspection” and “surface integrity solutions” for aerospace and defense
          industries. We ensure that every coating meets the highest standards of
          quality, safety, and precision.
        </motion.p>
      </motion.div>
    </section>
  );
}
