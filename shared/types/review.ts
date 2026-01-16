
export type ReviewStatus = 'Đã đăng' | 'Chờ duyệt' | 'Bị báo cáo';

export interface ReviewAuthor {
  name: string;
  avatar: string;
}

export interface ReviewItem {
  id: string;
  author: ReviewAuthor;
  courseName: string;
  rating: number;
  content: string;
  date: string;
  status: ReviewStatus;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  pendingCount: number;
}
