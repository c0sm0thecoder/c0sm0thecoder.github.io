'use client';

import { motion } from 'framer-motion';
import { Calendar, FileText, FlaskConical } from 'lucide-react';

const publications = [
  {
    authors: 'K. Aghazada.',
    title:
      'Localized Span Editing: When Does Partial Regeneration Pay? Inference-Time Correction with a Cost-Aware Router.',
    venue: 'Manuscript in preparation for submission to ICML 2027.',
  },
];

const research = [
  {
    title: 'Localized Span Editing: Cost-Aware Inference-Time LLM Correction',
    affiliation: 'Independent research, sole author',
    period: '2025 to Present',
    points: [
      'Formalized partial regeneration as localized span editing: sentence partitioning with exact character offsets, rule-based NLI span critique, and a right-to-left splice with a provable order-safety property.',
      'In a pilot on the GAIA benchmark with Llama 3.3 70B, editing only the flagged spans cost 2.8x more than redrafting the whole response. Working out why (every span edit re-sends the full answer and evidence as context) became the central result of the project.',
      'Derived a break-even bound k* on the number of editable spans, which captures the input-cost overhead of localized correction and the provider\'s output/input price ratio, and built a cost-aware router that uses it to choose between local editing and full redrafting in each revision round.',
      'Validated the bound across two model providers (GPT-4o, Llama 3.3 70B) and three benchmark regimes (curated factual QA and MultiWOZ, with GAIA as a noise-floor control): quality gains when few spans are flagged, and the predicted 2.1x to 3.2x cost inversion in high-error dialogue.',
      'Grew out of a multi-agent LLM evaluation harness (planner, retrieval, response, critic, and deciding agents) built in Guided Research with Prof. Stephen Kaisler (GWU, Summer 2026). Python harness with a 200+ test suite, LiteLLM multi-provider backend, and deterministic JSONL/SQLite logging; ablations, replicates, and paired significance tests (McNemar).',
      'I designed, directed, and validated the research, using AI tools to speed up implementation.',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'M.S. Thesis: Azerbaijani Natural Language Inference Resources',
    affiliation:
      'ADA University and George Washington University. Advisor: Prof. Samir Rustamov',
    period: '2025 to Present',
    points: [
      'Building the first large-scale Azerbaijani natural language inference resources (AzNLI, AzMNLI, AzXNLI) for evaluating entailment, contradiction, and neutral relations across general, multi-domain, and cross-lingual settings.',
      'Designing a hybrid construction pipeline: machine-translating MNLI and XNLI into Azerbaijani with native-speaker validation and post-editing, plus an independently authored native test set to quantify translation artifacts.',
      'Benchmarking multilingual and Azerbaijani-capable models (mBERT, XLM-R, and instruction-tuned LLMs) and analyzing the generalization gap between machine-translated and natively authored evaluation data.',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'LLM Evaluation and Retrieval-Augmented Generation',
    affiliation: 'AZAI Tech and independent work',
    period: '2024 to 2026',
    points: [
      'Designed and ran experiments with an LLM-as-judge evaluation framework, scoring model outputs on relevance, specificity, accuracy, and grounding to drive systematic model improvement.',
      'Built an agentic Graph RAG assistant (Neo4j knowledge graph and Pinecone vector store) and used LLM-as-judge evaluation to raise the grounding score from 1.6 to 4.8/5 and the citation rate from 60% to 100% over a no-retrieval baseline.',
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'B.S. Thesis: Document Processing with OCR and LLMs',
    affiliation: 'French-Azerbaijani University (UFAZ), conducted at AZAI Tech',
    period: 'Oct 2024 to Jun 2025',
    points: [
      'Built an end-to-end pipeline that ingests scanned documents, applies image preprocessing (denoising, deskewing) and OCR (Tesseract, PaddleOCR/EasyOCR) to extract text at 95%+ recognition accuracy.',
      'Segmented the extracted text into semantic chunks and summarized it with a self-hosted Llama 3.3 model, using retrieval-augmented generation to ground summaries in the source documents.',
      'Evaluated summarization quality with ROUGE metrics and human assessment, and deployed the OCR and summarization modules (Python, Node.js, and C++ services) in a production government digitization platform.',
    ],
    color: 'from-purple-500 to-cyan-500',
  },
  {
    title: 'Undergraduate Research Project: 3D Tooth Segmentation',
    affiliation:
      'French-Azerbaijani University (UFAZ). Advisor: Prof. Nahla El Kadhi. Team of four',
    period: 'Jan 2024 to May 2024',
    points: [
      'Comparative analysis of two deep learning approaches to 3D tooth segmentation: a fully automatic CNN-based system for cone-beam CT (CBCT) images and TSegFormer, a geometry-guided 3D transformer over intraoral-scan (IOS) point clouds.',
      'Compared the methods across architecture, dataset scale, and reported segmentation accuracy, and identified hybrid CBCT and IOS pipelines as a promising direction.',
    ],
    color: 'from-pink-500 to-purple-500',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Research
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-xl p-6 border-l-4 border-purple-500"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-400" />
              Publications
            </h3>
            <ul className="space-y-3">
              {publications.map((pub) => (
                <li key={pub.title} className="text-gray-300">
                  {pub.authors} <span className="italic">{pub.title}</span>{' '}
                  <span className="text-gray-400">{pub.venue}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Research experience */}
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white`}
                >
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                  <p className="text-purple-400 text-sm md:text-base">{item.affiliation}</p>
                  <div className="flex items-center mt-1 text-gray-400 text-sm">
                    <Calendar size={14} className="mr-2" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-purple-500">▹</span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
