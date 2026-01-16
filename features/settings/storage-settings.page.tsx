
import React, { useEffect, useState } from 'react';
import { fetchStorageSettings } from './storage-settings.api';
import { StorageSettings } from '../../shared/types/storage-settings';
import { 
  StorageUsageCard, CDNSettingsCard, FileLimitCard, BackupTableCard, QuickActionsSidebar 
} from './storage-settings.ui';

export const StorageMediaSettingsPage: React.FC = () => {
  const [data, setData] = useState<StorageSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchStorageSettings();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Phân tích hệ thống lưu trữ...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Cài đặt</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Lưu trữ & Phương tiện</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Lưu trữ & Phương tiện</h2>
        <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
          <span>💾</span> Lưu thay đổi
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-8">
          <StorageUsageCard data={data.overview} />
          <CDNSettingsCard data={data.cdn} />
          <FileLimitCard data={data.limits} />
          <BackupTableCard items={data.backups} />
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 sticky top-24">
          <QuickActionsSidebar />
        </div>
      </div>
    </div>
  );
};
