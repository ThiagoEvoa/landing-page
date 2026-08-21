import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { profileData } from '../data/profileData';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles, 
  FolderGit2, 
  Award,
  Globe2
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engineering Background"
          title="About Me & Philosophy"
          subtitle="Combining high-level software architecture with hands-on low-level optimization to build robust digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story / Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border-slate-800/80">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
                <Code2 className="w-5 h-5" />
                <span>// Architecture & Problem Solving</span>
              </div>
              
              <blockquote className="text-base sm:text-lg font-medium text-slate-200 border-l-2 border-cyan-500 pl-4 py-1 italic">
                "{profileData.bioQuote}"
              </blockquote>

              {profileData.aboutText.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-cyan-400" />
                  <span>Based in {profileData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Open Source Advocate</span>
                </div>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 border-slate-800/60 flex flex-col items-start gap-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Clean Architecture</h4>
                <p className="text-xs text-slate-400">SOLID principles, strict modular separation, and testability.</p>
              </div>

              <div className="glass-card rounded-xl p-4 border-slate-800/60 flex flex-col items-start gap-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Concurrency & Speed</h4>
                <p className="text-xs text-slate-400">Isolates, parallel compute, memory profiling, and smooth 120 FPS.</p>
              </div>

              <div className="glass-card rounded-xl p-4 border-slate-800/60 flex flex-col items-start gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Developer Tooling</h4>
                <p className="text-xs text-slate-400">CLI generators, workspace scaffolds, and agentic workflows.</p>
              </div>
            </div>
          </div>

          {/* Stats & Quick Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border-slate-800/80 flex flex-col justify-between h-40 group"
              >
                <div className="text-xs font-mono text-cyan-400/80 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                  {stat.suffix}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}

            {/* Profile Highlight Card spanning 2 cols */}
            <div className="col-span-2 glass-card rounded-2xl p-6 border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Active Open-Source Ecosystem</h4>
                  <p className="text-xs text-slate-400">Tools built for the Flutter and Dart community</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Author of packages like <code className="text-cyan-300 font-mono">flutter_workspaces_cli</code> and maintainer of 30+ open source repositories on GitHub.
              </p>
              <a
                href="https://github.com/ThiagoEvoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group"
              >
                <span>Browse GitHub repositories</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
