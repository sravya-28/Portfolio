'use client';

import { ArrowUp, Heart, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">{PORTFOLIO_DATA.personal.name}</div>
              <div className="text-[11px] text-slate-400">
                {PORTFOLIO_DATA.personal.role}
              </div>
            </div>
          </div>

          {/* Copyright & Built Info */}
          <div className="text-xs text-slate-400 text-center flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Crafted with Next.js, Tailwind CSS & Framer Motion.</span>
          </div>

          {/* Social Quick Links & Back to Top Button */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center gap-1 text-xs font-semibold"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
