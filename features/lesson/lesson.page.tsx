
import React, { useEffect, useState } from 'react';
import { fetchLessons } from './lesson.api';
import { LessonItem } from '../../shared/types/lesson';
import { LessonFilters, LessonTable } from './lesson.ui';

export const LessonPage: React.FC = () => {
  const [lessons, setLessons] = useState<LessonItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchLessons();
        setLessons(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-medium">Đang tải danh sách bài giảng...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 pb-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-4">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Nội dung</span>
        <span className="text-slate-700">/</span>
        <span className="text-blue-500">Bài giảng</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-4xl font-black text-slate-100 leading-tight tracking-tight">Quản lý bài giảng</h2>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          <span className="text-lg">⊕</span> Thêm bài giảng mới
        </button>
      </div>

      <LessonFilters />
      <LessonTable lessons={lessons} />
    </div>
  );
};
