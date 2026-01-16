
import { SecuritySettings } from '../../shared/types/security-settings';

export const fetchSecuritySettings = async (): Promise<SecuritySettings> => {
  await new Promise(r => setTimeout(r, 600));
  return {
    login: {
      minPasswordLength: 8,
      requireSpecialChar: true,
      enable2FA: false,
    },
    content: {
      preventCopy: true,
      concurrentLogins: 2,
    },
    backup: {
      schedule: 'Hàng tuần (Weekly)',
      storage: 'AWS S3',
    },
    apiKeys: [
      { id: '1', name: 'KHÓA MOBILE APP', key: 'pk_live_...9421' },
      { id: '2', name: 'KHÓA WEBHOOK', key: 'sk_test_...882a' },
    ],
    logs: [
      { id: '1', action: 'Đăng nhập thành công', user: 'Nguyen Van A', ip: '192.168.1.45', time: '2 phút trước', status: 'success' },
      { id: '2', action: 'Thay đổi cấu hình', user: 'Admin System', ip: '10.0.0.12', time: '15 phút trước', status: 'warning' },
      { id: '3', action: 'Tải xuống báo cáo', user: 'Tran Thi B', ip: '112.45.1.22', time: '1 giờ trước', status: 'success' },
      { id: '4', action: 'Sai mật khẩu (3 lần)', user: 'Guest_99', ip: '201.2.4.55', time: '3 giờ trước', status: 'error' },
    ]
  };
};
