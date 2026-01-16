
export type QuizStatus = 'Đang hoạt động' | 'Bản nháp' | 'Đã đóng';

export interface QuizItem {
  id: string;
  title: string;
  courseName: string;
  questionCount: number;
  passingScore: number; // percentage
  timeLimit: number; // minutes
  completionRate: number; // percentage
  status: QuizStatus;
}
