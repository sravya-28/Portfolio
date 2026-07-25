'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, CheckCircle2, UserCheck, Sparkles, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Combining <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">AI & ML Rigor</span> with Modern Web Development
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Passionate about transforming raw data, deep neural networks, and web standards into high-performance, real-world software solutions.
          </p>
        </div>

        {/* Grid Layout: Main Bio + Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Extensive Bio & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Brain className="w-6 h-6 text-cyan-400" />
                Background & Passion
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a final-year <strong className="text-cyan-300">B.Tech graduate in Computer Science and Engineering (Artificial Intelligence & Machine Learning)</strong> at Dhanekula Institute of Engineering & Technology, holding an <strong className="text-cyan-300">8.35 CGPA</strong>.
                </p>
                <p>
                  My expertise spans end-to-end Machine Learning workflows — from data collection, annotation, and feature engineering to model training, hyperparameter optimization, and deployment. I have built real-world deep learning solutions including a <strong className="text-slate-100">CNN-based computer vision civic reporting system</strong> and a <strong className="text-slate-100">80.3% accurate Random Forest clinical prediction model</strong>.
                </p>
                <p>
                  In addition to core AI/ML algorithms, I craft responsive frontend applications using <strong className="text-cyan-300">React, Next.js, and Tailwind CSS</strong>, bridging the gap between intelligent backend models and intuitive user interfaces.
                </p>
              </div>

              {/* Soft Skills Section */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Key Strengths & Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {PORTFOLIO_DATA.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Key Feature Metric Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="glass-card p-6 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-24 h-24 text-cyan-400" />
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">B.Tech - CSE (AI & ML)</h4>
                  <p className="text-xs text-slate-400">Dhanekula Institute of Eng. & Tech</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                <span className="text-slate-400">Duration: 2022 – 2026</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold">
                  CGPA: 8.35 / 10.0
                </span>
              </div>
            </div>

            {/* Experience Highlight Card */}
            <div className="glass-card p-6 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-24 h-24 text-teal-400" />
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-teal-950 text-teal-400 border border-teal-800/60">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">AI & ML Intern</h4>
                  <p className="text-xs text-slate-400">IIDT Blackbucks (2 Months)</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Built and benchmarked 3 classification models (Random Forest, Decision Tree, Logistic Regression) on real medical data, achieving 80.3% accuracy for real-time risk assessment.
              </p>
            </div>

            {/* Certifications Card */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Verified Certifications</span>
              </div>
              <div className="space-y-3">
                {PORTFOLIO_DATA.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{cert.title}</div>
                      <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
