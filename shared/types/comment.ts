
export type CommentStatus = 'Đã duyệt' | 'Chờ duyệt' | 'Bị báo cáo';

export interface CommentAuthor {
  name: string;
  avatar: string;
}

export interface CommentItem {
  id: string;
  author: CommentAuthor;
  content: string;
  targetTitle: string; // Title of the lesson or course
  targetType: 'Bài giảng' | 'Khóa học';
  date: string;
  status: CommentStatus;
  likes: number;
}

export interface CommentStats {
  totalComments: number;
  pendingComments: number;
  reportedComments: number;
}
