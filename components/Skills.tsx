'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Database, Terminal, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "AI & Machine Learning": <Cpu className="w-5 h-5 text-cyan-400" />,
  "Web & Full Stack Development": <Code className="w-5 h-5 text-teal-400" />,
  "Data & Infrastructure": <Database className="w-5 h-5 text-purple-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools & Frameworks I <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Work With</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical toolset across Machine Learning, Full Stack Engineering, and Data Systems.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card p-6 space-y-6 flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {CATEGORY_ICONS[category.title] || <Cpu className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills Badge Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-xs font-semibold text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent indicator */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{category.skills.length} Tech Items</span>
                <span className="text-cyan-400 font-semibold">Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
