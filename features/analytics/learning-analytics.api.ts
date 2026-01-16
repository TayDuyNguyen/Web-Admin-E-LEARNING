
import { LearningAnalyticsData } from '../../shared/types/analytics';

export const fetchLearningAnalytics = async (): Promise<LearningAnalyticsData> => {
  await new Promise(r => setTimeout(r, 800));
  
  return {
    stats: [
      {
        label: 'Tỷ lệ hoàn thành trung bình',
        value: '68.5',
        unit: '%',
        trend: 12.5,
        trendLabel: 'so với kỳ trước',
        progress: 68.5,
        color: 'blue'
      },
      {
        label: 'Thời gian học trung bình',
        value: '4h 32m',
        trend: 45, // minutes
        trendLabel: 'so với kỳ trước',
        progress: 55,
        color: 'purple'
      },
      {
        label: 'Tỷ lệ làm bài tập đúng',
        value: '82.4',
        unit: '%',
        trend: -2.1,
        trendLabel: 'so với kỳ trước',
        progress: 82.4,
        color: 'emerald'
      }
    ],
    engagement: [
      { day: 'Thứ 2', value: 300 },
      { day: 'Thứ 3', value: 320 },
      { day: 'Thứ 4', value: 310 },
      { day: 'Thứ 5', value: 450 },
      { day: 'Thứ 6', value: 420 },
      { day: 'Thứ 7', value: 380 },
      { day: 'CN', value: 480 },
    ],
    dropOffs: [
      { lessonTitle: 'Bài 1: Tổng quan Framework', dropRate: 5, studentCount: 1240 },
      { lessonTitle: 'Bài 2: Cài đặt môi trường', dropRate: 15, studentCount: 1180 },
      { lessonTitle: 'Bài 3: Component & Props', dropRate: 22, studentCount: 950 },
      { lessonTitle: 'Bài 4: State management', dropRate: 45, studentCount: 620 },
      { lessonTitle: 'Bài 5: Side Effects & API', dropRate: 65, studentCount: 410 },
    ],
    heatmap: [
      // Simplified heatmap data for T2
      { day: 'T2', hour: '00', intensity: 0.1 },
      { day: 'T2', hour: '04', intensity: 0.05 },
      { day: 'T2', hour: '08', intensity: 0.4 },
      { day: 'T2', hour: '12', intensity: 0.6 },
      { day: 'T2', hour: '16', intensity: 0.8 },
      { day: 'T2', hour: '20', intensity: 0.9 },
      // Other days would follow...
    ]
  };
};
