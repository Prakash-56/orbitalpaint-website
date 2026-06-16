"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#home",        label: "Home" },
  { href: "#about",       label: "About" },
  { href: "#services",    label: "Services" },
  { href: "#courses",     label: "Courses" },
  { href: "#contactinfo", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive]       = useState("#home");
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [hovered, setHovered]     = useState<string | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRef   = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  /* scroll-aware background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* active section spy */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* floating pill tracker */
  useEffect(() => {
    const target = hovered ?? active;
    const el = linkRefs.current[target];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect  = el.getBoundingClientRect();
    setPillStyle({
      left:  elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [hovered, active]);

  const handleClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Inter:wght@400;500&display=swap');

        /* ── Navbar shell ── */
        .op-nav {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: min(860px, calc(100vw - 32px));
          font-family: 'Orbitron', sans-serif;
          /* 3-D perspective so children can tilt */
          perspective: 1200px;
        }

        /* glass pill container */
        .op-nav-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 54px;
          border-radius: 9999px;
          background: rgba(2, 12, 27, 0.72);
          border: 1px solid rgba(0, 212, 255, 0.22);
          backdrop-filter: blur(18px) saturate(160%);
          box-shadow:
            0 0 0 1px rgba(0,212,255,0.08) inset,
            0 8px 32px rgba(0,0,0,0.55),
            0 0 40px rgba(0,212,255,0.06);
          transition: background 0.35s, box-shadow 0.35s, border-color 0.35s;
        }
        .op-nav-inner.scrolled {
          background: rgba(2, 12, 27, 0.90);
          border-color: rgba(0,212,255,0.35);
          box-shadow:
            0 0 0 1px rgba(0,212,255,0.12) inset,
            0 12px 48px rgba(0,0,0,0.7),
            0 0 60px rgba(0,212,255,0.1);
        }

        /* top edge prismatic line */
        .op-nav-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(0,212,255,0.18) 30%,
            rgba(255,106,0,0.12) 60%,
            transparent 100%
          );
          mask: linear-gradient(to bottom, white 0%, transparent 3px);
          -webkit-mask: linear-gradient(to bottom, white 0%, transparent 3px);
          pointer-events: none;
        }

        /* ── Logo ── */
        .op-logo {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          color: #f0f4ff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          transition: color 0.2s;
          user-select: none;
        }
        .op-logo:hover { color: #00d4ff; }
        .op-logo-mark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid rgba(0,212,255,0.6);
          background: rgba(0,212,255,0.07);
          font-size: 11px;
          color: #00d4ff;
          box-shadow: 0 0 10px rgba(0,212,255,0.25), inset 0 0 6px rgba(0,212,255,0.1);
          position: relative;
        }
        .op-logo-mark::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(0,212,255,0.2);
          animation: logoPulse 3s ease-in-out infinite;
        }
        @keyframes logoPulse {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.5); }
        }

        /* ── Desktop link row ── */
        .op-links {
          display: flex;
          align-items: center;
          gap: 2px;
          position: relative;
        }

        /* sliding highlight pill */
        .op-pill {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 32px;
          border-radius: 9999px;
          background: rgba(0,212,255,0.1);
          border: 1px solid rgba(0,212,255,0.28);
          box-shadow: 0 0 16px rgba(0,212,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
        }

        .op-link {
          position: relative;
          padding: 6px 16px;
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(176,200,220,0.8);
          text-decoration: none;
          border-radius: 9999px;
          transition: color 0.2s;
          white-space: nowrap;
          z-index: 1;
          /* individual 3-D tilt on hover */
          transform-style: preserve-3d;
          transition: color 0.2s, transform 0.25s cubic-bezier(.4,0,.2,1);
        }
        .op-link:hover {
          color: #00d4ff;
          transform: translateZ(6px) translateY(-1px);
        }
        .op-link.is-active {
          color: #00d4ff;
        }

        /* active dot indicator */
        .op-link.is-active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 6px #00d4ff;
        }

        /* ── Hamburger ── */
        .op-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .op-burger span {
          display: block;
          width: 20px;
          height: 1.5px;
          background: rgba(0,212,255,0.8);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s, width 0.3s;
          transform-origin: center;
        }
        .op-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .op-burger.open span:nth-child(2) { opacity: 0; width: 0; }
        .op-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile dropdown ── */
        .op-mobile-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          right: 0;
          background: rgba(2, 12, 27, 0.96);
          border: 1px solid rgba(0,212,255,0.2);
          border-radius: 20px;
          backdrop-filter: blur(24px);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s;
          opacity: 0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.06);
        }
        .op-mobile-menu.open {
          max-height: 360px;
          opacity: 1;
        }
        .op-mobile-menu a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(176,200,220,0.8);
          text-decoration: none;
          border-bottom: 1px solid rgba(0,212,255,0.07);
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
        }
        .op-mobile-menu a:last-child { border-bottom: none; }
        .op-mobile-menu a:hover,
        .op-mobile-menu a.is-active {
          color: #00d4ff;
          background: rgba(0,212,255,0.05);
          padding-left: 32px;
        }
        .op-mobile-menu a .m-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(0,212,255,0.4);
          flex-shrink: 0;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .op-mobile-menu a.is-active .m-dot,
        .op-mobile-menu a:hover .m-dot {
          background: #00d4ff;
          box-shadow: 0 0 6px #00d4ff;
        }

        @media (max-width: 640px) {
          .op-links { display: none; }
          .op-burger { display: flex; }
        }

        @media (prefers-reduced-motion: reduce) {
          .op-logo-mark::after,
          .op-pill { animation: none !important; transition: none !important; }
        }
      `}</style>

      <header className="op-nav">
        <div className={`op-nav-inner${scrolled ? " scrolled" : ""}`}>

          {/* Logo */}
          <a href="#home" className="op-logo" onClick={() => handleClick("#home")}>
            <span>OrbitalPaint Solutions</span>
          </a>

          {/* Desktop nav */}
          <nav ref={navRef} className="op-links" aria-label="Main navigation">
            {/* Sliding pill */}
            <span
              className="op-pill"
              style={{ left: pillStyle.left, width: pillStyle.width }}
              aria-hidden
            />

            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                ref={(el) => { linkRefs.current[href] = el; }}
                className={`op-link${active === href ? " is-active" : ""}`}
                onMouseEnter={() => setHovered(href)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(href)}
              >
                {label}
              </a>
            ))}
          </nav>


          {/* Hamburger */}
          <button
            className={`op-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`op-mobile-menu${menuOpen ? " open" : ""}`} role="menu">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={active === href ? "is-active" : ""}
              onClick={() => handleClick(href)}
              role="menuitem"
            >
              <span className="m-dot" aria-hidden />
              {label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}