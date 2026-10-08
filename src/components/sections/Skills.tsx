'use client';

import { motion } from 'framer-motion';

type Skill = { name: string; icon?: string; invert?: boolean };

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Golang', icon: '/icons/go.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'TypeScript/React', icon: '/icons/typescript.svg' },
      { name: 'SQL' },
      { name: 'C++ (familiar)' },
    ],
  },
  {
    title: 'Machine Learning & Deep Learning',
    skills: [
      { name: 'PyTorch' },
      { name: 'Hugging Face Transformers' },
      { name: 'scikit-learn' },
      { name: 'NumPy' },
      { name: 'pandas' },
      { name: 'Neural networks' },
      { name: 'Fine-tuning' },
      { name: 'Transfer learning' },
      { name: 'Model evaluation' },
    ],
  },
  {
    title: 'Natural Language Processing',
    skills: [
      { name: 'Natural Language Inference' },
      { name: 'Multilingual & low-resource NLP' },
      { name: 'BERT, mBERT, XLM-R' },
      { name: 'Tokenization' },
      { name: 'Word/sentence embeddings' },
      { name: 'Machine translation' },
      { name: 'RAG & Graph RAG' },
    ],
  },
  {
    title: 'LLMs & Generative AI',
    skills: [
      { name: 'Prompt engineering' },
      { name: 'LLM-as-Judge evaluation' },
      { name: 'LangChain, LangGraph', icon: '/icons/langchain.svg', invert: true },
      { name: 'Coding agents via ACP (Claude Code)' },
      { name: 'LiteLLM' },
      { name: 'Pinecone' },
      { name: 'Neo4j' },
      { name: 'FastAPI' },
    ],
  },
  {
    title: 'Experimental Design',
    skills: [
      { name: 'Ablations' },
      { name: 'Replicates' },
      { name: 'Paired significance testing (McNemar)' },
      { name: 'Noise-floor estimation' },
    ],
  },
  {
    title: 'Systems & Infrastructure',
    skills: [
      { name: 'Distributed systems' },
      { name: 'Kafka', icon: '/icons/kafka.svg' },
      { name: 'gRPC' },
      { name: 'Concurrency' },
      { name: 'AWS' },
      { name: 'Terraform' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
      { name: 'Redis', icon: '/icons/redis.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center px-3 py-1.5 bg-[#252525] text-gray-200 text-sm rounded-full"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt=""
                        aria-hidden="true"
                        className={`w-4 h-4 mr-2 object-contain ${skill.invert ? 'invert' : ''}`}
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
