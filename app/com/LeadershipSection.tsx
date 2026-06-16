"use client";
import { useEffect, useRef } from "react";

export default function LeadershipSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => card.classList.add("ls-visible"), i * 150);
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    const moveHandlers = new Map();
    const leaveHandlers = new Map();

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const tiltX = ((y - cy) / cy) * 4;
        const tiltY = ((cx - x) / cx) * 4;
        card.style.transform = `translateY(-6px) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      const onLeave = () => {
        card.style.transform = "";
      };

      moveHandlers.set(card, onMove);
      leaveHandlers.set(card, onLeave);

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      cardRefs.current.forEach((card) => {
        if (!card) return;
        if (moveHandlers.has(card))  card.removeEventListener("mousemove",  moveHandlers.get(card));
        if (leaveHandlers.has(card)) card.removeEventListener("mouseleave", leaveHandlers.get(card));
      });
    };
  }, []);

  const leaders = [
    {
      initials: "MB",
      img: "/founder.png",
      name: "Mirzasayeed Beg",
      role: "Founder & COO",
      accentColor: "#4F46E5",
      accentBg: "#EEF0FF",
      tags: ["Aerospace Coatings", "Strategy", "Innovation"],
      bio: "In aerospace, precision isn’t a choice - it’s a promise. At OrbitalPaint Solutions, we don’t just coat the surface; we craft protection that takes flight.",
      cta: {
        label: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/mirzasayeed-beg-9487212a9/",
        type: "linkedin",
      },
    },
    {
      initials: "OPS",
      img: "/Co-Founder.png",
      name: "Uday Behera",
      role: "Co-Founder & CEO",
      accentColor: "#06B6D4",
      accentBg: "#E0F2FE",
      tags: ["Industry Expertise", "Operations", "Safety"],
      bio: "Our vision is to redefine aerospace painting and inspection standards. We aim to combine technology and expertise to deliver excellence in every project.",
      cta: {
        label: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/uday-behera-35488b175/",
        type: "linkedin",
      },
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Playfair+Display:wght@700;900&display=swap');

        .ls-section {
          background: #ffffff;
          padding: 80px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 700px;
        }

        .ls-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.12;
          pointer-events: none;
          animation: ls-orb-drift 12s ease-in-out infinite alternate;
        }
        .ls-bg-orb.a {
          width: 400px; height: 400px;
          background: #4F46E5;
          top: -120px; right: -80px;
          animation-delay: 0s;
        }
        .ls-bg-orb.b {
          width: 300px; height: 300px;
          background: #06B6D4;
          bottom: -60px; left: -60px;
          animation-delay: 3s;
        }
        .ls-bg-orb.c {
          width: 200px; height: 200px;
          background: #8B5CF6;
          top: 50%; left: 40%;
          animation-delay: 6s;
        }

        @keyframes ls-orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.08); }
        }

        .ls-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ls-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ls-eyebrow span {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4F46E5;
          font-weight: 600;
        }
        .ls-eyebrow-line {
          height: 1px;
          width: 48px;
          background: linear-gradient(90deg, transparent, #4F46E5);
        }
        .ls-eyebrow-line.right {
          background: linear-gradient(90deg, #4F46E5, transparent);
        }

        .ls-heading {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          color: #0B1437;
          margin: 0 0 64px;
          line-height: 1.1;
        }
        .ls-heading em {
          font-style: normal;
          background: linear-gradient(135deg, #4F46E5, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ls-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .ls-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #E8EAFF;
          border-radius: 20px;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease,
                      transform 0.7s cubic-bezier(0.23, 1, 0.32, 1),
                      box-shadow 0.4s ease;
        }
        .ls-card.ls-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ls-card:hover {
          box-shadow: 0 24px 64px rgba(79,70,229,0.13), 0 4px 16px rgba(0,0,0,0.06);
        }

        .ls-card-stripe {
          height: 5px;
          background: linear-gradient(90deg, #4F46E5, #06B6D4, #8B5CF6, #4F46E5);
          background-size: 300% 100%;
          animation: ls-stripe 4s linear infinite;
        }
        @keyframes ls-stripe {
          0%   { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        .ls-card-body { padding: 32px; }

        .ls-avatar-wrap {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .ls-avatar {
          width: 72px; height: 72px;
          border-radius: 50%;
          overflow: visible;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          position: relative;
        }
        .ls-avatar-inner {
          width: 72px; height: 72px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .ls-avatar img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .ls-avatar-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(#4F46E5, #06B6D4, #8B5CF6, #4F46E5);
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s;
          animation: ls-spin 6s linear infinite;
        }
        .ls-card:hover .ls-avatar-ring { opacity: 1; }
        @keyframes ls-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .ls-name {
          font-size: 22px;
          font-weight: 700;
          color: #0B1437;
          margin: 0 0 6px;
          letter-spacing: -0.3px;
        }

        .ls-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .ls-shimmer {
          height: 2px;
          background-size: 200% 100%;
          animation: ls-shimmer 2.5s ease infinite;
          border-radius: 2px;
          margin: 20px 0;
        }
        @keyframes ls-shimmer {
          0%   { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        .ls-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }
        .ls-tag {
          font-size: 11px;
          font-weight: 500;
          color: #64748B;
          background: #F1F5F9;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid #E2E8F0;
        }

        .ls-bio {
          font-size: 14px;
          line-height: 1.75;
          color: #4B5675;
          margin: 0 0 24px;
        }

        .ls-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 100px;
          transition: all 0.3s ease;
        }
        .ls-cta.linkedin {
          background: #0A66C2;
          color: #ffffff;
        }
        .ls-cta.linkedin:hover {
          background: #004182;
          transform: scale(1.04);
          box-shadow: 0 6px 20px rgba(10,102,194,0.35);
        }
        .ls-cta.outline {
          border: 1.5px solid #4F46E5;
          color: #4F46E5;
          background: transparent;
        }
        .ls-cta.outline:hover {
          background: #4F46E5;
          color: #ffffff;
          transform: scale(1.04);
          box-shadow: 0 6px 20px rgba(79,70,229,0.3);
        }

        @media (max-width: 640px) {
          .ls-grid { grid-template-columns: 1fr; }
          .ls-heading { font-size: 28px; }
          .ls-card-body { padding: 24px; }
        }
      `}</style>

      <section className="ls-section">
        <div className="ls-bg-orb a" />
        <div className="ls-bg-orb b" />
        <div className="ls-bg-orb c" />

        <div className="ls-inner">
          <div className="ls-eyebrow">
            <div className="ls-eyebrow-line" />
            <span>The People Behind the Vision</span>
            <div className="ls-eyebrow-line right" />
          </div>

          <h2 className="ls-heading">
            Meet the <em>Leaders</em> 
          </h2>

          <div className="ls-grid">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="ls-card"
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div
                  className="ls-card-stripe"
                  style={{ animationDelay: `${i * 2}s` }}
                />
                <div className="ls-card-body">
                  <div className="ls-avatar-wrap">
                    <div className="ls-avatar">
                      <div className="ls-avatar-ring" />
                      <div
                        className="ls-avatar-inner"
                        style={{
                          background: leader.accentBg,
                          color: leader.accentColor,
                          border: `3px solid ${leader.accentBg}`,
                        }}
                      >
                        <img
                          src={leader.img}
                          alt={leader.name}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextSibling.style.display = "block";
                          }}
                        />
                        <span
                          className="ls-avatar-initials"
                          style={{ display: "none", fontSize: "18px", fontWeight: 700 }}
                        >
                          {leader.initials}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="ls-name">{leader.name}</p>
                      <span
                        className="ls-role-badge"
                        style={{
                          color: leader.accentColor,
                          background: leader.accentBg,
                        }}
                      >
                        {leader.roleIcon} {leader.role}
                      </span>
                    </div>
                  </div>

                  <div
                    className="ls-shimmer"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${leader.accentColor} 50%, transparent 100%)`,
                      backgroundSize: "200% 100%",
                    }}
                  />

                  <div className="ls-tags">
                    {leader.tags.map((tag) => (
                      <span key={tag} className="ls-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="ls-bio">{leader.bio}</p>

                  <a
                    href={leader.cta.href}
                    target={leader.cta.type === "linkedin" ? "_blank" : undefined}
                    rel={
                      leader.cta.type === "linkedin"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`ls-cta ${leader.cta.type}`}
                  >
                    {leader.cta.type === "linkedin" ? "🔗" : "→"} {leader.cta.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}