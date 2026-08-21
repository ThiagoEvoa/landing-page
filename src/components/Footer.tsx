import React from 'react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon, TwitterIcon, MediumIcon } from './ui/Icons';
import { ArrowUp, Radio } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-cyan-500/10 bg-[#02050c] text-slate-400 text-xs font-mono relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Status */}
          <div className="flex items-center gap-3">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-mono font-semibold">
              {profileData.name}
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500">AGY-OS // ZERO-G ARCHITECTURE</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/ThiagoEvoa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thiagoevoa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://thiagoevoa.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="Medium"
            >
              <MediumIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/thiagoevoa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top & Copyright */}
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} THIAGO EVOÁ</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px]">ORBIT TOP</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
