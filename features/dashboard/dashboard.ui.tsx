
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StatsCardData, CourseSummary, Activity } from '../../shared/types/dashboard';
import { Card } from '../../shared/ui/Card';

export const StatsGrid: React.FC<{ stats: StatsCardData[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx} className="group hover:bg-slate-800/30 transition-all border-slate-800/50 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl group-hover:bg-blue-600/20 group-hover:scale-110 transition-all">
              {stat.icon}
            </div>
            <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${stat.change >= 0 ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
              {stat.change > 0 ? '+' : ''}{stat.change}% <span>↑</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1">{stat.title}</p>
          <h4 className="text-2xl font-bold text-slate-100">{stat.value}</h4>
        </Card>
      ))}
    </div>
  );
};

export const CoursesTable: React.FC<{ courses: CourseSummary[] }> = ({ courses }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-800">
          <tr>
            <th className="pb-4 pt-0 px-4">Tên khóa học</th>
            <th className="pb-4 pt-0 px-4">Giảng viên</th>
            <th className="pb-4 pt-0 px-4">Học viên</th>
            <th className="pb-4 pt-0 px-4">Trạng thái</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {courses.map((course) => (
            <tr 
              key={course.id} 
              className="group hover:bg-slate-800/20 transition-colors cursor-pointer"
              onClick={() => navigate(`/admin/courses/${course.id}`)}
            >
              <td className="py-4 px-4 font-medium text-slate-200 group-hover:text-blue-400 transition-colors">{course.title}</td>
              <td className="py-4 px-4 text-slate-400">{course.instructor}</td>
              <td className="py-4 px-4 text-slate-300 font-bold">{course.students.toLocaleString()}</td>
              <td className="py-4 px-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  course.status === 'active' ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' : 'bg-rose-400/10 text-rose-400 border border-rose-400/20'
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
    <div className="space-y-6">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-4 group">
          <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border border-slate-800 transition-colors group-hover:border-blue-500/50 ${
            activity.icon === 'user-plus' ? 'bg-blue-400/10 text-blue-400' :
            activity.icon === 'dollar-sign' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-slate-800 text-slate-400'
          }`}>
            {activity.icon === 'user-plus' ? '👤' : activity.icon === 'dollar-sign' ? '💰' : '📖'}
          </div>
          <div className="flex-1">
            <p className="text-sm text-slate-200">
              <span className="font-bold">{activity.user}</span> {activity.action}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
