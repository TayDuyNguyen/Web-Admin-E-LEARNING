
export type NotificationStatus = 'Đã gửi' | 'Đã đọc' | 'Chờ gửi' | 'Thất bại';

export interface NotificationStat {
  label: string;
  value: string;
  trend?: number;
  trendLabel?: string;
  icon: string;
  color: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  summary: string;
  target: string;
  targetIcon: string;
  time: string;
  date: string;
  status: NotificationStatus;
  openRate: number; // percentage
  type: 'Bảo trì' | 'Khóa học' | 'Học tập' | 'Khuyến mãi';
}

export interface NotificationData {
  stats: NotificationStat[];
  history: NotificationItem[];
}
