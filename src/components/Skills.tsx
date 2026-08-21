import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { profileData } from '../data/profileData';
import { 
  Smartphone, 
  Server, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Orbit
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60 border-y border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Core Engine & Capabilities"
          title="Gravitational Tech Stack"
          subtitle="Specialized in building end-to-end multi-platform applications, reactive backend services, and autonomous developer tooling."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.skillsCategories.map((category, index) => {
            const isHovered = activeCategory === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border-slate-800/90 transition-all duration-300 ${
                  isHovered ? 'border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-inner">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-mono">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-cyan-950/60 text-cyan-200 border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                          : 'bg-slate-900/70 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {skill.highlight ? (
                        <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
                      ) : (
                        <CheckCircle2 className="w-3 h-3 text-slate-500" />
                      )}
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-500 font-sans uppercase">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Focus Callout */}
        <div className="mt-10 glass-card rounded-2xl p-6 border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-slate-950/60 to-purple-950/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(6,182,212,0.08)]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex-shrink-0">
              <Orbit className="w-6 h-6 animate-spin" style={{ animationDuration: '20s' }} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-mono">
                Multi-Platform & Tooling Focus
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 font-light">
                From mobile UI state trees to CLI package management and backend microservices.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge variant="cyan" size="md">Flutter</Badge>
            <Badge variant="cyan" size="md">Dart</Badge>
            <Badge variant="indigo" size="md">CLI Tooling</Badge>
            <Badge variant="indigo" size="md">Agent Workflows</Badge>
          </div>
        </div>

      </div>
    </section>
  );
};
