
import React from 'react';
import { LessonItem, LessonStatus, LessonType } from '../../shared/types/lesson';

export const LessonFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center gap-4 mb-8">
      <div className="relative flex-1 min-w-[240px]">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm theo tiêu đề bài giảng..."
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Chọn Khóa học</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
        <div className="relative">
          <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Chọn Chương (Module)</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
        <div className="relative">
          <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Loại bài giảng</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
        <div className="relative">
          <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Trạng thái</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
      </div>
    </div>
  );
};

export const LessonTable: React.FC<{ lessons: LessonItem[] }> = ({ lessons }) => {
  const getStatusBadge = (status: LessonStatus) => {
    switch (status) {
      case 'Công khai': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Nháp': return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
      case 'Chờ duyệt': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return '';
    }
  };

  const getTypeBadge = (type: LessonType) => {
    switch (type) {
      case 'Video': return 'bg-blue-600/10 text-blue-400';
      case 'Văn bản': return 'bg-purple-600/10 text-purple-400';
      case 'Tập tin': return 'bg-orange-600/10 text-orange-400';
      default: return 'bg-slate-800 text-slate-400';
    }
  };

  const getIcon = (type: LessonType) => {
    switch (type) {
      case 'Video': return '▶';
      case 'Văn bản': return '📄';
      case 'Tập tin': return '📁';
      default: return '📝';
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-5 px-6 w-4">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-5 px-6">Tên bài giảng</th>
              <th className="py-5 px-6">Thuộc khóa học</th>
              <th className="py-5 px-6">Chương</th>
              <th className="py-5 px-6">Loại</th>
              <th className="py-5 px-6">Thời lượng</th>
              <th className="py-5 px-6">Trạng thái</th>
              <th className="py-5 px-6 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {lessons.map((lesson) => (
              <tr key={lesson.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-5 px-6">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm text-slate-400 group-hover:bg-blue-600/10 group-hover:text-blue-400 transition-colors">
                      {getIcon(lesson.type)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{lesson.title}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-tight font-bold">ID: {lesson.lessonCode}</p>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-6 text-xs text-slate-300 font-medium max-w-[150px] truncate">{lesson.courseName}</td>
                <td className="py-5 px-6 text-xs text-slate-400">{lesson.chapterName}</td>
                <td className="py-5 px-6">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${getTypeBadge(lesson.type)}`}>
                    {lesson.type}
                  </span>
                </td>
                <td className="py-5 px-6 text-xs text-slate-400 font-bold">{lesson.duration}</td>
                <td className="py-5 px-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold border uppercase tracking-wider ${getStatusBadge(lesson.status)}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${lesson.status === 'Công khai' ? 'bg-emerald-500' : lesson.status === 'Nháp' ? 'bg-slate-400' : 'bg-amber-500'}`} />
                    {lesson.status}
                  </div>
                </td>
                <td className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-slate-500 hover:text-slate-200 transition-colors">👁️</button>
                    <button className="text-slate-500 hover:text-blue-400 transition-colors">✏️</button>
                    <button className="text-slate-500 hover:text-slate-200 transition-colors">📤</button>
                    <button className="text-slate-500 hover:text-rose-500 transition-colors">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-6 py-5 border-t border-slate-800 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          Hiển thị <span className="text-slate-200 font-bold">1-5</span> trên <span className="text-slate-200 font-bold">50</span> bài giảng
        </p>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">
            ‹
          </button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all ${p === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'}`}>
              {p}
            </button>
          ))}
          <span className="text-slate-700 px-1 text-xs">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 hover:text-slate-300 text-xs font-bold">10</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
