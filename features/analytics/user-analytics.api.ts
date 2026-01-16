
import { UserAnalyticsData } from '../../shared/types/user-analytics';

export const fetchUserAnalytics = async (): Promise<UserAnalyticsData> => {
  await new Promise(r => setTimeout(r, 700));

  return {
    stats: [
      {
        label: 'Tổng người dùng mới',
        value: '2,543',
        trend: 18.2,
        trendLabel: 'tháng này',
        progress: 75,
        icon: '👤+'
      },
      {
        label: 'Tỷ lệ giữ chân (Retention)',
        value: '78.6',
        trend: 5.4,
        trendLabel: 'so với tháng trước',
        progress: 78.6,
        icon: '❤️'
      },
      {
        label: 'Giá trị vòng đời (LTV)',
        value: '4.200k ₫',
        trend: 120,
        trendLabel: 'trung bình',
        progress: 45,
        icon: '💰'
      }
    ],
    acquisition: [
      { name: 'Search (Tìm kiếm)', value: 40, color: '#3b82f6' },
      { name: 'Social (Mạng XH)', value: 30, color: '#a855f7' },
      { name: 'Referral (Giới thiệu)', value: 20, color: '#22c55e' },
      { name: 'Direct (Trực tiếp)', value: 10, color: '#f59e0b' },
    ],
    activity: [
      { date: '01/10', activeUsers: 1200, newUsers: 400 },
      { date: '05/10', activeUsers: 1450, newUsers: 500 },
      { date: '10/10', activeUsers: 1300, newUsers: 620 },
      { date: '15/10', activeUsers: 1850, newUsers: 750 },
      { date: '20/10', activeUsers: 1600, newUsers: 800 },
      { date: '25/10', activeUsers: 1750, newUsers: 900 },
      { date: '30/10', activeUsers: 2100, newUsers: 1100 },
    ]
  };
};
