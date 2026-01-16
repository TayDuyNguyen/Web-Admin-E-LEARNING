
import React from 'react';
import { GamificationStats, AchievementItem } from '../../shared/types/achievement';
import { Card } from '../../shared/ui/Card';

export const AchievementStatsGrid: React.FC<{ stats: GamificationStats }> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    <Card className="bg-[#1e293b]/20 border-slate-800/50 p-8 flex items-center gap-6">
      <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center text-2xl border border-amber-500/20">🏆</div>
      <div>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Tổng số thành tích</p>
        <h4 className="text-4xl font-black text-slate-100">{stats.totalAchievements}</h4>
        <p className="text-[10px] text-emerald-500 font-bold mt-1">📈 +{stats.growth} tháng này</p>
      </div>
    </Card>

    <Card className="bg-[#1e293b]/20 border-slate-800/50 p-8 flex items-center gap-6">
      <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center text-2xl border border-purple-500/20">🎖️</div>
      <div>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Học viên xuất sắc</p>
        <h4 className="text-2xl font-black text-slate-100 truncate max-w-[150px]">{stats.topStudent.name}</h4>
        <p className="text-[10px] text-slate-400 font-bold mt-1">Đã đạt {stats.topStudent.badgesCount} huy hiệu</p>
      </div>
    </Card>

    <Card className="bg-[#1e293b]/20 border-slate-800/50 p-8 flex items-center gap-6">
      <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center text-2xl border border-blue-500/20">👥</div>
      <div>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Tỷ lệ tham gia</p>
        <h4 className="text-4xl font-black text-slate-100">{stats.participationRate}%</h4>
        <p className="text-[10px] text-slate-400 font-bold mt-1">Học viên có ít nhất 1 huy hiệu</p>
      </div>
    </Card>
  </div>
);

export const AchievementCard: React.FC<{ item: AchievementItem }> = ({ item }) => {
  const colorStyles = {
    blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-blue-500/5',
    purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20 shadow-purple-500/5',
    amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-amber-500/5',
    emerald: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-emerald-500/5',
    rose: 'bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-rose-500/5',
  };

  return (
    <Card className="group bg-[#1e293b]/20 border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full text-center py-10">
      <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl border transition-transform duration-500 group-hover:scale-110 ${colorStyles[item.color as keyof typeof colorStyles]}`}>
        {item.icon}
      </div>
      
      <div className="px-6 flex-1">
        <h4 className="text-lg font-black text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6">
          {item.description}
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
           <span className="text-blue-500 text-sm">👤</span>
           <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{item.earnerCount.toLocaleString()} học viên đã đạt</span>
        </div>
      </div>

      <div className="border-t border-slate-800/50 mt-auto pt-6 flex items-center justify-around px-4">
        <button className="flex flex-col items-center gap-1 group/btn">
          <span className="text-slate-500 group-hover/btn:text-blue-400 transition-colors">✏️</span>
          <span className="text-[8px] font-black text-slate-600 uppercase tracking-tighter group-hover/btn:text-slate-300 transition-colors">Sửa quy tắc</span>
        </button>
        <button className="flex flex-col items-center gap-1 group/btn">
          <span className="text-slate-500 group-hover/btn:text-blue-400 transition-colors">⚙️</span>
          <span className="text-[8px] font-black text-slate-600 uppercase tracking-tighter group-hover/btn:text-slate-300 transition-colors">Cấp thủ công</span>
        </button>
        <button className="flex flex-col items-center gap-1 group/btn">
          <span className="text-slate-500 group-hover/btn:text-blue-400 transition-colors">📋</span>
          <span className="text-[8px] font-black text-slate-600 uppercase tracking-tighter group-hover/btn:text-slate-300 transition-colors">Xem danh sách</span>
        </button>
      </div>
    </Card>
  );
};
