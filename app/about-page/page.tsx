"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutPage() {
  // Data for highlights, Why Choose Us, and FAQ
  const highlights = [
    { title: "Industry-Led Curriculum", icon: "🎯" },
    { title: "Real Aircraft Training", icon: "🛠️" },
    { title: "Defence-Grade Standards", icon: "🛡️" },
    { title: "Expert Mentorship", icon: "👨‍🏫" },
  ];

  const whyChooseUs = [
    {
      title: "Hands-on Training",
      description: "Get real aircraft painting experience under expert supervision.",
      icon: "🖌️",
    },
    {
      title: "Certification Support",
      description: "Industry-recognized certifications with placement assistance.",
      icon: "📜",
    },
    {
      title: "Advanced Tools & Tech",
      description: "Learn with modern coating tools, simulators & AI-assisted analysis.",
      icon: "🤖",
    },
    {
      title: "Career-Focused Approach",
      description: "Prepare for high-demand aerospace and defense roles.",
      icon: "🚀",
    },
  ];

  const faqData = [
    {
      question: "What services do you provide for the aerospace and industrial sector?",
      answer:
        "We provide high-performance coatings, surface preparation, sandblasting, consultancy, testing & quality assurance, and project support for aerospace, defense, and industrial applications.",
    },
    {
      question: "Will I receive a certificate after completing the training?",
      answer:
        "Yes, all participants receive a certificate of completion recognized by OrbitalPaint Solutions.",
    },
    {
      question: "Are your services compliant with aerospace standards?",
      answer:
        "Yes, our processes adhere to global standards such as AS9100, CARC, Epoxy & Polyurethane systems, and other industry-standard specifications.",
    },
  ];

  return (
    <div className="bg-[#E5E7EB] text-gray-800">

      {/* Page Header */}
      <motion.section
        className="py-24 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A1F44]">
          About OrbitalPaint Solutions
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          OrbitalPaint Solutions is an advanced aerospace surface engineering and coating technology company specializing in innovative paint systems, structural protection, and next-generation aircraft coating solutions.
We bridge the gap between scientific research, industrial application, and aviation safety, focusing on high-performance paint technologies used in Defense, Space, and Commercial Aerospace.
        </p>
      </motion.section>

      {/* Highlights / Core Values */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-[#0A1F44] text-center">
          Our Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

{/* Co-Founder's Talk Section */}
<motion.section
  className="w-full py-20 px-6 bg-white"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* Co-Founder Image + LinkedIn Button */}
    <div className="flex flex-col items-center">

      {/* Circular Image */}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl">
        <img
          src="/Co-Founder.png"
          alt="Co-Founder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/uday-behera-35488b175/" 
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-4
          inline-flex items-center gap-2
          px-6 py-2 rounded-full
          bg-[#0A66C2] hover:bg-[#004182]
          text-white font-semibold
          shadow-lg
          transition-all duration-300 transform hover:scale-105
        "
      >
        {/* LinkedIn Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="white"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.368 4.266 5.451v6.29zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
        </svg>
        Connect on LinkedIn
      </a>

    </div>

    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Co-Founder's Talk
      </h2>
      <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
        "Our vision is to redefine aerospace painting and inspection standards.
        We aim to combine technology and expertise to deliver excellence in every project."
      </p>
      <h3 className="text-xl font-semibold text-gray-900">
        - Uday Behera, Co-Founder & CEO
      </h3>
    </div>

  </div>
</motion.section>


      {/* Why Choose Us Section */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-[#0A1F44] text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-10 text-2xl">
          <motion.a
            href="https://www.linkedin.com/company/110197057/admin/dashboard/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-700"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://x.com/OrbitalPaint?t=Kv3C9C29dGMnVAWSGrgWMg&s=09"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-400"
          >
            <FaTwitter />
          </motion.a>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-16 px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#0A1F44] text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.details
              key={index}
              className="bg-gray-100 rounded-lg p-4 cursor-pointer shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <summary className="font-semibold text-gray-800">{faq.question}</summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 px-6 bg-[#0A1F44] text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-2">📍 Hyderabad, India</p>
        <p className="mb-2">📞 +91 8523817445</p>
        <p className="mb-4">✉️ connect@orbitalpaintsolutions.com</p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#0A1F44] transition-all"
        >
          Get in Touch
        </motion.a>
      </motion.section>
    </div>
  );
}
