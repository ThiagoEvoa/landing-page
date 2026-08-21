import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { profileData } from '../data/profileData';
import { BookOpen, ArrowUpRight, Clock, ExternalLink } from 'lucide-react';

export const Articles: React.FC = () => {
  return (
    <section id="writing" className="py-24 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Knowledge Sharing & Publications"
          title="Technical Writing"
          subtitle="Articles, architectural guides, and performance deep dives published on Medium to share real-world engineering patterns."
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {profileData.articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-6 border-slate-800/80 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-slate-400">
                  <Badge variant="cyan" size="sm">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3 flex items-start justify-between gap-2">
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-4">
                  {article.summary}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-slate-400">{article.date}</span>
                <span className="text-cyan-400 group-hover:underline flex items-center gap-1 font-sans">
                  Read Article →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Read More on Medium CTA */}
        <div className="text-center">
          <a
            href="https://thiagoevoa.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 glass-card hover:text-white hover:bg-slate-800 border-slate-700 hover:border-cyan-500/40 transition-all duration-200"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Follow Thiago Evoá on Medium</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
