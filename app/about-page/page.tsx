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

      {/* Co-Founder's Talk */}
      <motion.section
        className="py-16 px-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/images/Co-founder.png"
          alt="Co-Founder"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mx-auto md:mx-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">
            Co-Founder's Talk
          </h2>
          <p className="text-gray-700 italic mb-2">
            "Our vision is to redefine aerospace painting and inspection standards.
            We aim to combine technology and expertise to deliver excellence in every project."</p>
          <p className="font-semibold">— Uday Behera, Co-Founder & CEO</p>
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
