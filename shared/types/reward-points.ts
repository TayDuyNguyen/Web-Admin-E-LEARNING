
export interface PointStat {
  label: string;
  value: string;
  trend: string;
  trendType: 'up' | 'down';
  icon: string;
  color: string;
}

export interface EarningRule {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  department: string;
  points: number;
  avatar: string;
}

export interface RewardProduct {
  id: string;
  title: string;
  pointsRequired: number;
  image?: string;
  type: 'Voucher' | 'Ebook' | 'Merch';
}

export interface RewardPointsData {
  stats: PointStat[];
  rules: EarningRule[];
  leaderboard: LeaderboardUser[];
  rewardsPreview: RewardProduct[];
}
