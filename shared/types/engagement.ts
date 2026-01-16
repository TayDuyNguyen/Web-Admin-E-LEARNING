
export interface EngagementStat {
  label: string;
  value: string;
  trend: number;
  trendLabel: string;
  icon: string;
  color: 'blue' | 'purple' | 'emerald' | 'amber';
}

export interface EngagementTrendPoint {
  time: string;
  comments: number;
  discussions: number;
  likes: number;
}

export interface ActiveTopic {
  id: string;
  title: string;
  category: string;
  interactions: number;
  sentiment: 'Tích cực' | 'Trung lập' | 'Tiêu cực';
}

export interface EngagementData {
  stats: EngagementStat[];
  trends: EngagementTrendPoint[];
  topTopics: ActiveTopic[];
}
