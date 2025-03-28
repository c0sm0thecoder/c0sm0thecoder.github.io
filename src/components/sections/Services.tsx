'use client';

import { motion } from 'framer-motion';
import { Globe, Bot } from 'lucide-react';

const services = [
  {
    title: 'Backend Systems Development',
    description: 'Designing and building scalable, high-performance backend systems, including RESTful and GraphQL APIs, and microservices.',
    icon: <Globe className="w-10 h-10 text-violet-500" />,
  },
  {
    title: 'Chatbot Development',
    description: 'Building intelligent chatbot systems, including RAG pipelines, for dynamic and context-aware interactions.',
    icon: <Bot className="w-10 h-10 text-cyan-500" />,
  },
  {
    title: 'Monolith to Microservices Migration',
    description: 'Helping you migrate your monolith apps into scalable and resilient microservices.',
    icon: <Bot className="w-10 h-10 text-teal-500" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#222] transition-colors duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 