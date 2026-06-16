"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Particle field ─── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}

/* ─── 3-D Orbital ring system ─── */
function OrbitalRings() {
  return (
    <div className="orbital-scene" aria-hidden>
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />
      <div className="orbit-dot dot-1" />
      <div className="orbit-dot dot-2" />
      <div className="orbit-dot dot-3" />
    </div>
  );
}

/* ─── Tilt card wrapper ─── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-1, 1], [12, -12]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-12, 12]), { stiffness: 200, damping: 30 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width * 2 - 1);
    y.set((e.clientY - rect.top) / rect.height * 2 - 1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated counter ─── */
function StatCounter({ to, label }: { to: number; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 60);
    const id = setInterval(() => {
      start = Math.min(start + step, to);
      setCount(start);
      if (start >= to) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [to]);
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-black text-cyan-300 font-orbitron">{count}+</span>
      <span className="text-xs text-slate-400 mt-1 tracking-widest uppercase">{label}</span>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  return (
    <>
      {/* Inject styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=Inter:wght@300;400;500&display=swap');

        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-inter    { font-family: 'Inter', sans-serif; }

        /* ── Orbital ring scene ── */
        .orbital-scene {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 900px;
          pointer-events: none;
        }
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid;
          transform-style: preserve-3d;
        }
        .ring-1 {
          width: 320px; height: 320px;
          border-color: rgba(0,212,255,0.35);
          animation: spin1 10s linear infinite;
          box-shadow: 0 0 18px rgba(0,212,255,0.15);
        }
        .ring-2 {
          width: 240px; height: 240px;
          border-color: rgba(255,106,0,0.3);
          animation: spin2 7s linear infinite;
          box-shadow: 0 0 12px rgba(255,106,0,0.15);
        }
        .ring-3 {
          width: 420px; height: 420px;
          border-color: rgba(192,192,208,0.15);
          animation: spin3 16s linear infinite;
        }
        @keyframes spin1 {
          from { transform: rotateX(72deg) rotateZ(0deg); }
          to   { transform: rotateX(72deg) rotateZ(360deg); }
        }
        @keyframes spin2 {
          from { transform: rotateX(55deg) rotateY(20deg) rotateZ(0deg); }
          to   { transform: rotateX(55deg) rotateY(20deg) rotateZ(-360deg); }
        }
        @keyframes spin3 {
          from { transform: rotateX(80deg) rotateZ(0deg); }
          to   { transform: rotateX(80deg) rotateZ(360deg); }
        }

        /* orbiting dots */
        .orbit-dot {
          position: absolute;
          border-radius: 50%;
          transform-style: preserve-3d;
        }
        .dot-1 {
          width: 8px; height: 8px;
          background: #00d4ff;
          box-shadow: 0 0 16px #00d4ff;
          animation: orbit1 10s linear infinite;
        }
        .dot-2 {
          width: 6px; height: 6px;
          background: #ff6a00;
          box-shadow: 0 0 12px #ff6a00;
          animation: orbit2 7s linear infinite;
        }
        .dot-3 {
          width: 4px; height: 4px;
          background: #c0c0d0;
          box-shadow: 0 0 8px #c0c0d0;
          animation: orbit3 16s linear infinite;
        }
        @keyframes orbit1 {
          from { transform: rotateX(72deg) rotateZ(0deg) translateX(160px) rotateX(-72deg); }
          to   { transform: rotateX(72deg) rotateZ(360deg) translateX(160px) rotateX(-72deg); }
        }
        @keyframes orbit2 {
          from { transform: rotateX(55deg) rotateY(20deg) rotateZ(0deg) translateX(120px) rotateX(-55deg); }
          to   { transform: rotateX(55deg) rotateY(20deg) rotateZ(-360deg) translateX(120px) rotateX(-55deg); }
        }
        @keyframes orbit3 {
          from { transform: rotateX(80deg) rotateZ(0deg) translateX(210px) rotateX(-80deg); }
          to   { transform: rotateX(80deg) rotateZ(360deg) translateX(210px) rotateX(-80deg); }
        }

        /* scanline overlay */
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.06) 3px,
            rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
        }

        /* glassy stat card */
        .stat-card {
          background: rgba(0,212,255,0.04);
          border: 1px solid rgba(0,212,255,0.15);
          border-radius: 12px;
          padding: 18px 24px;
          backdrop-filter: blur(8px);
          transition: border-color 0.3s;
        }
        .stat-card:hover { border-color: rgba(0,212,255,0.4); }

        /* CTA glow button */
        .btn-glow {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #00d4ff 0%, #0088cc 100%);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-glow:hover { transform: translateY(-2px); box-shadow: 0 0 28px rgba(0,212,255,0.5); }
        .btn-glow:hover::before { opacity: 1; }

        .btn-outline {
          border: 1px solid rgba(0,212,255,0.5);
          color: #00d4ff;
          transition: background 0.25s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-outline:hover {
          background: rgba(0,212,255,0.1);
          transform: translateY(-2px);
          box-shadow: 0 0 18px rgba(0,212,255,0.25);
        }

        /* floating badge */
        .badge-pulse::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 1px solid #00d4ff;
          animation: ripple 2s ease-out infinite;
        }
        @keyframes ripple {
          0%   { opacity: 0.7; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.5); }
        }

        /* ── Wavy section divider ── */
        @keyframes waveShift {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .wave-back {
          animation: waveShift 9s linear infinite;
        }
        .wave-front {
          animation: waveShift 6s linear infinite;
        }
        .wave-accent {
          animation: waveShift 8s linear infinite reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .ring, .orbit-dot,
          .wave-back, .wave-front, .wave-accent { animation: none !important; }
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen overflow-hidden scanlines"
        style={{ background: "linear-gradient(160deg,#020c1b 0%,#041a30 50%,#020c1b 100%)" }}
      >
        {/* Particle field */}
        <ParticleField />

        {/* Radial glow behind logo */}
        <div
          className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 md:right-24 pointer-events-none"
          style={{
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-12 pt-32 pb-24">

          {/* ── LEFT ── */}
          <div className="flex-1 max-w-xl space-y-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-px bg-cyan-400" />
              <span
                className="font-orbitron text-xs tracking-[0.3em] uppercase"
                style={{ color: "#00d4ff" }}
              >
                Aerospace &amp; Defence Coatings
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-orbitron font-black leading-tight"
              style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: "#f0f4ff" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <span style={{ color: "#00d4ff" }}>Orbital</span>Paint
              <br />
              <span style={{ fontSize: "75%", fontWeight: 600, color: "#c0c0d0" }}>
                Solutions
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="font-inter text-base md:text-lg leading-relaxed"
              style={{ color: "#8baabf" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              Redefining Aerospace & Defence Coating Excellence.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <a
                href="#contact"
                className="btn-glow px-7 py-3 rounded-full font-inter font-semibold text-sm text-white"
              >
                Get Started
              </a>
              <Link
                href="/courses"
                className="btn-outline px-7 py-3 rounded-full font-inter font-semibold text-sm"
              >
                View Courses →
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center gap-5 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <span className="font-inter text-xs tracking-widest uppercase" style={{ color: "#4a6a80" }}>
                Follow
              </span>
              <div className="w-4 h-px" style={{ background: "#4a6a80" }} />
              {[
                {
                  href: "https://www.linkedin.com/company/orbitalpaint-solutions",
                  Icon: FaLinkedin,
                  color: "#00d4ff",
                },
                {
                  href: "https://x.com/OrbitalPaint?t=Kv3C9C29dGMnVAWSGrgWMg&s=09",
                  Icon: FaTwitter,
                  color: "#00d4ff",
                },
              ].map(({ href, Icon, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.25, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ color }}
                  className="text-xl transition-opacity hover:opacity-80"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Tilt card + orbital rings ── */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <TiltCard>
              {/* Orbital ring system — absolutely positioned around the logo */}
              <div className="relative" style={{ width: 420, height: 420 }}>
                <OrbitalRings />

                {/* Logo centred inside orbital scene */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    {/* Logo glow disc */}
                    <div
                      className="absolute inset-0 rounded-full blur-2xl"
                      style={{ background: "rgba(0,212,255,0.2)", transform: "scale(1.4)" }}
                    />
                    <Image
                      src="/logo.png"
                      alt="OrbitalPaint Solutions logo"
                      width={160}
                      height={160}
                      className="relative drop-shadow-2xl"
                      priority
                    />
                  </motion.div>

                  {/* Animated slogan below logo */}
                  <motion.div
                    className="mt-5 flex gap-3 font-orbitron text-xs tracking-widest uppercase"
                    style={{ transform: "translateZ(20px)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                  >
                    {[
                      { word: "Precision", color: "#00d4ff" },
                      { word: "Performance", color: "#ff6a00" },
                      { word: "Perfection", color: "#c0c0d0" },
                    ].map(({ word, color }, i) => (
                      <motion.span
                        key={word}
                        style={{ color }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                      >
                        {word}
                        {i < 2 && <span style={{ color: "#4a6a80", marginLeft: 12 }}>·</span>}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* ── Wavy section transition (replaces flat glow line) ── */}
        <div
          className="absolute bottom-0 inset-x-0 pointer-events-none"
          style={{ lineHeight: 0, overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 1440 90"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: 90 }}
            aria-hidden
          >
            {/* Back wave — subtle cyan fill, slower */}
            <g className="wave-back">
              <path
                d="M0 55 C120 30,240 80,360 55 C480 30,600 80,720 55 C840 30,960 80,1080 55 C1200 30,1320 80,1440 55 C1560 30,1680 80,1800 55 C1920 30,2040 80,2160 55 C2280 30,2400 80,2520 55 C2640 30,2760 80,2880 55 L2880 90 L0 90 Z"
                fill="rgba(0,212,255,0.07)"
              />
            </g>

            {/* Front wave — dark fill matching next section bg + cyan stroke edge */}
            <g className="wave-front">
              <path
                d="M0 62 C180 38,360 88,540 62 C720 38,900 88,1080 62 C1260 38,1440 88,1620 62 C1800 38,1980 88,2160 62 C2340 38,2520 88,2700 62 C2880 38,3060 88,3240 62 L3240 90 L0 90 Z"
                fill="#020c1b"
              />
              <path
                d="M0 62 C180 38,360 88,540 62 C720 38,900 88,1080 62 C1260 38,1440 88,1620 62 C1800 38,1980 88,2160 62 C2340 38,2520 88,2700 62 C2880 38,3060 88,3240 62"
                fill="none"
                stroke="rgba(0,212,255,0.45)"
                strokeWidth={1.5}
              />
            </g>

            {/* Accent wave — faint orange, reverse direction */}
            <g className="wave-accent">
              <path
                d="M0 72 C240 58,480 82,720 72 C960 58,1200 82,1440 72 C1680 58,1920 82,2160 72 C2400 58,2640 82,2880 72"
                fill="none"
                stroke="rgba(255,106,0,0.18)"
                strokeWidth={1}
              />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}