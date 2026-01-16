
import React, { useEffect, useState } from 'react';
import { fetchLearningSettings, updateLearningSettings } from './learning-settings.api';
import { LearningSettings } from '../../shared/types/learning-settings';
import { 
  SectionTitle, FormLabel, SelectBox, InputBox, Toggle 
} from './learning-settings.ui';
import { Card } from '../../shared/ui/Card';

export const LearningSettingsPage: React.FC = () => {
  const [data, setData] = useState<LearningSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchLearningSettings();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading || !data) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Cấu hình học tập...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
        <span className="cursor-pointer hover:text-slate-300">Cài đặt</span>
        <span className="text-slate-800">/</span>
        <span className="text-blue-500">Học tập</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Cài đặt học tập</h2>
        <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
          <span>💾</span> Lưu thay đổi
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Lesson Settings */}
          <Card className="bg-[#1e293b]/20 border-slate-800/50">
            <SectionTitle 
              icon="📺" 
              title="Cài đặt bài giảng" 
              sub="Cấu hình hiển thị và tương tác với bài giảng" 
            />
            
            <div className="space-y-8">
              <div>
                <FormLabel>Chất lượng video mặc định</FormLabel>
                <SelectBox value={data.videoQuality} options={['Auto', 'Full HD (1080p)', 'HD (720p)', 'SD (480p)']} />
              </div>

              <div className="flex items-center justify-between p-6 bg-[#0f172a]/80 border border-slate-800 rounded-2xl">
                <div>
                  <h4 className="text-sm font-black text-slate-200">Cho phép tải xuống tài liệu</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Học viên có thể tải về các file đính kèm bài học</p>
                </div>
                <Toggle checked={data.allowDownload} />
              </div>
            </div>
          </Card>

          {/* Exercise & Quiz Settings */}
          <Card className="bg-[#1e293b]/20 border-slate-800/50">
            <SectionTitle 
              icon="❓" 
              title="Cài đặt bài tập & kiểm tra" 
              sub="Quy định chung cho các bài kiểm tra trong khóa học" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <FormLabel>Số lần làm bài tối đa</FormLabel>
                <InputBox value={data.maxAttempts} />
              </div>
              <div>
                <FormLabel>Cách tính điểm</FormLabel>
                <SelectBox value={data.scoringMethod} options={['Điểm cao nhất', 'Lần cuối cùng', 'Trung bình các lần']} />
              </div>
            </div>

            <div>
              <FormLabel>Thời gian làm bài mặc định (phút)</FormLabel>
              <InputBox value={data.defaultTimeLimit} icon="⏱️" />
            </div>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Certificate Conditions */}
          <Card className="bg-[#1e293b]/30 border-slate-800/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <span className="text-8xl">🎖️</span>
            </div>
            
            <SectionTitle 
              icon="🏅" 
              title="Điều kiện cấp chứng chỉ" 
              sub="Tiêu chuẩn hoàn thành" 
            />

            <div className="space-y-6">
              <div>
                <FormLabel>Điểm đạt tối thiểu (%)</FormLabel>
                <InputBox value={data.minPassScore} unit="%" />
              </div>

              <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-200 uppercase tracking-tight">Hoàn thành 100% bài học</h4>
                  <Toggle checked={data.require100Completion} />
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed italic">Bắt buộc xem hết các video và đọc tài liệu tất cả bài giảng trong khóa học mới có thể nhận chứng chỉ.</p>
              </div>
            </div>
          </Card>

          {/* Review System */}
          <Card className="bg-[#1e293b]/30 border-slate-800/50">
            <SectionTitle 
              icon="⭐" 
              title="Hệ thống đánh giá" 
              sub="Quản lý phản hồi học viên" 
            />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-slate-200">Bật đánh giá khóa học</h4>
                <Toggle checked={data.enableReviews} />
              </div>

              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-slate-200 uppercase tracking-tight">Yêu cầu duyệt đánh giá</h4>
                    <p className="text-[10px] text-slate-500 mt-1 italic">Admin duyệt trước khi hiển thị công khai</p>
                  </div>
                  <Toggle checked={data.requireReviewApproval} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
