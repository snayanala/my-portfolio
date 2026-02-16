import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Experience = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievement
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic and professional journey so far.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* ---------------- LEFT SIDE - GTA ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Graduate Teaching Assistant
                </h3>
              </div>

              <h4 className="text-lg text-indigo-600 font-medium mb-3">
                University of South Carolina
              </h4>

              <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Aug 2024 - Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Columbia, South Carolina
                </span>
              </div>

              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm list-disc list-inside">
                <li>
                  Conduct weekly lab sessions for 40+ students in Java and Data Structures.
                </li>
                <li>
                  Clarify conceptual and implementation-level doubts, strengthening algorithmic thinking.
                </li>
                <li>
                  Grade assignments and assessments with structured feedback aligned to academic standards.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ---------------- RIGHT SIDE - ACHIEVEMENT ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#E6E6FA] dark:bg-[#2e1065] p-8 rounded-2xl shadow-lg border border-indigo-200 dark:border-purple-700 relative overflow-hidden h-full">

              {/* Ribbon Badge */}
              <div className="absolute top-5 right-[-45px] rotate-45 bg-yellow-400 text-gray-900 px-14 py-1 font-bold text-sm shadow-lg">
                🏆 1st Place
              </div>

              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Trophy className="text-yellow-500" size={28} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  National Big Data Case Competition
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                Led development of a Machine Learning-based EEG analysis model,
                competing against 30+ teams nationwide and securing 1st place
                in the 2024 Big Data Health Science Case Competition.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  View Case Breakdown
                </button>

                <a
                  href="https://bigdata.sc.edu/2024-big-data-case-competition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all flex items-center gap-2"
                >
                  Official Article <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* ---------- Previous Dark Gradient Version (Commented) ---------- */}
            {/*
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              ...
            </div>
            */}
          </motion.div>
        </div>

        {/* ---------------- MODAL ---------------- */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 max-w-2xl w-full p-8 rounded-2xl shadow-2xl"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  2024 Big Data Health Science Case Competition
                </h2>

                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  <p>
                    Our team developed a scalable Machine Learning system for analyzing
                    large-scale EEG datasets to detect neurological patterns.
                  </p>

                  <p>
                    We implemented data preprocessing pipelines, feature engineering,
                    classification models, and evaluation metrics to ensure high predictive accuracy.
                  </p>

                  <p>
                    Competing against 30+ teams nationwide, we secured 1st place
                    by presenting a technically robust and impactful AI-driven healthcare solution.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/40 p-4 rounded-xl mt-4">
                    <strong>Technologies Used:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Python</li>
                      <li>Pandas & NumPy</li>
                      <li>Scikit-learn</li>
                      <li>Machine Learning Classification</li>
                      <li>Data Visualization</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

