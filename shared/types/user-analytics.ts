
export interface UserStat {
  label: string;
  value: string;
  trend: number;
  trendLabel: string;
  progress: number;
  icon?: string;
}

export interface AcquisitionSource {
  name: string;
  value: number;
  color: string;
}

export interface ActivityPoint {
  date: string;
  activeUsers: number;
  newUsers: number;
}

export interface UserAnalyticsData {
  stats: UserStat[];
  acquisition: AcquisitionSource[];
  activity: ActivityPoint[];
}
