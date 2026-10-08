"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 pt-16 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Kamal
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            M.S. Computer Science student, George Washington University
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            I research cost-aware and verified LLM inference and agentic LLM
            systems, and I build production backends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#research"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-center"
            >
              View Research
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-500/60 text-white px-8 py-3 rounded-full font-semibold text-center hover:bg-purple-500/10 transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 mb-4 md:mb-0"
        >
          <img
            src="/me.jpg"
            alt="Kamal Aghazada"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto border-4 border-purple-500/20"
          />
        </motion.div>
      </div>
    </section>
  );
}