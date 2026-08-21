import React, { useState } from 'react';
import { AntigravityHeader } from './AntigravityHeader';
import { AntigravitySidebar } from './AntigravitySidebar';
import { AntigravityChat } from './AntigravityChat';
import { antigravitySessions } from '../../data/antigravityConversations';

export const AntigravityWorkspace: React.FC = () => {
  const [activeSessionId, setActiveSessionId] = useState<string>(antigravitySessions[0].id);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const activeSession = antigravitySessions.find(s => s.id === activeSessionId) || antigravitySessions[0];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#02050e] text-slate-100 font-sans overflow-hidden select-text">
      
      {/* Top IDE Header Bar */}
      <AntigravityHeader
        activeSessionTitle={activeSession.title}
        onSelectSession={(id) => setActiveSessionId(id)}
      />

      {/* Main IDE Body */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Project / Session Explorer */}
        <AntigravitySidebar
          sessions={antigravitySessions}
          activeSessionId={activeSessionId}
          onSelectSession={(id) => {
            setActiveSessionId(id);
            setIsMobileSidebarOpen(false);
          }}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Backdrop for mobile */}
        {isMobileSidebarOpen && (
          <div
            onClick={() => setIsMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-20 md:hidden"
          />
        )}

        {/* Main Interactive Chat Panel */}
        <AntigravityChat
          session={activeSession}
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
        />

      </div>

    </div>
  );
};
