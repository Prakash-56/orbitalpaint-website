"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#E5E7EB] text-center">
      <h2 className="text-4xl font-bold mb-4 text-[#0A1F44]">About Us</h2>
      <p className="max-w-3xl mx-auto text-[#1F2937] text-lg mb-8">
        OrbitalPaint Solutions is a modern Aerospace and Defence coating technology company focused on improving surface protection, performance, and precision for aircraft, spacecraft, and valuable defense assets. We started with a goal to raise global aerospace standards. Our expertise includes coating systems, corrosion protection, paint defect diagnosis, repair solutions, and performance-focused surface engineering.

We are dedicated to innovation and quality. We provide advanced material science, AI-supported coating inspection, robotic application technology, and eco-friendly aerospace coatings. These products ensure durability, safety, and mission readiness in challenging operating conditions.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/about-page">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border-2 border-[#1e40af] text-[#1e40af] text-lg font-medium hover:bg-[#1e40af] hover:text-white transition-all"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
