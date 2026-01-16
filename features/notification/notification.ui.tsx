
import React from 'react';
import { NotificationStat, NotificationItem, NotificationStatus } from '../../shared/types/notification';
import { Card } from '../../shared/ui/Card';

export const NotificationStatsGrid: React.FC<{ stats: NotificationStat[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((s, idx) => (
        <Card key={idx} className="p-8 border-slate-800/50 bg-[#1e293b]/20 relative overflow-hidden group">
           <div className={`absolute top-0 right-0 w-32 h-full opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center ${
             s.color === 'blue' ? 'bg-blue-600' : s.color === 'emerald' ? 'bg-emerald-600' : 'bg-purple-600'
           }`}>
              <span className="text-6xl">{s.icon}</span>
           </div>
           
           <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-3">{s.label}</p>
           <h4 className="text-4xl font-black text-slate-100 tracking-tighter mb-4">{s.value}</h4>
           
           <div className="flex items-center gap-2">
              {s.trend && (
                <span className={`text-[10px] font-black uppercase tracking-tighter ${s.trend > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  📈 {s.trend > 0 ? '+' : ''}{s.trend}%
                </span>
              )}
              <span className="text-[10px] text-slate-500 font-bold bg-slate-800/50 px-2 py-0.5 rounded uppercase tracking-widest">{s.trendLabel}</span>
           </div>
        </Card>
      ))}
    </div>
  );
};

export const NotificationTabs: React.FC<{ active: string }> = ({ active }) => (
  <div className="flex items-center justify-between border-b border-slate-800 mb-8">
    <div className="flex gap-10">
      {['Lịch sử gửi', 'Mẫu thông báo', 'Cấu hình gửi'].map((tab) => (
        <button
          key={tab}
          className={`py-4 text-sm font-bold border-b-2 transition-all relative ${
            active === tab ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          {tab}
          {active === tab && <div className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-4 pb-4">
       <button className="text-slate-500 hover:text-slate-300 transition-colors">
         <span className="text-lg">⚙️</span>
       </button>
       <button className="text-slate-500 hover:text-slate-300 transition-colors">
         <span className="text-lg">🔄</span>
       </button>
    </div>
  </div>
);

export const NotificationTable: React.FC<{ items: NotificationItem[] }> = ({ items }) => {
  const getStatusBadge = (status: NotificationStatus) => {
    switch (status) {
      case 'Đã gửi': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Đã đọc': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Chờ gửi': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Bảo trì': return '⚠️';
      case 'Khóa học': return '✨';
      case 'Học tập': return '📅';
      case 'Khuyến mãi': return '🎉';
      default: return '📝';
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'Bảo trì': return 'bg-orange-500/10 text-orange-500';
      case 'Khóa học': return 'bg-blue-500/10 text-blue-500';
      case 'Học tập': return 'bg-slate-800 text-slate-400';
      case 'Khuyến mãi': return 'bg-rose-500/10 text-rose-500';
      default: return 'bg-slate-800';
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
            <tr>
              <th className="py-6 px-8">Tiêu đề thông báo</th>
              <th className="py-6 px-4">Đối tượng</th>
              <th className="py-6 px-4">Thời gian</th>
              <th className="py-6 px-4 text-center">Trạng thái</th>
              <th className="py-6 px-4">Tỷ lệ mở</th>
              <th className="py-6 px-8 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {items.map((item) => (
              <tr key={item.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-7 px-8 max-w-sm">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 ${getIconBg(item.type)}`}>
                      {getIcon(item.type)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-black text-slate-100 group-hover:text-blue-400 transition-colors truncate">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 italic">{item.summary}</p>
                    </div>
                  </div>
                </td>
                <td className="py-7 px-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center text-xs opacity-60">
                        {item.targetIcon}
                      </div>
                      <span className="text-xs font-bold text-slate-300">{item.target}</span>
                   </div>
                </td>
                <td className="py-7 px-4">
                   <div className="space-y-0.5">
                      <p className="text-sm font-black text-slate-100">{item.time}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Hôm nay, {item.date}</p>
                   </div>
                </td>
                <td className="py-7 px-4 text-center">
                   <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-widest ${getStatusBadge(item.status)}`}>
                     {item.status === 'Đã gửi' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                     {item.status === 'Đã đọc' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 relative"><div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-40" /></div>}
                     {item.status}
                   </div>
                </td>
                <td className="py-7 px-4">
                   <div className="flex items-center gap-3">
                      <div className="w-20 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                           className={`h-full rounded-full transition-all duration-1000 ${
                             item.openRate > 80 ? 'bg-emerald-500' : item.openRate > 50 ? 'bg-blue-500' : 'bg-amber-500'
                           }`}
                           style={{ width: `${item.openRate}%` }} 
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-300 w-8">{item.openRate}%</span>
                   </div>
                </td>
                <td className="py-7 px-8 text-right">
                   <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-slate-500 hover:text-slate-200">👁️</button>
                      <button className="text-slate-500 hover:text-blue-400">🔄</button>
                      <button className="text-slate-500 hover:text-rose-500">🗑️</button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-slate-800 flex items-center justify-between bg-slate-800/10">
        <p className="text-xs text-slate-500 font-medium italic">
          Hiển thị 4 trong 156 thông báo
        </p>
        <div className="flex items-center gap-2">
           <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-600 border border-slate-800 hover:text-slate-400 transition-all cursor-not-allowed">‹</button>
           <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs shadow-xl shadow-blue-600/30 transition-all">1</button>
           <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/30 text-slate-500 text-xs font-black border border-transparent hover:border-slate-800 hover:text-slate-300">2</button>
           <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-slate-800 hover:text-slate-300 transition-all">›</button>
        </div>
      </div>
    </div>
  );
};
