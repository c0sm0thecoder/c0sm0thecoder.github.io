"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Code,
  Server,
  Bot,
  MessageSquareText,
} from "lucide-react";

const projects = [
  {
    title: "RAG News Analyst",
    description:
      "Developed a news analysis system using RAG pipelines for summarization and sentiment analysis.",
    tech: [
      "Node.js",
      "TypeScript",
      "Kafka",
      "Pinecone vector DB",
      "Apollo GraphQL",
      "Docker",
      "Google Gemini API",
    ],
    metrics: [
      "~500ms-2s response time",
      "~500 simultaneous queries",
      "~1000 requests/minute handling capacity",
    ],
    icon: <Bot className="w-8 h-8 text-cyan-500" />,
    github: "https://github.com/c0sm0thecoder/rag-news-analyst",
    image: null,
  },
  {
    title: "CLI Based Chat Application",
    description:
      "Developed a robust CLI chat application that lets users create custom chat rooms and connect with your friends.",
    tech: ["Go", "Websocket", "Redis Pub/Sub", "PostgreSQL", "GORM", "tview"],
    metrics: [
      "Zero message loss with persistent storage",
      "20-50ms avg response time for auth operations",
    ],
    icon: <MessageSquareText className="w-8 h-8 text-purple-500" />,
    github: "https://github.com/c0sm0thecoder/cli-chat-app",
    image: "/previews/cli-chat-app.png",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Project selector tabs */}
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
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1a1a] rounded-xl p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-[#252525] rounded-lg">
                  {projects[activeProject].icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {projects[activeProject].title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6">
                {projects[activeProject].description}
              </p>

              {/* Performance metrics */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-purple-400" />{" "}
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {projects[activeProject].metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-[#252525] p-3 rounded-lg text-center"
                    >
                      <span className="text-purple-400 font-mono">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code sample or image */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-purple-400" />
                  {projects[activeProject].image ? "Preview" : "Sample"}
                </h4>

                {projects[activeProject].image ? (
                  // Show image if available
                  <div className="bg-[#252525] rounded-lg p-4 overflow-hidden">
                    <img
                      src={projects[activeProject].image}
                      alt={`${projects[activeProject].title} preview`}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                ) : (
                  // Otherwise show code sample
                  <div className="bg-[#252525] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
                      {`
${
  activeProject === 0
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
}
    `
    : activeProject === 1
    ? `app.get('/api/analytics/realtime', async (req, res) => {
  try {
    // Use Redis cache for high performance
    const cachedData = await redisClient.get(\`analytics:\${req.query.id}\`);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }
    
    // Fall back to database if not in cache
    const results = await AnalyticsModel.aggregate([
      { $match: { clientId: req.query.id } },
      { $sort: { timestamp: -1 } },
      { $limit: 1000 }
    ]);
    
    // Cache results for future requests
    await redisClient.set(
      \`analytics:\${req.query.id}\`, 
      JSON.stringify(results),
      'EX', 30
    );
    
    return res.json(results);
  } catch (error) {
    console.error('Analytics error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});`
    : activeProject === 2
    ? `@Service
public class AuthenticationService {
    private final JwtTokenProvider tokenProvider;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public AuthenticationResponse authenticate(AuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new AuthenticationException("Invalid credentials"));
            
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new AuthenticationException("Invalid credentials");
        }
        
        // Check if MFA is required
        if (user.isMfaEnabled()) {
            return handleMfaAuthentication(user, request);
        }
        
        String token = tokenProvider.generateToken(user);
        return new AuthenticationResponse(token, user);
    }
    
    // Additional methods omitted for brevity
}`
    : `def process_data_pipeline():
    """Main ETL pipeline for processing 2TB+ of daily data"""
    
    # Read data from various sources
    source_data = spark.read.parquet("s3://data-lake/raw/")
    
    # Apply transformations in parallel
    transformed = source_data.repartition(200).mapPartitions(transform_batch)
    
    # Perform aggregations
    daily_aggregations = transformed.groupBy("date", "category").agg(
        F.count("id").alias("total_records"),
        F.sum("value").alias("total_value"),
        F.avg("processing_time").alias("avg_processing_time")
    )
    
    # Write results to data warehouse
    daily_aggregations.write.partitionBy("date").format("parquet") \
        .mode("overwrite").save("s3://data-warehouse/daily/")`
}`}
                    </pre>
                  </div>
                )}
              </div>

              {/* Technology stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#252525] text-purple-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <motion.a
                  href={projects[activeProject].github}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-1 text-purple-500"
                >
                  <Github size={18} />
                  <span>Repository</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
