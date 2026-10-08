'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location?: string;
  summary?: string;
  achievements: string[];
  icon: JSX.Element;
  color: string;
};

const experiences: ExperienceItem[] = [
  {
    company: 'Olympiads.ai',
    position: 'Founding Engineer',
    period: 'Feb 2026 to Present',
    summary:
      'AI-powered platform for competitive-olympiad training. I own the backend, frontends, and cloud infrastructure end to end.',
    achievements: [
      'Built and own a Golang (Gin, Uber FX) backend on AWS ECS Fargate with PostgreSQL, Redis, S3, and CloudFront, provisioned with Terraform, plus both React/TypeScript frontends.',
      'Designed a backend behind 180+ REST endpoints over 96 migrations and 40+ tables, with Cognito OAuth, Stripe subscriptions, and an event-driven exam-grading pipeline on AWS SQS.',
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Azercell Telecom',
    position: 'Backend Developer',
    period: 'Jan 2026 to Present',
    summary: "Core dealer ecosystem for Azerbaijan's largest mobile network operator.",
    achievements: [
      'Built an internal dealer platform in Golang/Gin that 10,000+ active dealers use daily at sub-second latency.',
      'Integrated 4+ internal platforms into a unified microservices layer over Kafka and gRPC, cutting complex query latency by 45%, with hierarchy-based RBAC for 500+ administrative accounts.',
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    company: 'AZAI Tech LLC',
    position: 'Software Engineer',
    period: 'Oct 2024 to Dec 2025',
    location: 'Baku, Azerbaijan',
    summary:
      'Core developer across production AI products, owning LLM pipelines from design to deployment.',
    achievements: [
      'Cut response latency by 40% and reduced inference cost with Redis semantic caching over an embedding-similarity threshold.',
      'Designed an asynchronous, event-driven architecture on RabbitMQ, reaching 99%+ delivery durability with retry and back-pressure handling.',
      'Integrated OCR and LLM summary-generation modules into a government digitization platform, reaching 95%+ text-recognition accuracy.',
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-green-500 to-teal-500',
  },
  {
    company: 'Ecomart',
    position: 'Co-founder & CDO',
    period: 'Jun 2024 to Jan 2025',
    location: 'Baku, Azerbaijan',
    summary:
      'AI-driven inventory management startup focused on sustainability and data-driven decision-making. Awards are listed under Honors.',
    achievements: [],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-purple-500 to-cyan-500',
  },
  {
    company: 'Etaflex (San Jose, CA)',
    position: 'Freelance Backend Engineer',
    period: 'Jan 2024 to Oct 2024',
    location: 'Remote',
    summary:
      'Delivery management platform automating last-mile logistics for a US-based client.',
    achievements: [
      'Built a high-throughput ingestion service in Golang and Kafka for real-time GPS telemetry, enabling sub-second ETA calculations on AWS ECS Fargate.',
      'Built a fault-tolerant notification microservice in Java handling 50,000+ daily events at 99.5% reliability via AWS SNS/SES with SQS dead-letter queues.',
    ],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    company: 'PASHA Bank',
    position: 'Back End Developer Trainee',
    period: 'Apr 2023 to Jun 2023',
    location: 'Baku, Azerbaijan',
    achievements: [
      'Completed a DevZone training program in enterprise backend development with Java and Spring Boot.',
      'Built and tested a RESTful banking API with Spring Boot and PostgreSQL as a capstone project, covering user accounts, funds transfers, and transaction histories.',
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
          Professional Experience
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
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-gray-400">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </span>
                    {exp.location && (
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </span>
                    )}
                  </div>

                  {exp.summary && (
                    <p className="text-gray-400 italic mb-4">{exp.summary}</p>
                  )}

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