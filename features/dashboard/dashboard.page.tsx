
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  fetchDashboardStats, 
  fetchRegistrations, 
  fetchTopCourses, 
  fetchRecentActivities,
  fetchSystemHealth
} from './dashboard.api';
import { StatsGrid, CoursesTable, ActivityList, SystemHealthWidget, QuickLinks } from './dashboard.ui';
import { Card } from '../../shared/ui/Card';
import { StatsCardData, RegistrationData, CourseSummary, Activity, SystemHealth } from '../../shared/types/dashboard';

export const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<StatsCardData[]>([]);
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [health, setHealth] = useState<SystemHealth[]>([]);
  const [timeframe, setTimeframe] = useState('Ngày');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [s, r, c, a, h] = await Promise.all([
          fetchDashboardStats(),
          fetchRegistrations(),
          fetchTopCourses(),
          fetchRecentActivities(),
          fetchSystemHealth()
        ]);
        setStats(s);
        setRegistrations(r);
        setCourses(c);
        setActivities(a);
        setHealth(h);
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
      <div className="h-full flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Khởi tạo dữ liệu quản trị...</p>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8 pb-20">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Chào buổi sáng, Admin</h2>
          <p className="text-slate-500 text-sm mt-1 font-medium italic">Hệ thống đang hoạt động ổn định. Có 12 yêu cầu mới đang chờ xử lý.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-1.5 flex shadow-2xl">
            {['Ngày', 'Tuần', 'Tháng', 'Năm'].map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  timeframe === t 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95">
            📥 Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Chart Section */}
        <div className="lg:col-span-8 space-y-8">
          <Card title="Số lượng đăng ký mới" extra={<span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">7 Ngày vừa qua</span>} className="bg-slate-900/20">
            <div className="h-[380px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={registrations} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#475569" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                    dy={15}
                    className="font-black uppercase tracking-widest"
                  />
                  <YAxis 
                    stroke="#475569" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '12px' }}
                    itemStyle={{ color: '#60a5fa', fontWeight: '900', fontSize: '12px' }}
                    labelStyle={{ marginBottom: '4px', color: '#94a3b8', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="registrations" 
                    stroke="#3b82f6" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorReg)" 
                    animationDuration={2500}
                    dot={{ fill: '#3b82f6', strokeWidth: 3, r: 5, stroke: '#0f172a' }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card 
            title="Khóa học phổ biến nhất" 
            extra={<button className="text-blue-500 hover:text-blue-400 text-[10px] font-black uppercase tracking-widest transition-colors">Toàn bộ khoá học</button>}
            className="bg-slate-900/20"
          >
            <CoursesTable courses={courses} />
          </Card>
        </div>

        {/* Sidebar Section */}
        <div className="lg:col-span-4 space-y-8">
          <Card title="Trạng thái hệ thống" className="bg-[#1e293b]/30 border-slate-800/50">
             <SystemHealthWidget health={health} />
             <p className="text-[10px] text-slate-500 font-bold italic leading-relaxed">Dữ liệu được cập nhật tự động sau mỗi 30 giây.</p>
          </Card>

          <Card title="Lối tắt nhanh" className="bg-[#1e293b]/30">
             <QuickLinks />
          </Card>

          <Card title="Hoạt động gần đây" className="bg-[#1e293b]/30">
            <ActivityList activities={activities} />
            <button className="w-full mt-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">
              Xem tất cả nhật ký
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};
