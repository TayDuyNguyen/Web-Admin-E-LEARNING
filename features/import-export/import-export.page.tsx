
import React, { useEffect, useState } from 'react';
import { fetchTaskHistory } from './import-export.api';
import { DataTask } from '../../shared/types/import-export';
import { ImportSection, ExportSection, HistoryTable } from './import-export.ui';

export const ImportExportPage: React.FC = () => {
  const [history, setHistory] = useState<DataTask[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchTaskHistory();
        setHistory(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải dữ liệu công cụ...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Công cụ</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Nhập/Xuất</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Nhập & Xuất dữ liệu</h2>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95">
            <span>📅</span> Lên lịch xuất định kỳ
          </button>
          <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
            <span>🕒</span> Xem nhật ký nhập liệu
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
        <ImportSection />
        <ExportSection />
      </div>

      <HistoryTable items={history} />
    </div>
  );
};
