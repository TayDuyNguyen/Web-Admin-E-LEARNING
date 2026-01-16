
import { EngagementData } from '../../shared/types/engagement';

export const fetchEngagementAnalytics = async (): Promise<EngagementData> => {
  await new Promise(r => setTimeout(r, 700));

  return {
    stats: [
      {
        label: 'Tỷ lệ tương tác',
        value: '15.4%',
        trend: 2.5,
        trendLabel: 'so với tuần trước',
        icon: '⚡',
        color: 'blue'
      },
      {
        label: 'Tổng lượt thảo luận',
        value: '1,284',
        trend: 18.2,
        trendLabel: 'tháng này',
        icon: '💬',
        color: 'purple'
      },
      {
        label: 'Thời gian học TB/Ngày',
        value: '42m',
        trend: 5,
        trendLabel: 'phút tăng thêm',
        icon: '⏱️',
        color: 'emerald'
      },
      {
        label: 'Tâm thế cộng đồng',
        value: 'Tích cực',
        trend: 0.8,
        trendLabel: 'chỉ số hài lòng',
        icon: '😊',
        color: 'amber'
      }
    ],
    trends: [
      { time: 'T2', comments: 120, discussions: 45, likes: 300 },
      { time: 'T3', comments: 150, discussions: 52, likes: 350 },
      { time: 'T4', comments: 140, discussions: 48, likes: 320 },
      { time: 'T5', comments: 210, discussions: 85, likes: 500 },
      { time: 'T6', comments: 180, discussions: 70, likes: 450 },
      { time: 'T7', comments: 130, discussions: 40, likes: 280 },
      { time: 'CN', comments: 250, discussions: 95, likes: 600 },
    ],
    topTopics: [
      { id: '1', title: 'Thảo luận về lộ trình Frontend 2025', category: 'Lập trình', interactions: 852, sentiment: 'Tích cực' },
      { id: '2', title: 'Lỗi khi cài đặt môi trường Docker', category: 'DevOps', interactions: 420, sentiment: 'Trung lập' },
      { id: '3', title: 'Chia sẻ tài liệu UI/UX Design System', category: 'Thiết kế', interactions: 380, sentiment: 'Tích cực' },
      { id: '4', title: 'Góp ý về chất lượng video bài giảng', category: 'Hệ thống', interactions: 150, sentiment: 'Tiêu cực' },
    ]
  };
};
