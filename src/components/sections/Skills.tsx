'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Go', icon: '/icons/go.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Node.js', icon: '/icons/node.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'Spring Boot', icon: '/icons/spring.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Django', icon: '/icons/django.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'Redis', icon: '/icons/redis.svg' },
  { name: 'MinIO', icon: '/icons/minio.svg' },
  { name: 'GraphQL', icon: '/icons/graphql.svg' },
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'RabbitMQ', icon: '/icons/rabbitmq.svg' },
  { name: 'Kafka', icon: '/icons/kafka.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0, 
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 0 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { 
                  duration: 0,
                  ease: "easeOut" 
                }
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-15 h-15 object-contain" 
                  onError={(e) => {
                    // Fallback for missing icons
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=random&color=fff&size=60&length=1&bold=true`;
                  }}
                />
              </div>
              <span className="text-center text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}