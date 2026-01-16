
import React from 'react';
import { PointStat, EarningRule, LeaderboardUser } from '../../shared/types/reward-points';
import { Card } from '../../shared/ui/Card';

export const PointsStatsGrid: React.FC<{ stats: PointStat[] }> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    {stats.map((s, idx) => (
      <Card key={idx} className="bg-[#1e293b]/20 border-slate-800/50 p-8 flex items-center gap-6 relative overflow-hidden group">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border transition-all group-hover:scale-110 ${
          s.color === 'amber' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
          s.color === 'purple' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
          'bg-blue-500/10 text-blue-500 border-blue-500/20'
        }`}>
          {s.icon}
        </div>
        <div>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{s.label}</p>
          <h4 className="text-3xl font-black text-slate-100">{s.value}</h4>
          <p className={`text-[10px] font-bold mt-1 ${s.trendType === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
            {s.trendType === 'up' ? '↗' : '↘'} {s.trend}
          </p>
        </div>
      </Card>
    ))}
  </div>
);

export const RulesList: React.FC<{ rules: EarningRule[] }> = ({ rules }) => (
  <Card title="Quy tắc tích điểm" extra={<button className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">Xem tất cả</button>} className="bg-[#1e293b]/10">
    <div className="space-y-4 mt-2">
      {rules.map((rule) => (
        <div key={rule.id} className="flex items-center justify-between p-5 bg-[#0f172a]/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all group">
          <div className="flex items-center gap-5">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${rule.iconBg} ${rule.iconColor}`}>
              {rule.icon}
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-100 group-hover:text-blue-400 transition-colors">{rule.title}</h4>
              <p className="text-xs text-slate-500 font-medium">{rule.description}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-black text-emerald-500">+{rule.points} điểm</span>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export const PointsLeaderboard: React.FC<{ users: LeaderboardUser[] }> = ({ users }) => (
  <Card title="Bảng xếp hạng điểm cao" extra={<p className="text-[10px] text-slate-500 font-bold uppercase">Tháng này</p>} className="bg-[#1e293b]/10">
    <div className="space-y-4 mt-4">
      {users.map((user) => (
        <div key={user.rank} className="flex items-center gap-4 p-4 bg-[#0f172a]/30 border border-slate-800/50 rounded-2xl group hover:border-amber-500/20 transition-all">
          <div className={`w-8 font-black text-xl italic ${
            user.rank === 1 ? 'text-amber-500' : 
            user.rank === 2 ? 'text-slate-400' : 
            user.rank === 3 ? 'text-orange-400' : 'text-slate-600'
          }`}>
            {user.rank}
          </div>
          <img src={user.avatar} className="w-10 h-10 rounded-full border border-slate-700 group-hover:border-amber-500/50 transition-colors" alt="" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black text-slate-100 truncate">{user.name}</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{user.department}</p>
          </div>
          <div className="text-right">
             <p className="text-sm font-black text-amber-500">{user.points.toLocaleString()}</p>
             <p className="text-[8px] text-slate-600 uppercase font-black">điểm</p>
          </div>
        </div>
      ))}
    </div>
  </Card>
);
