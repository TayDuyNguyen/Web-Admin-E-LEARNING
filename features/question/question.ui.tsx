
import React from 'react';
import { QuestionBankItem, QuestionType, QuestionDifficulty } from '../../shared/types/question';

export const QuestionFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center gap-4 mb-8">
      <div className="relative flex-1 min-w-[300px]">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm nội dung câu hỏi hoặc mã câu hỏi..."
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]">
          <option>Danh mục</option>
          <option>Lập trình OOP</option>
          <option>ReactJS</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]">
          <option>Loại câu hỏi</option>
          <option>Trắc nghiệm</option>
          <option>Tự luận</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[120px]">
          <option>Độ khó</option>
          <option>Dễ</option>
          <option>Trung bình</option>
          <option>Khó</option>
        </select>
      </div>
    </div>
  );
};

export const QuestionTable: React.FC<{ questions: QuestionBankItem[] }> = ({ questions }) => {
  const getTypeColor = (type: QuestionType) => {
    switch (type) {
      case 'Trắc nghiệm': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Tự luận': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Đúng / Sai': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Điền từ': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default: return 'bg-slate-800 text-slate-400';
    }
  };

  const getDifficultyColor = (level: QuestionDifficulty) => {
    switch (level) {
      case 'Dễ': return 'text-emerald-400';
      case 'Trung bình': return 'text-amber-400';
      case 'Khó': return 'text-rose-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
            <tr>
              <th className="py-5 px-6 w-4">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-5 px-4">Nội dung câu hỏi</th>
              <th className="py-5 px-4">Danh mục</th>
              <th className="py-5 px-4 text-center">Loại</th>
              <th className="py-5 px-4 text-center">Độ khó</th>
              <th className="py-5 px-4 text-center">Sử dụng</th>
              <th className="py-5 px-4">Người tạo</th>
              <th className="py-5 px-6 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {questions.map((q) => (
              <tr key={q.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-6 px-6">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-6 px-4 max-w-md">
                  <p className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-2 leading-relaxed">
                    {q.content}
                  </p>
                  <p className="text-[9px] text-slate-600 font-black uppercase mt-1.5 tracking-tighter">Mã: {q.questionCode}</p>
                </td>
                <td className="py-6 px-4">
                  <span className="text-xs text-slate-400 font-medium bg-slate-800/40 px-2 py-1 rounded">{q.category}</span>
                </td>
                <td className="py-6 px-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-wider ${getTypeColor(q.type)}`}>
                    {q.type}
                  </span>
                </td>
                <td className="py-6 px-4 text-center">
                  <span className={`text-[11px] font-black ${getDifficultyColor(q.difficulty)}`}>
                    {q.difficulty}
                  </span>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-black text-slate-200">{q.usageCount}</span>
                    <span className="text-[8px] text-slate-600 uppercase font-bold">Lần</span>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">👤</div>
                    <span className="text-xs text-slate-400">{q.author}</span>
                  </div>
                </td>
                <td className="py-6 px-6 text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-slate-500 hover:text-blue-400 transition-colors">✏️</button>
                    <button className="text-slate-500 hover:text-rose-500 transition-colors">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-slate-800 flex items-center justify-between bg-slate-800/10">
        <p className="text-xs text-slate-500 font-medium">
          Hiển thị <span className="text-slate-200 font-bold">1-10</span> trong số <span className="text-slate-200 font-bold">1,240</span> câu hỏi
        </p>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300">‹</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs shadow-xl shadow-blue-600/20 transition-all">1</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-transparent hover:border-slate-700 text-xs font-black">2</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-transparent hover:border-slate-700 text-xs font-black">3</button>
          <span className="text-slate-700 px-1 text-xs">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300">›</button>
        </div>
      </div>
    </div>
  );
};
