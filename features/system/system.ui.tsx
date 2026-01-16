
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis } from 'recharts';
import { SystemStat, SystemLog, ResourcePoint } from '../../shared/types/system';
import { Card } from '../../shared/ui/Card';

export const StatusCards: React.FC<{ stats: SystemStat[] }> = ({ stats }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((s, i) => (
      <Card key={i} className="relative overflow-hidden group">
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-xl">
            {s.icon}
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
            s.status === 'Online' || s.status === 'Tốt' || s.status === 'Ổn định' || s.status === 'Đã đồng bộ'
              ? 'bg-emerald-500/10 text-emerald-400'
              : 'bg-rose-500/10 text-rose-400'
          }`}>
            {s.status}
          </span>
        </div>
        <p className="text-slate-400 text-xs font-medium mb-1">{s.label}</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-2xl font-bold text-slate-100">{s.value}</h4>
          <span className="text-slate-500 text-xs">{s.subValue}</span>
        </div>
      </Card>
    ))}
  </div>
);

export const ResourceCharts: React.FC<{ data: ResourcePoint[] }> = ({ data }) => (
  <Card className="lg:col-span-2" title="Tài nguyên máy chủ" extra={
    <div className="flex gap-4 text-[10px] font-bold">
      <span className="text-blue-500">CPU: 24%</span>
      <span className="text-purple-500">RAM: 4.2GB</span>
    </div>
  }>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] text-slate-500 uppercase font-bold">
          <span>CPU Usage</span>
          <span>24%</span>
        </div>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area type="monotone" dataKey="cpu" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] text-slate-500 uppercase font-bold">
          <span>Memory Usage</span>
          <span>58%</span>
        </div>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area type="monotone" dataKey="memory" stroke="#a855f7" fill="#a855f7" fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </Card>
);

export const QuickActions: React.FC = () => {
  const actions = [
    { label: 'Khởi động lại dịch vụ', sub: 'Web server & Database', icon: '🔄', color: 'orange' },
    { label: 'Xóa Cache', sub: 'Làm mới dữ liệu tạm', icon: '🧹', color: 'yellow' },
    { label: 'Chạy sao lưu thủ công', sub: 'Tạo bản backup ngay', icon: '💾', color: 'blue' },
    { label: 'Xem nhật ký hệ thống', sub: 'Chi tiết log server', icon: '📄', color: 'slate' },
  ];

  return (
    <Card title="Hành động nhanh">
      <div className="space-y-3">
        {actions.map((a, i) => (
          <button key={i} className="w-full flex items-center gap-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all text-left group">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
              {a.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-200">{a.label}</p>
              <p className="text-[10px] text-slate-500">{a.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
};

export const LogsTable: React.FC<{ logs: SystemLog[] }> = ({ logs }) => (
  <Card title="Nhật ký lỗi gần đây" extra={
    <div className="flex items-center gap-4">
      <span className="text-[10px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded-full font-bold">3 Lỗi mới</span>
      <button className="text-blue-500 text-xs font-bold hover:underline">Xem tất cả logs</button>
    </div>
  }>
    <div className="overflow-x-auto -mx-6 mt-2">
      <table className="w-full text-left">
        <thead className="text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-800">
          <tr>
            <th className="py-4 px-6">Mã lỗi</th>
            <th className="py-4 px-6">Nội dung</th>
            <th className="py-4 px-6">Thời gian</th>
            <th className="py-4 px-6 text-center">Mức độ</th>
            <th className="py-4 px-6 text-right">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-slate-800/20 transition-colors">
              <td className="py-4 px-6 text-sm font-bold text-rose-500">{log.code}</td>
              <td className="py-4 px-6">
                <p className="text-sm font-bold text-slate-200">{log.content}</p>
                <p className="text-[10px] text-slate-500">{log.description}</p>
              </td>
              <td className="py-4 px-6 text-xs text-slate-400">{log.time}</td>
              <td className="py-4 px-6 text-center">
                <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${
                  log.severity === 'Nghiêm trọng' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' :
                  log.severity === 'Cảnh báo' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                  'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                }`}>
                  {log.severity}
                </span>
              </td>
              <td className="py-4 px-6 text-right">
                <button className="text-slate-500 hover:text-slate-300">👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
