
import React from 'react';
import { UserDetail, EnrolledCourse, UserBadge } from '../../shared/types/user';
import { Card } from '../../shared/ui/Card';

export const UserProfileSidebar: React.FC<{ user: UserDetail }> = ({ user }) => (
  <div className="space-y-6">
    <Card className="text-center pt-12">
      <div className="relative inline-block mb-6">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-32 h-32 rounded-full border-4 border-slate-800 object-cover mx-auto shadow-2xl shadow-blue-500/10"
        />
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-slate-900 rounded-full" />
      </div>
      <h3 className="text-2xl font-bold text-slate-100">{user.name}</h3>
      <p className="text-slate-500 text-sm mb-2">{user.handle}</p>
      <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-8">
        {user.role}
      </span>

      <div className="text-left space-y-4 px-2">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Email</span>
          <span className="text-sm text-slate-300 truncate font-medium">{user.email}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Số điện thoại</span>
            <span className="text-sm text-slate-300 font-medium">{user.phone}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Lần đăng nhập cuối</span>
            <span className="text-sm text-slate-300 font-medium">{user.lastLogin}</span>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
          <span>↪️</span> Đăng nhập tư cách người dùng
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-sm font-bold transition-all">
          <span>✉️</span> Gửi tin nhắn
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/10 rounded-xl text-sm font-bold transition-all mt-6">
          <span>🗑️</span> Xóa tài khoản
        </button>
      </div>
    </Card>

    <Card title="Thống kê nhanh">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800/50 text-center">
          <h4 className="text-xl font-bold text-blue-400">{user.stats.coursesCount}</h4>
          <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Khóa học</p>
        </div>
        <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800/50 text-center">
          <h4 className="text-xl font-bold text-emerald-400">{user.stats.completionRate}%</h4>
          <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Hoàn thành</p>
        </div>
      </div>
    </Card>
  </div>
);

export const WeeklyProgress: React.FC = () => (
  <Card title="Tiến độ tuần này">
    <div className="flex flex-col items-center py-4">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle className="text-slate-800" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
          <circle className="text-blue-500" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-3xl font-bold text-slate-100">75%</span>
        </div>
      </div>
      <div className="mt-6 w-full space-y-4">
        <div className="flex justify-between items-end">
          <p className="text-xs text-slate-400">Hoàn thành bài giảng</p>
          <span className="text-sm font-bold text-slate-200">24/30</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-3/4" />
        </div>
        <div className="flex justify-between items-end">
          <p className="text-xs text-slate-400">Thời gian học</p>
          <span className="text-sm font-bold text-slate-200">12h 30m</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2">
          <div className="bg-emerald-500 h-2 rounded-full w-1/2" />
        </div>
      </div>
    </div>
  </Card>
);

export const BadgesSection: React.FC<{ badges: UserBadge[] }> = ({ badges }) => (
  <Card title="Thành tích & Huy hiệu" extra={<button className="text-blue-500 text-xs font-bold hover:underline">Xem tất cả</button>}>
    <div className="flex flex-wrap gap-4 mt-2">
      {badges.map((badge) => (
        <div key={badge.id} title={badge.title} className={`w-12 h-12 rounded-full flex items-center justify-center text-xl cursor-help transition-transform hover:scale-110 shadow-lg ${
          badge.color === 'amber' ? 'bg-amber-500/20 shadow-amber-500/5' :
          badge.color === 'blue' ? 'bg-blue-500/20 shadow-blue-500/5' : 'bg-purple-500/20 shadow-purple-500/5'
        }`}>
          {badge.icon}
        </div>
      ))}
      <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center text-slate-600 hover:border-slate-500 hover:text-slate-400 transition-colors cursor-pointer text-xl">
        +
      </div>
    </div>
  </Card>
);

export const CourseList: React.FC<{ courses: EnrolledCourse[] }> = ({ courses }) => (
  <Card title="Danh sách khóa học" extra={
    <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:text-slate-200">🔍</button>
      <button className="text-slate-400 hover:text-slate-200">📊</button>
    </div>
  }>
    <div className="overflow-x-auto -mx-6">
      <table className="w-full text-left">
        <thead className="text-[10px] text-slate-500 font-bold uppercase border-b border-slate-800">
          <tr>
            <th className="py-4 px-6">Khóa học</th>
            <th className="py-4 px-6">Ngày đăng ký</th>
            <th className="py-4 px-6">Tiến độ</th>
            <th className="py-4 px-6">Điểm số</th>
            <th className="py-4 px-6 text-right">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-slate-800/20 transition-colors group">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <img src={course.thumbnail} className="w-10 h-10 rounded-lg object-cover" alt="" />
                  <div>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{course.title}</p>
                    <p className="text-[10px] text-slate-500">Giảng viên: {course.instructor}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-xs text-slate-400 font-medium">{course.enrollDate}</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'}`} 
                      style={{ width: `${course.progress}%` }} 
                    />
                  </div>
                  <span className={`text-[10px] font-bold ${course.progress === 100 ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {course.progress}%
                  </span>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-slate-200 font-bold">{course.score || '-'}</td>
              <td className="py-4 px-6 text-right">
                <button className="text-blue-500 hover:text-blue-400 text-xs font-bold transition-colors underline-offset-4 hover:underline">
                  Chi tiết
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
