"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 pt-16 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Kamal
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Software Developer
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
          I build clean, reliable backend systems that fuel business growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold"
            onClick={() => window.location.href = '#contact'}
          >
            Let's Connect
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <img
            src="/me.jpg"
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto border-4 border-purple-500/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
