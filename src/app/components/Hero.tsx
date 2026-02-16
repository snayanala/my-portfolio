import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import animeAvatar from "../../assets/Suppu.jpg";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  /* ---------------- Typing Setup ---------------- */
  const nameText = "Hi, I'm Supriya Nayanala.";
  const welcomeText = "Welcome to my portfolio.";
  const typingSpeed = 40;

  const [typedName, setTypedName] = useState("");
  const [typedWelcome, setTypedWelcome] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);

  /* ---------------- Typing Animation ---------------- */
  useEffect(() => {
    if (!isInView) return;

    let nameIndex = 0;

    const typeName = setInterval(() => {
      nameIndex++;
      setTypedName(nameText.slice(0, nameIndex));
      if (nameIndex >= nameText.length) {
        clearInterval(typeName);

        // Pause before second line
        setTimeout(() => {
          let welcomeIndex = 0;

          const typeWelcome = setInterval(() => {
            welcomeIndex++;
            setTypedWelcome(welcomeText.slice(0, welcomeIndex));
            if (welcomeIndex >= welcomeText.length) {
              clearInterval(typeWelcome);
              setShowSubtitle(true);
            }
          }, typingSpeed);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(typeName);
  }, [isInView]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 pt-32 md:pt-36 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight min-h-[180px]">
            
            {/* Name Typing */}
            <div className="relative inline-block">
              {typedName}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block ml-1 w-[3px] h-8 md:h-12 bg-indigo-600 align-middle rounded"
              />
            </div>

            {/* Welcome Typing */}
            <div className="mt-2 text-gray-900 dark:text-white">
              {typedWelcome}
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-lg mx-auto md:mx-0"
          >
            A Graduate Computer Science student focused on Frontend Development,
            Data Analytics, and exploring Generative AI.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <a
              href="#projects"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition"
            >
              View My Work
            </a>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-500">
            <a
              href="https://github.com/snayanala"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/supriyanayanala"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:nayanala2861@gmail.com"
              className="hover:text-indigo-600 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[600px]">

            <div className="absolute inset-0 bg-indigo-200 rounded-3xl rotate-6 opacity-40"></div>

            <img
              src={animeAvatar}
              alt="Supriya Nayanala"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-400" />
      </motion.div>
    </section>
  );
};

