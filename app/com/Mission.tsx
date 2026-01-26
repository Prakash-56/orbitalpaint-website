"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative flex items-center justify-start h-[550px] md:h-[650px] bg-cover bg-center bg-no-repeat px-6 md:px-16 overflow-hidden"
      style={{ backgroundImage: "url('/mission-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Ambient Glow */}
      <div className="absolute -left-40 top-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* 3D Animated Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          rotateX: 15,
          rotateY: -10,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        whileHover={{
          rotateX: -3,
          rotateY: 3,
          scale: 1.02,
        }}
        className="relative max-w-3xl bg-[#0b2a55]/80 backdrop-blur-xl p-10 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Light Sweep */}
        <motion.div
          initial={{ x: "-120%" }}
          whileInView={{ x: "120%" }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Title */}
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold mb-4 text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transform: "translateZ(40px)" }}
        >
          Our Mission
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-24 h-[3px] bg-yellow-400 mb-6 origin-left"
        />

        {/* Description */}
        <motion.p
          className="relative text-white text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transform: "translateZ(25px)" }}
        >
          At <span className="text-yellow-400 font-semibold">OrbitalPaint Solutions</span>, 
          our mission is to deliver <strong>flawless paint inspection</strong> and 
          <strong> surface integrity solutions</strong> for aerospace and defense industries. 
          We ensure every coating meets the highest standards of quality, safety, and precision.
        </motion.p>

        {/* Floating Effect */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-6 w-20 h-20 border border-yellow-400/30 rounded-xl"
        />
      </motion.div>
    </section>
  );
}
