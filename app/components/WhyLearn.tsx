"use client";

import { motion } from "framer-motion";
import {
  CheckCircle, BookOpen, Plane, Shield, Users, Briefcase, Cpu, Award
} from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Industry-Led Curriculum",
    desc: "Designed by aerospace painting professionals with hands-on MRO & OEM experience.",
  },
  {
    icon: BookOpen,
    title: "Real Aircraft Environment Training",
    desc: "Train with actual spray-painting tools, paint booths, and inspection systems used in aerospace.",
  },
  {
    icon: Shield,
    title: "Defence-Grade Standards",
    desc: "Training aligned with AS9100 and NADCAP quality guidelines.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    desc: "Learn directly from senior aircraft painters and coating engineers with years of experience.",
  },
  {
    icon: Briefcase,
    title: "Career-Focused Learning",
    desc: "Get prepared for jobs in Airlines, Defence Coating Facilities & Global MRO companies.",
  },
  {
    icon: Cpu,
    title: "Digital Learning Support",
    desc: "Access online modules, simulators, and digital checklists via our learning portal.",
  },
  {
    icon: CheckCircle,
    title: "AI-Powered Assistance",
    desc: "Analyze paint defects, simulate results & improve through AI-based insights.",
  },
  {
    icon: Award,
    title: "Certification Support",
    desc: "Industry-recognized certification with interview training & placement help.",
  }
];

export default function WhyLearn() {
  return (
    <section
      id="why-learn"
      className="py-24 bg-gradient-to-b from-[#021a35] to-[#06254a] text-center text-white"
    >

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold mb-6"
      >
        Why Learn with <span className="text-yellow-400">Orbital Paint Solution?</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-lg md:text-xl opacity-80 mb-16 max-w-3xl mx-auto"
      >
        A premium aerospace painting training experience designed to build real industry skills.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
            whileHover={{
              scale: 1.08,
              rotateX: 4,
              rotateY: 4,
              boxShadow: "0px 25px 50px rgba(255, 223, 95, 0.25)"
            }}
            className="bg-[#0c2a59]/70 border border-white/10 backdrop-blur-md rounded-2xl p-8 
              shadow-xl transition-all cursor-pointer hover:border-yellow-400 hover:bg-[#10376d]"
          >
            <item.icon className="w-14 h-14 text-yellow-400 mx-auto mb-5 animate-pulse" />
            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-sm opacity-80">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="mt-16 flex justify-center gap-6"
      >
        <a
          href="/apply"
          className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-medium
          hover:bg-yellow-400 hover:text-black transition-all"
        >
          Apply for Training
        </a>
        <a
          href="/brochure"
          target="_blank"
          className="px-8 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition-all"
        >
          Download Brochure
        </a>
      </motion.div>

    </section>
  );
}
