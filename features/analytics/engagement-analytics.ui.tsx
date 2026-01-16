
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend, BarChart, Bar 
} from 'recharts';
import { EngagementStat, EngagementTrendPoint, ActiveTopic } from '../../shared/types/engagement';
import { Card } from '../../shared/ui/Card';

export const EngagementStatsGrid: React.FC<{ stats: EngagementStat[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((s, idx) => (
        <Card key={idx} className="p-6 border-slate-800/50 bg-[#1e293b]/20 group">
          <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all group-hover:scale-110 ${
              s.color === 'blue' ? 'bg-blue-500/10 text-blue-500' :
              s.color === 'purple' ? 'bg-purple-500/10 text-purple-500' :
              s.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
            }`}>
              {s.icon}
            </div>
            <div className={`text-[10px] font-black px-2 py-0.5 rounded-md ${s.trend >= 0 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
              {s.trend > 0 ? '+' : ''}{s.trend}%
            </div>
          </div>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{s.label}</p>
          <h4 className="text-2xl font-black text-slate-100 mt-1">{s.value}</h4>
          <p className="text-[10px] text-slate-600 font-bold mt-2 italic">{s.trendLabel}</p>
        </Card>
      ))}
    </div>
  );
};

export const InteractionTrendChart: React.FC<{ data: EngagementTrendPoint[] }> = ({ data }) => {
  return (
    <Card 
      title="Xu hướng tương tác cộng đồng" 
      className="mb-8 p-0 border-slate-800 bg-[#1e293b]/10"
    >
      <div className="h-[400px] w-full mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
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
            <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
            />
            <Legend verticalAlign="top" align="right" height={36} iconType="circle" />
            <Line type="monotone" dataKey="likes" name="Lượt thích" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="comments" name="Bình luận" stroke="#a855f7" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="discussions" name="Thảo luận" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export const TopTopicsTable: React.FC<{ topics: ActiveTopic[] }> = ({ topics }) => {
  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'Tích cực': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Trung lập': return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
      case 'Tiêu cực': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return '';
    }
  };

  return (
    <Card title="Chủ đề thảo luận sôi nổi nhất" className="bg-slate-900/30">
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left">
          <thead className="text-[10px] text-slate-500 uppercase font-black tracking-widest border-b border-slate-800">
            <tr>
              <th className="pb-4 px-4">Chủ đề</th>
              <th className="pb-4 px-4">Danh mục</th>
              <th className="pb-4 px-4 text-center">Lượt tương tác</th>
              <th className="pb-4 px-4 text-center">Sắc thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {topics.map((topic) => (
              <tr key={topic.id} className="group hover:bg-slate-800/20 transition-colors cursor-pointer">
                <td className="py-5 px-4">
                  <p className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{topic.title}</p>
                </td>
                <td className="py-5 px-4 text-xs text-slate-500 font-medium">{topic.category}</td>
                <td className="py-5 px-4 text-center text-sm font-black text-slate-300">{topic.interactions.toLocaleString()}</td>
                <td className="py-5 px-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase border tracking-wider ${getSentimentBadge(topic.sentiment)}`}>
                    {topic.sentiment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
