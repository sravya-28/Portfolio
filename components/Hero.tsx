'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Github, Linkedin, Mail, FileText, ChevronRight, Brain } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Availability / Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Available for AI / ML & Full Stack Opportunities</span>
            </motion.div>

            {/* Name & Dynamic Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2.5">
                <Brain className="w-6 h-6 text-cyan-400 inline-block" />
                <span>{PORTFOLIO_DATA.personal.role}</span>
              </p>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
            >
              {PORTFOLIO_DATA.personal.tagline} {PORTFOLIO_DATA.personal.bio}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-xl shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 flex items-center gap-2"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </button>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {PORTFOLIO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-bold text-white flex items-baseline">
                    <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-400 ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Interactive Code Card Mockup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Corner Glows */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-xl animate-pulse-slow" />
              
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Mac Style Window Controls */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    engineer_profile.py
                  </span>
                  <div className="w-12" />
                </div>

                {/* Animated Code snippet */}
                <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300 overflow-x-auto">
                  <div>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-cyan-300 font-bold">AIEngineer</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">__init__</span>(self):
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.name = <span className="text-emerald-400">"{PORTFOLIO_DATA.personal.name}"</span>
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.degree = <span className="text-emerald-400">"B.Tech CSE (AI & ML)"</span>
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.cgpa = <span className="text-amber-400">8.35</span>
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.specializations = [
                  </div>
                  <div className="pl-12 text-emerald-400">
                    "Computer Vision", "Deep Learning", "Full Stack Web"
                  </div>
                  <div className="pl-8 text-slate-400">]</div>
                  <div className="pl-4 mt-2">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400 font-semibold">get_latest_project</span>(self):
                  </div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-purple-400">return</span> &#123;
                  </div>
                  <div className="pl-12 text-cyan-300">
                    "title": "Civic Issues Detection",
                  </div>
                  <div className="pl-12 text-cyan-300">
                    "model": "CNN + OpenCV",
                  </div>
                  <div className="pl-12 text-cyan-300">
                    "accuracy": "High Precision Damage Detection"
                  </div>
                  <div className="pl-8 text-slate-400">&#125;</div>
                </div>

                {/* Highlight Stats Pill inside card */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>Dhanekula Institute '26</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-950 text-cyan-400 border border-cyan-800">
                    AI & ML Major
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
