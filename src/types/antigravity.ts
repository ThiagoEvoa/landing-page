export interface ToolCall {
  tool: string;
  summary: string;
  args?: string;
  output?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent' | 'system';
  timestamp: string;
  content: string;
  thinking?: string;
  toolCalls?: ToolCall[];
  codeBlock?: {
    language: string;
    code: string;
    filename?: string;
  };
  metrics?: { label: string; value: string }[];
  tags?: string[];
  links?: { label: string; url: string; primary?: boolean }[];
  suggestedPrompts?: string[];
}

export interface ConversationSession {
  id: string;
  title: string;
  category: 'Projects' | 'Architecture' | 'Publications' | 'Connect';
  tagline: string;
  badge: string;
  iconName: string;
  repoUrl?: string;
  messages: ChatMessage[];
  quickPrompts: string[];
}
