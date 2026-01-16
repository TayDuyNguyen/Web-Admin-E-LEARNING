
import { RevenueAnalyticsData } from '../../shared/types/revenue';

export const fetchRevenueAnalytics = async (): Promise<RevenueAnalyticsData> => {
  await new Promise(r => setTimeout(r, 750));

  return {
    stats: [
      {
        label: 'Tổng doanh thu',
        value: '854.2 tr ₫',
        trend: 24.8,
        trendLabel: 'tháng này',
        progress: 85,
        color: 'blue',
        icon: '💵'
      },
      {
        label: 'Tỷ lệ chuyển đổi',
        value: '4.8%',
        trend: 1.2,
        trendLabel: 'so với tháng trước',
        progress: 48,
        color: 'emerald',
        icon: '📈'
      },
      {
        label: 'Doanh thu TB / User (ARPU)',
        value: '560k ₫',
        trend: 45,
        trendLabel: 'trung bình',
        progress: 65,
        color: 'amber',
        icon: '👤'
      }
    ],
    trends: [
      { time: 'T1', revenue: 250 },
      { time: 'T2', revenue: 320 },
      { time: 'T3', revenue: 280 },
      { time: 'T4', revenue: 380 },
      { time: 'T5', revenue: 420 },
      { time: 'T6', revenue: 390 },
      { time: 'T7', revenue: 450 },
      { time: 'T8', revenue: 480 },
      { time: 'T9', revenue: 510 },
      { time: 'T10', revenue: 580 },
      { time: 'T11', revenue: 620 },
      { time: 'T12', revenue: 680 },
    ],
    topCourses: [
      { id: '1', title: 'Lập trình Python cơ bản', salesCount: 1204, totalRevenue: '481.6 tr ₫', trend: '+12%' },
      { id: '2', title: 'Thiết kế UI/UX nâng cao', salesCount: 850, totalRevenue: '255.0 tr ₫', trend: '+8%' },
      { id: '3', title: 'React Masterclass 2025', salesCount: 520, totalRevenue: '156.0 tr ₫', trend: '+15%' },
      { id: '4', title: 'Data Science with R', salesCount: 310, totalRevenue: '93.0 tr ₫', trend: '-2%' },
      { id: '5', title: 'Digital Marketing Pro', salesCount: 290, totalRevenue: '87.0 tr ₫', trend: '+5%' },
    ],
    paymentMethods: [
      { name: 'Thẻ Visa/Master', value: 45, color: '#3b82f6' },
      { name: 'Ví MoMo', value: 30, color: '#ec4899' },
      { name: 'Chuyển khoản', value: 20, color: '#22c55e' },
      { name: 'Khác', value: 5, color: '#64748b' },
    ]
  };
};
