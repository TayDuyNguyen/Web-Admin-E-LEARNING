
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { RevenueStat, RevenueTrendPoint, TopEarningCourse, PaymentMethodData } from '../../shared/types/revenue';
import { Card } from '../../shared/ui/Card';

export const RevenueStatsGrid: React.FC<{ stats: RevenueStat[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((s, idx) => (
        <Card key={idx} className="relative overflow-hidden p-8 border-slate-800/50 bg-[#1e293b]/20 group">
          <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
             <span className="text-5xl">{s.icon}</span>
          </div>
          <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-3">{s.label}</p>
          <div className="flex items-baseline gap-1 mb-2">
            <h4 className="text-4xl font-black text-slate-100 tracking-tighter">{s.value}</h4>
          </div>
          <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter mb-6 ${s.trend >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
            <span>📈 {s.trend > 0 ? '+' : ''}{s.trend}{s.label.includes('ARPU') ? 'k' : '%'}</span>
            <span className="text-slate-600 font-bold tracking-normal italic lowercase">{s.trendLabel}</span>
          </div>
          <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                s.color === 'blue' ? 'bg-blue-600' : s.color === 'emerald' ? 'bg-emerald-600' : 'bg-amber-600'
              }`} 
              style={{ width: `${s.progress}%` }} 
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export const RevenueTrendChart: React.FC<{ data: RevenueTrendPoint[] }> = ({ data }) => {
  return (
    <Card 
      title="Xu hướng doanh thu" 
      extra={
        <div className="flex gap-2">
          <button className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-lg shadow-lg shadow-blue-600/20">Năm nay</button>
          <button className="px-4 py-1.5 bg-slate-800 text-slate-400 text-[10px] font-bold rounded-lg hover:text-slate-200">Tháng trước</button>
        </div>
      }
      className="mb-8 p-0 border-slate-800 bg-[#1e293b]/10"
    >
      <div className="h-[420px] w-full mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#475569" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              dy={15}
              className="font-black"
            />
            <YAxis 
               stroke="#475569" 
               fontSize={10} 
               tickLine={false} 
               axisLine={false}
               tickFormatter={(val) => `${val}tr`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
              itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10b981" 
              strokeWidth={4} 
              fillOpacity={1} 
              fill="url(#colorRevenue)"
              animationDuration={2500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export const TopCoursesTable: React.FC<{ courses: TopEarningCourse[] }> = ({ courses }) => {
  return (
    <Card 
      title="Khóa học có doanh thu cao nhất" 
      extra={<button className="text-blue-500 text-xs font-bold hover:underline">Xem tất cả</button>}
      className="bg-slate-900/30"
    >
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left">
          <thead className="text-[10px] text-slate-500 uppercase font-black tracking-widest border-b border-slate-800">
            <tr>
              <th className="pb-4 pt-0 px-4">Tên khóa học</th>
              <th className="pb-4 pt-0 px-4">Số lượng bán</th>
              <th className="pb-4 pt-0 px-4">Tổng tiền</th>
              <th className="pb-4 pt-0 px-4">Xu hướng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {courses.map((course) => (
              <tr key={course.id} className="group hover:bg-slate-800/20 transition-colors">
                <td className="py-5 px-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-blue-600/10 flex items-center justify-center text-[10px] font-black text-blue-500">PY</div>
                      <span className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{course.title}</span>
                   </div>
                </td>
                <td className="py-5 px-4 text-sm text-slate-400 font-medium">{course.salesCount.toLocaleString()}</td>
                <td className="py-5 px-4 text-sm text-blue-400 font-black">{course.totalRevenue}</td>
                <td className="py-5 px-4 text-xs font-black text-emerald-500">{course.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export const PaymentMethodDonut: React.FC<{ data: PaymentMethodData[] }> = ({ data }) => {
  return (
    <Card title="Phân bổ phương thức TT" extra={<button className="text-slate-600 hover:text-slate-300">•••</button>} className="bg-slate-900/30 h-full">
      <div className="h-[240px] w-full relative mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={65}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
               contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3 mt-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{item.name}</span>
            </div>
            <span className="text-xs font-black text-slate-200">{item.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
