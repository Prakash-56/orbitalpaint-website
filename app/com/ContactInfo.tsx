"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#061A33] text-white rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <MapPin className="text-yellow-400 w-10 h-10 mb-2" />
            <p className="text-lg font-medium">Hyderabad, India</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Phone className="text-yellow-400 w-10 h-10 mb-2" />
            <p className="text-lg font-medium">+91 8523817445</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <Mail className="text-yellow-400 w-10 h-10 mb-2" />
            <p className="text-lg font-medium">connect@orbitalpaintsolutions.com</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
