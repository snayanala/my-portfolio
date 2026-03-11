import React from "react";
import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
};

const certifications: Certification[] = [
  {
    title: "Azure Developer Associate",
    issuer: "Microsoft",
    date: "2025",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/NayanalaSupriya-8301/DE2F614FFC1CB2B1?sharingId=C3134471D3866EEB",
  },
  {
    title: "DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "2025",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/NayanalaSupriya-8301/5C789D571C1F3599?sharingId=C3134471D3866EEB",
  },
  {
    title: "Capgemini Cloud Native Development Certificate",
    issuer: "Capgemini",
    date: "2025",
    link: "https://www.linkedin.com/posts/supriyanayanala_cloudnative-capgemini-universityofsouthcarolina-activity-7326340991169286146-Gs6x?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQUNGEBx4Tu_Atq4GfWJArZon8EZuI8dfI",
  },
];

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of certifications that reflect my continuous learning
            in development, cloud, and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <div className="p-8 rounded-2xl shadow-lg h-full border bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-100 dark:bg-indigo-600 text-indigo-600 dark:text-white">
                    <Award size={22} />
                  </div>

                  <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {cert.title}
                </h3>

                <p className="text-indigo-600 font-medium mb-6">
                  {cert.issuer}
                </p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;