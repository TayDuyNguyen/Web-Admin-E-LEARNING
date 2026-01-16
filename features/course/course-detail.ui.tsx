
import React from 'react';
import { CourseDetail, Section } from '../../shared/types/course';
import { Card } from '../../shared/ui/Card';

export const CourseGeneralInfo: React.FC<{ course: CourseDetail }> = ({ course }) => (
  <Card title="Thông tin chung" className="border-slate-800 bg-[#1e293b]/20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
      <div className="space-y-2">
        <label className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Tên khóa học</label>
        <input 
          type="text" 
          defaultValue={course.title}
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 transition-all"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Đường dẫn (Slug)</label>
        <input 
          type="text" 
          defaultValue={course.slug}
          className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 transition-all"
        />
      </div>
    </div>

    <div className="space-y-2 mb-6">
      <label className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Mô tả ngắn</label>
      <textarea 
        defaultValue={course.description}
        rows={3}
        className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
      />
    </div>

    <div className="space-y-2">
      <label className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Nội dung chi tiết</label>
      <div className="border border-slate-800 rounded-xl overflow-hidden bg-[#0f172a]">
        <div className="bg-slate-800/40 p-2 border-b border-slate-800 flex gap-1">
          {['B', 'I', '≡', '🔗', '🖼️'].map(tool => (
            <button key={tool} className="w-8 h-8 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-slate-100 text-xs font-bold transition-colors">{tool}</button>
          ))}
        </div>
        <textarea 
          defaultValue={course.content}
          rows={6}
          className="w-full bg-transparent p-4 text-sm text-slate-300 focus:outline-none leading-relaxed resize-none"
        />
      </div>
    </div>
  </Card>
);

export const CoursePublishingSidebar: React.FC<{ course: CourseDetail }> = ({ course }) => (
  <Card title="Xuất bản" extra={<span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-400/20">Đã xuất bản</span>}>
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">Lưu thay đổi</button>
        <button className="bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-bold py-3.5 rounded-xl transition-all active:scale-95">Xem trước</button>
      </div>
      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-500">Ngày tạo:</span>
          <span className="text-slate-300 font-bold">{course.createdAt}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-500">Cập nhật:</span>
          <span className="text-slate-300 font-bold">{course.updatedAt}</span>
        </div>
      </div>
    </div>
  </Card>
);

export const CourseMediaPricing: React.FC<{ course: CourseDetail }> = ({ course }) => (
  <Card title="Hình ảnh & Giá">
    <div className="space-y-6">
      <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0f172a] relative group">
        <img src={course.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70" alt="Thumbnail" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-center justify-center">
           <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">Thay đổi ảnh</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Giá gốc (VND)</label>
          <div className="relative">
            <input 
              type="text" 
              defaultValue={course.originalPrice.toLocaleString()}
              className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3 text-sm text-slate-100 font-bold focus:outline-none focus:border-blue-500 text-center"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Giá KM (VND)</label>
          <div className="relative">
            <input 
              type="text" 
              defaultValue={course.salePrice.toLocaleString()}
              className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3 text-sm text-slate-100 font-bold focus:outline-none focus:border-blue-500 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export const CourseCategorization: React.FC<{ course: CourseDetail }> = ({ course }) => (
  <Card title="Phân loại">
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Danh mục</label>
        <div className="relative">
          <select className="w-full bg-[#0f172a] border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer">
            <option>{course.category}</option>
            <option>Lập trình (Development)</option>
            <option>Marketing</option>
            <option>Kinh doanh (Business)</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-[10px]">▼</span>
        </div>
      </div>
    </div>
  </Card>
);

export const CurriculumBuilder: React.FC<{ sections: Section[] }> = ({ sections }) => (
  <Card title="Cấu trúc khóa học" className="mt-8 border-slate-800 bg-[#1e293b]/20" extra={<button className="text-blue-500 text-xs font-bold flex items-center gap-1.5 hover:text-blue-400 transition-colors"><span>⊕</span> Thêm chương mới</button>}>
    <div className="space-y-4 mt-3">
      {sections.map((section, idx) => (
        <div key={section.id} className="border border-slate-800 rounded-2xl overflow-hidden bg-[#0f172a]/50">
          <div className="bg-slate-800/40 p-4 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <span className="text-slate-600 cursor-move text-lg">⠿</span>
              <div>
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  {section.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium uppercase mt-0.5 tracking-tight">({section.lessons.length} bài học - 45 phút)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all">✏️</button>
              <button className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-all">🗑️</button>
              <button className="p-2 text-slate-500 hover:text-slate-200 hover:bg-slate-700/50 rounded-lg transition-all">▲</button>
            </div>
          </div>
          <div className="p-2 space-y-1">
            {section.lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-800/40 transition-all group/item border border-transparent hover:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    lesson.type === 'video' ? 'bg-blue-500/10 text-blue-500' : 
                    lesson.type === 'quiz' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                  }`}>
                    {lesson.type === 'video' ? '▶' : lesson.type === 'quiz' ? '📝' : '📄'}
                  </div>
                  <div>
                    <span className="text-sm text-slate-300 font-medium group-hover/item:text-slate-100 transition-colors">{lesson.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-slate-500 font-bold bg-slate-800/50 px-2 py-0.5 rounded uppercase">{lesson.duration}</span>
                  <div className="flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-500 hover:text-slate-200">✏️</button>
                    <button className="p-1.5 text-slate-500 hover:text-rose-500">🗑️</button>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-3.5 text-xs font-bold text-slate-500 hover:text-blue-500 border border-dashed border-slate-800/80 rounded-xl mt-3 transition-all hover:bg-blue-500/5 group">
              <span className="group-hover:scale-110 inline-block transition-transform">+ Thêm bài giảng mới</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </Card>
);
