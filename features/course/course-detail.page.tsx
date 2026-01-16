
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCourseDetail } from './course.api';
import { CourseDetail } from '../../shared/types/course';
import { 
  CourseGeneralInfo, 
  CoursePublishingSidebar, 
  CourseMediaPricing, 
  CourseCategorization, 
  CurriculumBuilder 
} from './course-detail.ui';

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCourseDetail(id || '1');
        setCourse(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return (
    <div className="h-full flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full" />
    </div>
  );

  if (!course) return <div className="p-8">Course not found.</div>;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-6">
        <button onClick={() => navigate('/admin/courses')} className="hover:text-slate-300 transition-colors">Khóa học</button>
        <span className="text-slate-700">/</span>
        <button onClick={() => navigate('/admin/courses')} className="hover:text-slate-300 transition-colors">Danh sách</button>
        <span className="text-slate-700">/</span>
        <span className="text-blue-500">Chi tiết</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black text-slate-100 leading-[1.1] tracking-tight">{course.title}</h2>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all active:scale-95">
            <span className="text-lg">📝</span> Chỉnh sửa nội dung
          </button>
          <button className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all active:scale-95">
            <span className="text-lg">📄</span> Sao chép
          </button>
          <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            <span className="text-lg">✨</span> Tạo
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-10 mb-10 overflow-x-auto pb-1">
        {[
          { id: 'overview', label: 'Tổng quan' },
          { id: 'curriculum', label: 'Nội dung đào tạo' },
          { id: 'students', label: 'Học viên', count: course.studentCount.toLocaleString() },
          { id: 'reviews', label: 'Đánh giá', count: course.rating },
          { id: 'analytics', label: 'Phân tích' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2.5 py-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab.label}
            {tab.count && <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeTab === tab.id ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-600'}`}>{tab.count}</span>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-10">
          {activeTab === 'overview' && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-500 space-y-10">
              <CourseGeneralInfo course={course} />
              <CurriculumBuilder sections={course.sections} />
            </div>
          )}
          {activeTab === 'curriculum' && (
             <div className="animate-in fade-in slide-in-from-right-2 duration-500">
               <CurriculumBuilder sections={course.sections} />
             </div>
          )}
          {['students', 'reviews', 'analytics'].includes(activeTab) && (
             <div className="p-20 text-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">📊</div>
                <h4 className="text-2xl font-black text-slate-300 mb-3 uppercase tracking-wider">Đang xử lý dữ liệu</h4>
                <p className="max-w-md mx-auto text-sm leading-relaxed text-slate-500">Tính năng này đang được đồng bộ hóa dữ liệu từ hệ thống học tập. Vui lòng quay lại sau ít phút.</p>
             </div>
          )}
        </div>

        {/* Sidebar Area */}
        <div className="space-y-8 sticky top-24">
          <CoursePublishingSidebar course={course} />
          <CourseMediaPricing course={course} />
          <CourseCategorization course={course} />
        </div>
      </div>
    </div>
  );
};
