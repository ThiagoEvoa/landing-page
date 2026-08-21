import React from 'react';
import { Sparkles, ChevronDown, Radio } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MediumIcon } from '../ui/Icons';
import { profileData } from '../../data/profileData';

interface AntigravityHeaderProps {
  activeSessionTitle: string;
  onSelectSession: (id: string) => void;
}

export const AntigravityHeader: React.FC<AntigravityHeaderProps> = ({
  activeSessionTitle
}) => {
  return (
    <header className="h-14 border-b border-cyan-500/15 bg-[#030712]/90 backdrop-blur-xl px-4 flex items-center justify-between z-40 sticky top-0">
      
      {/* Left: Brand & Breadcrumb */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-[0_0_12px_rgba(6,182,212,0.4)] flex-shrink-0">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover rounded-[6px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold text-white tracking-wider flex items-center gap-1.5">
              ThiagoEvoa <span className="text-[10px] px-1 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">2.0</span>
            </span>
          </div>
        </div>

        <span className="text-slate-700 hidden sm:inline">/</span>

        <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-slate-500">projects</span>
          <span className="text-slate-700">/</span>
          <span className="text-cyan-300 font-medium">{activeSessionTitle}</span>
        </div>
      </div>

      {/* Middle: Model & Status Selector */}
      <div className="hidden md:flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/20 text-xs font-mono text-slate-300 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Model: <strong className="text-cyan-300">ThiagoEvoa Pro (High)</strong></span>
          <ChevronDown className="w-3 h-3 text-slate-500" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-emerald-400">
          <Radio className="w-3 h-3 animate-pulse" />
          <span>ZERO-G ONLINE</span>
        </div>
      </div>

      {/* Right: Quick Links */}
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/ThiagoEvoa"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
          title="GitHub Profile"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiagoevoa"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
          title="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href="https://thiagoevoa.medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors hidden sm:inline-flex"
          title="Medium Articles"
        >
          <MediumIcon className="w-4 h-4" />
        </a>
      </div>

    </header>
  );
};
