
import React from 'react';
import { ReportItem, ReportStatus, ReportSeverity, ReportStats } from '../../shared/types/report';
import { Card } from '../../shared/ui/Card';

export const ReportStatsOverview: React.FC<{ stats: ReportStats }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="p-6 border-slate-800/50 bg-slate-900/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-xl">🚩</div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Tổng báo cáo</p>
            <h4 className="text-2xl font-black text-slate-100">{stats.totalReports.toLocaleString()}</h4>
          </div>
        </div>
      </Card>
      <Card className="p-6 border-slate-800/50 bg-slate-900/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center text-xl">⏳</div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Đang chờ xử lý</p>
            <h4 className="text-2xl font-black text-slate-100">{stats.pendingReports}</h4>
          </div>
        </div>
      </Card>
      <Card className="p-6 border-slate-800/50 bg-slate-900/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center text-xl">✅</div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Đã xử lý hôm nay</p>
            <h4 className="text-2xl font-black text-slate-100">{stats.resolvedToday}</h4>
          </div>
        </div>
      </Card>
      <Card className="p-6 border-rose-500/20 bg-rose-500/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center text-xl">🚨</div>
          <div>
            <p className="text-[10px] text-rose-500 uppercase font-black tracking-widest">Mức độ nghiêm trọng</p>
            <h4 className="text-2xl font-black text-rose-500">{stats.criticalReports}</h4>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const ReportFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center gap-4 mb-8">
      <div className="relative flex-1 min-w-[280px]">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm báo cáo, ID hoặc người báo..."
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[150px]">
          <option>Loại nội dung</option>
          <option>Người dùng</option>
          <option>Bình luận</option>
          <option>Khóa học</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]">
          <option>Mức độ</option>
          <option>Thấp</option>
          <option>Trung bình</option>
          <option>Cao</option>
          <option>Nghiêm trọng</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]">
          <option>Trạng thái</option>
          <option>Chưa xử lý</option>
          <option>Đang xử lý</option>
          <option>Đã giải quyết</option>
        </select>
      </div>
    </div>
  );
};

export const ReportTable: React.FC<{ reports: ReportItem[] }> = ({ reports }) => {
  const getStatusColor = (status: ReportStatus) => {
    switch (status) {
      case 'Đã giải quyết': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Đang xử lý': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Chưa xử lý': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Bị bác bỏ': return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
      default: return '';
    }
  };

  const getSeverityBadge = (severity: ReportSeverity) => {
    switch (severity) {
      case 'Nghiêm trọng': return 'text-rose-500 font-black';
      case 'Cao': return 'text-orange-500 font-black';
      case 'Trung bình': return 'text-amber-500 font-black';
      default: return 'text-slate-500 font-bold';
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
            <tr>
              <th className="py-5 px-6 w-4 text-center">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-5 px-4">Đối tượng bị báo cáo</th>
              <th className="py-5 px-4">Người báo cáo</th>
              <th className="py-5 px-4">Lý do & Mô tả</th>
              <th className="py-5 px-4 text-center">Mức độ</th>
              <th className="py-5 px-4 text-center">Trạng thái</th>
              <th className="py-5 px-6 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {reports.map((report) => (
              <tr key={report.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-6 px-6 text-center">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-6 px-4">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors truncate">
                      {report.target.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] px-1.5 py-0.5 bg-slate-800 rounded text-slate-500 font-black uppercase">
                        {report.target.type}
                      </span>
                      <span className="text-[10px] text-slate-600">ID: {report.target.id}</span>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-3">
                    <img src={report.reporter.avatar} className="w-8 h-8 rounded-full border border-slate-800" alt="" />
                    <span className="text-xs text-slate-400 font-bold">{report.reporter.name}</span>
                  </div>
                </td>
                <td className="py-6 px-4 max-w-sm">
                  <div className="space-y-1">
                    <p className="text-xs font-black text-slate-300">{report.reason}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1 italic">{report.description}</p>
                    <p className="text-[9px] text-slate-700 font-bold mt-1 tracking-tighter uppercase">{report.date}</p>
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <span className={`text-[10px] uppercase tracking-tighter ${getSeverityBadge(report.severity)}`}>
                    {report.severity}
                  </span>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-widest ${getStatusColor(report.status)}`}>
                    {report.status}
                  </div>
                </td>
                <td className="py-6 px-6 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button title="Giải quyết" className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all text-xs">✓</button>
                    <button title="Bác bỏ" className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all text-xs">✕</button>
                    <button title="Chi tiết" className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs">👁️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-slate-800 flex items-center justify-between bg-slate-800/10">
        <p className="text-xs text-slate-500 font-medium">
          Hiển thị <span className="text-slate-200 font-bold">1-4</span> báo cáo trong danh sách xử lý
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Trước</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600 text-white font-black text-xs shadow-xl shadow-blue-600/20">1</button>
          <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Sau</button>
        </div>
      </div>
    </div>
  );
};
