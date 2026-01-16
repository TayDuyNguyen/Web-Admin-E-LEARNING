
import { StatsCardData, RegistrationData, CourseSummary, Activity, SystemHealth } from '../../shared/types/dashboard';

// Helper to randomize stats
const getRandomValue = (base: number, range: number) => (base + Math.floor(Math.random() * range)).toLocaleString();
const getRandomChange = () => (Math.random() * 20 * (Math.random() > 0.5 ? 1 : -1)).toFixed(1);

export const fetchDashboardStats = async (timeframe: string): Promise<StatsCardData[]> => {
  await new Promise(r => setTimeout(r, 400));
  const factor = timeframe === 'Ngày' ? 1 : timeframe === 'Tuần' ? 7 : timeframe === 'Tháng' ? 30 : 365;
  
  return [
    { title: 'Tổng người dùng', value: getRandomValue(2000 * factor / 10, 500), change: Number(getRandomChange()), icon: '👥', color: 'blue' },
    { title: 'Tổng khóa học', value: getRandomValue(100, 20), change: Number(getRandomChange()), icon: '🎓', color: 'purple' },
    { title: 'Tổng bài học', value: getRandomValue(1200, 300), change: Number(getRandomChange()), icon: '📖', color: 'emerald' },
    { title: 'Doanh thu', value: getRandomValue(500 * factor, 200) + 'tr ₫', change: Number(getRandomChange()), icon: '💰', color: 'amber' },
  ];
};

export const fetchRegistrations = async (timeframe: string): Promise<RegistrationData[]> => {
  const labels = timeframe === 'Ngày' 
    ? ['00h', '04h', '08h', '12h', '16h', '20h'] 
    : ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];
    
  return labels.map(label => ({
    name: label,
    registrations: Math.floor(Math.random() * 800) + 100
  }));
};

export const fetchTopCourses = async (): Promise<CourseSummary[]> => {
  return [
    { id: '1', title: 'Python cho người mới', instructor: 'Nguyễn Văn A', students: 1240, status: 'active', category: 'Lập trình' },
    { id: '2', title: 'React Masterclass 2024', instructor: 'Trần Thị B', students: 890, status: 'active', category: 'Lập trình' },
    { id: '3', title: 'Thiết kế UI/UX cơ bản', instructor: 'Lê Văn C', students: 560, status: 'active', category: 'Thiết kế' },
    { id: '4', title: 'Javascript Nâng cao', instructor: 'Phạm Minh D', students: 420, status: 'active', category: 'Lập trình' },
  ];
};

export const generateMockActivity = (): Activity => {
  const users = ['Hoàng Nam', 'Minh Thu', 'Anh Quân', 'Lan Anh', 'Hệ thống'];
  const actions = ['vừa đăng ký tài khoản', 'đã hoàn thành bài tập', 'đã thanh toán khóa học', 'vừa đánh giá 5 sao'];
  const icons: ('user-plus' | 'dollar-sign' | 'book-open' | 'alert-circle')[] = ['user-plus', 'dollar-sign', 'book-open', 'alert-circle'];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    user: users[Math.floor(Math.random() * users.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    timestamp: 'Vừa xong',
    icon: icons[Math.floor(Math.random() * icons.length)]
  };
};

export const fetchRecentActivities = async (): Promise<Activity[]> => {
  return [
    { id: '1', user: 'Nguyễn An', action: 'vừa đăng ký tài khoản mới', timestamp: '2 phút trước', icon: 'user-plus' },
    { id: '2', user: 'Hệ thống', action: 'hoàn thành sao lưu định kỳ', timestamp: '15 phút trước', icon: 'book-open' },
    { id: '3', user: 'Lê Bình', action: 'đã thanh toán khóa học React', timestamp: '1 giờ trước', icon: 'dollar-sign' },
  ];
};

export const fetchSystemHealth = async (): Promise<SystemHealth[]> => {
  return [
    { label: 'Server Status', status: 'online', value: '99.9%' },
    { label: 'Database', status: 'online', value: 'Stable' },
    { label: 'API Latency', status: 'warning', value: '240ms' },
  ];
};
