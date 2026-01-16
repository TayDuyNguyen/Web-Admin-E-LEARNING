
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserDetail } from './user.api';
import { UserDetail } from '../../shared/types/user';
import { UserProfileSidebar, WeeklyProgress, BadgesSection, CourseList } from './user-detail.ui';

export const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('courses');

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        const data = await fetchUserDetail(id);
        setUser(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-medium animate-pulse">Đang tải hồ sơ người dùng...</p>
    </div>
  );

  if (!user) return <div className="p-8 text-center text-slate-500">Không tìm thấy người dùng.</div>;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12">
      {/* Header with Navigation */}
      <div className="mb-8 space-y-4">
        <button 
          onClick={() => navigate('/admin/users')}
          className="text-slate-500 hover:text-slate-300 flex items-center gap-2 text-sm font-medium transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Quay lại danh sách người dùng
        </button>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-100">{user.name}</h2>
            <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
              {user.status}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
              <span>📜</span> Xem chứng chỉ
            </button>
            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
              <span>✏️</span> Chỉnh sửa hồ sơ
            </button>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          ID: #USR-2023-{id?.padStart(4, '0')} • Tham gia: {user.joinDate}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Info Sidebar */}
        <div className="lg:col-span-1">
          <UserProfileSidebar user={user} />
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* Tabs */}
          <div className="border-b border-slate-800 flex items-center gap-8 mb-6">
            {[
              { id: 'courses', label: 'Khóa học đã đăng ký', icon: '📖' },
              { id: 'progress', label: 'Tiến độ học tập', icon: '📊' },
              { id: 'payment', label: 'Lịch sử thanh toán', icon: '🧾' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 text-sm font-bold border-b-2 transition-all relative ${
                  activeTab === tab.id 
                    ? 'border-blue-500 text-blue-400' 
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <span>{tab.icon}</span> {tab.label}
              </button>
            ))}
            <div className="ml-auto">
              <button className="p-2 text-slate-500 hover:text-slate-300 transition-colors">🔄</button>
            </div>
          </div>

          {/* Dynamic Content Based on Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WeeklyProgress />
                <BadgesSection badges={user.badges} />
              </div>
              <CourseList courses={user.enrolledCourses} />
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="p-12 text-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl animate-in fade-in slide-in-from-right-2 duration-300">
              <p className="text-4xl mb-4">📈</p>
              <h4 className="text-xl font-bold text-slate-300 mb-2">Phân tích học tập chi tiết</h4>
              <p>Hệ thống đang tổng hợp dữ liệu tiến độ chuyên sâu cho học viên này.</p>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="p-12 text-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl animate-in fade-in slide-in-from-right-2 duration-300">
              <p className="text-4xl mb-4">💳</p>
              <h4 className="text-xl font-bold text-slate-300 mb-2">Lịch sử giao dịch</h4>
              <p>Chưa có dữ liệu giao dịch tài chính liên quan đến tài khoản này.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
