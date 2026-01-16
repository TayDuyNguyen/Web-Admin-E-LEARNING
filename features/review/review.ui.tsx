
import React from 'react';
import { ReviewItem, ReviewStatus, ReviewStats } from '../../shared/types/review';
import { Card } from '../../shared/ui/Card';

export const ReviewStatsGrid: React.FC<{ stats: ReviewStats }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="flex items-center gap-6 p-8">
        <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center text-2xl border border-amber-500/20 shadow-lg shadow-amber-500/5">
          ⭐
        </div>
        <div>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Xếp hạng trung bình</p>
          <h4 className="text-3xl font-black text-slate-100 leading-none">
            {stats.averageRating}<span className="text-sm text-slate-500 ml-1">/5.0</span>
          </h4>
        </div>
      </Card>
      <Card className="flex items-center gap-6 p-8">
        <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center text-2xl border border-blue-500/20 shadow-lg shadow-blue-500/5">
          📝
        </div>
        <div>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Tổng lượt đánh giá</p>
          <h4 className="text-3xl font-black text-slate-100 leading-none">{stats.totalReviews.toLocaleString()}</h4>
        </div>
      </Card>
      <Card className="flex items-center gap-6 p-8">
        <div className="w-14 h-14 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center text-2xl border border-rose-500/20 shadow-lg shadow-rose-500/5">
          📋
        </div>
        <div>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Đánh giá chờ duyệt</p>
          <h4 className="text-3xl font-black text-slate-100 leading-none">{stats.pendingCount}</h4>
        </div>
      </Card>
    </div>
  );
};

export const ReviewFilters: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-wrap items-center gap-4 mb-8">
      <div className="relative flex-1 min-w-[280px]">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm đánh giá..."
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[160px]">
          <option>Tất cả khóa học</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[120px]">
          <option>Số sao</option>
          <option>5 sao</option>
          <option>4 sao</option>
          <option>3 sao</option>
          <option>2 sao</option>
          <option>1 sao</option>
        </select>
        <select className="bg-[#0f172a] border border-slate-800 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer min-w-[140px]">
          <option>Trạng thái</option>
          <option>Đã đăng</option>
          <option>Chờ duyệt</option>
          <option>Bị báo cáo</option>
        </select>
      </div>
    </div>
  );
};

export const ReviewTable: React.FC<{ reviews: ReviewItem[] }> = ({ reviews }) => {
  const getStatusBadge = (status: ReviewStatus) => {
    switch (status) {
      case 'Đã đăng': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Chờ duyệt': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Bị báo cáo': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return '';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className={`text-xs ${s <= rating ? 'text-amber-500' : 'text-slate-700'}`}>★</span>
        ))}
      </div>
    );
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
              <th className="py-5 px-4">Người dùng & Khóa học</th>
              <th className="py-5 px-4">Nội dung đánh giá</th>
              <th className="py-5 px-4 text-center">Ngày đánh giá</th>
              <th className="py-5 px-4 text-center">Trạng thái</th>
              <th className="py-5 px-6 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {reviews.map((review) => (
              <tr key={review.id} className="group hover:bg-slate-800/30 transition-colors cursor-pointer">
                <td className="py-6 px-6 text-center">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-6 px-4">
                  <div className="flex gap-4">
                    <img src={review.author.avatar} className="w-10 h-10 rounded-full border border-slate-800 group-hover:border-blue-500 transition-colors object-cover" alt="" />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors truncate">
                        {review.author.name}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1 font-medium">{review.courseName}</p>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4 max-w-sm">
                  <div className="space-y-1.5">
                    {renderStars(review.rating)}
                    <p className={`text-[11px] leading-relaxed line-clamp-2 ${review.status === 'Bị báo cáo' ? 'text-rose-400 italic' : 'text-slate-400'}`}>
                      {review.content}
                    </p>
                  </div>
                </td>
                <td className="py-6 px-4 text-center text-xs text-slate-500 font-medium">
                   {review.date}
                </td>
                <td className="py-6 px-4 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase border tracking-widest ${getStatusBadge(review.status)}`}>
                    <div className={`w-1 h-1 rounded-full ${
                      review.status === 'Đã đăng' ? 'bg-emerald-500' : 
                      review.status === 'Chờ duyệt' ? 'bg-amber-500' : 'bg-rose-500'
                    }`} />
                    {review.status}
                  </div>
                </td>
                <td className="py-6 px-6 text-right">
                   <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {review.status === 'Chờ duyệt' && (
                        <button title="Approve" className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all text-sm">✓</button>
                      )}
                      <button title="Reply" className="text-slate-500 hover:text-blue-400">↩️</button>
                      <button title="Like" className="text-slate-500 hover:text-blue-400">👍</button>
                      <button title="Delete" className="text-slate-500 hover:text-rose-500">🗑️</button>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-slate-800 flex items-center justify-between bg-slate-800/10">
        <p className="text-xs text-slate-500 font-medium">
          Hiển thị <span className="text-slate-200 font-bold">1-4</span> trên <span className="text-slate-200 font-bold">1,248</span> đánh giá
        </p>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">‹</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs shadow-xl shadow-blue-600/20 transition-all">1</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-transparent hover:border-slate-700 text-xs font-black">2</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-transparent hover:border-slate-700 text-xs font-black">3</button>
          <span className="text-slate-700 px-1 text-xs">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 border border-transparent hover:border-slate-700 text-xs font-black">10</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">›</button>
        </div>
      </div>
    </div>
  );
};
