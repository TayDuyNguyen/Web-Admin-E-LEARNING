
import React from 'react';
import { LogEntry } from '../../shared/types/system-logs';

export const LogsHeader: React.FC = () => (
    <div className="mb-8">
        <h2 className="text-4xl font-black text-slate-100 tracking-tighter">Nhật ký hệ thống</h2>
        <p className="text-slate-500 text-sm mt-1 italic font-medium">Theo dõi các sự kiện và hoạt động quan trọng trong thời gian thực.</p>
    </div>
);

export const LogsList: React.FC<{ logs: LogEntry[] }> = ({ logs }) => (
    <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl">
        <table className="w-full text-left">
            <thead className="bg-slate-800/50 border-b border-slate-700/50 text-[10px] uppercase font-black tracking-widest text-slate-400">
                <tr>
                    <th className="px-6 py-4">Thời gian</th>
                    <th className="px-6 py-4">Mức độ</th>
                    <th className="px-6 py-4">Tác giả</th>
                    <th className="px-6 py-4">Hành động</th>
                    <th className="px-6 py-4">IP</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
                {logs.map(log => (
                    <tr key={log.id} className="hover:bg-blue-500/5 transition-colors group">
                        <td className="px-6 py-4 text-xs font-medium text-slate-400">
                            {new Date(log.timestamp).toLocaleTimeString()}
                        </td>
                        <td className="px-6 py-4">
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black tracking-widest ${log.severity === 'ERROR' ? 'bg-rose-500/10 text-rose-500' :
                                    log.severity === 'WARNING' ? 'bg-amber-500/10 text-amber-500' :
                                        log.severity === 'INFO' ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-500/10 text-slate-400'
                                }`}>
                                {log.severity}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-slate-200">{log.author}</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                                <span className="text-base grayscale group-hover:grayscale-0 transition-all">{log.icon}</span>
                                <span className="text-xs text-slate-300 font-medium">{log.action}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-mono text-slate-500">{log.ip}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
