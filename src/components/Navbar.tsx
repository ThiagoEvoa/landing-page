import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Orbit, Radio } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { profileData } from '../data/profileData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#about' },
    { name: 'Core Engine', href: '#skills' },
    { name: 'Payloads', href: '#projects' },
    { name: 'Transmissions', href: '#writing' },
    { name: 'Milestones', href: '#experience' },
    { name: 'Uplink', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Telemetry */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-2 ring-cyan-500/40 group-hover:ring-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-mono text-sm">
                THIAGO.EVOA
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
                [AGY-OS // ZERO-G]
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/70 border border-cyan-500/20 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.08)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>LIVE</span>
            </div>

            <a
              href="https://github.com/ThiagoEvoa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors border border-slate-800 hover:border-cyan-500/40"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thiagoevoa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors border border-slate-800 hover:border-cyan-500/40"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>Establish Uplink</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
            >
              Uplink
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-x-0 border-b border-cyan-500/20 mt-3 px-6 py-5 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-around">
              <a
                href="https://github.com/ThiagoEvoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white py-1"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thiagoevoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 py-1"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://thiagoevoa.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white py-1"
              >
                <ExternalLink className="w-4 h-4" /> Medium
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
