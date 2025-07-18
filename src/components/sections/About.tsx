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
              I'm a results-oriented Backend Developer with over 2 years of experience in building and optimizing scalable, high-performance applications using Java and Go. I possess a strong foundation in core computer science and OOP principles, which I've applied through proven experience in developing robust microservices and working with SQL databases like PostgreSQL.
            </p>
            <p className="text-gray-300">
              I am adept at utilizing containerization with Docker and cloud platforms like AWS, and I am passionate about debugging complex issues and enhancing application performance. My experience spans across various domains including e-learning platforms, AI assistants, delivery systems, and document processing applications.
            </p>
            <p className="text-gray-300">
              I'm currently pursuing a Master's degree in Computer Science and Data Analytics through a dual degree program, building upon my Bachelor's degree in Computer Science where I graduated with a 98/100 CGPA.
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
              <p className="text-gray-400 mb-2">
                MS in Computer Science and Data Analytics - ADA University & George Washington University (2025-2027)
              </p>
              <p className="text-gray-400">
                BS in Computer Science - French-Azerbaijani University (2021-2025) • CGPA: 98/100
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p className="text-gray-400">
                English (Fluent), Azerbaijani (Native), French (Limited proficiency), German & Russian (Elementary)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <p className="text-gray-400">
                Backend Systems, Microservices Architecture, AI Integration, Performance Optimization, Cloud Platforms
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
