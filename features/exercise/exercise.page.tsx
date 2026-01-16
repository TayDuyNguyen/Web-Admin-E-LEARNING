
import React, { useEffect, useState } from 'react';
import { fetchExercises } from './exercise.api';
import { ExerciseItem } from '../../shared/types/exercise';
import { ExerciseFilters, ExerciseTable } from './exercise.ui';

export const ExercisePage: React.FC = () => {
  const [exercises, setExercises] = useState<ExerciseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải kho bài tập...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Nội dung</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Bài tập</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Quản lý bài tập</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Quản lý danh sách câu hỏi và bài tập trong hệ thống</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all">
             <span>📥</span> Nhập hàng loạt
          </button>
          <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30">
            <span>⊕</span> Thêm bài tập mới
          </button>
        </div>
      </div>

      <ExerciseFilters />
      <ExerciseTable exercises={exercises} />
    </div>
  );
};
