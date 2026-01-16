
import React, { useEffect, useState } from 'react';
import { fetchReports, fetchReportStats } from './report.api';
import { ReportItem, ReportStats } from '../../shared/types/report';
import { ReportStatsOverview, ReportFilters, ReportTable } from './report.ui';

export const ReportManagementPage: React.FC = () => {
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [stats, setStats] = useState<ReportStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [rData, sData] = await Promise.all([
          fetchReports(),
          fetchReportStats()
        ]);
        setReports(rData);
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
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải danh sách báo cáo...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Cộng đồng</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Báo cáo vi phạm</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Quản lý báo cáo</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Theo dõi và xử lý các hành vi vi phạm, khiếu nại từ người dùng hệ thống</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all">
             ⚙️ Cấu hình bộ lọc AI
          </button>
        </div>
      </div>

      <ReportStatsOverview stats={stats} />
      <ReportFilters />
      <ReportTable reports={reports} />
    </div>
  );
};
