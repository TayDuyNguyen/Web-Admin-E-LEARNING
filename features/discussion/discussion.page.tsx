
import React, { useEffect, useState } from 'react';
import { fetchDiscussions } from './discussion.api';
import { DiscussionItem } from '../../shared/types/discussion';
import { DiscussionFilters, DiscussionTable } from './discussion.ui';

export const DiscussionModerationPage: React.FC = () => {
  const [discussions, setDiscussions] = useState<DiscussionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchDiscussions();
        setDiscussions(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải danh sách thảo luận...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Cộng đồng</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Thảo luận</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Quản lý thảo luận</h2>
        </div>
        <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30">
          <span className="text-sm">📍</span> Ghim thảo luận quan trọng
        </button>
      </div>

      <DiscussionFilters />
      <DiscussionTable discussions={discussions} />
    </div>
  );
};
