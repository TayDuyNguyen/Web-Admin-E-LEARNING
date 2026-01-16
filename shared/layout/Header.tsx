
import React from 'react';
import { useApp } from '../../app/providers';

export const Header: React.FC = () => {
  const { user } = useApp();

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="flex-1 flex items-center max-w-xl">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
          <input
            type="text"
            placeholder="Tìm kiếm khóa học, học viên..."
            className="w-full bg-slate-900/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 ml-4">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">{user.role}</p>
            <p className="text-xs text-slate-500">{user.name}</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-slate-700 p-0.5 group-hover:border-blue-500 transition-all">
            <img src={user.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};
