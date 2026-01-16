
import React from 'react';
import { useApp } from '../../app/providers';

export const Header: React.FC = () => {
  const { user } = useApp();

  return (
    <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-slate-800/60 bg-[#0f172a]/90 backdrop-blur-xl sticky top-0 z-40">
      <div className="flex-1 flex items-center max-w-lg">
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Tìm kiếm nhanh..."
            className="w-full bg-slate-900/40 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-500/50 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-8 ml-6">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight">Quản trị viên</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Quản trị hệ thống</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl border-2 border-slate-700 overflow-hidden p-0.5 group-hover:border-blue-500 transition-all shadow-xl shadow-black/20">
              <img src="https://i.pravatar.cc/150?u=admin-lms" alt="Avatar" className="w-full h-full rounded-[14px] object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-[#0f172a] rounded-full shadow-lg shadow-emerald-500/20" />
          </div>
        </div>
      </div>
    </header>
  );
};
