'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship Experience & <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Academic Path</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Demonstrated hands-on experience in machine learning pipelines, data analytics, and computer science fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Internship Work Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Work & Internship Experience</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-800 space-y-10">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-md shadow-cyan-400/50 group-hover:scale-125 transition-transform" />

                  <div className="glass-card p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      {exp.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-teal-400" />
              <h3 className="text-xl font-bold text-white">Education & Credentials</h3>
            </div>

            <div className="space-y-6">
              {/* Education Block */}
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-teal-400">{edu.period}</span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                      CGPA {edu.grade}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base">{edu.degree}</h4>
                  <p className="text-xs text-slate-300 font-medium">{edu.institution}</p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </motion.div>
              ))}

              {/* Certifications Block */}
              <div className="glass-card p-6 space-y-4">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  Recognized Certifications
                </h4>
                <div className="space-y-3">
                  {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-200">{cert.title}</div>
                        <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
