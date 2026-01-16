
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseListItem, CourseStatus } from '../../shared/types/course';

export const CourseFilters: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[300px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Tìm kiếm khóa học..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <select className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Danh mục</option>
            <option>Thiết kế</option>
            <option>Lập trình</option>
            <option>Marketing</option>
          </select>
          <select className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Độ khó</option>
            <option>Cơ bản</option>
            <option>Trung cấp</option>
            <option>Nâng cao</option>
          </select>
          <select className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Trạng thái</option>
            <option>Đã xuất bản</option>
            <option>Bản nháp</option>
          </select>
          <select className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Giảng viên</option>
            <option>Hoàng Nam</option>
            <option>Lê Minh</option>
          </select>
          <button className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm font-bold text-slate-300 transition-all">
            📥 Xuất báo cáo
          </button>
        </div>
      </div>
    </div>
  );
};

export const CourseTable: React.FC<{ courses: CourseListItem[] }> = ({ courses }) => {
  const navigate = useNavigate();

  const getStatusBadge = (status: CourseStatus) => {
    switch(status) {
      case 'Published': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Draft': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getStatusLabel = (status: CourseStatus) => {
    switch(status) {
      case 'Published': return 'Đã xuất bản';
      case 'Draft': return 'Bản nháp';
      default: return 'Lưu trữ';
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-5 px-6 w-4">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-5 px-6">Hình ảnh</th>
              <th className="py-5 px-6">Tiêu đề khóa học</th>
              <th className="py-5 px-6">Giảng viên</th>
              <th className="py-5 px-6">Giá</th>
              <th className="py-5 px-6">Trạng thái</th>
              <th className="py-5 px-6">Học viên</th>
              <th className="py-5 px-6">Đánh giá</th>
              <th className="py-5 px-6 text-right">Doanh thu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {courses.map((course) => (
              <tr 
                key={course.id} 
                className="group hover:bg-slate-800/30 transition-colors cursor-pointer"
                onClick={() => navigate(`/admin/courses/${course.id}`)}
              >
                <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-4 px-6">
                  <img src={course.thumbnail} className="w-12 h-12 rounded-xl object-cover border border-slate-800" alt="" />
                </td>
                <td className="py-4 px-6">
                  <div>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-1">{course.title}</p>
                    <p className="text-[10px] text-slate-500 mt-1">Danh mục: {course.category}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <img src={course.instructor.avatar} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span className="text-xs text-slate-300">{course.instructor.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-xs font-bold text-slate-200">{course.price.toLocaleString()}đ</span>
                </td>
                <td className="py-4 px-6">
                  <div className={`inline-flex px-3 py-1 rounded-full text-[9px] font-bold border uppercase tracking-wider ${getStatusBadge(course.status)}`}>
                    {getStatusLabel(course.status)}
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-slate-400 font-medium">{course.studentCount.toLocaleString()}</td>
                <td className="py-4 px-6">
                  {course.rating > 0 ? (
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-200">{course.rating}</span>
                      <span className="text-amber-500 text-xs">⭐</span>
                    </div>
                  ) : <span className="text-slate-600 text-xs">-</span>}
                </td>
                <td className="py-4 px-6 text-right text-xs font-bold text-slate-200">
                  {course.revenue > 0 ? `${(course.revenue / 1000000).toFixed(0)}tr` : '0đ'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer Pagination */}
      <div className="px-6 py-5 border-t border-slate-800 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          Hiển thị <span className="text-slate-200 font-bold">1-5</span> trên <span className="text-slate-200 font-bold">150</span> khóa học
        </p>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">
            ‹
          </button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all ${p === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'}`}>
              {p}
            </button>
          ))}
          <span className="text-slate-700 px-1 text-xs">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-500 hover:text-slate-300 text-xs font-bold">15</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 border border-slate-700 hover:text-slate-300 transition-all">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
