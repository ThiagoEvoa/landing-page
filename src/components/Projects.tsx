import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectCard } from './ui/ProjectCard';
import { profileData } from '../data/profileData';
import { GithubIcon } from './ui/Icons';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source & Architecture"
          title="Featured Projects"
          subtitle="A selection of developer tooling, agent skills, and architecture scaffolds engineered for modern software development."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {profileData.featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Repos Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border-slate-800/80 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Explore more repositories on GitHub</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Browse 30+ public repositories spanning Dart packages, Flutter demos, fake backends, and tooling experiments.
            </p>
          </div>

          <a
            href="https://github.com/ThiagoEvoa?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 transition-all duration-200 flex-shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>View All Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
