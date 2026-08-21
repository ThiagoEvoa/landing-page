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
  Cpu
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
    <section id="skills" className="py-24 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Stack & Expertise"
          title="Skills & Technologies"
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
                  isHovered ? 'border-cyan-500/30' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
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
                          ? 'bg-cyan-950/40 text-cyan-200 border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                          : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {skill.highlight ? (
                        <Sparkles className="w-3 h-3 text-cyan-400" />
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
        <div className="mt-10 glass-card rounded-2xl p-6 border-slate-800/80 bg-gradient-to-r from-cyan-950/20 via-slate-900/40 to-indigo-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex-shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Multi-Platform & Tooling Focus
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
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
