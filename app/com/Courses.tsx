"use client";

import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Aircraft Painting & Coating Technology",
    desc: "Learn professional-grade aerospace painting with hands-on spray booth training.",
    key: "AircraftPainting",
  },
  {
    title: "Surface Preparation & Treatment",
    desc: "Master sanding, masking, chemical treatment & defect removal techniques.",
    key: "SurfacePrep",
  },
  {
    title: "Aerospace Coating Quality Inspection",
    desc: "Learn dry film thickness, gloss measurement, adhesion testing & defect checks.",
    key: "QualityInspection",
  },
  {
    title: "Aerospace Safety & Hazard Management",
    desc: "Training on PPE, spray booth safety, and international safety procedures.",
    key: "SafetyTraining",
  },
];

const Courses: React.FC = () => {
  const handleClick = (courseKey: string) => {
    alert(`Opening course: ${courseKey}`);
  };

  return (
    <section
  id="courses"
  className="relative py-20 px-4 bg-cover bg-center bg-no-repeat min-h-[700px] mb-20"
  style={{ backgroundImage: "url('/courses-bg.jpg')" }}
>
  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Heading */}
    <h2
      className="text-center text-yellow-400 text-4xl md:text-5xl font-extrabold mb-16 
      drop-shadow-lg animate-fadeInUp"
    >
      Courses We Offer
    </h2>

    {/* Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
      {courses.map((course) => (
        <div
          key={course.key}
          className="bg-[#0a2a47]/90 backdrop-blur-md rounded-2xl p-8 text-center text-white 
          cursor-pointer border-2 border-transparent hover:border-yellow-400 
          hover:bg-[#0c345a]/90 hover:shadow-2xl transform transition duration-300 hover:-translate-y-3
          animate-fadeInUp delay-100"
          onClick={() => handleClick(course.key)}
        >
          <h3 className="text-xl font-bold mb-3">{course.title}</h3>
          <p className="text-sm opacity-90">{course.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
 );
};

export default Courses;
