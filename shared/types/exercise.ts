
export type ExerciseType = 'Trắc nghiệm' | 'Tự luận' | 'Đúng / Sai' | 'Điền từ';
export type DifficultyLevel = 'Dễ' | 'Trung bình' | 'Khó';
export type ExerciseStatus = 'Công khai' | 'Nháp';

export interface ExerciseItem {
  id: string;
  question: string;
  lessonName: string;
  type: ExerciseType;
  difficulty: DifficultyLevel;
  points: number;
  status: ExerciseStatus;
}
