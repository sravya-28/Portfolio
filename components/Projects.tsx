'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI & ML', 'Data Science', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real-World <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Projects & Engineering</span> Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From deep learning defect detection models to full-stack web applications and data analytics pipelines.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:shadow-cyan-950/40"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-950/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-950/90 text-purple-300 border border-purple-500/30 backdrop-blur-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-purple-300" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-6 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  <span>Repository</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-all duration-200"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
