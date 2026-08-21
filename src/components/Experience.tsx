import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { profileData } from '../data/profileData';
import { CheckCircle, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career & Achievements"
          title="Experience & Milestones"
          subtitle="A track record of engineering cross-platform client applications, developer utilities, and modern software architectures."
        />

        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-12">
          {profileData.experience.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors shadow-sm shadow-cyan-500/50"></div>

              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border-slate-800/80">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    {item.company && (
                      <p className="text-xs sm:text-sm font-medium text-cyan-400 font-mono">
                        {item.company}
                      </p>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {item.technologies.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
