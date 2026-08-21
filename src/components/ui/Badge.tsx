import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'indigo' | 'emerald' | 'violet' | 'slate' | 'highlight';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    violet: 'bg-violet-500/10 text-violet-300 border-violet-500/25',
    slate: 'bg-slate-800/70 text-slate-300 border-slate-700/60',
    highlight: 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-200 border-cyan-400/30',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs font-mono',
    md: 'px-3 py-1 text-sm font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border ${variantStyles[variant]} ${sizeStyles[size]} transition-colors duration-200 ${className}`}
    >
      {children}
    </span>
  );
};
