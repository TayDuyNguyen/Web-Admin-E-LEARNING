
import React from 'react';
import { CommentItem, CommentStatus, CommentStats } from '../../shared/types/comment';
import { Card } from '../../shared/ui/Card';

export const CommentStatsOverview: React.FC<{ stats: CommentStats }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6 border-slate-800/50 bg-slate-900/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-xl">💬</div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Tổng bình luận</p>
            <h4 className="text-2xl font-black text-slate-100">{stats.totalComments.toLocaleString()}</h4>
          </div>
        </div>
      </Card>
      <Card className="p-6 border-slate-800/50 bg-slate-900/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center text-xl">⏳</div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Chờ phê duyệt</p>
            <h4 className="text-2xl font-black text-slate-100">{stats.pendingComments}</h4>
          </div>
        </div>
      </Card>
      <Card className="p-6 border-rose-500/20 bg-rose-500/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center text-xl">🚫</div>
          <div>
            <p className="text-[10px] text-rose-500 uppercase font-black tracking-widest">Bị báo cáo</p>
            <h4 className="text-2xl font-black text-rose-500">{stats.reportedComments}</h4>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const CommentFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center gap-4 mb-8">
      <div className="relative flex-1 min-w-[280px]">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm nội dung hoặc người bình luận..."
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
          <option>Bị báo cáo</option>
        </select>
      </div>
    </div>
  );
};

export const CommentTable: React.FC<{ comments: CommentItem[] }> = ({ comments }) => {
  const getStatusBadge = (status: CommentStatus) => {
    switch (status) {
      case 'Đã duyệt': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Chờ duyệt': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Bị báo cáo': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
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
              <th className="py-5 px-4">Người bình luận</th>
              <th className="py-5 px-4">Nội dung bình luận</th>
              <th className="py-5 px-4">Vị trí</th>
              <th className="py-5 px-4 text-center">Trạng thái</th>
              <th className="py-5 px-6 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {comments.map((comment) => (
              <tr key={comment.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-6 px-6 text-center">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-3">
                    <img src={comment.author.avatar} className="w-8 h-8 rounded-full border border-slate-800" alt="" />
                    <span className="text-xs text-slate-300 font-bold">{comment.author.name}</span>
                  </div>
                </td>
                <td className="py-6 px-4 max-w-md">
                  <div className="space-y-1">
                    <p className={`text-[13px] leading-relaxed ${comment.status === 'Bị báo cáo' ? 'text-rose-400 italic' : 'text-slate-100'}`}>
                      {comment.content}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-600 font-bold uppercase">{comment.date}</span>
                      <span className="text-[10px] text-blue-400 font-bold">👍 {comment.likes} Thích</span>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-400">{comment.targetTitle}</p>
                    <span className="text-[9px] text-slate-600 uppercase font-black">{comment.targetType}</span>
                  </div>
                </td>
                <td className="py-6 px-4 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-widest ${getStatusBadge(comment.status)}`}>
                    {comment.status}
                  </div>
                </td>
                <td className="py-6 px-6 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {comment.status === 'Chờ duyệt' && (
                      <button title="Phê duyệt" className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all text-sm">✓</button>
                    )}
                    <button title="Trả lời" className="text-slate-500 hover:text-blue-400 transition-colors">💬</button>
                    <button title="Sửa" className="text-slate-500 hover:text-blue-400 transition-colors">✏️</button>
                    <button title="Xóa" className="text-slate-500 hover:text-rose-500 transition-colors">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-slate-800 flex items-center justify-between bg-slate-800/10">
        <p className="text-xs text-slate-500 font-medium">
          Hiển thị <span className="text-slate-200 font-bold">1-4</span> trên <span className="text-slate-200 font-bold">5,842</span> bình luận
        </p>
        <div className="flex items-center gap-2">
           <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Trước</button>
           <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600 text-white font-black text-xs shadow-xl shadow-blue-600/20">1</button>
           <button className="px-4 py-2 bg-slate-800/50 text-slate-500 border border-slate-800 rounded-lg text-xs font-bold hover:text-slate-200">Sau</button>
        </div>
      </div>
    </div>
  );
};
