
import React, { useEffect, useState } from 'react';
import { fetchUserAnalytics } from './user-analytics.api';
import { UserAnalyticsData } from '../../shared/types/user-analytics';
import { UserStatsGrid, AcquisitionDonut, UserActivityChart } from './user-analytics.ui';
import { Card } from '../../shared/ui/Card';

export const UserAnalyticsPage: React.FC = () => {
  const [data, setData] = useState<UserAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchUserAnalytics();
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
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang phân tích hành vi người dùng...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Phân tích</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Phân tích người dùng</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Phân tích người dùng</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all">
             <span>📁</span> Phân loại người dùng
          </button>
          <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30">
            <span>📊</span> Xuất dữ liệu người dùng
          </button>
        </div>
      </div>

      <UserStatsGrid stats={data.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-4">
          <AcquisitionDonut data={data.acquisition} />
        </div>
        <div className="lg:col-span-8">
          <UserActivityChart data={data.activity} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card title="Phân tích Cohort" extra={<button className="text-blue-500 text-xs font-bold hover:underline">Chi tiết</button>} className="bg-slate-900/30">
            <p className="text-slate-500 text-xs mt-2 italic">Tỷ lệ giữ chân người dùng theo tháng đăng ký đang được tính toán...</p>
            <div className="h-40 flex items-center justify-center">
               <div className="w-full h-4 bg-slate-800 rounded animate-pulse" />
            </div>
         </Card>
         <Card title="Dự báo tỷ lệ rời bỏ" className="bg-slate-900/30 border-rose-500/10">
            <p className="text-slate-500 text-xs mt-2 italic">Dựa trên AI, xác định học viên có nguy cơ ngừng học cao nhất.</p>
            <div className="mt-8 flex items-center gap-6">
               <div className="w-20 h-20 rounded-full border-4 border-rose-500/20 flex items-center justify-center text-rose-500 font-black text-xl">12%</div>
               <div>
                  <p className="text-xs font-black text-slate-200 uppercase tracking-widest">Nguy cơ trung bình</p>
                  <p className="text-[10px] text-slate-500 mt-1">Giảm 2.4% so với kỳ trước</p>
               </div>
            </div>
         </Card>
      </div>
    </div>
  );
};
