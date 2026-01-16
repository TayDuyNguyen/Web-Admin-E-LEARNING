
import { RewardPointsData } from '../../shared/types/reward-points';

export const fetchRewardPointsData = async (): Promise<RewardPointsData> => {
  await new Promise(r => setTimeout(r, 600));
  return {
    stats: [
      {
        label: 'TỔNG SỐ ĐIỂM ĐÃ CẤP',
        value: '1,245,000',
        trend: '+12% tháng này',
        trendType: 'up',
        icon: '💰',
        color: 'amber'
      },
      {
        label: 'TỶ LỆ ĐỔI QUÀ',
        value: '32.5%',
        trend: 'Học viên tích cực đổi quà',
        trendType: 'up',
        icon: '🎁',
        color: 'purple'
      },
      {
        label: 'GIAO DỊCH TRONG THÁNG',
        value: '8,450',
        trend: '+5% so với tháng trước',
        trendType: 'up',
        icon: '📑',
        color: 'blue'
      }
    ],
    rules: [
      {
        id: '1',
        title: 'Hoàn thành bài giảng',
        description: 'Mỗi lần hoàn thành 100% bài giảng video',
        points: 10,
        icon: '▶',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-500'
      },
      {
        id: '2',
        title: 'Vượt qua bài kiểm tra',
        description: 'Điểm số >= 80%',
        points: 50,
        icon: '❓',
        iconBg: 'bg-blue-500/10',
        iconColor: 'text-blue-500'
      },
      {
        id: '3',
        title: 'Thảo luận sôi nổi',
        description: 'Tạo chủ đề mới hoặc trả lời thảo luận',
        points: 5,
        icon: '💬',
        iconBg: 'bg-purple-500/10',
        iconColor: 'text-purple-500'
      },
      {
        id: '4',
        title: 'Đăng nhập hàng ngày',
        description: 'Điểm danh mỗi ngày 1 lần',
        points: 2,
        icon: '➡️',
        iconBg: 'bg-orange-500/10',
        iconColor: 'text-orange-500'
      }
    ],
    leaderboard: [
      { rank: 1, name: 'Nguyễn T.', department: 'Marketing Dept', points: 2450, avatar: 'https://i.pravatar.cc/150?u=u1' },
      { rank: 2, name: 'Trần Thị B.', department: 'Sales Team', points: 2100, avatar: 'https://i.pravatar.cc/150?u=u2' },
      { rank: 3, name: 'Lê Văn Hùng', department: 'IT Dept', points: 1950, avatar: 'https://i.pravatar.cc/150?u=u3' },
      { rank: 4, name: 'Phạm Minh', department: 'HR Dept', points: 1820, avatar: 'https://i.pravatar.cc/150?u=u4' },
      { rank: 5, name: 'Hoàng Th.', department: 'Design Team', points: 1780, avatar: 'https://i.pravatar.cc/150?u=u5' },
    ],
    rewardsPreview: [
      { id: 'v1', title: 'Voucher 50k', pointsRequired: 500, type: 'Voucher' },
      { id: 'e1', title: 'Ebook: React Tips', pointsRequired: 1200, type: 'Ebook' },
    ]
  };
};
