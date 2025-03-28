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
      'Replaced WebSocket with RabbitMQ in microservices (JS, Python, C++), enhancing messaging durability.',
      'Implemented a JavaScript service (PM2-managed) for automated system change monitoring.',
      'Constructed a back-end service for AI software using Go’s Gin framework.',
      'Implemented modern CI/CD workflows, reducing deployment time by 60%'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Ecomart',
    position: 'Co-founder & CDO',
    period: 'Jun 2024 - Jan 2025',
    achievements: [
      'Co-founded an AI-driven inventory management startup focused on sustainability and data-driven decision-making.',
      'Secured 2nd place in the ”Green Fintech Startup Challenge” by the International Bank of Azerbaijan.',
      'Finalist in Google’s ”Build with AI for Sustainable Growth” hackathon in Kazakhstan.',
      'Finalist in the ”Global Green Startup Challenge” organized by SABAH.HUB and ABB at COP29.'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    company: 'PASHA Bank OJSC',
    position: 'Backend Development Trainee',
    period: 'Apr 2023 - June 2023',
    achievements: [
      'Participated in DevZone Learning Session which included intensive Java Spring Boot back-end development learning sessions, honing skills in building robust and scalable web applications.',
      'Acquired knowledge and skills in Java SE, OOP principles, Spring Boot, Building REST APIs, PostgreSQL, Databases in Web Applications, Unit testing with Spock.'
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c0c] to-[#0a0a0a] -z-10" />
      
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
          {/* Side timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 transform md:translate-x-[-50%]" />
          
          {/* Experience items */}
          {experiences.map((exp, index) => {
            // Create unique scroll progress for each item
            const startProgress = index / experiences.length;
            const endProgress = (index + 1) / experiences.length;
            
            const opacity = useTransform(
              scrollYProgress, 
              [startProgress - 0.1, startProgress, endProgress, endProgress + 0.1], 
              [0, 1, 1, 0]
            );
            
            const scale = useTransform(
              scrollYProgress,
              [startProgress - 0.2, startProgress, endProgress, endProgress + 0.2],
              [0.8, 1, 1, 0.8]
            );
            
            const y = useTransform(
              scrollYProgress,
              [startProgress - 0.2, startProgress, endProgress, endProgress + 0.2],
              [50, 0, 0, -50]
            );
            
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.company}
                style={{ opacity, scale, y }}
                className={`mb-16 relative ${isEven ? 'md:pl-0 md:pr-12 md:ml-auto md:mr-[50%]' : 'md:pl-12 md:pr-0 md:ml-[50%] md:mr-0'}`}
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
                
                {/* Timeline dot with pulse effect */}
                <div className={`absolute top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-[#0a0a0a] ${isEven ? 'md:right-[-2.5px]' : 'md:left-[-2.5px]'}`}>
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