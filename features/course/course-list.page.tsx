
import React, { useEffect, useState } from 'react';
import { fetchCourses } from './course.api';
import { CourseListItem } from '../../shared/types/course';
import { CourseFilters, CourseTable } from './course-list.ui';

export const CourseListPage: React.FC = () => {
  const [courses, setCourses] = useState<CourseListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-medium">Đang tải danh sách khóa học...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">Quản lý khóa học</h2>
          <p className="text-slate-500 text-sm mt-1">Quản lý danh sách khóa học và nội dung đào tạo</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
          <span>⊕</span> Tạo khóa học mới
        </button>
      </div>

      <CourseFilters />
      <CourseTable courses={courses} />
    </div>
  );
};
