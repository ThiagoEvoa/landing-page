import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { profileData } from '../data/profileData';
import { 
  Code2, 
  Layers, 
  Cpu, 
  FolderGit2, 
  Award,
  Globe2,
  Orbit,
  Gauge
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Mission & Philosophy"
          title="Architecture Without Boundaries"
          subtitle="Combining high-level system modeling with zero-latency cross-platform execution to build resilient digital systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story / Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border-slate-800/90 shadow-[0_0_30px_rgba(6,182,212,0.06)]">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>// CORE ARCHITECTURE MANIFESTO</span>
              </div>
              
              <blockquote className="text-base sm:text-lg font-medium text-slate-200 border-l-2 border-cyan-400 pl-4 py-1 italic">
                "{profileData.bioQuote}"
              </blockquote>

              {profileData.aboutText.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-cyan-400" />
                  <span>Ground Station: {profileData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Orbit className="w-4 h-4 text-purple-400" />
                  <span>Open Source Contributor</span>
                </div>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 border-slate-800/70 flex flex-col items-start gap-2 hover:border-cyan-500/40 transition-colors">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Clean Architecture</h4>
                <p className="text-xs text-slate-400 font-light">Decoupled layers, SOLID patterns, and full testability.</p>
              </div>

              <div className="glass-card rounded-xl p-4 border-slate-800/70 flex flex-col items-start gap-2 hover:border-purple-500/40 transition-colors">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Concurrency & Speed</h4>
                <p className="text-xs text-slate-400 font-light">Isolates, parallel computing, and 120 FPS UI pipelines.</p>
              </div>

              <div className="glass-card rounded-xl p-4 border-slate-800/70 flex flex-col items-start gap-2 hover:border-emerald-500/40 transition-colors">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Developer Tooling</h4>
                <p className="text-xs text-slate-400 font-light">CLI generators, workspaces, and agent skills.</p>
              </div>
            </div>
          </div>

          {/* Stats & Quick Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`glass-card glass-card-hover rounded-2xl p-6 border-slate-800/90 flex flex-col justify-between h-40 group ${
                  idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400/80 group-hover:text-cyan-300 transition-colors uppercase tracking-widest flex items-center justify-between">
                  <span>{stat.suffix}</span>
                  <Gauge className="w-3 h-3 text-cyan-500/60" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}

            {/* Profile Highlight Card spanning 2 cols */}
            <div className="col-span-2 glass-card rounded-2xl p-6 border-slate-800/90 bg-gradient-to-br from-slate-950 via-slate-900/80 to-cyan-950/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">Flight-Tested Open Source</h4>
                  <p className="text-xs text-slate-400">Autonomous tools built for the developer community</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                Author of packages like <code className="text-cyan-300 font-mono">flutter_workspaces_cli</code> and maintainer of 30+ open source repositories on GitHub.
              </p>
              <a
                href="https://github.com/ThiagoEvoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group"
              >
                <span>Browse Telemetry & Repositories</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
