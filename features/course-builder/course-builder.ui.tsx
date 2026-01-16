
import React from 'react';
import { Card } from '../../shared/ui/Card';

export const BuilderSteps: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Thông tin chung', sub: 'Tiêu đề, mô tả' },
    { number: 2, title: 'Nội dung đào tạo', sub: 'Chương & bài học' },
    { number: 3, title: 'Cấu hình giá', sub: 'Học phí & khuyến mãi' },
    { number: 4, title: 'Hoàn tất', sub: 'Kiểm tra & Xuất bản' },
  ];

  return (
    <div className="flex items-center justify-between mb-12 relative">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
      {steps.map((step) => (
        <div key={step.number} className="relative z-10 flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${
            currentStep === step.number 
              ? 'bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-600/20' 
              : currentStep > step.number 
              ? 'bg-emerald-500 border-emerald-500 text-white' 
              : 'bg-slate-900 border-slate-700 text-slate-500'
          }`}>
            {currentStep > step.number ? '✓' : step.number}
          </div>
          <div className="mt-3 text-center">
            <p className={`text-xs font-bold transition-colors ${currentStep === step.number ? 'text-blue-400' : 'text-slate-500'}`}>{step.title}</p>
            <p className="text-[9px] text-slate-600 uppercase tracking-widest mt-0.5">{step.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const StepGeneralInfo: React.FC = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <Card title="Thông tin cơ bản">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">Tiêu đề khóa học</label>
          <input type="text" placeholder="VD: ReactJS Masterclass 2025" className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:border-blue-500 focus:outline-none transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">Danh mục</label>
          <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:border-blue-500 focus:outline-none transition-all appearance-none cursor-pointer">
            <option>Chọn danh mục</option>
            <option>Lập trình</option>
            <option>Thiết kế</option>
            <option>Marketing</option>
          </select>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <label className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">Mô tả ngắn</label>
        <textarea rows={3} placeholder="Mô tả tóm tắt nội dung khóa học..." className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:border-blue-500 focus:outline-none transition-all resize-none" />
      </div>
    </Card>

    <Card title="Hình ảnh thu nhỏ (Thumbnail)">
      <div className="border-2 border-dashed border-slate-800 rounded-2xl p-12 text-center hover:border-blue-500/50 transition-all cursor-pointer group">
        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">🖼️</div>
        <h4 className="text-lg font-bold text-slate-300">Nhấn hoặc kéo thả ảnh vào đây</h4>
        <p className="text-xs text-slate-500 mt-2">Định dạng hỗ trợ: JPG, PNG, WEBP (Max: 5MB)</p>
        <p className="text-[10px] text-slate-600 mt-1 uppercase font-bold tracking-widest">Kích thước khuyến nghị: 1280x720 (16:9)</p>
      </div>
    </Card>
  </div>
);

export const StepCurriculum: React.FC = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
    <div className="flex items-center justify-between">
       <h3 className="text-lg font-bold text-slate-200">Xây dựng chương trình học</h3>
       <button className="px-4 py-2 bg-blue-600/10 text-blue-500 border border-blue-500/20 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-all">⊕ Thêm chương mới</button>
    </div>
    
    <div className="border border-slate-800 rounded-2xl p-8 text-center bg-slate-900/50">
      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">📂</div>
      <p className="text-slate-400 text-sm">Chưa có nội dung nào được tạo. Hãy bắt đầu bằng cách thêm chương đầu tiên.</p>
    </div>
  </div>
);

export const StepPricing: React.FC = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <Card title="Cấu hình giá bán">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">Giá gốc (VND)</label>
          <input type="number" defaultValue={0} className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-xl font-black text-slate-100 focus:border-blue-500 focus:outline-none transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">Giá khuyến mãi (VND)</label>
          <input type="number" defaultValue={0} className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-xl font-black text-emerald-500 focus:border-emerald-500 focus:outline-none transition-all" />
          <p className="text-[10px] text-slate-600 font-medium italic">Để bằng 0 nếu muốn bán theo giá gốc</p>
        </div>
      </div>
    </Card>

    <Card title="Tùy chọn khác">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-[#0f172a] border border-slate-800 rounded-xl">
           <div>
             <p className="text-sm font-bold text-slate-200">Khóa học miễn phí</p>
             <p className="text-xs text-slate-500">Người dùng không cần thanh toán để truy cập</p>
           </div>
           <div className="w-12 h-6 bg-slate-800 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-4 h-4 bg-slate-600 rounded-full" /></div>
        </div>
        <div className="flex items-center justify-between p-4 bg-[#0f172a] border border-slate-800 rounded-xl">
           <div>
             <p className="text-sm font-bold text-slate-200">Cấp chứng chỉ</p>
             <p className="text-xs text-slate-500">Tự động gửi chứng chỉ khi hoàn thành 100%</p>
           </div>
           <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" /></div>
        </div>
      </div>
    </Card>
  </div>
);
