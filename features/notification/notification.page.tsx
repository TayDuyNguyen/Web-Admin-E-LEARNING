
import React, { useEffect, useState } from 'react';
import { fetchNotificationData } from './notification.api';
import { NotificationData } from '../../shared/types/notification';
import { NotificationStatsGrid, NotificationTabs, NotificationTable } from './notification.ui';

export const NotificationCenterPage: React.FC = () => {
  const [data, setData] = useState<NotificationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchNotificationData();
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
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải dữ liệu thông báo...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Thông báo</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Trung tâm thông báo</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Trung tâm thông báo</h2>
        </div>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
          <span>🚀</span> Gửi thông báo mới
        </button>
      </div>

      <NotificationStatsGrid stats={data.stats} />
      
      <NotificationTabs active="Lịch sử gửi" />
      <NotificationTable items={data.history} />
    </div>
  );
};
