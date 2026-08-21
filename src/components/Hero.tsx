import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Copy, 
  Check, 
  Terminal, 
  MapPin
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from './ui/Icons';
import { profileData } from '../data/profileData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = 'dart pub global activate flutter_workspaces_cli';

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-emerald-500/08 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-md mb-8 hover:border-cyan-500/40 transition-colors shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open for Software Engineering & Architecture Opportunities</span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-3 h-3 text-cyan-400" /> {profileData.location}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Engineering High-Performance <br className="hidden sm:inline" />
          <span className="gradient-text">Cross-Platform Apps & Tooling</span>
        </h1>

        {/* Subtitle / Bio */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed font-light">
          Hi, I'm <strong className="font-semibold text-white">Thiago Evoá</strong>. Senior Software Engineer specialized in{' '}
          <span className="text-cyan-300 font-mono text-sm sm:text-base px-1.5 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20">Flutter</span>,{' '}
          <span className="text-cyan-300 font-mono text-sm sm:text-base px-1.5 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20">Dart</span>, and Developer Automation.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#writing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800/80 border-slate-700 hover:border-slate-600 transition-all duration-200"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Read Technical Articles</span>
          </a>
          <a
            href="https://www.linkedin.com/in/thiagoevoa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 glass-card hover:text-cyan-400 hover:bg-slate-800/80 border-slate-700 transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Interactive CLI Scaffolding Snippet */}
        <div className="max-w-lg mx-auto mb-10">
          <div className="glass-card rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 border-slate-800/90 text-left font-mono text-xs text-slate-300 shadow-lg">
            <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
              <Terminal className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="text-slate-500 select-none">$</span>
              <span className="text-cyan-300 whitespace-nowrap">{command}</span>
            </div>
            <button
              onClick={copyCommand}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors flex-shrink-0 flex items-center gap-1 cursor-pointer"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-sans font-medium">Copied</span>
                </>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
          <p className="text-[11px] text-slate-400 mt-1.5 font-mono">
            CLI package created by Thiago Evoá for Flutter workspace modularization
          </p>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-4 text-slate-400">
          <a
            href="https://github.com/ThiagoEvoa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200 transform hover:-translate-y-0.5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/thiagoevoa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200 transform hover:-translate-y-0.5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://thiagoevoa.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200 transform hover:-translate-y-0.5"
            aria-label="Medium Profile"
          >
            <BookOpen className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/thiagoevoa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200 transform hover:-translate-y-0.5"
            aria-label="Twitter Profile"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
