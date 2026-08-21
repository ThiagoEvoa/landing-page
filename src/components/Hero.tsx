import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Copy, 
  Check, 
  MapPin,
  Rocket
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from './ui/Icons';
import { profileData } from '../data/profileData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'workspaces' | 'agents' | 'mock'>('workspaces');

  const commands = {
    workspaces: {
      cmd: 'dart pub global activate flutter_workspaces_cli',
      output: '✔ Package flutter_workspaces_cli activated (zero-gravity workspace ready).'
    },
    agents: {
      cmd: 'agy skills load ThiagoEvoa/agent-team',
      output: '✔ Loaded 7 autonomous agent workflows: Orchestrator, Flutter Senior, Dart Frog, Reviewer.'
    },
    mock: {
      cmd: 'dart run dynamic_api_dart --port 8080 --mock',
      output: '✔ Dynamic Mock HTTP Server active on localhost:8080 (0.2ms latency).'
    }
  };

  const copyActiveCommand = () => {
    navigator.clipboard.writeText(commands[activeTab].cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden">
      {/* Gravitational Lens & Quantum Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/12 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-16 right-1/4 w-[400px] h-[400px] bg-emerald-500/08 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        
        {/* Antigravity Telemetry Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="tracking-wide">ZERO-G ARCHITECTURE // ALL SYSTEMS NOMINAL</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-3 h-3 text-cyan-400" /> {profileData.location}
          </span>
        </div>

        {/* Main Levitating Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] font-sans">
          Defying Friction in <br className="hidden sm:inline" />
          <span className="gradient-text">Software Architecture</span>
        </h1>

        {/* Subtitle / Bio */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed font-light">
          Hi, I'm <strong className="font-semibold text-white">Thiago Evoá</strong>. Senior Software Engineer crafting high-performance{' '}
          <span className="text-cyan-300 font-mono text-sm sm:text-base px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">Flutter</span>,{' '}
          <span className="text-cyan-300 font-mono text-sm sm:text-base px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">Dart</span>, and autonomous developer tooling.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Rocket className="w-4 h-4" />
            <span>Launch Payloads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#writing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-200 glass-card hover:bg-slate-800/80 border-slate-700 hover:border-cyan-500/40 transition-all duration-200"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Decoded Transmissions</span>
          </a>
          <a
            href="https://www.linkedin.com/in/thiagoevoa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-300 glass-card hover:text-cyan-300 hover:bg-slate-800/80 border-slate-700 hover:border-cyan-500/40 transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Interactive Quantum Terminal HUD */}
        <div className="max-w-xl mx-auto mb-10 text-left">
          <div className="glass-card rounded-2xl border border-cyan-500/25 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.12)]">
            {/* Terminal Window Header */}
            <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-[10px] font-mono text-slate-400">agy-terminal // v2.0-zero-g</span>
              </div>

              {/* Interactive Command Tabs */}
              <div className="flex items-center gap-1 text-[10px] font-mono">
                <button
                  onClick={() => setActiveTab('workspaces')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    activeTab === 'workspaces' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  workspaces
                </button>
                <button
                  onClick={() => setActiveTab('agents')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    activeTab === 'agents' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  agent-team
                </button>
                <button
                  onClick={() => setActiveTab('mock')}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    activeTab === 'mock' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  dynamic_api
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-xs space-y-2 bg-[#050814]/90">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none text-slate-300">
                  <span className="text-cyan-400 select-none">thiago@zero-g:~$</span>
                  <span className="text-cyan-200 font-medium">{commands[activeTab].cmd}</span>
                </div>
                <button
                  onClick={copyActiveCommand}
                  className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors flex-shrink-0 flex items-center gap-1 cursor-pointer"
                  title="Copy command"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-sans">Copied</span>
                    </>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="text-[11px] text-emerald-400/90 pl-4 border-l border-emerald-500/30 font-light">
                {commands[activeTab].output}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-4 text-slate-400">
          <a
            href="https://github.com/ThiagoEvoa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-900 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/thiagoevoa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-900 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://thiagoevoa.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-900 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
            aria-label="Medium Profile"
          >
            <BookOpen className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/thiagoevoa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-900 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
            aria-label="Twitter Profile"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
