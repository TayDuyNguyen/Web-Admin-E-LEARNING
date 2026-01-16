
import { StatsCardData, RegistrationData, CourseSummary, Activity, SystemHealth } from '../../shared/types/dashboard';

export const fetchDashboardStats = async (): Promise<StatsCardData[]> => {
  await new Promise(r => setTimeout(r, 600));
  return [
    { title: 'Tổng người dùng', value: '24,592', change: 12.5, icon: '👥', color: 'blue' },
    { title: 'Tổng khóa học', value: '128', change: 4.2, icon: '🎓', color: 'purple' },
    { title: 'Tổng bài học', value: '1,450', change: 25.1, icon: '📖', color: 'emerald' },
    { title: 'Doanh thu tháng', value: '850tr ₫', change: 8.8, icon: '💰', color: 'amber' },
  ];
};

export const fetchRegistrations = async (): Promise<RegistrationData[]> => {
  return [
    { name: 'Thứ 2', registrations: 120 },
    { name: 'Thứ 3', registrations: 210 },
    { name: 'Thứ 4', registrations: 450 },
    { name: 'Thứ 5', registrations: 780 },
    { name: 'Thứ 6', registrations: 690 },
    { name: 'Thứ 7', registrations: 840 },
    { name: 'Chủ Nhật', registrations: 920 },
  ];
};

export const fetchTopCourses = async (): Promise<CourseSummary[]> => {
  return [
    { id: '1', title: 'Python cho người mới', instructor: 'Nguyễn Văn A', students: 1240, status: 'active', category: 'Lập trình' },
    { id: '2', title: 'React Masterclass 2024', instructor: 'Trần Thị B', students: 890, status: 'active', category: 'Lập trình' },
    { id: '3', title: 'Thiết kế UI/UX cơ bản', instructor: 'Lê Văn C', students: 560, status: 'active', category: 'Thiết kế' },
    { id: '4', title: 'Javascript Nâng cao', instructor: 'Phạm Minh D', students: 420, status: 'active', category: 'Lập trình' },
  ];
};

export const fetchRecentActivities = async (): Promise<Activity[]> => {
  return [
    { id: '1', user: 'Nguyễn An', action: 'vừa đăng ký tài khoản mới', timestamp: '2 phút trước', icon: 'user-plus' },
    { id: '2', user: 'Hệ thống', action: 'hoàn thành sao lưu định kỳ', timestamp: '15 phút trước', icon: 'book-open' },
    { id: '3', user: 'Lê Bình', action: 'đã thanh toán khóa học React', timestamp: '1 giờ trước', icon: 'dollar-sign' },
    { id: '4', user: 'Cảnh báo', action: 'phát hiện đăng nhập lạ từ IP 1.2.3.4', timestamp: '3 giờ trước', icon: 'alert-circle' },
  ];
};

export const fetchSystemHealth = async (): Promise<SystemHealth[]> => {
  return [
    { label: 'Server Status', status: 'online', value: '99.9%' },
    { label: 'Database', status: 'online', value: 'Stable' },
    { label: 'API Latency', status: 'warning', value: '240ms' },
  ];
};
