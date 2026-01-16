
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  fetchDashboardStats, 
  fetchRegistrations, 
  fetchTopCourses, 
  fetchRecentActivities 
} from './dashboard.api';
import { StatsGrid, CoursesTable, ActivityList } from './dashboard.ui';
import { Card } from '../../shared/ui/Card';
import { StatsCardData, RegistrationData, CourseSummary, Activity } from '../../shared/types/dashboard';

export const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<StatsCardData[]>([]);
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [timeframe, setTimeframe] = useState('Ngày');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [s, r, c, a] = await Promise.all([
          fetchDashboardStats(),
          fetchRegistrations(),
          fetchTopCourses(),
          fetchRecentActivities()
        ]);
        setStats(s);
        setRegistrations(r);
        setCourses(c);
        setActivities(a);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-slate-400 animate-pulse">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">Tổng quan</h2>
          <p className="text-slate-400 mt-1">Chào mừng quay trở lại bảng điều khiển.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex">
            {['Ngày', 'Tuần', 'Tháng', 'Năm'].map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  timeframe === t ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button className="bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
            📥 Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsGrid stats={stats} />

      {/* Main Chart Section */}
      <Card title="Số lượng đăng ký mới" extra={<span className="text-slate-400 text-xs">Theo dõi xu hướng học viên đăng ký theo thời gian</span>}>
        <div className="h-[350px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={registrations} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                dy={10}
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
                itemStyle={{ color: '#f8fafc' }}
              />
              <Area 
                type="monotone" 
                dataKey="registrations" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorReg)" 
                animationDuration={2000}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Bottom Grid: Courses & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card 
            title="Khóa học phổ biến nhất" 
            extra={<button className="text-blue-500 hover:text-blue-400 text-sm font-semibold transition-colors">Xem tất cả</button>}
          >
            <CoursesTable courses={courses} />
          </Card>
        </div>
        <div>
          <Card title="Hoạt động gần đây">
            <ActivityList activities={activities} />
          </Card>
        </div>
      </div>
    </div>
  );
};
