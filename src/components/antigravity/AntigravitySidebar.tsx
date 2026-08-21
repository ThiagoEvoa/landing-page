import React from 'react';
import { ConversationSession } from '../../types/antigravity';
import { 
  FolderGit2, 
  Cpu, 
  Server, 
  User, 
  Layers, 
  BookOpen, 
  Radio, 
  MessageSquare
} from 'lucide-react';

interface AntigravitySidebarProps {
  sessions: ConversationSession[];
  activeSessionId: string;
  onSelectSession: (id: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const AntigravitySidebar: React.FC<AntigravitySidebarProps> = ({
  sessions,
  activeSessionId,
  onSelectSession,
  isOpenMobile,
  onCloseMobile
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2':
        return <FolderGit2 className="w-4 h-4 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'User':
        return <User className="w-4 h-4 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-pink-400" />;
      case 'Radio':
      default:
        return <Radio className="w-4 h-4 text-cyan-400" />;
    }
  };

  const projectSessions = sessions.filter(s => s.category === 'Projects');
  const architectureSessions = sessions.filter(s => s.category === 'Architecture');
  const communicationSessions = sessions.filter(s => s.category === 'Publications' || s.category === 'Connect');

  return (
    <aside
      className={`fixed md:relative inset-y-0 left-0 w-72 md:w-80 bg-[#040817]/95 md:bg-[#040817]/80 backdrop-blur-2xl border-r border-cyan-500/15 flex flex-col z-30 transition-transform duration-300 ${
        isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-3.5 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300">
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <span>PROJECT SESSIONS</span>
        </div>
        <div className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
          {sessions.length} ACTIVE
        </div>
      </div>

      {/* Session Navigation List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-6 scrollbar-thin">
        
        {/* Group 1: Projects / Payloads */}
        <div>
          <div className="px-3 mb-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center justify-between">
            <span>Featured Payloads</span>
            <span className="text-[9px] text-cyan-500/60">PROJECTS</span>
          </div>
          <div className="space-y-1">
            {projectSessions.map((session) => {
              const isActive = session.id === activeSessionId;
              return (
                <button
                  key={session.id}
                  onClick={() => {
                    onSelectSession(session.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-mono transition-all flex items-start gap-2.5 group cursor-pointer ${
                    isActive
                      ? 'bg-cyan-950/70 border border-cyan-400/40 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'border border-transparent hover:border-slate-800 hover:bg-slate-900/60 text-slate-300'
                  }`}
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 mt-0.5">
                    {getIcon(session.iconName)}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold truncate text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {session.title}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0"></span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5 font-light">
                      {session.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Group 2: Knowledge Core */}
        <div>
          <div className="px-3 mb-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center justify-between">
            <span>Knowledge Core</span>
            <span className="text-[9px] text-purple-500/60">STACK & BIO</span>
          </div>
          <div className="space-y-1">
            {architectureSessions.map((session) => {
              const isActive = session.id === activeSessionId;
              return (
                <button
                  key={session.id}
                  onClick={() => {
                    onSelectSession(session.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-mono transition-all flex items-start gap-2.5 group cursor-pointer ${
                    isActive
                      ? 'bg-purple-950/60 border border-purple-400/40 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                      : 'border border-transparent hover:border-slate-800 hover:bg-slate-900/60 text-slate-300'
                  }`}
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 mt-0.5">
                    {getIcon(session.iconName)}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold truncate text-slate-100 group-hover:text-purple-300 transition-colors">
                        {session.title}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse flex-shrink-0"></span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5 font-light">
                      {session.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Group 3: Communications & Contact */}
        <div>
          <div className="px-3 mb-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center justify-between">
            <span>Transmissions & Uplink</span>
            <span className="text-[9px] text-emerald-500/60">FEED</span>
          </div>
          <div className="space-y-1">
            {communicationSessions.map((session) => {
              const isActive = session.id === activeSessionId;
              return (
                <button
                  key={session.id}
                  onClick={() => {
                    onSelectSession(session.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-mono transition-all flex items-start gap-2.5 group cursor-pointer ${
                    isActive
                      ? 'bg-emerald-950/60 border border-emerald-400/40 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'border border-transparent hover:border-slate-800 hover:bg-slate-900/60 text-slate-300'
                  }`}
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 mt-0.5">
                    {getIcon(session.iconName)}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold truncate text-slate-100 group-hover:text-emerald-300 transition-colors">
                        {session.title}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5 font-light">
                      {session.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Sidebar Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/90 text-slate-500 text-[10px] font-mono flex items-center justify-between">
        <span>THIAGO EVOÁ // PORTFOLIO</span>
        <span className="text-cyan-400 font-semibold">v2.0</span>
      </div>
    </aside>
  );
};
