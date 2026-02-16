import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">

        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >

          {/* Name + tagline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              SupriyaNayanala.dev
            </h2>
            <p className="text-gray-400">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">

            {/* GitHub */}
            <motion.a
              href="https://github.com/snayanala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/supriyanayanala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>


            {/* Email */}
            <motion.a
              href="mailto:nayanala2861@email.com"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <Mail size={24} />
            </motion.a>

          </div>

        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} Supriya Nayanala. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};
