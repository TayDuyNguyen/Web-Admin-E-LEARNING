
import { QuestionBankItem } from '../../shared/types/question';

const MOCK_QUESTIONS: QuestionBankItem[] = [
  {
    id: '1',
    questionCode: 'Q-9821',
    content: 'Định nghĩa về tính đóng gói trong lập trình hướng đối tượng (OOP) là gì?',
    category: 'Lập trình OOP',
    type: 'Trắc nghiệm',
    difficulty: 'Trung bình',
    usageCount: 12,
    author: 'Admin',
    status: 'Sử dụng'
  },
  {
    id: '2',
    questionCode: 'Q-7723',
    content: 'Viết đoạn code ngắn minh họa vòng lặp For trong JavaScript.',
    category: 'JavaScript Basic',
    type: 'Tự luận',
    difficulty: 'Dễ',
    usageCount: 5,
    author: 'Giảng viên A',
    status: 'Sử dụng'
  },
  {
    id: '3',
    questionCode: 'Q-1102',
    content: 'ReactJS là một thư viện của ngôn ngữ lập trình Java.',
    category: 'ReactJS',
    type: 'Đúng / Sai',
    difficulty: 'Dễ',
    usageCount: 24,
    author: 'Admin',
    status: 'Sử dụng'
  },
  {
    id: '4',
    questionCode: 'Q-5561',
    content: 'Phân tích sự khác biệt giữa Flexbox và CSS Grid trong dàn trang web.',
    category: 'CSS / HTML',
    type: 'Tự luận',
    difficulty: 'Khó',
    usageCount: 3,
    author: 'Giảng viên B',
    status: 'Bản nháp'
  },
  {
    id: '5',
    questionCode: 'Q-0012',
    content: 'Lệnh SQL nào dùng để xóa toàn bộ dữ liệu trong bảng mà không xóa cấu trúc?',
    category: 'Database SQL',
    type: 'Điền từ',
    difficulty: 'Trung bình',
    usageCount: 8,
    author: 'Admin',
    status: 'Sử dụng'
  }
];

export const fetchQuestions = async (): Promise<QuestionBankItem[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_QUESTIONS;
};
