import React, { useState, useEffect, useRef } from 'react';
import { ConversationSession, ChatMessage } from '../../types/antigravity';
import { 
  Terminal, 
  ChevronRight, 
  ChevronDown, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink,
  MessageSquare,
  Cpu
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface AntigravityChatProps {
  session: ConversationSession;
  onOpenMobileMenu?: () => void;
}

export const AntigravityChat: React.FC<AntigravityChatProps> = ({
  session,
  onOpenMobileMenu
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(session.messages);
  const [inputText, setInputText] = useState('');
  const [isThinkingOpen, setIsThinkingOpen] = useState<{ [key: string]: boolean }>({});
  const [copiedCode, setCopiedCode] = useState<{ [key: string]: boolean }>({});
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Sync messages when session changes
  useEffect(() => {
    setMessages(session.messages);
    setIsThinkingOpen({ [session.messages[session.messages.length - 1]?.id || '']: true });
  }, [session]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleThinking = (messageId: string) => {
    setIsThinkingOpen(prev => ({ ...prev, [messageId]: !prev[messageId] }));
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedCode(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: text
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate Agent response with thinking & tool call
    setTimeout(() => {
      let agentResponse: ChatMessage;

      const lower = text.toLowerCase();
      if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('hire')) {
        agentResponse = {
          id: `agent-${Date.now()}`,
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          thinking: 'Directing user to Thiago\'s direct communication uplink.',
          content: `You can reach **Thiago Evoá** directly via **thiagoevoa@gmail.com** or connect on LinkedIn at [linkedin.com/in/thiagoevoa](https://www.linkedin.com/in/thiagoevoa).`,
          links: [
            { label: 'Connect on LinkedIn', url: 'https://www.linkedin.com/in/thiagoevoa', primary: true },
            { label: 'Send Email', url: 'mailto:thiagoevoa@gmail.com' }
          ],
          suggestedPrompts: ['Show me featured projects', 'Tell me about flutter_workspaces_cli']
        };
      } else if (lower.includes('workspaces') || lower.includes('flutter_workspaces_cli') || lower.includes('install')) {
        agentResponse = {
          id: `agent-${Date.now()}`,
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          thinking: 'Providing CLI installation instructions and workspace generation commands.',
          toolCalls: [
            {
              tool: 'run_command',
              summary: 'Activate package from pub.dev',
              args: 'dart pub global activate flutter_workspaces_cli',
              output: '✔ Package flutter_workspaces_cli activated successfully.'
            }
          ],
          content: `To install and run **flutter_workspaces_cli** on your system:`,
          codeBlock: {
            language: 'bash',
            filename: 'terminal',
            code: `# Install globally via Dart\ndart pub global activate flutter_workspaces_cli\n\n# Create a new workspace project\nflutter_workspaces_cli create my_app_workspace`
          },
          links: [
            { label: 'View GitHub Repo', url: 'https://github.com/ThiagoEvoa/flutter_workspaces_cli', primary: true }
          ],
          suggestedPrompts: ['Tell me about agent-team', 'Explore Medium publications']
        };
      } else {
        agentResponse = {
          id: `agent-${Date.now()}`,
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          thinking: `Processing user query: "${text}". Searching indexed developer profile and open source telemetry.`,
          content: `Thiago is a **Senior Software Engineer & Mobile Architect** specialized in **Flutter, Dart, Developer Tooling, and Agent Workflows**. Check out the interactive sessions in the sidebar to dive into specific projects or explore his publications.`,
          tags: ['Flutter', 'Dart', 'Clean Architecture', 'AI Agents', 'DevOps'],
          links: [
            { label: 'GitHub Profile', url: 'https://github.com/ThiagoEvoa', primary: true },
            { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/thiagoevoa' }
          ],
          suggestedPrompts: [
            'How does flutter_workspaces_cli work?',
            'What is included in agent-team?',
            'How to contact Thiago?'
          ]
        };
      }

      setMessages(prev => [...prev, agentResponse]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-3.5rem)] bg-[#02050e] overflow-hidden relative">
      
      {/* Session Header Bar */}
      <div className="h-14 px-4 sm:px-6 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl flex items-center justify-between flex-shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            aria-label="Open sessions menu"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white font-mono tracking-tight">
                {session.title}
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                {session.badge}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate max-w-md hidden sm:block font-light">
              {session.tagline}
            </p>
          </div>
        </div>

        {session.repoUrl && (
          <a
            href={session.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 transition-colors shadow-sm"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub Repo</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        )}
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin">
        {messages.map((msg, index) => {
          const isAgent = msg.sender === 'agent';

          return (
            <div key={msg.id || index} className="space-y-3 animate-fade-in max-w-4xl mx-auto">
              
              {/* Message Header */}
              <div className={`flex items-center gap-2.5 text-xs font-mono ${isAgent ? 'text-cyan-400' : 'text-slate-400'}`}>
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                  isAgent 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}>
                  {isAgent ? <Sparkles className="w-3.5 h-3.5" /> : 'YOU'}
                </div>
                <span className="font-semibold text-slate-200">
                  {isAgent ? 'ThiagoEvoa Agent' : 'Visitor'}
                </span>
                <span className="text-[10px] text-slate-600">{msg.timestamp}</span>
              </div>

              {/* Collapsible Thinking Process Accordion */}
              {isAgent && msg.thinking && (
                <div className="rounded-xl border border-cyan-500/20 bg-slate-950/60 overflow-hidden text-xs font-mono">
                  <button
                    onClick={() => toggleThinking(msg.id)}
                    className="w-full px-3.5 py-2 flex items-center justify-between text-slate-400 hover:text-cyan-300 hover:bg-slate-900/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-purple-400" />
                      <span>Thinking Process & Telemetry Trace</span>
                    </div>
                    {isThinkingOpen[msg.id] ? (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </button>

                  {isThinkingOpen[msg.id] && (
                    <div className="px-3.5 py-2.5 border-t border-slate-800/80 bg-[#030612] text-slate-400 text-[11px] leading-relaxed font-light">
                      <div className="border-l-2 border-purple-500/40 pl-3 italic">
                        {msg.thinking}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tool Execution Callouts */}
              {isAgent && msg.toolCalls && msg.toolCalls.map((tc, tcIdx) => (
                <div key={tcIdx} className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-xs font-mono space-y-1.5 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-cyan-400 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>call: {tc.tool}</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">{tc.summary}</span>
                  </div>
                  {tc.args && (
                    <div className="px-2.5 py-1.5 rounded bg-[#02050f] border border-slate-800/80 text-cyan-200 text-[11px] overflow-x-auto">
                      $ {tc.args}
                    </div>
                  )}
                  {tc.output && (
                    <div className="text-[11px] text-emerald-400/90 pl-3 border-l border-emerald-500/30 font-light whitespace-pre-wrap">
                      {tc.output}
                    </div>
                  )}
                </div>
              ))}

              {/* Main Content Body */}
              <div className={`p-5 rounded-2xl text-sm leading-relaxed ${
                isAgent 
                  ? 'glass-card border-slate-800/90 text-slate-200 font-sans shadow-[0_0_20px_rgba(6,182,212,0.04)]' 
                  : 'bg-slate-900/90 border border-slate-800 text-slate-100 font-sans ml-4'
              }`}>
                <div className="prose prose-invert max-w-none prose-p:my-2 prose-headings:my-3 prose-ul:my-2 whitespace-pre-line font-light">
                  {msg.content}
                </div>

                {/* Optional Code Block */}
                {msg.codeBlock && (
                  <div className="mt-4 rounded-xl border border-slate-800 bg-[#02050e] overflow-hidden text-xs font-mono">
                    <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{msg.codeBlock.filename || msg.codeBlock.language}</span>
                      <button
                        onClick={() => copyCode(msg.codeBlock!.code, msg.id)}
                        className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCode[msg.id] ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-cyan-200 text-[11px] leading-relaxed">
                      <code>{msg.codeBlock.code}</code>
                    </pre>
                  </div>
                )}

                {/* Metrics Grid */}
                {msg.metrics && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800/80">
                    {msg.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                        <div className="text-[10px] font-mono text-slate-500 uppercase">{m.label}</div>
                        <div className="text-xs font-mono font-bold text-cyan-300 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {msg.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {msg.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                {msg.links && (
                  <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                    {msg.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                          link.primary
                            ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/40'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Suggested Prompts Chips */}
              {isAgent && msg.suggestedPrompts && (
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-500 mr-1">Suggested:</span>
                  {msg.suggestedPrompts.map((prompt, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => handleSend(prompt)}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900/80 hover:bg-cyan-950/70 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-sm"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

            </div>
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2.5 max-w-4xl mx-auto text-xs font-mono text-cyan-400 animate-pulse">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
            </div>
            <span>Agent is generating response & telemetry trace...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Interactive Bottom Prompt Input Bar */}
      <div className="p-3 sm:p-4 border-t border-slate-800/80 bg-[#040816]/90 backdrop-blur-xl z-20">
        <div className="max-w-4xl mx-auto space-y-2">
          
          {/* Quick Prompts Row */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {session.quickPrompts.map((prompt, qIdx) => (
              <button
                key={qIdx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap bg-slate-900/90 hover:bg-cyan-950 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors flex-shrink-0 cursor-pointer"
              >
                ⚡ {prompt}
              </button>
            ))}
          </div>

          {/* Text Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 rounded-xl bg-slate-950 border border-cyan-500/25 p-1.5 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all"
          >
            <div className="pl-3 text-cyan-400 font-mono text-xs select-none">
              $
            </div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Ask about ${session.title} or type a question...`}
              className="flex-1 bg-transparent px-2 py-1.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none font-mono"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className={`p-2 rounded-lg text-white font-mono text-xs transition-all flex items-center gap-1 cursor-pointer ${
                inputText.trim() && !isTyping
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      </div>

    </div>
  );
};
