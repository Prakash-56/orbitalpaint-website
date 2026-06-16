"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const courses = [
  {
    title: "Aircraft Painting & Coating Technology",
    desc: "Professional-grade aerospace painting with hands-on spray booth training.",
    key: "AircraftPainting",
    icon: "",
    accent: "#FFD700",
    glow: "rgba(255,215,0,0.35)",
    tag: "Core Skill",
  },
  {
    title: "Surface Preparation & Treatment",
    desc: "Master sanding, masking, chemical treatment & defect removal techniques.",
    key: "SurfacePrep",
    icon: "",
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.35)",
    tag: "Hands-On",
  },
  {
    title: "Aerospace Coating Quality Inspection",
    desc: "Dry film thickness, gloss measurement, adhesion testing & defect analysis.",
    key: "QualityInspection",
    icon: "",
    accent: "#A78BFA",
    glow: "rgba(167,139,250,0.35)",
    tag: "Technical",
  },
  {
    title: "Aerospace Safety & Hazard Management",
    desc: "PPE protocols, spray booth safety, and international regulatory procedures.",
    key: "SafetyTraining",
    icon: "",
    accent: "#34D399",
    glow: "rgba(52,211,153,0.35)",
    tag: "Compliance",
  },
];

/* ── 3-D tilt card ── */
function TiltCard({
  course,
  index,
}: {
  course: (typeof courses)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 260, damping: 22 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-14, 14]), springConfig);
  const glareX = useSpring(useTransform(rawX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(rawY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onClick={() => alert(`Opening course: ${course.key}`)}
      initial={{ opacity: 0, y: 60, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 900,
        cursor: "pointer",
      }}
      className="relative group"
    >
      {/* Outer glow bloom */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1.12 : 0.9,
        }}
        transition={{ duration: 0.4 }}
        style={{ background: course.glow }}
        className="absolute inset-0 rounded-2xl blur-2xl pointer-events-none"
      />

      {/* Card shell */}
      <motion.div
        animate={{
          boxShadow: hovered
            ? `0 30px 80px -10px ${course.glow}, 0 0 0 1.5px ${course.accent}55`
            : "0 8px 32px -8px rgba(0,0,0,0.6)",
        }}
        transition={{ duration: 0.35 }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(10,30,60,0.92) 0%, rgba(5,18,40,0.97) 100%)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: `1.5px solid ${hovered ? course.accent + "88" : "rgba(255,255,255,0.07)"}`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glare layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.10) 0%, transparent 65%)`
            ),
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Accent top strip */}
        <motion.div
          className="h-1 w-full"
          style={{ background: course.accent }}
          animate={{ scaleX: hovered ? 1 : 0.3, originX: 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="p-7 pt-6" style={{ transformStyle: "preserve-3d" }}>
          {/* Tag */}
          <motion.span
            className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5"
            style={{
              background: `${course.accent}22`,
              color: course.accent,
              border: `1px solid ${course.accent}44`,
            }}
            animate={{ opacity: hovered ? 1 : 0.7 }}
          >
            {course.tag}
          </motion.span>

          {/* Icon — floats on the z-axis */}
          <motion.div
            className="text-5xl mb-5 select-none"
            animate={{
              y: hovered ? -6 : 0,
              scale: hovered ? 1.15 : 1,
            }}
            style={{ display: "inline-block", transform: "translateZ(28px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            {course.icon}
          </motion.div>

          {/* Title */}
          <h3
            className="text-white font-bold text-lg leading-snug mb-3"
            style={{ transform: "translateZ(16px)" }}
          >
            {course.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "rgba(180,200,230,0.75)",
              transform: "translateZ(8px)",
            }}
          >
            {course.desc}
          </p>

          {/* CTA */}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Floating particle ── */
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -30, 0], opacity: [0.18, 0.55, 0.18] }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  );
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  style: {
    width: Math.random() * 5 + 2,
    height: Math.random() * 5 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    background: ["#FFD700", "#38BDF8", "#A78BFA", "#34D399"][i % 4],
  } as React.CSSProperties,
}));

/* ── Main section ── */
const Courses: React.FC = () => {
  return (
    <section
      id="courses"
      className="relative py-24 px-4 bg-cover bg-center bg-no-repeat min-h-[760px] mb-20 overflow-hidden"
      style={{ backgroundImage: "url('/courses-bg.jpg')" }}
    >
      {/* Deep overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Atmospheric grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(255,215,0,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center text-xs font-bold tracking-[0.28em] uppercase mb-5"
          style={{ color: "rgba(255,215,0,0.7)" }}
        >
          Certified Training Programs
        </motion.p>

        {/* Heading with animated underline */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <h2 className="text-yellow-400 text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
            Courses We Offer
          </h2>
          <motion.div
            className="mx-auto mt-4 h-[3px] rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #FFD700, transparent)" }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "180px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          />
          <motion.p
            className="mt-5 text-base max-w-xl mx-auto"
            style={{ color: "rgba(180,200,230,0.7)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Industry-aligned modules covering every stage of aerospace surface treatment - from raw
            metal to certified finish.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0"
          style={{ perspective: "1200px" }}
        >
          {courses.map((course, i) => (
            <TiltCard key={course.key} course={course} index={i} />
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;