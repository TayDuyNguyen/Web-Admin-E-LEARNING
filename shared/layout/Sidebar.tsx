
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
      { title: 'Tổng quan', path: '/admin' },
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
    title: 'Trò chơi hóa',
    icon: '🏆',
    children: [
      { title: 'Thành tích', path: '/admin/gamification/achievements' },
      { title: 'Hệ thống điểm', path: '/admin/gamification/points' },
    ]
  },
  {
    title: 'Công cụ',
    icon: '🛠️',
    children: [
      { title: 'Nhập/Xuất', path: '/admin/tools/import-export' },
      { title: 'Nhật ký', path: '/admin/tools/logs' },
    ]
  },
  {
    title: 'Thông báo',
    icon: '🔔',
    path: '/admin/notifications'
  },
  {
    title: 'Cài đặt',
    icon: '⚙️',
    children: [
      { title: 'Cài đặt chung', path: '/admin/settings/general' },
      { title: 'Học tập', path: '/admin/settings/learning' },
      { title: 'Lưu trữ & Phương tiện', path: '/admin/settings/storage' },
      { title: 'Bảo mật', path: '/admin/settings/security' },
      { title: 'Phân quyền', path: '/admin/settings/permissions' },
    ]
  },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>('Bảng điều khiển');

  // Auto-expand based on current route
  useEffect(() => {
    // Exact match or subpath match for expansion
    const activeItem = MENU_ITEMS.find(item => 
      item.children?.some(child => {
        if (child.path === '/admin') return location.pathname === '/admin';
        return location.pathname.startsWith(child.path);
      })
    );
    
    if (activeItem) {
      setExpanded(activeItem.title);
    }
  }, [location.pathname]);

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-slate-800 bg-[#0f172a] hidden lg:flex">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <span className="text-white text-xl">🎓</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-50 leading-tight">Quản trị LMS</h1>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest opacity-60">Admin Pro</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {MENU_ITEMS.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <div>
                <button
                  onClick={() => setExpanded(expanded === item.title ? null : item.title)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all hover:bg-slate-800/50 group ${
                    expanded === item.title ? 'text-slate-100 bg-slate-800/20' : 'text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                    <span className="font-bold text-sm tracking-tight">{item.title}</span>
                  </div>
                  <span className={`text-[8px] transition-transform duration-300 ${expanded === item.title ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {expanded === item.title && (
                  <div className="ml-9 mt-1 space-y-1 border-l border-slate-800/50 pl-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.title}
                        to={child.path}
                        end={child.path === '/admin'}
                        className={({ isActive }) => `
                          block px-4 py-2 text-xs rounded-lg transition-all
                          ${isActive 
                            ? 'text-blue-400 font-black bg-blue-400/5 translate-x-1' 
                            : 'text-slate-500 hover:text-slate-300 hover:translate-x-1'}
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
                  ${isActive ? 'bg-blue-600/10 text-blue-400 shadow-inner' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                  <span className="font-bold text-sm tracking-tight">{item.title}</span>
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Help / Bottom */}
      <div className="p-4 border-t border-slate-800/50">
        <button className="w-full flex items-center gap-3 p-3 text-slate-500 hover:text-blue-400 transition-all rounded-xl hover:bg-blue-400/5 group">
          <span className="text-lg grayscale group-hover:grayscale-0 transition-all">🎧</span>
          <span className="font-bold text-xs uppercase tracking-widest">Trung tâm hỗ trợ</span>
        </button>
      </div>
    </aside>
  );
};
