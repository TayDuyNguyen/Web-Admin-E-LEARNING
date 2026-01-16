
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BuilderSteps, StepGeneralInfo, StepCurriculum, StepPricing } from './course-builder.ui';

export const CourseBuilderPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto pb-24 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Back Button Navigation */}
      <div className="mb-6">
        <button 
          onClick={() => navigate('/admin/courses')}
          className="text-slate-500 hover:text-slate-300 flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform text-lg">←</span> 
          Quay lại danh sách khóa học
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-black text-slate-100 tracking-tighter">Trình tạo khóa học</h2>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-bold">Quy trình 4 bước tạo khóa học chuyên nghiệp</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-5 py-2.5 bg-slate-800 text-slate-400 border border-slate-700 rounded-xl text-xs font-bold hover:text-slate-200 transition-all">Lưu nháp</button>
           <button 
             onClick={() => navigate('/admin/courses')}
             className="px-5 py-2.5 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-xl text-xs font-bold hover:bg-rose-500 hover:text-white transition-all"
           >
             Hủy bỏ
           </button>
        </div>
      </div>

      <BuilderSteps currentStep={currentStep} />

      <div className="mt-8 min-h-[500px]">
        {currentStep === 1 && <StepGeneralInfo />}
        {currentStep === 2 && <StepCurriculum />}
        {currentStep === 3 && <StepPricing />}
        {currentStep === 4 && (
          <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-2xl shadow-emerald-500/20">✨</div>
            <h3 className="text-2xl font-black text-slate-100 mb-4">Sẵn sàng xuất bản!</h3>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed">Khóa học của bạn đã được kiểm tra tính hợp lệ. Bạn có thể xuất bản ngay bây giờ để bắt đầu tuyển sinh học viên.</p>
            <div className="mt-12 flex justify-center gap-4">
               <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-sm transition-all shadow-xl shadow-emerald-600/20 active:scale-95">XUẤT BẢN NGAY</button>
               <button className="px-8 py-4 bg-slate-800 text-slate-300 border border-slate-700 rounded-2xl font-black text-sm transition-all active:scale-95">KIỂM TRA LẠI</button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-between">
        <button 
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            currentStep === 1 ? 'opacity-0 pointer-events-none' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <span>←</span> Bước trước
        </button>
        {currentStep < 4 && (
          <button 
            onClick={nextStep}
            className="flex items-center gap-2 px-10 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Tiếp tục <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};
