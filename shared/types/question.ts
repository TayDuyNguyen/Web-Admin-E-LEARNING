
export type QuestionType = 'Trắc nghiệm' | 'Tự luận' | 'Đúng / Sai' | 'Điền từ';
export type QuestionDifficulty = 'Dễ' | 'Trung bình' | 'Khó';
export type QuestionStatus = 'Sử dụng' | 'Bản nháp';

export interface QuestionBankItem {
  id: string;
  questionCode: string;
  content: string;
  category: string;
  type: QuestionType;
  difficulty: QuestionDifficulty;
  usageCount: number;
  author: string;
  status: QuestionStatus;
}
