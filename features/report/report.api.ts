
import { ReportItem, ReportStats } from '../../shared/types/report';

const MOCK_REPORTS: ReportItem[] = [
  {
    id: 'R-001',
    reporter: { name: 'Nguyễn Minh Anh', avatar: 'https://i.pravatar.cc/150?u=r1' },
    target: { id: 'U-123', title: 'SpamUser99', type: 'Người dùng', ownerName: 'User' },
    reason: 'Spam nội dung',
    description: 'Người dùng này liên tục đăng link quảng cáo trong các bài thảo luận khóa học React.',
    date: '24/10/2023 14:20',
    status: 'Chưa xử lý',
    severity: 'Cao'
  },
  {
    id: 'R-002',
    reporter: { name: 'Trần Hữu Lộc', avatar: 'https://i.pravatar.cc/150?u=r2' },
    target: { id: 'C-456', title: 'Bình luận #882', type: 'Bình luận', ownerName: 'Lê Văn Tám' },
    reason: 'Ngôn từ kích động',
    description: 'Bình luận có chứa những từ ngữ không phù hợp và xúc phạm giảng viên.',
    date: '24/10/2023 10:05',
    status: 'Đang xử lý',
    severity: 'Trung bình'
  },
  {
    id: 'R-003',
    reporter: { name: 'Lê Thị Hà', avatar: 'https://i.pravatar.cc/150?u=r3' },
    target: { id: 'RV-789', title: 'Đánh giá 1 sao', type: 'Đánh giá', ownerName: 'Học viên ẩn danh' },
    reason: 'Đánh giá ảo',
    description: 'Đánh giá không có nội dung thực tế, nghi ngờ là đối thủ cạnh tranh.',
    date: '23/10/2023 16:45',
    status: 'Đã giải quyết',
    severity: 'Thấp'
  },
  {
    id: 'R-004',
    reporter: { name: 'Hệ thống AI', avatar: 'https://i.pravatar.cc/150?u=bot' },
    target: { id: 'D-101', title: 'Thảo luận #221', type: 'Thảo luận', ownerName: 'UserX' },
    reason: 'Nội dung độc hại',
    description: 'Tự động phát hiện mã độc hoặc link lừa đảo trong nội dung thảo luận.',
    date: '24/10/2023 08:30',
    status: 'Chưa xử lý',
    severity: 'Nghiêm trọng'
  }
];

export const fetchReportStats = async (): Promise<ReportStats> => {
  return {
    totalReports: 1540,
    pendingReports: 42,
    resolvedToday: 18,
    criticalReports: 5
  };
};

export const fetchReports = async (): Promise<ReportItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_REPORTS;
};
