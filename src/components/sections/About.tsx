"use client";

import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";

const education = [
  {
    degree: "M.S. in Computer Science and Data Analytics (dual degree)",
    school: "George Washington University and ADA University",
    period: "Sep 2025 to Jun 2027",
    detail:
      "Thesis: Development of Azerbaijani Resources for Natural Language Inference (AzNLI, AzMNLI, AzXNLI). Advisor: Prof. Samir Rustamov.",
  },
  {
    degree: "B.S. in Computer Science, GPA 98/100",
    school: "French-Azerbaijani University (UFAZ), with the University of Strasbourg",
    period: "Sep 2021 to Jul 2025",
    detail:
      "Thesis: Automated Document Processing and Summarization using OCR and Large Language Models.",
  },
];

const interests = [
  "Cost-aware and verified LLM inference",
  "Agentic LLM systems, including AI coding agents",
  "Evaluation of large language models",
  "Natural language inference",
  "Low-resource and multilingual NLP (Azerbaijani, Turkish)",
];

const leadership = [
  {
    role: "Organizer",
    org: "AWS User Group Baku",
    period: "Sep 2025 to Present",
  },
  {
    role: "Captain",
    org: "AWS Student Builder Group, ADA University",
    period: "Nov 2025 to Present",
  },
];

const honors = [
  "2024: Azercell Student Bursary winner (top 10 nationwide)",
  "2024: Green Fintech Startup Challenge, 2nd place (International Bank of Azerbaijan), with Ecomart",
  "2024: Global Green Startup Challenge at COP29, finalist (SABAH.HUB and ABB), with Ecomart",
  "2024: Google \"Build with AI for Sustainable Growth\" Hackathon, finalist (Kazakhstan), with Ecomart",
  "2023: University of Strasbourg Summer School, selected for academic excellence",
  "2022: PASHA Cup IV, finalist",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-300">
              I am an M.S. student in Computer Science at George Washington
              University, in a dual-degree program with ADA University (M.S. in
              Computer Science and Data Analytics, Sep 2025 to Jun 2027). Before
              that, I completed a B.S. in Computer Science at the
              French-Azerbaijani University (UFAZ), a program run with the
              University of Strasbourg, with a GPA of 98/100.
            </p>
            <p className="text-gray-300">
              My research treats inference-time methods for large language
              models as systems with real costs. In my current independent
              project, I study when regenerating only the flagged sentences of
              an LLM answer is cheaper than redrafting the whole answer, and I
              use a simple cost model to choose between the two. My M.S. thesis
              builds natural language inference resources for Azerbaijani, a
              low-resource language.
            </p>
            <p className="text-gray-300">
              I also work as a backend engineer. I have built production
              services in Go and Java, including a dealer platform at Azercell
              and the backend and cloud infrastructure at Olympiads.ai. My
              interest in the cost of LLM inference started with production LLM
              work at AZAI Tech, where Redis semantic caching cut response
              latency by 40%.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="text-gray-200 font-medium">{edu.degree}</p>
                    <p className="text-gray-400">
                      {edu.school}, {edu.period}
                    </p>
                    <p className="text-gray-500 text-sm">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Research Interests</h3>
              <ul className="space-y-1">
                {interests.map((interest) => (
                  <li key={interest} className="flex items-start text-gray-400">
                    <span className="mr-2 text-purple-500">▹</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p className="text-gray-400">
                Azerbaijani (native); English and Turkish (full professional);
                French (intermediate); Russian and German (elementary)
              </p>
            </div>
          </motion.div>
        </div>

        {/* Leadership & Honors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              Leadership
            </h3>
            <ul className="space-y-3">
              {leadership.map((item) => (
                <li key={item.org}>
                  <p className="text-gray-200 font-medium">
                    {item.role}, {item.org}
                  </p>
                  <p className="text-gray-500 text-sm">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-cyan-400" />
              Honors
            </h3>
            <ul className="space-y-2">
              {honors.map((honor) => (
                <li key={honor} className="flex items-start text-gray-400 text-sm">
                  <span className="mr-2 text-purple-500">▹</span>
                  <span>{honor}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
