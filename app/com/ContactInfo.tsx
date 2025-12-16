"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section
      id="contactinfo"
      className="py-20 scroll-mt-24 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto bg-[#061A33] text-white rounded-2xl p-10 shadow-2xl"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Contact Us
        </motion.h2>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl p-6"
          >
            <MapPin className="text-yellow-400 w-12 h-12 mb-3" />
            <p className="text-lg font-medium">Hyderabad, India</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl p-6"
          >
            <Phone className="text-yellow-400 w-12 h-12 mb-3" />
            <p className="text-lg font-medium">+91 8523817445</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl p-6"
          >
            <Mail className="text-yellow-400 w-12 h-12 mb-3" />
            <p className="text-lg font-medium break-all">
              connect@orbitalpaintsolutions.com
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
