
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  title: string;
  path?: string;
  icon: string;
  children?: { title: string; path: string }[];
}

const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Bảng điều khiển',
    icon: '📊',
    children: [
      { title: 'Tổng quan', path: '/admin/dashboard' },
      { title: 'Trạng thái hệ thống', path: '/admin/status' },
    ]
  },
  {
    title: 'Người dùng',
    icon: '👥',
    children: [
      { title: 'Tất cả người dùng', path: '/admin/users' },
      { title: 'Vai trò & Quyền', path: '/admin/roles' },
    ]
  },
  {
    title: 'Khóa học',
    icon: '🎓',
    children: [
      { title: 'Tất cả khóa học', path: '/admin/courses' },
      { title: 'Danh mục', path: '/admin/categories' },
      { title: 'Trình tạo khóa học', path: '/admin/course-builder' },
    ]
  },
  {
    title: 'Nội dung',
    icon: '📝',
    children: [
      { title: 'Bài giảng', path: '/admin/lessons' },
      { title: 'Bài tập', path: '/admin/exercises' },
      { title: 'Bài kiểm tra', path: '/admin/quizzes' },
      { title: 'Ngân hàng câu hỏi', path: '/admin/questions' },
    ]
  },
  {
    title: 'Cộng đồng',
    icon: '💬',
    children: [
      { title: 'Thảo luận', path: '/admin/discussions' },
      { title: 'Đánh giá', path: '/admin/reviews' },
      { title: 'Bình luận', path: '/admin/comments' },
      { title: 'Báo cáo', path: '/admin/reports' },
    ]
  },
  {
    title: 'Phân tích',
    icon: '📉',
    children: [
      { title: 'Phân tích học tập', path: '/admin/analytics/learning' },
      { title: 'Phân tích người dùng', path: '/admin/analytics/users' },
      { title: 'Phân tích doanh thu', path: '/admin/analytics/revenue' },
      { title: 'Báo cáo tương tác', path: '/admin/analytics/engagement' },
    ]
  },
  {
    title: 'Chứng chỉ',
    icon: '🏆',
    path: '/admin/certificates'
  },
  {
    title: 'Thông báo',
    icon: '🔔',
    path: '/admin/notifications'
  },
  {
    title: 'Cài đặt',
    icon: '⚙️',
    path: '/admin/settings'
  },
];

export const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>('Bảng điều khiển');

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-slate-800 bg-[#0f172a] hidden lg:flex">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <span className="text-white text-xl">🎓</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-50 leading-tight">Quản trị LMS</h1>
          <p className="text-xs text-slate-400">Hệ thống quản lý</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {MENU_ITEMS.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <div>
                <button
                  onClick={() => setExpanded(expanded === item.title ? null : item.title)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all hover:bg-slate-800/50 group ${
                    expanded === item.title ? 'text-slate-100' : 'text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className={`text-xs transition-transform ${expanded === item.title ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {expanded === item.title && (
                  <div className="ml-9 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.title}
                        to={child.path}
                        className={({ isActive }) => `
                          block px-4 py-2 text-sm rounded-lg transition-colors
                          ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-500 hover:text-slate-300'}
                        `}
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path || '#'}
                className={({ isActive }) => `
                  flex items-center justify-between p-3 rounded-xl transition-all group
                  ${isActive ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Help / Bottom */}
      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 p-3 text-slate-400 hover:text-slate-100 transition-all rounded-xl hover:bg-slate-800/50">
          <span className="text-lg">🎧</span>
          <span className="font-medium">Hỗ trợ</span>
        </button>
      </div>
    </aside>
  );
};
