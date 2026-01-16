
import { StatsCardData, RegistrationData, CourseSummary, Activity } from '../../shared/types/dashboard';

export const fetchDashboardStats = async (): Promise<StatsCardData[]> => {
  // Simulating API delay
  await new Promise(r => setTimeout(r, 600));
  return [
    { title: 'Tổng người dùng', value: '24,592', change: 12, icon: '👥' },
    { title: 'Tổng khóa học', value: '128', change: 4, icon: '🎓' },
    { title: 'Tổng bài học', value: '1,450', change: 25, icon: '📖' },
    { title: 'Doanh thu', value: '850tr ₫', change: 8, icon: '💰' },
  ];
};

export const fetchRegistrations = async (): Promise<RegistrationData[]> => {
  return [
    { name: 'Tháng 8', registrations: 120 },
    { name: 'Tháng 9', registrations: 210 },
    { name: 'Tháng 10', registrations: 450 },
    { name: 'Tháng 11', registrations: 780 },
    { name: 'Tháng 12', registrations: 690 },
  ];
};

export const fetchTopCourses = async (): Promise<CourseSummary[]> => {
  return [
    { id: '1', title: 'Python cho người mới', instructor: 'Nguyễn Văn A', students: 1240, status: 'active' },
    { id: '2', title: 'React Masterclass 2024', instructor: 'Trần Thị B', students: 890, status: 'active' },
    { id: '3', title: 'Thiết kế UI/UX cơ bản', instructor: 'Lê Văn C', students: 560, status: 'active' },
    { id: '4', title: 'Javascript Nâng cao', instructor: 'Phạm Minh D', students: 420, status: 'inactive' },
  ];
};

export const fetchRecentActivities = async (): Promise<Activity[]> => {
  return [
    { id: '1', user: 'Nguyễn An', action: 'đã đăng ký', timestamp: '2 phút trước', icon: 'user-plus' },
    { id: '2', user: 'Thanh toán mới', action: '#INV-002', timestamp: '15 phút trước', icon: 'dollar-sign' },
    { id: '3', user: 'Lê Bình', action: 'hoàn thành khóa học', timestamp: '1 giờ trước', icon: 'book-open' },
    { id: '4', user: 'Admin', action: 'đã cập nhật khóa học Python', timestamp: '3 giờ trước', icon: 'book-open' },
  ];
};
