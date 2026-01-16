
import { NotificationData } from '../../shared/types/notification';

export const fetchNotificationData = async (): Promise<NotificationData> => {
  await new Promise(r => setTimeout(r, 650));

  return {
    stats: [
      {
        label: 'Tổng đã gửi',
        value: '12,450',
        trend: 12.5,
        trendLabel: 'tuần này',
        icon: '📢',
        color: 'blue'
      },
      {
        label: 'Tỷ lệ nhận',
        value: '98.5%',
        trendLabel: 'Ổn định',
        icon: '✅',
        color: 'emerald'
      },
      {
        label: 'Tỷ lệ mở',
        value: '42.8%',
        trend: 3.2,
        trendLabel: 'so với T10',
        icon: '📩',
        color: 'purple'
      }
    ],
    history: [
      {
        id: '1',
        title: 'Bảo trì hệ thống định kỳ',
        summary: 'Hệ thống sẽ tạm dừng để nâng cấp...',
        target: 'Toàn hệ thống',
        targetIcon: '🌐',
        time: '10:30',
        date: '24/11',
        status: 'Đã gửi',
        openRate: 65,
        type: 'Bảo trì'
      },
      {
        id: '2',
        title: 'Ra mắt khóa học: React...',
        summary: 'Khám phá các kỹ thuật nâng cao...',
        target: 'Học viên Frontend',
        targetIcon: '👥',
        time: '09:15',
        date: '23/11',
        status: 'Đã đọc',
        openRate: 82,
        type: 'Khóa học'
      },
      {
        id: '3',
        title: 'Nhắc nhở: Deadline bài tập...',
        summary: 'Các bạn nhớ nộp bài trước 23:59 tối...',
        target: 'Lớp Java Spring 01',
        targetIcon: '🎓',
        time: '14:00',
        date: '20/11/2023',
        status: 'Đã gửi',
        openRate: 95,
        type: 'Học tập'
      },
      {
        id: '4',
        title: 'Khuyến mãi Black Friday',
        summary: 'Giảm giá 50% toàn bộ khóa học...',
        target: 'Người dùng tiềm năng',
        targetIcon: '👤+',
        time: '08:00',
        date: '15/11/2023',
        status: 'Đã đọc',
        openRate: 35,
        type: 'Khuyến mãi'
      }
    ]
  };
};
