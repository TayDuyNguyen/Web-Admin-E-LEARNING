
import { DiscussionItem } from '../../shared/types/discussion';

const MOCK_DISCUSSIONS: DiscussionItem[] = [
  {
    id: '1',
    title: 'Làm thế nào để optimize React useEffect trong bài tập...',
    contentSnippet: 'Mình đang gặp vấn đề về render...',
    author: {
      name: 'Nguyễn Văn A',
      avatar: 'https://i.pravatar.cc/150?u=a1',
      timeAgo: '2 giờ trước'
    },
    courseName: 'ReactJS Nâng cao',
    replyCount: 12,
    reportCount: 0,
    status: 'Đã duyệt'
  },
  {
    id: '2',
    title: 'Xin tài liệu tham khảo về Design System cho người mới...',
    contentSnippet: 'Em mới học UI/UX, mọi người có...',
    author: {
      name: 'Trần Thị B',
      avatar: 'https://i.pravatar.cc/150?u=b2',
      timeAgo: '15 phút trước'
    },
    courseName: 'Thiết kế UX/UI Cơ bản',
    replyCount: 0,
    reportCount: 0,
    status: 'Chờ duyệt'
  },
  {
    id: '3',
    title: '[Cảnh báo] Link tải phần mềm crack full không virus 100%',
    contentSnippet: 'Click vào đây để tải ngay phần mềm...',
    author: {
      name: 'Spam Bot 3000',
      avatar: 'https://i.pravatar.cc/150?u=spam',
      timeAgo: '1 giờ trước'
    },
    courseName: 'Tất cả khóa học',
    replyCount: 2,
    reportCount: 15,
    status: 'Vi phạm',
    reportReason: 'Spam / Quảng cáo'
  },
  {
    id: '4',
    title: 'Cần tìm nhóm làm đồ án cuối khóa Web Frontend',
    contentSnippet: 'Mình còn thiếu 1 slot làm frontend,...',
    author: {
      name: 'Lê Văn Cường',
      avatar: 'https://i.pravatar.cc/150?u=c3',
      timeAgo: '1 ngày trước'
    },
    courseName: 'Lập trình Web Frontend',
    replyCount: 5,
    reportCount: 0,
    status: 'Đã duyệt'
  }
];

export const fetchDiscussions = async (): Promise<DiscussionItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_DISCUSSIONS;
};
