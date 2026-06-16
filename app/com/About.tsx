"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Animated counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  return (
    <motion.span ref={ref} style={{ display: "inline-block" }}>
      {display}
    </motion.span>
  );
}

/* ─── 3D Tilt Card ─── */
function TiltCard({
  icon,
  title,
  front,
  back,
  delay,
}: {
  icon: string;
  title: string;
  front: string;
  back: string;
  delay: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || flipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const tiltX = ((y - cy) / cy) * 12;
    const tiltY = ((cx - x) / cx) * 12;
    cardRef.current.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      style={{ perspective: "800px" }}
      className="about-card-wrapper"
    >
      <div
        ref={cardRef}
        className={`about-card ${flipped ? "flipped" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setFlipped((f) => !f)}
        style={{ transition: "transform 0.3s ease" }}
      >
        <div className="about-card-inner">
          {/* Front */}
          <div className="about-card-face about-card-front">
            <div className="about-card-icon">{icon}</div>
            <h3 className="about-card-title">{title}</h3>
            <p className="about-card-text">{front}</p>
            <span className="about-card-flip-hint">Tap to reveal →</span>
          </div>
          {/* Back */}
          <div className="about-card-face about-card-back">
            <h3 className="about-card-title" style={{ marginBottom: "12px" }}>{title}</h3>
            <p className="about-card-text">{back}</p>
            <span className="about-card-flip-hint">← Tap to go back</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Orbital sphere ─── */
function OrbitalSphere() {
  return (
    <div className="orb-scene">
      <div className="orb-globe">
        {[0, 30, 60, 90, 120, 150].map((deg) => (
          <div
            key={deg}
            className="orb-meridian"
            style={{ transform: `rotateY(${deg}deg)` }}
          />
        ))}
        {[-60, -30, 0, 30, 60].map((deg) => (
          <div
            key={deg}
            className="orb-parallel"
            style={{ transform: `rotateX(${deg}deg)` }}
          />
        ))}
        <div className="orb-core" />
      </div>
      <div className="orb-ring orb-ring-1">
        <div className="orb-dot orb-dot-cyan" />
      </div>
      <div className="orb-ring orb-ring-2">
        <div className="orb-dot orb-dot-indigo" />
      </div>
      <div className="orb-ring orb-ring-3">
        <div className="orb-dot orb-dot-navy" />
      </div>
    </div>
  );
}

const cards = [
  {
    icon: "🛡️",
    title: "Corrosion Protection",
    front: "Military-grade barrier coatings that defend airframes against oxidation, humidity, and chemical attack in extreme environments.",
    back: "Our multi-layer epoxy-polyurethane systems exceed MIL-PRF-85285 standards, extending service life by up to 40% in salt-fog testing at 2000+ hours.",
  },
  {
    icon: "🤖",
    title: "Robotic Application",
    front: "Precision robotic coating arms deliver consistent film thickness across complex aerospace geometries with zero human error.",
    back: "Sub-micron thickness control via laser feedback loops. Our KUKA-integrated cells handle fuselage panels, turbine housings, and radomes at production speed.",
  },
  {
    icon: "🔬",
    title: "AI Inspection",
    front: "Computer vision systems trained on 500k+ defect samples detect coating anomalies invisible to the human eye.",
    back: "Real-time delamination, pinhole, and fish-eye detection at 4K resolution. Inspection reports generated in under 90 seconds per panel.",
  },
  {
    icon: "🌿",
    title: "Eco Coatings",
    front: "Chrome-free, low-VOC formulations that meet REACH and ECHA directives without sacrificing aerospace-grade performance.",
    back: "Water-borne basecoats with biopigments and UV-cured topcoats. Carbon footprint reduced by 62% versus solvent-borne conventional systems.",
  },
];

const stats = [
  { value: 98,  suffix: "%",  label: "Defect Detection Accuracy" },
  { value: 40,  suffix: "%",  label: "Extended Service Life" },
  { value: 62,  suffix: "%",  label: "Lower Carbon Footprint" },
  { value: 500, suffix: "k+", label: "Training Data Samples" },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=Inter:wght@300;400;500;600&display=swap');

        /* ── Section — original background preserved ── */
        #about {
          background: #E5E7EB;
          color: #0A1F44;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          position: relative;
          padding: 100px 24px 80px;
        }

        /* ── Subtle grid overlay for texture ── */
        #about::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(10,31,68,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,31,68,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Glow blobs — toned for light bg ── */
        .about-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .about-blob-1 {
          width: 500px; height: 500px;
          background: rgba(79,70,229,0.12);
          top: -150px; right: -100px;
          animation: blob-pulse 8s ease-in-out infinite alternate;
        }
        .about-blob-2 {
          width: 350px; height: 350px;
          background: rgba(6,182,212,0.10);
          bottom: -80px; left: -80px;
          animation: blob-pulse 10s ease-in-out infinite alternate-reverse;
        }
        @keyframes blob-pulse {
          from { transform: scale(1) translate(0,0); }
          to   { transform: scale(1.15) translate(20px, 30px); }
        }

        /* ── Layout ── */
        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .about-hero {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 64px;
          align-items: center;
          margin-bottom: 80px;
        }

        /* ── Eyebrow ── */
        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .about-eyebrow-pill {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4F46E5;
          font-weight: 600;
          font-family: 'Orbitron', sans-serif;
          background: rgba(79,70,229,0.1);
          border: 1px solid rgba(79,70,229,0.3);
          padding: 4px 12px;
          border-radius: 100px;
        }
        .about-eyebrow-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(79,70,229,0.4), transparent);
        }

        /* ── Heading ── */
        .about-heading {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(28px, 4vw, 50px);
          font-weight: 900;
          line-height: 1.08;
          color: #0A1F44;
          margin: 0 0 24px;
          letter-spacing: -1px;
        }
        .about-heading-accent {
          background: linear-gradient(135deg, #4F46E5, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Body ── */
        .about-body {
          font-size: 16px;
          line-height: 1.8;
          color: #1F2937;
          margin: 0 0 36px;
          max-width: 560px;
        }

        /* ── CTA ── */
        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 100px;
          background: linear-gradient(135deg, #4F46E5, #06B6D4);
          color: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 0.5px;
        }
        .about-cta:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 36px rgba(79,70,229,0.35);
        }

        /* ─────────── Orbital Sphere ─────────── */
        .orb-scene {
          width: 320px;
          height: 320px;
          position: relative;
          margin: 0 auto;
          perspective: 800px;
        }

        .orb-globe {
          width: 200px;
          height: 200px;
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transform-style: preserve-3d;
          animation: globe-spin 20s linear infinite;
        }
        @keyframes globe-spin {
          from { transform: translate(-50%,-50%) rotateY(0deg) rotateX(15deg); }
          to   { transform: translate(-50%,-50%) rotateY(360deg) rotateX(15deg); }
        }

        .orb-meridian {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(79,70,229,0.30);
          transform-style: preserve-3d;
        }

        .orb-parallel {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.22);
          transform-style: preserve-3d;
        }

        .orb-core {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(79,70,229,0.25), rgba(6,182,212,0.10) 60%, transparent);
          box-shadow:
            0 0 40px rgba(79,70,229,0.18),
            inset 0 0 30px rgba(6,182,212,0.12);
        }

        /* Orbit rings */
        .orb-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid transparent;
          top: 50%; left: 50%;
          transform-origin: center;
        }
        .orb-ring-1 {
          width: 260px; height: 260px;
          margin: -130px 0 0 -130px;
          border-color: rgba(79,70,229,0.45);
          animation: ring-spin-1 6s linear infinite;
          transform: rotateX(70deg) rotateZ(0deg);
        }
        @keyframes ring-spin-1 {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to   { transform: rotateX(70deg) rotateZ(360deg); }
        }
        .orb-ring-2 {
          width: 300px; height: 300px;
          margin: -150px 0 0 -150px;
          border-color: rgba(6,182,212,0.35);
          animation: ring-spin-2 9s linear infinite reverse;
          transform: rotateX(50deg) rotateZ(45deg);
        }
        @keyframes ring-spin-2 {
          from { transform: rotateX(50deg) rotateZ(45deg); }
          to   { transform: rotateX(50deg) rotateZ(405deg); }
        }
        .orb-ring-3 {
          width: 320px; height: 320px;
          margin: -160px 0 0 -160px;
          border-color: rgba(10,31,68,0.12);
          animation: ring-spin-3 14s linear infinite;
          transform: rotateX(20deg) rotateZ(90deg);
        }
        @keyframes ring-spin-3 {
          from { transform: rotateX(20deg) rotateZ(90deg); }
          to   { transform: rotateX(20deg) rotateZ(450deg); }
        }

        /* Orbiting dots */
        .orb-dot {
          position: absolute;
          width: 10px; height: 10px;
          border-radius: 50%;
          top: -5px; left: 50%;
          margin-left: -5px;
        }
        .orb-dot-cyan   { background: #06B6D4; box-shadow: 0 0 10px #06B6D4; }
        .orb-dot-indigo { background: #4F46E5; box-shadow: 0 0 10px #4F46E5; }
        .orb-dot-navy   { background: #0A1F44; box-shadow: 0 0 8px rgba(10,31,68,0.4); }

        /* ─────────── Stats ─────────── */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          margin-bottom: 80px;
          background: rgba(79,70,229,0.15);
          border: 1px solid rgba(79,70,229,0.2);
          border-radius: 20px;
          overflow: hidden;
        }

        .about-stat {
          padding: 28px 20px;
          text-align: center;
          background: rgba(229,231,235,0.85);
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }
        .about-stat:hover { background: rgba(255,255,255,0.9); }
        .about-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4F46E5, #06B6D4);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .about-stat:hover::before { opacity: 1; }

        .about-stat-value {
          font-family: 'Orbitron', sans-serif;
          font-size: 36px;
          font-weight: 900;
          background: linear-gradient(135deg, #4F46E5, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          line-height: 1;
          margin-bottom: 8px;
        }

        .about-stat-label {
          font-size: 11px;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        /* ─────────── Cards ─────────── */
        .about-cards-heading {
          font-family: 'Orbitron', sans-serif;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4F46E5;
          text-align: center;
          margin-bottom: 32px;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .about-card-wrapper {
          height: 260px;
          perspective: 1000px;
          cursor: pointer;
        }

        .about-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .about-card.flipped {
          transform: perspective(800px) rotateY(180deg) !important;
        }

        .about-card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        .about-card-face {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .about-card-front {
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(79,70,229,0.2);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 24px rgba(10,31,68,0.08);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .about-card-front:hover {
          border-color: rgba(79,70,229,0.45);
          box-shadow: 0 8px 32px rgba(79,70,229,0.15);
        }

        .about-card-back {
          background: linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.10));
          border: 1px solid rgba(6,182,212,0.35);
          backdrop-filter: blur(8px);
          transform: rotateY(180deg);
        }

        .about-card-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .about-card-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #0A1F44;
          margin: 0 0 10px;
          letter-spacing: 0.5px;
        }

        .about-card-text {
          font-size: 13px;
          line-height: 1.65;
          color: #374151;
          flex: 1;
        }
        .about-card-back .about-card-text {
          color: #1F2937;
        }

        .about-card-flip-hint {
          font-size: 10px;
          color: rgba(79,70,229,0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 12px;
        }

        /* ─────────── Responsive ─────────── */
        @media (max-width: 1024px) {
          .about-hero { grid-template-columns: 1fr; }
          .orb-scene { display: none; }
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .about-stats { grid-template-columns: 1fr 1fr; }
          .about-cards-grid { grid-template-columns: 1fr; }
          .about-card-wrapper { height: auto; min-height: 220px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .orb-globe, .orb-ring-1, .orb-ring-2, .orb-ring-3,
          .about-blob-1, .about-blob-2 { animation: none; }
        }
      `}</style>

      <section id="about">
        <div className="about-blob about-blob-1" />
        <div className="about-blob about-blob-2" />

        <div className="about-inner">

          {/* ── Hero row ── */}
          <div className="about-hero">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
              <div className="about-eyebrow">
                <span className="about-eyebrow-pill">About Us</span>
                <div className="about-eyebrow-line" />
              </div>

              <h2 className="about-heading">
                Precision Coatings<br />
                for the{" "}
                <span className="about-heading-accent">Final Frontier</span>
              </h2>

              <p className="about-body">
                OrbitalPaint Solutions is a modern aerospace and defence coating
                technology company focused on improving surface protection,
                performance, and precision for aircraft, spacecraft, and valuable
                defense assets. Founded with a mission to raise global aerospace
                standards, we combine advanced material science, AI-supported
                inspection, robotic application technology, and eco-friendly
                formulations — ensuring durability, safety, and mission readiness
                in the most demanding operating conditions on Earth and beyond.
              </p>

              <a href="#contact" className="about-cta">
                Get in Touch ↗
              </a>
            </motion.div>

            {/* 3D Orbital sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              viewport={{ once: true }}
            >
              <OrbitalSphere />
            </motion.div>
          </div>

          {/* ── Stats bar ── */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat-value">
                  <Counter target={s.value} suffix={s.suffix} />
                </span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Capability cards ── */}
          <p className="about-cards-heading">Core Capabilities</p>
          <div className="about-cards-grid">
            {cards.map((c, i) => (
              <TiltCard key={c.title} {...c} delay={i * 0.1} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}