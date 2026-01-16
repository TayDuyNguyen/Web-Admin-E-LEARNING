
import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';
import { UserStat, AcquisitionSource, ActivityPoint } from '../../shared/types/user-analytics';
import { Card } from '../../shared/ui/Card';

export const UserStatsGrid: React.FC<{ stats: UserStat[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((s, idx) => (
        <Card key={idx} className="relative overflow-hidden p-8 border-slate-800/50 bg-[#1e293b]/20 group">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
          
          <div className="flex justify-between items-start mb-4">
             <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest">{s.label}</p>
             <span className="text-2xl opacity-20 group-hover:opacity-40 transition-opacity">{s.icon}</span>
          </div>

          <div className="flex items-baseline gap-1 mb-2">
            <h4 className="text-4xl font-black text-slate-100 tracking-tighter">{s.value}</h4>
          </div>

          <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter mb-6 ${s.trend >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
            <span>📈 {s.trend > 0 ? '+' : ''}{s.trend}{s.value.includes('₫') ? 'k' : '%'}</span>
            <span className="text-slate-600 font-bold tracking-normal italic lowercase">{s.trendLabel}</span>
          </div>

          <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
              style={{ width: `${s.progress}%` }} 
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export const AcquisitionDonut: React.FC<{ data: AcquisitionSource[] }> = ({ data }) => {
  return (
    <Card 
      title="Nguồn thu hút người dùng" 
      extra={<button className="text-slate-600 hover:text-slate-300">•••</button>}
      className="h-full bg-slate-900/30"
    >
      <div className="h-[280px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
              itemStyle={{ fontWeight: 'bold' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
           <span className="text-3xl font-black text-slate-100">100%</span>
           <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Tổng cộng</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-y-4 mt-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{item.name}</p>
              <p className="text-sm font-black text-slate-200">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const UserActivityChart: React.FC<{ data: ActivityPoint[] }> = ({ data }) => {
  return (
    <Card 
      title="Mô hình hoạt động người dùng" 
      extra={
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-slate-800 text-[10px] font-bold text-slate-400 rounded-lg">Ngày</button>
          <button className="px-3 py-1 bg-blue-600/10 text-[10px] font-bold text-blue-400 rounded-lg">Tuần</button>
        </div>
      }
      className="h-full bg-slate-900/30"
    >
      <div className="h-[380px] w-full mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="#475569" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              dy={15}
              className="font-bold"
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
              itemStyle={{ fontWeight: 'bold' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
            <Line 
              type="monotone" 
              dataKey="activeUsers" 
              name="Người dùng hoạt động" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              dot={{ r: 0 }} 
              activeDot={{ r: 6, strokeWidth: 0 }} 
            />
            <Line 
              type="monotone" 
              dataKey="newUsers" 
              name="Người dùng mới" 
              stroke="#22c55e" 
              strokeWidth={3} 
              strokeDasharray="5 5"
              dot={{ r: 0 }} 
              activeDot={{ r: 6, strokeWidth: 0 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
