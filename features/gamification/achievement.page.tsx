
import React, { useEffect, useState } from 'react';
import { fetchAchievements, fetchGamificationStats } from './achievement.api';
import { AchievementItem, GamificationStats } from '../../shared/types/achievement';
import { AchievementStatsGrid, AchievementCard } from './achievement.ui';

export const AchievementManagementPage: React.FC = () => {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [stats, setStats] = useState<GamificationStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [aData, sData] = await Promise.all([
          fetchAchievements(),
          fetchGamificationStats()
        ]);
        setAchievements(aData);
        setStats(sData);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !stats) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải hệ thống thành tích...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Trò chơi hóa</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Thành tích</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Quản lý thành tích</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95">
            <span>📊</span> Bảng xếp hạng
          </button>
          <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
            <span>✨</span> Tạo thành tích mới
          </button>
        </div>
      </div>

      <AchievementStatsGrid stats={stats} />

      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-black text-slate-100 tracking-tight">Danh sách thành tích</h3>
        <div className="relative group min-w-[300px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Tìm kiếm huy hiệu, thành tích..."
            className="w-full bg-slate-900/40 border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-xs text-slate-300 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} item={achievement} />
        ))}
        
        {/* Empty State Placeholder for "Create New" */}
        <button className="border-2 border-dashed border-slate-800 rounded-3xl p-10 flex flex-col items-center justify-center text-slate-600 hover:border-blue-500/50 hover:text-blue-500 transition-all group">
           <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-800 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:border-blue-500 transition-all">
             +
           </div>
           <span className="text-[10px] font-black uppercase tracking-widest">Thêm huy hiệu mới</span>
        </button>
      </div>
    </div>
  );
};
