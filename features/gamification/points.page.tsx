
import React, { useEffect, useState } from 'react';
import { fetchRewardPointsData } from './points.api';
import { RewardPointsData } from '../../shared/types/reward-points';
import { PointsStatsGrid, RulesList, PointsLeaderboard } from './points.ui';
import { Card } from '../../shared/ui/Card';

export const RewardPointsPage: React.FC = () => {
  const [data, setData] = useState<RewardPointsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchRewardPointsData();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Khởi tạo hệ thống điểm...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Trò chơi hóa</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Hệ thống điểm thưởng</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Hệ thống điểm thưởng</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95">
            <span>👥</span> Quản lý giao dịch
          </button>
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95">
            <span>🔄</span> Đặt lại điểm người dùng
          </button>
          <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
            <span>⊕</span> Thiết lập quy tắc mới
          </button>
        </div>
      </div>

      <PointsStatsGrid stats={data.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <RulesList rules={data.rules} />
          
          <Card title="🛒 Cửa hàng phần thưởng" extra={<button className="text-blue-500 text-[10px] font-black uppercase">+ Thêm vật phẩm</button>} className="bg-slate-900/20">
             <div className="grid grid-cols-2 gap-4 mt-2">
                {data.rewardsPreview.map(reward => (
                  <div key={reward.id} className="p-6 bg-[#0f172a] border border-slate-800 rounded-2xl flex items-center justify-between hover:border-amber-500/30 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl">
                        {reward.type === 'Voucher' ? '🎫' : '📚'}
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-200 uppercase">{reward.type}</p>
                        <h5 className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">{reward.title}</h5>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                       <span className="text-amber-500 font-black text-sm">🪙 {reward.pointsRequired}</span>
                    </div>
                  </div>
                ))}
             </div>
          </Card>
        </div>

        <div className="lg:col-span-5">
          <PointsLeaderboard users={data.leaderboard} />
        </div>
      </div>
    </div>
  );
};
