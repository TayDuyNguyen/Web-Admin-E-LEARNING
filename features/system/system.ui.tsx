
import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { SystemStat, SystemLog, ResourcePoint, ServiceHealth, EnvironmentInfo } from '../../shared/types/system';
import { Card } from '../../shared/ui/Card';

export const StatusCards: React.FC<{ stats: SystemStat[] }> = ({ stats }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((s, i) => (
      <Card key={i} className="relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-xl shadow-lg border border-slate-700/50 group-hover:scale-110 transition-transform">
            {s.icon}
          </div>
          <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest ${
            s.status === 'Online' || s.status === 'Tốt' || s.status === 'Ổn định' || s.status === 'Đã đồng bộ'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
          }`}>
            {s.status}
          </span>
        </div>
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{s.label}</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-3xl font-black text-slate-100 tracking-tighter">{s.value}</h4>
          <span className="text-slate-600 text-[10px] font-bold uppercase tracking-tight">{s.subValue}</span>
        </div>
      </Card>
    ))}
  </div>
);

export const ServiceMonitorGrid: React.FC<{ services: ServiceHealth[] }> = ({ services }) => (
  <Card title="Giám sát dịch vụ" extra={<span className="text-[10px] text-slate-500 font-bold uppercase">Thời gian thực</span>}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
      {services.map((service) => (
        <div key={service.id} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-slate-700 transition-all group">
          <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full ${
                 service.status === 'active' ? 'bg-emerald-500' : service.status === 'warning' ? 'bg-amber-500 animate-pulse' : 'bg-rose-500'
               }`} />
               <h4 className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{service.name}</h4>
             </div>
             <span className="text-[10px] text-slate-600 font-mono">{service.version}</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-tight">
             <span>Tải: <span className="text-slate-300">{service.load}</span></span>
             <span>Uptime: <span className="text-slate-300">{service.uptime}</span></span>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export const EnvironmentDetailCard: React.FC<{ info: EnvironmentInfo }> = ({ info }) => (
  <Card title="Thông tin môi trường" className="bg-[#0f172a]/50">
    <div className="space-y-4 font-mono">
      {[
        { label: 'Hệ điều hành', value: info.os },
        { label: 'Runtime', value: info.node },
        { label: 'Database', value: info.db },
        { label: 'Server IP', value: info.ip },
        { label: 'Khu vực', value: info.region },
      ].map((item, i) => (
        <div key={i} className="flex flex-col border-b border-slate-800/50 pb-3 last:border-0 last:pb-0">
          <span className="text-[9px] text-slate-600 uppercase font-black tracking-widest mb-1">{item.label}</span>
          <span className="text-xs text-slate-400 truncate">{item.value}</span>
        </div>
      ))}
    </div>
  </Card>
);

export const ResourceCharts: React.FC<{ data: ResourcePoint[] }> = ({ data }) => (
  <Card className="lg:col-span-2" title="Hiệu suất máy chủ" extra={
    <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest">
      <span className="text-blue-500">CPU: {data[data.length-1]?.cpu}%</span>
      <span className="text-purple-500">RAM: {data[data.length-1]?.memory}%</span>
      <span className="text-emerald-500">Network: {data[data.length-1]?.network} Mbps</span>
    </div>
  }>
    <div className="h-[280px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis dataKey="time" hide />
          <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip 
             contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
             itemStyle={{ fontSize: '11px', fontWeight: 'bold' }}
          />
          <Area type="monotone" dataKey="cpu" name="CPU" stroke="#3b82f6" fill="url(#colorCpu)" strokeWidth={3} />
          <Area type="monotone" dataKey="network" name="Băng thông" stroke="#10b981" fill="url(#colorNet)" strokeWidth={3} />
          <Area type="monotone" dataKey="memory" name="RAM" stroke="#a855f7" fill="none" strokeWidth={3} strokeDasharray="5 5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
       <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-slate-500 font-black uppercase">
            <span>Disk Usage</span>
            <span>45%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
             <div className="bg-blue-600 h-full w-[45%]" />
          </div>
       </div>
       <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-slate-500 font-black uppercase">
            <span>Cache Hit Rate</span>
            <span>92%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
             <div className="bg-emerald-600 h-full w-[92%]" />
          </div>
       </div>
       <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-slate-500 font-black uppercase">
            <span>IOPS</span>
            <span>1,2k/s</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
             <div className="bg-purple-600 h-full w-[65%]" />
          </div>
       </div>
    </div>
  </Card>
);

export const QuickActions: React.FC = () => {
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  const runAction = (label: string) => {
    setLoadingAction(label);
    setTimeout(() => setLoadingAction(null), 1500);
  };

  const actions = [
    { label: 'Khởi động lại dịch vụ', sub: 'Nginx & PostgreSQL', icon: '🔄', color: 'orange' },
    { label: 'Xóa Cache hệ thống', sub: 'Dọn dẹp Redis', icon: '🧹', color: 'yellow' },
    { label: 'Sao lưu thủ công', sub: 'Tạo bản snapshot mới', icon: '💾', color: 'blue' },
    { label: 'Kiểm tra tệp tin lỗi', sub: 'Quét hệ thống file', icon: '🔍', color: 'slate' },
  ];

  return (
    <Card title="Hành động nhanh">
      <div className="space-y-3">
        {actions.map((a, i) => (
          <button 
            key={i} 
            onClick={() => runAction(a.label)}
            disabled={!!loadingAction}
            className={`w-full flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all text-left group relative overflow-hidden ${loadingAction ? 'opacity-50 cursor-wait' : ''}`}
          >
            {loadingAction === a.label && (
              <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-end pr-4">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              {a.icon}
            </div>
            <div>
              <p className="text-sm font-black text-slate-200">{a.label}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-0.5">{a.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
};

export const LogsTable: React.FC<{ logs: SystemLog[] }> = ({ logs }) => (
  <Card title="Nhật ký lỗi hệ thống" extra={
    <div className="flex items-center gap-4">
      <span className="text-[10px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded-full font-black uppercase border border-rose-500/20">3 Lỗi mới</span>
      <button className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">Tải toàn bộ log</button>
    </div>
  }>
    <div className="overflow-x-auto -mx-6 mt-2">
      <table className="w-full text-left">
        <thead className="text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
          <tr>
            <th className="py-5 px-6">Mã</th>
            <th className="py-5 px-6">Nội dung sự kiện</th>
            <th className="py-5 px-6">Thời gian</th>
            <th className="py-5 px-6 text-center">Mức độ</th>
            <th className="py-5 px-6 text-right">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-slate-800/30 transition-colors group">
              <td className="py-5 px-6 text-sm font-mono text-rose-500 font-bold">{log.code}</td>
              <td className="py-5 px-6 max-w-xs">
                <p className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{log.content}</p>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-1 italic">{log.description}</p>
              </td>
              <td className="py-5 px-6 text-xs text-slate-400 font-medium">{log.time}</td>
              <td className="py-5 px-6 text-center">
                <span className={`px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest border ${
                  log.severity === 'Nghiêm trọng' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-lg shadow-rose-500/5' :
                  log.severity === 'Cảnh báo' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                  'bg-blue-500/10 text-blue-500 border-blue-500/20'
                }`}>
                  {log.severity}
                </span>
              </td>
              <td className="py-5 px-6 text-right">
                <button className="p-2 text-slate-500 hover:text-slate-200 transition-colors">👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
