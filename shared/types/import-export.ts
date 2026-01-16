
export type TaskType = 'Nhập dữ liệu' | 'Xuất dữ liệu';
export type TaskStatus = 'Hoàn thành' | 'Đang xử lý' | 'Thất bại';

export interface DataTask {
  id: string;
  name: string;
  fileName: string;
  type: TaskType;
  time: string;
  status: TaskStatus;
  hasLogs: boolean;
}

export interface ExportOption {
  id: string;
  label: string;
  icon: string;
}
