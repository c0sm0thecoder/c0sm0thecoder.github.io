"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  Github,
  Code,
  Server,
  Bot,
  MessageSquareText,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const projects = [
  {
    title: "RAG News Analyst",
    description:
      "Architected and built an end-to-end news analysis platform that leverages a Retrieval-Augmented Generation (RAG) architecture to produce nuanced, AI-driven insights from real-time news streams. The system was engineered with a durable, streaming data pipeline for scalable information ingestion and featured an efficient API for seamless communication and retrieval of the generated analysis.",
    tech: [
      "Node.js",
      "TypeScript",
      "Google Gemini API",
      "Kafka",
      "Pinecone",
      "Apollo GraphQL",
      "Docker",
    ],
    metrics: [
      "Real-time news stream processing",
      "Scalable RAG architecture",
      "AI-driven insight generation",
    ],
    icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />,
    github: "https://github.com/c0sm0thecoder/rag-news-analyst",
    image: "",
  },
  {
    title: "CLI Based Group Chat Application",
    description:
      "Developed a robust, real-time chat application from the ground up, featuring secure, token-based user authentication and persistent message history. The system was designed with a scalable backend architecture to handle real-time message broadcasting efficiently across multiple clients. A user-friendly command-line interface was created to ensure a seamless and interactive experience directly from the terminal.",
    tech: ["Go", "Cobra", "WebSocket", "Redis Pub/Sub", "PostgreSQL", "GORM", "JWT"],
    metrics: [
      "Zero message loss with persistent storage",
      "Real-time message broadcasting",
      "Secure JWT-based authentication",
    ],
    icon: (
      <MessageSquareText className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
    ),
    github: "https://github.com/c0sm0thecoder/cli-chat-app",
    image: "/previews/cli-chat-app.png",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      prevProject();
    } else if (info.offset.x < -swipeThreshold) {
      nextProject();
    }
  };

  const prevIndex =
    activeProject === 0 ? projects.length - 1 : activeProject - 1;
  const nextIndex =
    activeProject === projects.length - 1 ? 0 : activeProject + 1;

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12"
        >
          Featured Projects
        </motion.h2>

        {/* Mobile Carousel - Only visible on mobile */}
        <div className="md:hidden relative mb-6">
          {/* Navigation controls moved outside the carousel container */}
          <div className="flex justify-between mb-4">
            <button
              onClick={prevProject}
              className="bg-[#1a1a1a] p-2 rounded-lg hover:bg-[#252525] transition-colors flex items-center"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 text-purple-400" />
              <span className="sr-only">Previous</span>
            </button>
            
            <div className="text-sm font-medium text-gray-400">
              {activeProject + 1}/{projects.length}
            </div>
            
            <button
              onClick={nextProject}
              className="bg-[#1a1a1a] p-2 rounded-lg hover:bg-[#252525] transition-colors flex items-center"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 text-purple-400" />
              <span className="sr-only">Next</span>
            </button>
          </div>

          {/* Carousel Container with Swipe Support */}
          <motion.div
            ref={carouselRef}
            className="relative w-full overflow-visible touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={handleDragEnd}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div className="flex justify-center items-center">
              {/* Active Project (Full Size) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1a1a1a] rounded-xl p-4 border-2 border-purple-500/30 shadow-lg w-full"
                >
                  <div className="flex items-center mb-3">
                    <div className="mr-3 p-2 bg-[#252525] rounded-lg">
                      {projects[activeProject].icon}
                    </div>
                    <h3 className="text-lg font-bold">
                      {projects[activeProject].title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-300 mb-3">
                    {projects[activeProject].description}
                  </p>

                  {/* Show all tech stack items */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center">
                      <Code className="w-4 h-4 mr-1 text-purple-400" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {projects[activeProject].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-[#252525] text-purple-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code sample or image preview in mobile */}
                  <details className="group mb-3">
                    <summary className="text-sm font-semibold mb-2 flex items-center cursor-pointer list-none">
                      <Code className="w-4 h-4 mr-1 text-purple-400" />
                      <span>
                        {projects[activeProject].image
                          ? "Preview"
                          : "Code Sample"}
                      </span>
                      <ChevronRight className="ml-2 w-3 h-3 transition-transform group-open:rotate-90" />
                    </summary>

                    <div className="mt-2">
                      {projects[activeProject].image !== "" ? (
                        // Show image if available
                        <div className="bg-[#252525] rounded-lg p-2 overflow-hidden">
                          <img
                            src={projects[activeProject].image}
                            alt={`${projects[activeProject].title} preview`}
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        </div>
                      ) : (
                        // Otherwise show code sample
                        <div className="bg-[#252525] rounded-lg p-2 font-mono text-xs overflow-x-auto">
                          <pre className="text-gray-300 whitespace-pre-wrap">
                            {activeProject === 0
                              ? `// Sample query
query {
  askQuestion(query: "What is AI?") {
    answer
    sources {
      title
      url
    }
  }
}

// Answer
{
  "data": {
    "askQuestion": {
      "answer": "AI is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity, and autonomy ("What Is Artificial Intelligence (AI)? | IBM")...",
      "sources": [
        {
          "title": "What is AI, and how do programmes like ChatGPT and DeepSeek work?",
          "url": "https://www.bbc.com/news/technology-65855333",
          "source": "www.bbc.com",
          "date": "2025-02-18"
        },
        {
          "title": "What Is Artificial Intelligence (AI)? | Google Cloud",
          "url": "https://cloud.google.com/learn/what-is-artificial-intelligence?hl=en",
          "source": "cloud.google.com",
          "date": "2024-02-29"
        },
        {
          "title": "What Is Artificial Intelligence (AI)? | IBM",
          "url": "https://www.ibm.com/think/topics/artificial-intelligence",
          "source": "www.ibm.com",
          "date": "2024-11-06"
        }
      ]
    }
  }
}`
                              : `// API endpoint
app.get('/api/analytics', async (req, res) => {
  try {
    const cached = await redis.get(\`stats:\${req.query.id}\`);
    if (cached) return res.json(JSON.parse(cached));
    
    const results = await AnalyticsModel.aggregate([
      { $match: { clientId: req.query.id } },
      { $limit: 1000 }
    ]);
    
    await redis.set(\`stats:\${req.query.id}\`, JSON.stringify(results));
    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});`}
                          </pre>
                        </div>
                      )}
                    </div>
                  </details>

                  {/* GitHub link only - project counter moved to top */}
                  <div className="flex items-center justify-end">
                    <motion.a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center bg-[#252525] px-2 py-1 rounded-lg"
                    >
                      <Github size={14} className="mr-1 text-purple-400" />
                      <span className="text-xs text-purple-400">
                        Repository
                      </span>
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-2 h-2 rounded-full ${
                  activeProject === index ? "bg-purple-500" : "bg-gray-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Desktop Project selector tabs */}
          <div className="md:col-span-1">
            <div className="bg-[#1a1a1a] rounded-xl p-4 sticky top-24">
              {projects.map((project, index) => (
                <motion.button
                  key={project.title}
                  className={`w-full text-left mb-3 p-3 rounded-lg flex items-center transition-all ${
                    activeProject === index
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-l-4 border-purple-500"
                      : "hover:bg-[#222] border-l-4 border-transparent"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ x: 5 }}
                >
                  <div className="mr-3">{project.icon}</div>
                  <span className="font-medium truncate">{project.title}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Project details */}
          <div className="md:col-span-3">
            <motion.div
              key={`detail-${activeProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1a1a] rounded-xl p-5 md:p-8"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="mr-3 md:mr-4 p-2 md:p-3 bg-[#252525] rounded-lg">
                  {projects[activeProject].icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  {projects[activeProject].title}
                </h3>
              </div>

              <p className="text-sm md:text-base text-gray-300 mb-5 md:mb-6">
                {projects[activeProject].description}
              </p>

              {/* Performance metrics */}
              <div className="mb-5 md:mb-6">
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center">
                  <Server className="w-4 h-4 md:w-5 md:h-5 mr-2 text-purple-400" />{" "}
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
                  {projects[activeProject].metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-[#252525] p-2 md:p-3 rounded-lg text-center"
                    >
                      <span className="text-sm md:text-base text-purple-400 font-mono">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology stack */}
              <div className="mb-5 md:mb-6">
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center">
                  <Code className="w-4 h-4 md:w-5 md:h-5 mr-2 text-purple-400" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {projects[activeProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 md:px-3 md:py-1 bg-[#252525] text-purple-400 text-xs md:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code sample or image */}
              <div className="mb-5 md:mb-6">
                <details className="group">
                  <summary className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center cursor-pointer list-none">
                    <Code className="w-4 h-4 md:w-5 md:h-5 mr-2 text-purple-400" />
                    <span>
                      {projects[activeProject].image
                        ? "Preview"
                        : "Code Sample"}
                    </span>
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform group-open:rotate-90" />
                  </summary>

                  <div className="mt-2">
                    {projects[activeProject].image !== "" ? (
                      // Show image if available
                      <div className="bg-[#252525] rounded-lg p-3 md:p-4 overflow-hidden">
                        <img
                          src={projects[activeProject].image}
                          alt={`${projects[activeProject].title} preview`}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    ) : (
                      // Otherwise show code sample
                      <div className="bg-[#252525] rounded-lg p-2 md:p-4 font-mono text-xs md:text-sm overflow-x-auto">
                        <pre className="text-gray-300 whitespace-pre-wrap md:whitespace-pre">
                          {activeProject === 0
                            ? `// Sample query
query {
  askQuestion(query: "What is AI?") {
    answer
    sources {
      title
      url
      source
      date
    }
  }
}

// Answer
{
  "data": {
    "askQuestion": {
      "answer": "AI is technology that enables computers and machines to simulate human learning,
      comprehension, problem solving, decision making, creativity, and autonomy ("What Is Artificial
      Intelligence (AI)? | IBM"). It allows computers to learn and solve problems in ways that can
      seem human, processing large amounts of data, identifying patterns, and following detailed instructions
      to replicate how people acquire and use knowledge ("What is AI, and how do programmes like ChatGPT
      and DeepSeek work?"). AI is used for personalizing social media feeds to powering medical breakthroughs
      and has become an increasing part of everyday life ("What is AI, and how do programmes like ChatGPT
      and DeepSeek work?"). A simple way to think about AI is as a series of nested or derivative concepts
      that have emerged over more than 70 years. Directly underneath AI is machine learning, which involves
      creating models by training an algorithm to make predictions or decisions based on data. It encompasses
      a broad range of techniques that enable computers to learn from and make inferences based on data
      without being explicitly programmed for specific tasks ("What Is Artificial Intelligence (AI)? | IBM").
      SOURCES: What is AI, and how do programmes like ChatGPT and DeepSeek work?; What Is Artificial
      Intelligence (AI)? | IBM",
      "sources": [
        {
          "title": "What is AI, and how do programmes like ChatGPT and DeepSeek work?",
          "url": "https://www.bbc.com/news/technology-65855333",
          "source": "www.bbc.com",
          "date": "2025-02-18"
        },
        {
          "title": "What Is Artificial Intelligence (AI)? | Google Cloud",
          "url": "https://cloud.google.com/learn/what-is-artificial-intelligence?hl=en",
          "source": "cloud.google.com",
          "date": "2024-02-29"
        },
        {
          "title": "What Is Artificial Intelligence (AI)? | IBM",
          "url": "https://www.ibm.com/think/topics/artificial-intelligence",
          "source": "www.ibm.com",
          "date": "2024-11-06"
        }
      ]
    }
  }
}`
                            : `// API endpoint
app.get('/api/analytics/realtime', async (req, res) => {
  try {
    const cachedData = await redisClient.get(\`analytics:\${req.query.id}\`);
    if (cachedData) return res.json(JSON.parse(cachedData));
    
    // Fall back to database
    const results = await AnalyticsModel.aggregate([
      { $match: { clientId: req.query.id } },
      { $limit: 1000 }
    ]);
    
    await redisClient.set(\`analytics:\${req.query.id}\`, JSON.stringify(results));
    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});`}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <motion.a
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1 text-purple-500 bg-[#252525] px-3 py-2 rounded-lg"
                >
                  <Github size={16} className="mr-1" />
                  <span className="text-sm md:text-base">View Repository</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
