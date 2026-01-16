
export interface SystemStat {
  label: string;
  value: string;
  subValue: string;
  status: 'Online' | 'Tốt' | 'Ổn định' | 'Đã đồng bộ' | 'Lỗi';
  icon: string;
}

export interface ResourcePoint {
  time: string;
  cpu: number;
  memory: number;
  network: number;
}

export interface ServiceHealth {
  name: string;
  id: string;
  status: 'active' | 'warning' | 'down';
  version: string;
  uptime: string;
  load: string;
}

export interface EnvironmentInfo {
  os: string;
  node: string;
  db: string;
  ip: string;
  region: string;
}

export interface SystemLog {
  id: string;
  code: number;
  content: string;
  description: string;
  time: string;
  severity: 'Nghiêm trọng' | 'Cảnh báo' | 'Thông tin';
}
