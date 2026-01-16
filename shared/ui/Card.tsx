
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  extra?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, extra }) => {
  return (
    <div className={`bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm transition-all hover:border-slate-700/50 ${className}`}>
      {(title || extra) && (
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          {title && <h3 className="font-bold text-slate-100 text-lg">{title}</h3>}
          {extra && <div>{extra}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
