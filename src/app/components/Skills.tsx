import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C#", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  },
  {
    category: "Data Science & Machine Learning",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "LSTM",
      "CNN",
      "Natural Language Processing",
    ],
  },
  {
    category: "API & Backend Exposure",
    items: ["Node.js (Basic)", "REST APIs", "Postman"],
  },
  {
    category: "Cloud & Analytics Tools",
    items: [
      "Microsoft Azure",
      "AWS",
      "Power BI",
      "Git",
      "VS Code",
      "Jira",
      "Figma",
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">

        {/* Section Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive list of the technologies I work with.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0px 20px 40px rgba(99, 102, 241, 0.15)",
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

