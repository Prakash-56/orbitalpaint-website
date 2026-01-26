"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    label: "Trusted by leading defense and aerospace firms.",
    animateTo: 4.7,
    suffix: "",
    showStars: true,
  },
  {
    label: "Ensuring the faultless operation of mission-critical components.",
    animateTo: 100,
    suffix: "",
  },
  {
    label: "Years of aerospace inspection and coating expertise.",
    animateTo: 5,
    suffix: "+",
  },
  {
    label: "Dedicated 24/7 customer support.",
    animateTo: 24,
    suffix: "",
  },
];

export default function WhyChooseUs() {
  const [values, setValues] = useState(stats.map(() => 0));

  // Count-up animation
  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.animateTo;
      const duration = 2000; // 2 seconds
      const stepTime = 20; // 50fps
      const increment = end / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setValues((prev) => {
          const updated = [...prev];
          updated[i] = Number(start.toFixed(1));
          return updated;
        });
      }, stepTime);
    });
  }, []);

  return (
    <section className="py-20 bg-gray-100 perspective-1000">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-center mb-10 text-[#0A1F44]"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-[#061A33] text-white rounded-2xl p-8 text-center shadow-2xl cursor-pointer transform-style-preserve-3d"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                rotateY: 10,
                rotateX: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateY = ((x / rect.width) * 30 - 15); // -15 to 15 deg
                const rotateX = ((y / rect.height) * 30 - 15) * -1;
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
              }}
            >
              {/* Number with count-up */}
              <div className="text-4xl font-bold text-yellow-400">
                {values[i]}
                {stat.suffix}
              </div>

              {/* Stars for first card */}
              {stat.showStars && (
                <div className="flex justify-center mt-2 mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, s) => (
                      <span key={s} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                </div>
              )}

              {/* Label text */}
              <p className="text-sm mt-2 opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
