
import React from 'react';
import { ExerciseItem, ExerciseStatus, ExerciseType, DifficultyLevel } from '../../shared/types/exercise';

export const ExerciseFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-wrap items-center gap-8 mb-8">
      <div className="flex-1 min-w-[280px] space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Chọn bài học</label>
        <div className="relative">
          <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Tất cả bài học</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
      </div>
      
      <div className="min-w-[200px] space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Loại bài tập</label>
        <div className="relative">
          <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Tất cả loại</option>
            <option>Trắc nghiệm</option>
            <option>Tự luận</option>
            <option>Đúng / Sai</option>
            <option>Điền từ</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
      </div>

      <div className="min-w-[160px] space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Độ khó</label>
        <div className="relative">
          <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Tất cả</option>
            <option>Dễ</option>
            <option>Trung bình</option>
            <option>Khó</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
      </div>
    </div>
  );
};

export const ExerciseTable: React.FC<{ exercises: ExerciseItem[] }> = ({ exercises }) => {
  const getStatusBadge = (status: ExerciseStatus) => {
    switch (status) {
      case 'Công khai': return 'text-emerald-400';
      case 'Nháp': return 'text-slate-500';
      default: return '';
    }
  };

  const getTypeBadge = (type: ExerciseType) => {
    switch (type) {
      case 'Trắc nghiệm': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Tự luận': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Đúng / Sai': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Điền từ': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default: return 'bg-slate-800 text-slate-400';
    }
  };

  const getDifficultyBadge = (level: DifficultyLevel) => {
    switch (level) {
      case 'Dễ': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Trung bình': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Khó': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return '';
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
            <tr>
              <th className="py-6 px-8 w-4">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-6 px-4">Câu hỏi</th>
              <th className="py-6 px-4">Thuộc bài học</th>
              <th className="py-6 px-4">Loại</th>
              <th className="py-6 px-4">Độ khó</th>
              <th className="py-6 px-4">Điểm số</th>
              <th className="py-6 px-4">Trạng thái</th>
              <th className="py-6 px-8 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {exercises.map((item) => (
              <tr key={item.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-6 px-8">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-6 px-4">
                  <span className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-1">{item.question}</span>
                </td>
                <td className="py-6 px-4">
                   <div className="text-xs text-slate-400 max-w-[140px] leading-relaxed">
                     {item.lessonName}
                   </div>
                </td>
                <td className="py-6 px-4">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-wider ${getTypeBadge(item.type)}`}>
                    {item.type}
                  </span>
                </td>
                <td className="py-6 px-4">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-wider ${getDifficultyBadge(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </td>
                <td className="py-6 px-4">
                   <span className="text-sm font-black text-slate-200">{item.points}</span>
                </td>
                <td className="py-6 px-4">
                  <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${getStatusBadge(item.status)}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Công khai' ? 'bg-emerald-500' : 'bg-slate-500'}`} />
                    {item.status}
                  </div>
                </td>
                <td className="py-6 px-8 text-right">
                   <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-slate-500 hover:text-blue-400 text-lg">👁️</button>
                      <button className="text-slate-500 hover:text-blue-400 text-lg">✏️</button>
                      <button className="text-slate-500 hover:text-rose-500 text-lg">🗑️</button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-slate-800 flex items-center justify-between bg-slate-800/20">
        <p className="text-xs text-slate-500 font-medium">
          Hiển thị <span className="text-slate-200 font-bold">1-10</span> trong số <span className="text-slate-200 font-bold">142</span> bài tập
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Trước</button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-9 h-9 flex items-center justify-center rounded-lg text-xs font-black transition-all ${p === 1 ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-slate-800/30 text-slate-500 border border-transparent hover:border-slate-700'}`}>
              {p}
            </button>
          ))}
          <span className="text-slate-700 px-1 text-xs">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/30 text-slate-500 text-xs font-black border border-transparent">15</button>
          <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Sau</button>
        </div>
      </div>
    </div>
  );
};
