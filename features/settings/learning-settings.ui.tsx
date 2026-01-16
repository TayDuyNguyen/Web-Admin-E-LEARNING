
import React from 'react';
import { Card } from '../../shared/ui/Card';

export const Toggle: React.FC<{ checked: boolean; onChange?: () => void }> = ({ checked, onChange }) => (
  <button 
    onClick={onChange}
    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${checked ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-slate-700'}`}
  >
    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 flex items-center justify-center ${checked ? 'right-1' : 'left-1'}`}>
      {checked && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
    </div>
  </button>
);

export const FormLabel: React.FC<{ children: React.ReactNode; sub?: string }> = ({ children, sub }) => (
  <div className="mb-2">
    <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest">{children}</p>
    {sub && <p className="text-[10px] text-slate-600 mt-0.5">{sub}</p>}
  </div>
);

export const SectionTitle: React.FC<{ icon: string; title: string; sub: string }> = ({ icon, title, sub }) => (
  <div className="flex gap-4 mb-6">
    <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center text-xl shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-black text-slate-100">{title}</h3>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  </div>
);

export const SelectBox: React.FC<{ value: string; options: string[] }> = ({ value, options }) => (
  <div className="relative group">
    <select className="w-full bg-[#0f172a] border border-slate-800 group-hover:border-slate-700 rounded-xl py-4 px-5 text-sm text-slate-200 appearance-none focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer font-bold">
      {options.map(opt => <option key={opt} selected={opt === value}>{opt}</option>)}
    </select>
    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-hover:text-slate-300 transition-colors">▼</span>
  </div>
);

export const InputBox: React.FC<{ value: string | number; unit?: string; icon?: string }> = ({ value, unit, icon }) => (
  <div className="relative group">
    {icon && <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">{icon}</span>}
    <input 
      type="text" 
      defaultValue={value}
      className={`w-full bg-[#0f172a] border border-slate-800 group-hover:border-slate-700 rounded-xl py-4 ${icon ? 'pl-12' : 'px-5'} pr-12 text-sm text-slate-200 font-black focus:outline-none focus:border-blue-500/50 transition-all`}
    />
    {unit && <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-sm uppercase tracking-widest">{unit}</span>}
  </div>
);
