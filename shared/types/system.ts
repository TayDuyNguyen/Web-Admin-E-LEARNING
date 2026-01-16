
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
}

export interface SystemLog {
  id: string;
  code: number;
  content: string;
  description: string;
  time: string;
  severity: 'Nghiêm trọng' | 'Cảnh báo' | 'Thông tin';
}
