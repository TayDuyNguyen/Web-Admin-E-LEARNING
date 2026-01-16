
import React from 'react';
import { DiscussionItem, DiscussionStatus } from '../../shared/types/discussion';

export const DiscussionFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center gap-4 mb-8">
      <div className="relative flex-1 min-w-[300px]">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm nội dung, tác giả..."
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[160px]">
          <option>Tất cả khóa học</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]">
          <option>Trạng thái</option>
          <option>Đã duyệt</option>
          <option>Chờ duyệt</option>
          <option>Vi phạm</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[160px]">
          <option>Lý do báo cáo</option>
        </select>
      </div>
    </div>
  );
};

export const DiscussionTable: React.FC<{ discussions: DiscussionItem[] }> = ({ discussions }) => {
  const getStatusBadge = (status: DiscussionStatus) => {
    switch (status) {
      case 'Đã duyệt': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Chờ duyệt': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Vi phạm': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return '';
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
            <tr>
              <th className="py-5 px-6 w-4 text-center">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-5 px-4">Nội dung & Tác giả</th>
              <th className="py-5 px-4">Thuộc khóa học</th>
              <th className="py-5 px-4 text-center">Phản hồi</th>
              <th className="py-5 px-4 text-center">Báo cáo</th>
              <th className="py-5 px-4 text-center">Trạng thái</th>
              <th className="py-5 px-6 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {discussions.map((item) => (
              <tr key={item.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-6 px-6 text-center">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-6 px-4 max-w-sm">
                  <div className="flex gap-4">
                    <img src={item.author.avatar} className="w-10 h-10 rounded-full border border-slate-800 group-hover:border-blue-500 transition-colors" alt="" />
                    <div className="min-w-0">
                      <p className={`text-sm font-bold truncate transition-colors ${item.status === 'Vi phạm' ? 'text-rose-400' : 'text-slate-100 group-hover:text-blue-400'}`}>
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-blue-400 font-bold">{item.author.name}</span>
                        <span className="text-[10px] text-slate-600">• {item.author.timeAgo}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 italic">{item.contentSnippet}</p>
                      {item.reportReason && (
                        <p className="text-[10px] text-rose-500 font-bold uppercase mt-1 tracking-tighter">• {item.reportReason}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <span className="text-xs text-slate-400 font-medium">{item.courseName}</span>
                </td>
                <td className="py-6 px-4 text-center">
                   <span className="text-sm font-black text-slate-200">{item.replyCount}</span>
                </td>
                <td className="py-6 px-4 text-center">
                   <span className={`text-sm font-black ${item.reportCount > 0 ? 'text-rose-500' : 'text-slate-600'}`}>
                     {item.reportCount}
                   </span>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-widest ${getStatusBadge(item.status)}`}>
                    <div className={`w-1 h-1 rounded-full ${
                      item.status === 'Đã duyệt' ? 'bg-emerald-500' : 
                      item.status === 'Chờ duyệt' ? 'bg-amber-500' : 'bg-rose-500'
                    }`} />
                    {item.status}
                  </div>
                </td>
                <td className="py-6 px-6 text-right">
                   <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.status === 'Chờ duyệt' && (
                        <>
                          <button title="Approve" className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">✓</button>
                          <button title="Reject" className="w-8 h-8 flex items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all">✕</button>
                        </>
                      )}
                      <button className="text-slate-500 hover:text-blue-400">💬</button>
                      <button className="text-slate-500 hover:text-blue-400">✏️</button>
                      <button className="text-slate-500 hover:text-rose-500">🗑️</button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-slate-800 flex items-center justify-between bg-slate-800/10">
        <p className="text-xs text-slate-500 font-medium">
          Hiển thị <span className="text-slate-200 font-bold">1-4</span> trên <span className="text-slate-200 font-bold">128</span> thảo luận
        </p>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">‹</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs shadow-xl shadow-blue-600/20 transition-all">1</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-transparent hover:border-slate-700 text-xs font-black">2</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-transparent hover:border-slate-700 text-xs font-black">3</button>
          <span className="text-slate-700 px-1 text-xs">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">›</button>
        </div>
      </div>
    </div>
  );
};
