
import React, { useEffect, useState } from 'react';
import { fetchRevenueAnalytics } from './revenue-analytics.api';
import { RevenueAnalyticsData } from '../../shared/types/revenue';
import { RevenueStatsGrid, RevenueTrendChart, TopCoursesTable, PaymentMethodDonut } from './revenue-analytics.ui';

export const RevenueAnalyticsPage: React.FC = () => {
  const [data, setData] = useState<RevenueAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchRevenueAnalytics();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-emerald-600/10 border-t-emerald-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tổng hợp dữ liệu tài chính...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Phân tích</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Phân tích doanh thu</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Phân tích doanh thu</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all">
             <span>🔄</span> Xử lý hoàn tiền
          </button>
          <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30">
            <span>📄</span> Xuất báo cáo tài chính
          </button>
        </div>
      </div>

      <RevenueStatsGrid stats={data.stats} />
      <RevenueTrendChart data={data.trends} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <TopCoursesTable courses={data.topCourses} />
        </div>
        <div className="lg:col-span-4">
          <PaymentMethodDonut data={data.paymentMethods} />
        </div>
      </div>
    </div>
  );
};
