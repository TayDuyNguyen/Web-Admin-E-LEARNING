
export interface LearningStat {
  label: string;
  value: string;
  unit?: string;
  trend: number;
  trendLabel: string;
  progress: number;
  color: string;
}

export interface EngagementPoint {
  day: string;
  value: number;
}

export interface HeatmapPoint {
  day: string;
  hour: string;
  intensity: number; // 0 to 1
}

export interface DropOffPoint {
  lessonTitle: string;
  dropRate: number;
  studentCount: number;
}

export interface LearningAnalyticsData {
  stats: LearningStat[];
  engagement: EngagementPoint[];
  dropOffs: DropOffPoint[];
  heatmap: HeatmapPoint[];
}
