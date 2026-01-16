
import { SystemStat, ResourcePoint, SystemLog, ServiceHealth, EnvironmentInfo } from '../../shared/types/system';

export const fetchSystemStats = async (): Promise<SystemStat[]> => {
  return [
    { label: 'Tình trạng Server', value: '99.9%', subValue: 'Uptime', status: 'Online', icon: '📟' },
    { label: 'Hiệu suất Database', value: '0.02s', subValue: 'Query time', status: 'Tốt', icon: '🗄️' },
    { label: 'Phản hồi API', value: '124ms', subValue: 'Trung bình', status: 'Ổn định', icon: '📡' },
    { label: 'Phiên hoạt động', value: '1.2k', subValue: 'Người dùng', status: 'Ổn định', icon: '👥' },
  ];
};

export const fetchResourceUsage = async (): Promise<ResourcePoint[]> => {
  return Array.from({ length: 12 }, (_, i) => ({
    time: `${i * 10}s`,
    cpu: Math.floor(Math.random() * 30) + 15,
    memory: Math.floor(Math.random() * 20) + 40,
    network: Math.floor(Math.random() * 100) + 50,
  }));
};

export const fetchServicesHealth = async (): Promise<ServiceHealth[]> => {
  return [
    { id: 'web-1', name: 'Nginx Web Server', status: 'active', version: '1.24.0', uptime: '12d 4h', load: '12%' },
    { id: 'db-1', name: 'PostgreSQL DB', status: 'active', version: '15.4', uptime: '45d 2h', load: '8%' },
    { id: 'rd-1', name: 'Redis Cache', status: 'active', version: '7.0.12', uptime: '12d 4h', load: '2%' },
    { id: 'ml-1', name: 'SMTP Mailer', status: 'warning', version: 'Postfix', uptime: '1d 10h', load: 'High Latency' },
  ];
};

export const fetchEnvironmentInfo = async (): Promise<EnvironmentInfo> => {
  return {
    os: 'Ubuntu 22.04 LTS (Jammy Jellyfish)',
    node: 'v20.10.0 (LTS)',
    db: 'PostgreSQL 15.4 on x86_64-pc-linux-gnu',
    ip: '172.67.142.102',
    region: 'Asia Southeast (Singapore)',
  };
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
