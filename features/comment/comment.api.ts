
import { CommentItem, CommentStats } from '../../shared/types/comment';

const MOCK_COMMENTS: CommentItem[] = [
  {
    id: 'C-001',
    author: { name: 'Hoàng Minh', avatar: 'https://i.pravatar.cc/150?u=c1' },
    content: 'Giải thích phần này rất dễ hiểu, cảm ơn giảng viên nhiều ạ!',
    targetTitle: 'Bài 2: Cấu trúc HTML',
    targetType: 'Bài giảng',
    date: '25/10/2023 09:15',
    status: 'Đã duyệt',
    likes: 5
  },
  {
    id: 'C-002',
    author: { name: 'Thùy Chi', avatar: 'https://i.pravatar.cc/150?u=c2' },
    content: 'Cho mình hỏi ở phút 12:30, tại sao lại dùng flex-box thay vì grid ở đây nhỉ?',
    targetTitle: 'Bài 5: Flexbox nâng cao',
    targetType: 'Bài giảng',
    date: '25/10/2023 10:45',
    status: 'Chờ duyệt',
    likes: 0
  },
  {
    id: 'C-003',
    author: { name: 'User Spam', avatar: 'https://i.pravatar.cc/150?u=c3' },
    content: 'NHẬN QUÀ MIỄN PHÍ TẠI LINK NÀY NGAY !!!',
    targetTitle: 'ReactJS Nâng cao',
    targetType: 'Khóa học',
    date: '25/10/2023 11:20',
    status: 'Bị báo cáo',
    likes: 0
  },
  {
    id: 'C-004',
    author: { name: 'Anh Tuấn', avatar: 'https://i.pravatar.cc/150?u=c4' },
    content: 'Bài tập này hơi khó, có ai làm được câu 3 chưa giúp mình với.',
    targetTitle: 'Bài tập: JS Logic',
    targetType: 'Bài giảng',
    date: '24/10/2023 20:05',
    status: 'Đã duyệt',
    likes: 2
  }
];

export const fetchCommentStats = async (): Promise<CommentStats> => {
  return {
    totalComments: 5842,
    pendingComments: 28,
    reportedComments: 12
  };
};

export const fetchComments = async (): Promise<CommentItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_COMMENTS;
};
