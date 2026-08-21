import React from 'react';
import { AntigravityWorkspace } from './components/antigravity/AntigravityWorkspace';
import { AntigravityCanvas } from './components/ui/AntigravityCanvas';

export const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-[#02050e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      {/* Background Zero-G subtle particle field */}
      <AntigravityCanvas />

      {/* Main Antigravity Chat Workspace */}
      <AntigravityWorkspace />
    </div>
  );
};

export default App;
