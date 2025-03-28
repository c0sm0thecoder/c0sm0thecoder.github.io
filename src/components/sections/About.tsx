"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-300">
              I'm a dedicated software developer specializing in backend
              development. I thrive on tackling complex challenges and designing
              scalable solutions that optimize performance and ensure
              robustness.
            </p>
            <p className="text-gray-300">
              By integrating AI into my systems, I continuously push the
              boundaries of what's possible in software engineering. I have
              experience with a variety of programming languages and frameworks,
              including Node.js, Python, Go, and Java.
            </p>
            <p className="text-gray-300">
              I'm currently pursuing a degree in Computer Science and am
              passionate about learning new technologies and methodologies to
              stay ahead of the curve in the ever-evolving tech landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">
                BS in Computer Science - French-Azerbaijani University
                (2021-2025)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p className="text-gray-400">
                English (Fluent), Azerbaijani (Native), French (Intermediate),
                Russian (Elementary)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <p className="text-gray-400">
                Backend Systems, AI-Driven Integrations, RAG Techniques, Chatbot
                Development
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
