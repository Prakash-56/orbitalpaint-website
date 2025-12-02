"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [qualification, setQualification] = useState("ITI");
  const [course, setCourse] = useState("Aerospace Spray Painting");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      qualification,
      course,
      country: "India",
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Application sent successfully!");
        e.currentTarget.reset();
        setQualification("ITI");
        setCourse("Aerospace Spray Painting");
      } else {
        alert("Failed to send application.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Apply for <span className="text-blue-600">Aerospace Painting Training</span>
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </motion.div>

          {/* Contact Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="font-medium">Contact Number</label>
            <input
              type="tel"
              name="contact"
              required
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mobile number"
            />
          </motion.div>

          {/* Qualification */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="font-medium">Qualification</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="ITI"
                  checked={qualification === "ITI"}
                  onChange={() => setQualification("ITI")}
                />
                ITI
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Diploma"
                  checked={qualification === "Diploma"}
                  onChange={() => setQualification("Diploma")}
                />
                Diploma
              </label>
            </div>
          </motion.div>

          {/* Course Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label className="font-medium">Select Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Aerospace Spray Painting</option>
              <option>Surface Preparation & Coating</option>
              <option>Aircraft Coating Inspection</option>
              <option>Advanced Aerospace Painting Technology</option>
              <option>Industrial Epoxy & Polyurethane Coatings</option>
            </select>
          </motion.div>

          {/* Country – Fixed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label className="font-medium">Country</label>
            <input
              value="India"
              disabled
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-600"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="pt-4"
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-md"
            >
              {loading ? "Sending..." : "Submit Application"}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
