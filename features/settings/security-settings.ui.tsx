
import React from 'react';
import { Card } from '../../shared/ui/Card';
import { Toggle } from './learning-settings.ui';
import { AccessLog, APIKey } from '../../shared/types/security-settings';

export const SecuritySectionHeader: React.FC<{ icon: string; title: string; sub: string }> = ({ icon, title, sub }) => (
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

export const APIKeyItem: React.FC<{ item: APIKey }> = ({ item }) => (
  <div className="p-4 bg-[#0f172a] border border-slate-800 rounded-xl group relative">
    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.name}</p>
    <div className="flex items-center justify-between">
      <code className="text-sm font-bold text-slate-300 font-mono tracking-tight">{item.key}</code>
      <button className="text-slate-600 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
        🗑️
      </button>
    </div>
  </div>
);

export const AccessLogTable: React.FC<{ logs: AccessLog[] }> = ({ logs }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead className="text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800/50">
        <tr>
          <th className="py-4 px-2">Hành động</th>
          <th className="py-4 px-2">Người dùng</th>
          <th className="py-4 px-2">IP</th>
          <th className="py-4 px-2">Thời gian</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/30">
        {logs.map((log) => (
          <tr key={log.id} className="group hover:bg-slate-800/20 transition-colors">
            <td className="py-4 px-2">
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  log.status === 'success' ? 'bg-emerald-500' : 
                  log.status === 'warning' ? 'bg-amber-500' : 'bg-rose-500'
                }`} />
                <span className="text-xs font-bold text-slate-200">{log.action}</span>
              </div>
            </td>
            <td className="py-4 px-2 text-xs text-slate-400 font-medium">{log.user}</td>
            <td className="py-4 px-2 text-[10px] text-slate-500 font-mono">{log.ip}</td>
            <td className="py-4 px-2 text-xs text-slate-500">{log.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
