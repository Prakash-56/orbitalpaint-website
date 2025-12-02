"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";


export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-40 pb-20 bg-gradient-to-b from-[#03224c] to-[#08306b] text-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-8">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-lg space-y-6 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-300">Welcome to OrbitalPaint Solutions</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Redefining Aerospace & Defence Coating Excellence.
          </motion.p>

          {/* CTA Buttons */}
<motion.div
  className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 1 }}
>
  <a
    href="#contact"
    className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition"
  >
    Get Started
  </a>

  <Link
    href="/courses"
    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-center"
  >
    View Courses
  </Link>
</motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-6 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.a
              href="https://www.linkedin.com/company/110197057/admin/dashboard/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-700"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://x.com/OrbitalPaint?t=Kv3C9C29dGMnVAWSGrgWMg&s=09"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-400"
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - Logo + Slogan */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="OrbitalPaint Logo"
            width={250}
            height={250}
            className="drop-shadow-xl"
          />

          {/* Animated Slogan */}
          <div className="mt-6 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide flex flex-wrap justify-center md:justify-center gap-2">
            <motion.span
              className="text-blue-300"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Precision.
            </motion.span>
            <motion.span
              className="text-green-400"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              Performance.
            </motion.span>
            <motion.span
              className="text-yellow-400"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              Perfection
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}