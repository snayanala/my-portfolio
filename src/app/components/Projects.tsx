import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CSCE590 Azure Group Project",
    description:
      "Designed and deployed a cloud-based enterprise solution using Microsoft Azure services. Implemented data pipelines, storage integration, and scalable backend workflows. Focused on real-world cloud architecture, deployment, and DevOps practices.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080",
    tags: ["Microsoft Azure", "Cloud Architecture", "DevOps", "Data Integration"],
    github: "https://github.com/snayanala/CSCE590-Azure-Group-Project",
    live: "",
  },
  {
    title: "Toxic Comment Classification (NLP)",
    description:
      "Built a machine learning model to classify toxic online comments using Natural Language Processing techniques. Implemented preprocessing, feature extraction, and deep learning models to improve moderation accuracy.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080",
    tags: ["Python", "NLP", "Deep Learning", "Scikit-learn", "LSTM"],
    github: "https://github.com/snayanala/toxic-comment",
    live: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selected academic and applied projects in Cloud, AI, and Data Engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/snayanala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
          >
            See more on GitHub
            <Github size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};


