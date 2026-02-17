import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

export const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setStatus("loading");

    try {
      const result = await emailjs.sendForm(
        "service_m3lwfgr",
        "template_yokqcwt",
        form,
        "e_8JBv3TJE7jmid6a"
      );

      console.log("EmailJS SUCCESS:", result);

      setStatus("success");
      form.reset();

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.log("EmailJS ERROR:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 relative">

        {/* Toast Notifications */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl z-50"
            >
              🎉 Message Sent Successfully!
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="fixed top-6 right-6 bg-red-500 text-white px-6 py-4 rounded-xl shadow-xl z-50"
            >
              ❌ Failed to send message. Try again.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="md:w-1/3 space-y-8">

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 dark:bg-indigo-600 p-3 rounded-lg text-indigo-600 dark:text-white">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  nayanala2861@gmail.com
                </p>
              </div>
            </div>

            {/* Phone Section (Commented Out Safely) */}
            {/*
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 dark:bg-indigo-600 p-3 rounded-lg text-indigo-600 dark:text-white">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +1 XXX XXX XXXX
                </p>
              </div>
            </div>
            */}

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 dark:bg-indigo-600 p-3 rounded-lg text-indigo-600 dark:text-white">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Columbia, South Carolina
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="md:w-2/3 bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">

            <form className="space-y-6" onSubmit={sendEmail}>

              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

