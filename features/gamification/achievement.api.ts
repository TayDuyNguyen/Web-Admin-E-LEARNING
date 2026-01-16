
import { AchievementItem, GamificationStats } from '../../shared/types/achievement';

export const fetchGamificationStats = async (): Promise<GamificationStats> => {
  return {
    totalAchievements: 24,
    growth: 3,
    topStudent: {
      name: 'Nguyễn Văn A',
      badgesCount: 18,
      avatar: 'https://i.pravatar.cc/150?u=a1'
    },
    participationRate: 85.4
  };
};

export const fetchAchievements = async (): Promise<AchievementItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return [
    {
      id: '1',
      title: 'Vận động viên chuyên cần',
      description: 'Đăng nhập vào hệ thống liên tục trong 7 ngày không gián đoạn.',
      icon: '🏃',
      color: 'blue',
      earnerCount: 1245,
      category: 'Chuyên cần'
    },
    {
      id: '2',
      title: 'Chuyên gia khóa học',
      description: 'Hoàn thành xuất sắc 5 khóa học nâng cao với điểm số tối đa.',
      icon: '🎓',
      color: 'purple',
      earnerCount: 86,
      category: 'Học tập'
    },
    {
      id: '3',
      title: 'Người đóng góp tích cực',
      description: 'Tham gia 50 cuộc thảo luận và được bình chọn câu trả lời hay nhất.',
      icon: '💬',
      color: 'amber',
      earnerCount: 312,
      category: 'Cộng đồng'
    },
    {
      id: '4',
      title: 'Kẻ hủy diệt bài tập',
      description: 'Hoàn thành 100 bài tập thực hành trong vòng 1 tháng.',
      icon: '✅',
      color: 'emerald',
      earnerCount: 520,
      category: 'Học tập'
    },
    {
      id: '5',
      title: 'Thợ săn điểm số',
      description: 'Đạt điểm tuyệt đối trong 3 bài kiểm tra cuối khóa liên tiếp.',
      icon: '🎯',
      color: 'rose',
      earnerCount: 128,
      category: 'Thử thách'
    }
  ];
};
