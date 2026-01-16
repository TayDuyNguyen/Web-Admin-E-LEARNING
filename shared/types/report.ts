
export type ReportType = 'Người dùng' | 'Bình luận' | 'Đánh giá' | 'Khóa học' | 'Thảo luận';
export type ReportStatus = 'Chưa xử lý' | 'Đang xử lý' | 'Đã giải quyết' | 'Bị bác bỏ';
export type ReportSeverity = 'Thấp' | 'Trung bình' | 'Cao' | 'Nghiêm trọng';

export interface Reporter {
  name: string;
  avatar: string;
}

export interface ReportedItem {
  id: string;
  title: string;
  type: ReportType;
  ownerName: string;
}

export interface ReportItem {
  id: string;
  reporter: Reporter;
  target: ReportedItem;
  reason: string;
  description: string;
  date: string;
  status: ReportStatus;
  severity: ReportSeverity;
}

export interface ReportStats {
  totalReports: number;
  pendingReports: number;
  resolvedToday: number;
  criticalReports: number;
}
