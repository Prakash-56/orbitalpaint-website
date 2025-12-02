"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoursesPage() {
  return (
    <section className="pt-40 pb-40 px-6 md:px-16 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-12 drop-shadow-xl"
      >
        Explore Our Courses
      </motion.h1>

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto text-lg text-white/90 mb-14"
      >
        Learn industry-level skills with beautifully structured courses, hands-on training, 
        and real-world experience. New modules are being designed—stay tuned!
      </motion.p>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Course Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl p-6 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-3">Aircraft Painting Basics</h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Learn the fundamentals of aircraft painting—from surface preparation
            to final coating techniques used in aviation industries.
          </p>
        </motion.div>

        {/* Course Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl p-6 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-3">Surface Preparation</h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Master sanding, chemical cleaning, masking, degreasing, and corrosion
            removal to ensure flawless painting results.
          </p>
        </motion.div>

        {/* Course Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl p-6 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-3">Safety & Tools</h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Learn airbrush handling, PPE usage, spraying techniques, paint booth
            operations, and safe industrial painting practices.
          </p>
        </motion.div>

        {/* Course Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl p-6 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-3">Quality Inspection</h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Understand defect analysis, layer thickness measurement, finishing
            quality checks, and industry-level inspection methods.
          </p>
        </motion.div>

      </div>

      {/* Certificate Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">Certificates</h2>
        <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg mb-10">
          Every completed course comes with industry-recognized certification  
          that helps students qualify for real industrial and aviation jobs.
        </p>

        {/* Coming Soon Bubble */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="px-10 py-4 bg-white text-pink-600 text-xl font-bold rounded-full inline-block shadow-2xl"
        >
          Coming Soon 🚀
        </motion.div>
      </motion.div>

    </section>
  );
}
