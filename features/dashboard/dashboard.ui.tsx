
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StatsCardData, CourseSummary, Activity, SystemHealth } from '../../shared/types/dashboard';
import { Card } from '../../shared/ui/Card';

export const StatsGrid: React.FC<{ stats: StatsCardData[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx} className="group relative overflow-hidden border-slate-800/50 hover:border-blue-500/30 transition-all duration-500">
          <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-6xl">{stat.icon}</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
              stat.color === 'blue' ? 'bg-blue-600/10 text-blue-500' :
              stat.color === 'purple' ? 'bg-purple-600/10 text-purple-500' :
              stat.color === 'emerald' ? 'bg-emerald-600/10 text-emerald-500' : 'bg-amber-600/10 text-amber-500'
            }`}>
              {stat.icon}
            </div>
            <div className={`flex items-center text-[10px] font-black px-2 py-0.5 rounded-full ${stat.change >= 0 ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
              {stat.change > 0 ? '+' : ''}{stat.change}% <span>↑</span>
            </div>
          </div>
          <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-1">{stat.title}</p>
          <h4 className="text-3xl font-black text-slate-100 tracking-tighter">{stat.value}</h4>
        </Card>
      ))}
    </div>
  );
};

export const CoursesTable: React.FC<{ courses: CourseSummary[] }> = ({ courses }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto -mx-6 -mb-6">
      <table className="w-full text-left">
        <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-800">
          <tr>
            <th className="py-4 px-6">Khóa học</th>
            <th className="py-4 px-4">Giảng viên</th>
            <th className="py-4 px-4">Học viên</th>
            <th className="py-4 px-6 text-right">Trạng thái</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          {courses.map((course) => (
            <tr 
              key={course.id} 
              className="group hover:bg-slate-800/20 transition-colors cursor-pointer"
              onClick={() => navigate(`/admin/courses/${course.id}`)}
            >
              <td className="py-4 px-6">
                 <div>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{course.title}</p>
                    <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">{course.category}</p>
                 </div>
              </td>
              <td className="py-4 px-4 text-xs text-slate-400 font-medium">{course.instructor}</td>
              <td className="py-4 px-4 text-sm font-black text-slate-200">{course.students.toLocaleString()}</td>
              <td className="py-4 px-6 text-right">
                <span className={`px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest border ${
                  course.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-400/10 text-rose-400 border-rose-400/20'
                }`}>
                  {course.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ActivityList: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  return (
    <div className="space-y-6 mt-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-4 group">
          <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center border border-slate-800 transition-all group-hover:scale-110 ${
            activity.icon === 'user-plus' ? 'bg-blue-400/10 text-blue-400' :
            activity.icon === 'dollar-sign' ? 'bg-emerald-400/10 text-emerald-400' : 
            activity.icon === 'alert-circle' ? 'bg-rose-400/10 text-rose-400' : 'bg-slate-800 text-slate-400'
          }`}>
            {activity.icon === 'user-plus' ? '👤' : activity.icon === 'dollar-sign' ? '💰' : activity.icon === 'alert-circle' ? '🚨' : '⚙️'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-300 leading-tight">
              <span className="font-bold text-slate-100">{activity.user}</span> {activity.action}
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-tighter">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SystemHealthWidget: React.FC<{ health: SystemHealth[] }> = ({ health }) => (
  <div className="grid grid-cols-3 gap-4 mb-8">
    {health.map((item, i) => (
      <div key={i} className="p-4 bg-[#0f172a] border border-slate-800 rounded-2xl">
        <div className="flex items-center gap-2 mb-1">
           <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'online' ? 'bg-emerald-500' : item.status === 'warning' ? 'bg-amber-500 animate-pulse' : 'bg-rose-500'}`} />
           <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{item.label}</span>
        </div>
        <p className="text-sm font-black text-slate-200">{item.value}</p>
      </div>
    ))}
  </div>
);

export const QuickLinks: React.FC = () => {
  const links = [
    { title: 'Tạo khóa học', icon: '⊕', path: '/admin/course-builder', color: 'text-blue-500' },
    { title: 'Gửi thông báo', icon: '📢', path: '/admin/notifications', color: 'text-purple-500' },
    { title: 'Duyệt bài tập', icon: '📝', path: '/admin/exercises', color: 'text-emerald-500' },
  ];

  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      {links.map((link, i) => (
        <button 
          key={i}
          onClick={() => navigate(link.path)}
          className="w-full flex items-center justify-between p-4 bg-[#0f172a] border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/30 transition-all group"
        >
          <div className="flex items-center gap-3">
            <span className={`text-xl ${link.color}`}>{link.icon}</span>
            <span className="text-xs font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-100">{link.title}</span>
          </div>
          <span className="text-slate-600 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      ))}
    </div>
  );
};
