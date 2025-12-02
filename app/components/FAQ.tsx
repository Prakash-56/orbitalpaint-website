"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are your services compliant with aerospace standards?",
    answer:
      "Ans: Yes, our processes adhere to global standards such as AS9100, CARC, Epoxy & Polyurethane systems, and other industry-standard specifications."
  },
  {
    question: "Do I need any prior experience to join the course?",
    answer:
      "Ans: No. ITI or Diploma candidates can join without previous painting experience. We start from the fundamentals and gradually train you to industry standards."
  },
  {
    question: "How can I request a quote or service?",
    answer:
      "Ans: You can contact us through our website form, email, or phone. Provide your project details, and our team will respond promptly with a tailored solution and quote."
  },
  {
    question: "How do you ensure the quality of your coatings?",
    answer:
      "Ans: We perform rigorous quality checks including adhesion tests, thickness measurement, salt-spray tests, and surface inspections, ensuring every project meets or exceeds standards."
  },
  {
    question: "Is the training fully practical?",
    answer:
      "Ans: Yes. 70% of the program is hands-on, including spray-painting, surface prep, masking, inspection, and coating applications used in real aircraft maintenance."
  },
  {
    question: "Do you offer online learning support?",
    answer:
      "Ans: Yes. You will get access to our digital learning portal with simulators, videos, notes, and AI-powered defect analysis tools."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          Frequently Asked <span className="text-blue-600">Questions</span>
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 px-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold"
            >
              {faq.question}

              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
