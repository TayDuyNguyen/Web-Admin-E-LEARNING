
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LearningStat, EngagementPoint, DropOffPoint } from '../../shared/types/analytics';
import { Card } from '../../shared/ui/Card';

export const AnalyticsFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 items-end">
      <div className="space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Thời gian</label>
        <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
          <option>Tháng này</option>
          <option>Tuần này</option>
          <option>Quý này</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Khóa học</label>
        <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
          <option>Tất cả khóa học</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Phân khúc</label>
        <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
          <option>Tất cả người dùng</option>
          <option>Mới đăng ký</option>
          <option>Hoạt động tích cực</option>
        </select>
      </div>
      <button className="w-full bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-blue-500/20 shadow-xl shadow-blue-500/5">
        Áp dụng bộ lọc
      </button>
    </div>
  );
};

export const LearningStatsGrid: React.FC<{ stats: LearningStat[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((s, idx) => (
        <Card key={idx} className="relative overflow-hidden p-8 border-slate-800/50 bg-[#1e293b]/20 group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <div className="w-20 h-20 rounded-full border-8 border-slate-100" />
          </div>
          <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-3">{s.label}</p>
          <div className="flex items-baseline gap-1 mb-2">
            <h4 className="text-4xl font-black text-slate-100 tracking-tighter">{s.value}</h4>
            {s.unit && <span className="text-xl font-bold text-slate-500">{s.unit}</span>}
          </div>
          <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter mb-6 ${s.trend >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
            <span>{s.trend >= 0 ? '📈' : '📉'} {s.trend > 0 ? '+' : ''}{s.trend}{s.unit || 'm'}</span>
            <span className="text-slate-600 font-bold tracking-normal italic lowercase">{s.trendLabel}</span>
          </div>
          <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                s.color === 'blue' ? 'bg-blue-600' : s.color === 'purple' ? 'bg-purple-600' : 'bg-emerald-600'
              }`} 
              style={{ width: `${s.progress}%` }} 
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export const EngagementChart: React.FC<{ data: EngagementPoint[] }> = ({ data }) => {
  return (
    <Card 
      title="Mức độ tương tác của học viên" 
      extra={<button className="text-slate-600 hover:text-slate-300 transition-colors">•••</button>}
      className="mb-8 p-0 border-slate-800 bg-[#1e293b]/10"
    >
      <div className="h-[380px] w-full mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="day" 
              stroke="#475569" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              dy={15}
              textAnchor="middle"
              className="font-black uppercase tracking-widest"
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
              itemStyle={{ color: '#60a5fa', fontWeight: 'bold' }}
              cursor={{ stroke: '#3b82f6', strokeWidth: 1 }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={4} 
              fillOpacity={1} 
              fill="url(#colorEngagement)"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export const DropOffHeatmap: React.FC<{ dropOffs: DropOffPoint[] }> = ({ dropOffs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <Card title="Điểm rơi học viên" className="lg:col-span-5 bg-slate-900/30">
        <div className="space-y-8 mt-4">
          {dropOffs.map((item, idx) => (
            <div key={idx} className="space-y-2 group">
              <div className="flex justify-between items-end">
                <p className="text-xs font-bold text-slate-300 group-hover:text-blue-400 transition-colors truncate max-w-[200px]">{item.lessonTitle}</p>
                <span className="text-xs font-black text-slate-100">{item.dropRate}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full group-hover:bg-blue-500 transition-all duration-700"
                  style={{ width: `${item.dropRate}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Thời gian hoạt động tích cực nhất" className="lg:col-span-7 bg-slate-900/30">
        <div className="mt-4">
          <div className="flex justify-end gap-4 mb-4 text-[9px] font-black uppercase text-slate-500">
             <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-slate-800" /> Ít</div>
             <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-blue-600/40" /></div>
             <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-blue-600" /> Nhiều</div>
          </div>
          
          <div className="space-y-2">
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
              <div key={day} className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-600 w-6 uppercase">{day}</span>
                <div className="flex-1 grid grid-cols-12 gap-1.5 h-8">
                  {Array.from({ length: 12 }).map((_, h) => {
                    const intensity = Math.random();
                    return (
                      <div 
                        key={h} 
                        className={`rounded-sm transition-all hover:scale-110 cursor-help ${
                          intensity > 0.8 ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 
                          intensity > 0.5 ? 'bg-blue-600/60' : 
                          intensity > 0.3 ? 'bg-blue-600/30' : 'bg-slate-800/50'
                        }`} 
                        title={`${day} - ${h*2}h: ${Math.floor(intensity*100)}%`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
