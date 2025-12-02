"use client";
import { motion } from "framer-motion";
import { Paintbrush, ShieldCheck, Cpu, GraduationCap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Aerospace Painting Training",
      desc: "Hands-on industrial training with certified instructors and real aircraft structures.",
      icon: <Paintbrush className="w-12 h-12 text-yellow-400 mb-4" />,
    },
    {
      title: "Advanced Coating & Surface Protection",
      desc: "High-performance coating solutions ensuring corrosion prevention and longevity.",
      icon: <ShieldCheck className="w-12 h-12 text-yellow-400 mb-4" />,
    },
    {
      title: "Quality Inspection & NDT Training",
      desc: "Learn surface defect detection, inspection tools, measurement accuracy, and NDT basics.",
      icon: <GraduationCap className="w-12 h-12 text-yellow-400 mb-4" />,
    },
    {
      title: "Digital Paint Process Monitoring",
      desc: "Smart AI-based coating analytics, process tracking, and digital compliance systems.",
      icon: <Cpu className="w-12 h-12 text-yellow-400 mb-4" />,
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#061A33] text-center text-white mb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-14 text-yellow-400 drop-shadow-lg"
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.08, rotateX: 5, rotateY: 5 }}
            className="bg-[#0C2A59]/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 
            border border-white/10 hover:border-yellow-400 transform transition"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold mt-3 mb-2">{service.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
