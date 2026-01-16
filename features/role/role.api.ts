
import { Role } from '../../shared/types/role';

const MOCK_ROLES: Role[] = [
  {
    id: 'admin',
    name: 'Quản trị viên',
    description: 'Quyền truy cập toàn bộ hệ thống',
    userCount: 3,
    icon: '🛡️',
    avatars: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2', 'https://i.pravatar.cc/150?u=3'],
    permissions: [
      { module: 'Quản lý người dùng', description: 'Danh sách, hồ sơ, và phân quyền', icon: '👥', permissions: { view: true, create: true, edit: true, delete: true } },
      { module: 'Quản lý khóa học', description: 'Tạo mới, chỉnh sửa nội dung khóa học', icon: '🎓', permissions: { view: true, create: true, edit: true, delete: false } },
      { module: 'Nội dung & Tài nguyên', description: 'Thư viện media, bài tập, quiz', icon: '📝', permissions: { view: true, create: true, edit: true, delete: true } },
      { module: 'Báo cáo & Thống kê', description: 'Xem doanh thu, tiến độ học tập', icon: '📊', permissions: { view: true, create: false, edit: false, delete: false } },
      { module: 'Cài đặt hệ thống', description: 'Cấu hình chung, thanh toán, API', icon: '⚙️', permissions: { view: true, create: true, edit: true, delete: false } },
    ]
  },
  {
    id: 'instructor',
    name: 'Giảng viên',
    description: 'Quản lý khóa học và học viên',
    userCount: 42,
    icon: '🎓',
    avatars: ['https://i.pravatar.cc/150?u=4', 'https://i.pravatar.cc/150?u=5'],
    permissions: [
      { module: 'Quản lý người dùng', description: 'Danh sách, hồ sơ, và phân quyền', icon: '👥', permissions: { view: true, create: false, edit: false, delete: false } },
      { module: 'Quản lý khóa học', description: 'Tạo mới, chỉnh sửa nội dung khóa học', icon: '🎓', permissions: { view: true, create: true, edit: true, delete: false } },
      { module: 'Nội dung & Tài nguyên', description: 'Thư viện media, bài tập, quiz', icon: '📝', permissions: { view: true, create: true, edit: true, delete: true } },
      { module: 'Báo cáo & Thống kê', description: 'Xem doanh thu, tiến độ học tập', icon: '📊', permissions: { view: true, create: false, edit: false, delete: false } },
      { module: 'Cài đặt hệ thống', description: 'Cấu hình chung, thanh toán, API', icon: '⚙️', permissions: { view: false, create: false, edit: false, delete: false } },
    ]
  },
  {
    id: 'student',
    name: 'Học viên',
    description: 'Tham gia khóa học và thảo luận',
    userCount: 1250,
    icon: '👤',
    avatars: ['https://i.pravatar.cc/150?u=6'],
    permissions: [
      { module: 'Quản lý khóa học', description: 'Tạo mới, chỉnh sửa nội dung khóa học', icon: '🎓', permissions: { view: true, create: false, edit: false, delete: false } },
      { module: 'Nội dung & Tài nguyên', description: 'Thư viện media, bài tập, quiz', icon: '📝', permissions: { view: true, create: false, edit: false, delete: false } },
    ]
  },
  {
    id: 'editor',
    name: 'Biên tập viên',
    description: 'Biên tập và quản lý nội dung',
    userCount: 8,
    icon: '📝',
    avatars: ['https://i.pravatar.cc/150?u=7'],
    permissions: [
      { module: 'Nội dung & Tài nguyên', description: 'Thư viện media, bài tập, quiz', icon: '📝', permissions: { view: true, create: true, edit: true, delete: true } },
    ]
  }
];

export const fetchRoles = async (): Promise<Role[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_ROLES;
};
