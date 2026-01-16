
export type AchievementCategory = 'Chuyên cần' | 'Học tập' | 'Cộng đồng' | 'Thử thách';

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  earnerCount: number;
  category: AchievementCategory;
}

export interface GamificationStats {
  totalAchievements: number;
  growth: number;
  topStudent: {
    name: string;
    badgesCount: number;
    avatar: string;
  };
  participationRate: number;
}
