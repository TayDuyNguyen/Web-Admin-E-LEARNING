
import React, { useEffect, useState } from 'react';
import { fetchEngagementAnalytics } from './engagement-analytics.api';
import { EngagementData } from '../../shared/types/engagement';
import { EngagementStatsGrid, InteractionTrendChart, TopTopicsTable } from './engagement-analytics.ui';

export const EngagementAnalyticsPage: React.FC = () => {
  const [data, setData] = useState<EngagementData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchEngagementAnalytics();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-purple-600/10 border-t-purple-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang phân tích chỉ số tương tác...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Phân tích</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Báo cáo tương tác</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Báo cáo tương tác</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Đo lường mức độ gắn kết và sức khỏe cộng đồng học viên</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30">
            <span>📊</span> Tải báo cáo chi tiết
          </button>
        </div>
      </div>

      <EngagementStatsGrid stats={data.stats} />
      <InteractionTrendChart data={data.trends} />
      
      <div className="grid grid-cols-1 gap-8">
        <TopTopicsTable topics={data.topTopics} />
      </div>
    </div>
  );
};
