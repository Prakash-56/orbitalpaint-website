"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Wrench, Layers, FileText, FlaskRound } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Industrial & Protective Coatings",
    description:
      "High-performance protective coatings for industrial machinery and structures ensuring corrosion and chemical resistance.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Aerospace / Defense Coating Solutions",
    description:
      "Specialized aerospace coatings complying with global standards such as AS9100, Aeroglaze, CARC, Epoxy & Polyurethane systems.",
  },
  {
    icon: <Wrench size={32} />,
    title: "Structural & Infrastructure Coatings",
    description:
      "Coating and surface engineering for steel structures, pipelines, bridges, marine assets, and power plant components.",
  },
  {
    icon: <Layers size={32} />,
    title: "Sandblasting / Surface Preparation",
    description:
      "Professional sandblasting, abrasive blasting, and surface cleaning for superior coating performance and adhesion.",
  },
  {
    icon: <FileText size={32} />,
    title: "Consultancy & Training",
    description:
      "Technical consultancy, BOM creation, coating selection, custom training modules, and industrial painting support.",
  },
  {
    icon: <FlaskRound size={32} />,
    title: "Testing & Quality Assurance",
    description:
      "Coating thickness, adhesion testing, salt-spray testing, and full QA documentation for industrial and aerospace needs.",
  },
];

export default function WhatWeDoAnimated() {
  return (
    <section id="what we do" className="relative py-20 bg-gradient-to-b from-[#f0f4f8] to-[#f8f9fc] overflow-hidden">
      {/* Orbit Circle Animation */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] border-4 border-blue-200 rounded-full animate-spin-slow opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-[#03224c] mb-6"
        >
          What We Offer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Delivering world-class industrial and aerospace surface engineering solutions backed by advanced technology,
          quality control, and expert engineering.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition cursor-pointer relative"
            >
              {/* Floating Icon Animation */}
              <motion.div
                className="text-[#03224c] mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-[#03224c] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
