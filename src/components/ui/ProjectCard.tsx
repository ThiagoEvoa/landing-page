import React from 'react';
import { Project } from '../../types';
import { Badge } from './Badge';
import { GithubIcon } from './Icons';
import { Star, ArrowUpRight, FolderGit2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border-slate-800/90 flex flex-col justify-between group h-full relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.04)]">
      {/* Subtle Corner Glow Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/05 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/15 transition-all"></div>

      <div>
        {/* Card Top Action Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
          <div className="p-2.5 rounded-xl bg-slate-900/90 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/50 group-hover:text-cyan-300 group-hover:bg-cyan-950/40 transition-all flex-shrink-0">
            <FolderGit2 className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {project.stars !== undefined && project.stars > 0 && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/90 border border-amber-500/20 text-xs font-mono text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{project.stars}</span>
              </div>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800 hover:border-cyan-500/40"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Title & Category */}
        <div className="mb-4 relative z-10">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-mono tracking-tight break-words">
            {project.title}
          </h3>
          {project.metrics && (
            <span className="inline-block mt-1 text-xs font-mono text-cyan-400 font-medium tracking-wide">
              // {project.metrics}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light relative z-10">
          {project.description}
        </p>

        {project.longDescription && (
          <p className="text-slate-400 text-xs leading-relaxed mb-5 font-light relative z-10">
            {project.longDescription}
          </p>
        )}
      </div>

      {/* Card Footer with Tags & Repo Link */}
      <div className="pt-4 border-t border-slate-800/80 mt-auto relative z-10">
        <div className="flex flex-wrap items-center gap-1.5 mb-4 min-h-[3.5rem]">
          {project.tags.map((tag, tIdx) => (
            <Badge key={tIdx} variant="slate" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono pt-1">
          <div className="flex items-center gap-2 text-slate-400">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: project.languageColor, color: project.languageColor }}
            ></span>
            <span>{project.language}</span>
          </div>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Launch Payload</span>
          </a>
        </div>
      </div>
    </div>
  );
};
