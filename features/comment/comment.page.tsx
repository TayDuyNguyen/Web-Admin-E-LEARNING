
import React, { useEffect, useState } from 'react';
import { fetchComments, fetchCommentStats } from './comment.api';
import { CommentItem, CommentStats } from '../../shared/types/comment';
import { CommentStatsOverview, CommentFilters, CommentTable } from './comment.ui';

export const CommentManagementPage: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [stats, setStats] = useState<CommentStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [cData, sData] = await Promise.all([
          fetchComments(),
          fetchCommentStats()
        ]);
        setComments(cData);
        setStats(sData);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !stats) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang tải bình luận...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Cộng đồng</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Quản lý bình luận</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Quản lý bình luận</h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">Theo dõi và kiểm duyệt nội dung phản hồi từ người học trên toàn hệ thống</p>
        </div>
      </div>

      <CommentStatsOverview stats={stats} />
      <CommentFilters />
      <CommentTable comments={comments} />
    </div>
  );
};
