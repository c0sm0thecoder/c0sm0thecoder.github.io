'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'AZAI TECH LLC',
    position: 'Software Engineer',
    period: 'Oct 2024 - Present',
    achievements: [
      'Resolved a critical performance bottleneck by redesigning a hierarchical data query in PostgreSQL, leveraging a Common Table Expression (CTE) to achieve a 60-fold improvement in data loading speed.',
      'Integrated a biometric identification SDK using Java 11 to build a secure user authentication system, establishing a verification process with a 99.9999999% success rate.',
      'Developed a scalable backend for the "TAIM" e-learning platform using Golang, orchestrating AWS services (Cognito, MediaConvert, S3) for user management and media processing, all managed behind an NGINX reverse proxy.',
      'Engineered a Finite State Machine in Golang to manage the e-learning platform\'s complex user workflow, reducing state management bugs by 95% and ensuring a consistent user experience.',
      'Built a high-throughput backend service for "VokalAI", an advanced AI assistant working with both audio and text inputs, using the Gin framework in Golang, MinIO for efficient object storage, RabbitMQ for interservice communication, and PostgreSQL for data storage.',
      'Overhauled the communication layer for a document summarizer by replacing WebSockets with RabbitMQ, ensuring 99%+ messaging durability across a polyglot microservice environment of JavaScript, Python, and C++.',
      'Developed and fine-tuned Optical Character Recognition (OCR) pipelines for a document summarizer, using Python for rapid prototyping and C++ for performance-critical components to achieve over 95% accuracy.'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'EtaFlex',
    position: 'Junior Software Engineer',
    period: 'Feb 2024 - Oct 2024',
    achievements: [
      'Designed and built a real-time package tracking system for a delivery service in Java with GPS integration and ETA calculations, leading to a 30% reduction in customer support calls regarding delivery status.',
      'Implemented a driver tracking feature using MQTT and the Mosquitto broker, ensuring 100% location data capture in areas with poor connectivity and reducing driver phone battery consumption by 20%.',
      'Developed a complex delivery state management system using Celery tasks, automating over 98% of state transitions for rush, scheduled, and recurring orders.',
      'Created a notification system in Java to handle over 50,000 daily delivery status updates with a 99.5% delivery success rate across SMS, email, and push notifications.',
      'Implemented a package scanning and sorting system in Java, increasing package processing throughput by 25% while reducing sorting errors by 90%.'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    company: 'PASHA Bank OJSC',
    position: 'Backend Developer Trainee',
    period: 'Apr 2023 - June 2023',
    achievements: [
      'Completed an intensive DevZone training program focused on enterprise-level backend development, honing skills in building robust and scalable web applications with Java and Spring Boot.',
      'Acquired knowledge and skills in Java SE, OOP principles, Spring Boot, Building RESTful APIs, PostgreSQL, Databases in Web Applications, Unit testing with Spock.',
      'Applied these skills in a capstone project by developing and testing a RESTful banking API, using Spring Boot and PostgreSQL to manage user accounts, funds transfers, and transaction histories.'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-green-500 to-teal-500',
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>
        
        <div ref={containerRef} className="max-w-5xl mx-auto relative">
          {/* Side timeline - ONLY visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 transform translate-x-[-50%]" />
          
          {/* Experience items */}
          {experiences.map((exp, index) => {
            // Create unique scroll progress for each item
            const startProgress = index / experiences.length;
            const endProgress = (index + 1) / experiences.length;
            
            const opacity = useTransform(
              scrollYProgress, 
              [startProgress - 0.3, startProgress, endProgress, endProgress + 0.3], 
              [0, 1, 1, 0]
            );
            
            const scale = useTransform(
              scrollYProgress,
              [startProgress - 0.2, startProgress, endProgress, endProgress + 0.2],
              [0.8, 1, 1, 0.8]
            );
            
            const y = useTransform(
              scrollYProgress,
              [startProgress - 0.4, startProgress, endProgress, endProgress + 0.4],
              [50, 0, 0, -50]
            );
            
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.company}
                style={{ opacity, scale, y }}
                className={`mb-8 md:mb-16 relative w-full ${
                  isEven 
                    ? 'md:w-[calc(50%-24px)] md:ml-auto md:mr-[50%] md:pr-12 md:pl-0' 
                    : 'md:w-[calc(50%-24px)] md:ml-[50%] md:mr-0 md:pl-12 md:pr-0'
                }`}
              >
                <motion.div
                  whileHover={{ translateY: -5 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center text-white`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-purple-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="mr-2 text-purple-500">▹</span>
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Timeline dot with pulse effect - ONLY visible on desktop */}
                <div className={`hidden md:block absolute top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-[#0a0a0a] ${isEven ? 'right-[-2.5px]' : 'left-[-2.5px]'}`}>
                  <span className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-50"></span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}