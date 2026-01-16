
import { PermissionSettingsData, ModulePermission } from '../../shared/types/permission';

export const fetchPermissionData = async (roleId: string): Promise<PermissionSettingsData> => {
  await new Promise(r => setTimeout(r, 500));
  
  const roles = [
    { id: 'admin', name: 'Quản trị viên', description: 'Toàn quyền hệ thống', userCount: 3, icon: '🛡️', color: 'blue', isSystem: true },
    { id: 'instructor', name: 'Giảng viên', description: 'Quản lý học liệu & học viên', userCount: 42, icon: '🎓', color: 'purple', isSystem: false },
    { id: 'student', name: 'Học viên', description: 'Truy cập nội dung học tập', userCount: 1250, icon: '👤', color: 'emerald', isSystem: false },
    { id: 'editor', name: 'Biên tập viên', description: 'Chỉnh sửa nội dung & bài giảng', userCount: 8, icon: '📝', color: 'amber', isSystem: false },
    { id: 'support', name: 'Hỗ trợ viên', description: 'Xử lý báo cáo & phản hồi', userCount: 5, icon: '🎧', color: 'rose', isSystem: false },
  ];

  // Logic to return different permissions based on roleId for demo
  const isAdmin = roleId === 'admin';

  const permissions: ModulePermission[] = [
    { moduleId: 'dash', moduleName: 'Bảng điều khiển', category: 'Hệ thống', actions: { view: true, create: isAdmin, edit: isAdmin, delete: isAdmin, export: true } },
    { moduleId: 'user', moduleName: 'Quản lý người dùng', category: 'Thành viên', actions: { view: true, create: isAdmin, edit: isAdmin, delete: isAdmin, export: isAdmin } },
    { moduleId: 'course', moduleName: 'Quản lý khóa học', category: 'Nội dung', actions: { view: true, create: !isAdmin, edit: true, delete: isAdmin, export: true } },
    { moduleId: 'lesson', moduleName: 'Bài giảng & Chương', category: 'Nội dung', actions: { view: true, create: true, edit: true, delete: true, export: false } },
    { moduleId: 'finance', moduleName: 'Doanh thu & Thanh toán', category: 'Tài chính', actions: { view: isAdmin, create: false, edit: false, delete: false, export: isAdmin } },
    { moduleId: 'audit', moduleName: 'Nhật ký hệ thống', category: 'Bảo mật', actions: { view: isAdmin, create: false, edit: false, delete: false, export: isAdmin } },
    { moduleId: 'gamify', moduleName: 'Trò chơi hóa', category: 'Công cụ', actions: { view: true, create: isAdmin, edit: true, delete: false, export: false } },
  ];

  return { roles, permissions };
};

export const updateRolePermissions = async (roleId: string, permissions: ModulePermission[]): Promise<boolean> => {
  await new Promise(r => setTimeout(r, 1000));
  console.log(`Updated permissions for ${roleId}`, permissions);
  return true;
};
