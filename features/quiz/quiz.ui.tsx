
import React from 'react';
import { QuizItem, QuizStatus } from '../../shared/types/quiz';

export const QuizFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-wrap items-center gap-8 mb-8">
      <div className="flex-1 min-w-[280px] space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Chọn khóa học</label>
        <div className="relative">
          <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Tất cả khóa học</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
      </div>
      
      <div className="min-w-[280px] space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Tìm kiếm bài kiểm tra</label>
        <div className="relative">
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Nhập tên bài kiểm tra..."
            className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 pr-10 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div className="min-w-[160px] space-y-2">
        <label className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-1">Trạng thái</label>
        <div className="relative">
          <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 pr-10 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Tất cả</option>
            <option>Đang hoạt động</option>
            <option>Bản nháp</option>
            <option>Đã đóng</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
      </div>
    </div>
  );
};

export const QuizTable: React.FC<{ quizzes: QuizItem[] }> = ({ quizzes }) => {
  const getStatusColor = (status: QuizStatus) => {
    switch (status) {
      case 'Đang hoạt động': return 'text-emerald-400';
      case 'Bản nháp': return 'text-slate-500';
      case 'Đã đóng': return 'text-rose-500';
      default: return 'text-slate-400';
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
              <th className="py-6 px-4">Tên bài kiểm tra</th>
              <th className="py-6 px-4">Thuộc khóa học</th>
              <th className="py-6 px-4">Số câu hỏi</th>
              <th className="py-6 px-4">Điểm đạt</th>
              <th className="py-6 px-4">Thời gian</th>
              <th className="py-6 px-4">Hoàn thành</th>
              <th className="py-6 px-8 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-8 px-8">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-8 px-4">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{quiz.title}</p>
                    <div className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${getStatusColor(quiz.status)}`}>
                      <div className={`w-1 h-1 rounded-full ${
                        quiz.status === 'Đang hoạt động' ? 'bg-emerald-500' : 
                        quiz.status === 'Bản nháp' ? 'bg-slate-500' : 'bg-rose-500'
                      }`} />
                      {quiz.status}
                    </div>
                  </div>
                </td>
                <td className="py-8 px-4 text-xs text-slate-400">{quiz.courseName}</td>
                <td className="py-8 px-4">
                  <span className="inline-block px-2.5 py-1 bg-slate-800/80 rounded-md text-xs font-black text-slate-200">
                    {quiz.questionCount}
                  </span>
                </td>
                <td className="py-8 px-4 text-sm font-bold text-slate-200">{quiz.passingScore}%</td>
                <td className="py-8 px-4 text-sm font-medium text-slate-300">{quiz.timeLimit} phút</td>
                <td className="py-8 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full transition-all duration-1000" 
                        style={{ width: `${quiz.completionRate}%` }} 
                      />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 w-8">{quiz.completionRate}%</span>
                  </div>
                </td>
                <td className="py-8 px-8 text-right">
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
          Hiển thị <span className="text-slate-200 font-bold">1-10</span> trong số <span className="text-slate-200 font-bold">85</span> bài kiểm tra
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Trước</button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-9 h-9 flex items-center justify-center rounded-lg text-xs font-black transition-all ${p === 1 ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-slate-800/30 text-slate-500 border border-transparent hover:border-slate-700'}`}>
              {p}
            </button>
          ))}
          <span className="text-slate-700 px-1 text-xs">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/30 text-slate-500 text-xs font-black border border-transparent">9</button>
          <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Sau</button>
        </div>
      </div>
    </div>
  );
};
