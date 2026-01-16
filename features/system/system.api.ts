
import { SystemStat, ResourcePoint, SystemLog } from '../../shared/types/system';

export const fetchSystemStats = async (): Promise<SystemStat[]> => {
  return [
    { label: 'Tình trạng Server', value: '99.9%', subValue: 'Uptime', status: 'Online', icon: '📟' },
    { label: 'Hiệu suất Database', value: '0.02s', subValue: 'Query time', status: 'Tốt', icon: '🗄️' },
    { label: 'Phản hồi API', value: '124ms', subValue: 'Trung bình', status: 'Ổn định', icon: '📡' },
    { label: 'Tình trạng Sao lưu', value: '2h', subValue: 'trước', status: 'Đã đồng bộ', icon: '🔄' },
  ];
};

export const fetchResourceUsage = async (): Promise<ResourcePoint[]> => {
  return Array.from({ length: 10 }, (_, i) => ({
    time: `${i * 2}m`,
    cpu: Math.floor(Math.random() * 40) + 10,
    memory: Math.floor(Math.random() * 30) + 40,
  }));
};

export const fetchSystemLogs = async (): Promise<SystemLog[]> => {
  return [
    {
      id: '1',
      code: 500,
      content: 'Internal Server Error',
      description: 'Failed to connect to payment gateway API...',
      time: '10:42 AM - Hôm nay',
      severity: 'Nghiêm trọng',
    },
    {
      id: '2',
      code: 404,
      content: 'Resource Not Found',
      description: 'User avatar upload failed for ID #8821',
      time: '09:15 AM - Hôm nay',
      severity: 'Cảnh báo',
    },
    {
      id: '3',
      code: 200,
      content: 'System Backup Success',
      description: 'Daily backup completed successfully to S3 bucket',
      time: '04:00 AM - Hôm nay',
      severity: 'Thông tin',
    },
  ];
};
