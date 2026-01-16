
export type DiscussionStatus = 'Đã duyệt' | 'Chờ duyệt' | 'Vi phạm';

export interface DiscussionAuthor {
  name: string;
  avatar: string;
  timeAgo: string;
}

export interface DiscussionItem {
  id: string;
  title: string;
  contentSnippet: string;
  author: DiscussionAuthor;
  courseName: string;
  replyCount: number;
  reportCount: number;
  status: DiscussionStatus;
  reportReason?: string;
}
