import React from "react";
import { Award, BookOpen, Film, Code2 } from "lucide-react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <p>
              I'm a <span className="font-semibold text-gray-900 dark:text-white">
              Graduate Computer Science student at the University of South Carolina
              </span>, focused on Frontend Development, Data Analytics, and exploring Generative AI.
            </p>

            <p>
              I enjoy building clean, scalable user interfaces with React and modern web technologies, 
              while also leveraging data-driven insights using Python, SQL, and machine learning models.
            </p>

            <p>
              I was part of a team that secured <span className="font-semibold text-indigo-600">
              1st Place in the National Big Data Case Competition 2024
              </span>, where we developed a machine learning-based EEG analysis model competing against 30+ teams nationwide.
            </p>

            <p>
              Outside of tech, I enjoy watching movies, listening to music, and staying curious about how technology shapes creativity and everyday life.
            </p>
          </motion.div>

          {/* RIGHT SIDE - CARDS */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              {
                icon: Code2,
                title: "Frontend Development",
                desc: "React, TypeScript, Tailwind & Modern UI",
                color: "text-indigo-600"
              },
              {
                icon: BookOpen,
                title: "Data & AI",
                desc: "Python, SQL, ML, Generative AI",
                color: "text-purple-600"
              },
              {
                icon: Award,
                title: "Achievements",
                desc: "1st Place - National Big Data Case Competition",
                color: "text-amber-500"
              },
              {
                icon: Film,
                title: "Lifestyle",
                desc: "Movies, Music & Creative Exploration",
                color: "text-emerald-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-4`} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
