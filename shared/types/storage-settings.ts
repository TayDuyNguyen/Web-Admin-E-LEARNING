
export interface StorageDistribution {
  name: string;
  value: number;
  color: string;
  percentage: number;
}

export interface StorageOverview {
  used: number;
  total: number;
  unit: string;
  distribution: StorageDistribution[];
}

export interface CDNSettings {
  url: string;
  isActive: boolean;
}

export interface FileSizeLimits {
  maxVideoMB: number;
  maxDocMB: number;
}

export interface BackupItem {
  id: string;
  name: string;
  size: string;
  date: string;
  status: 'Thành công' | 'Đang chờ';
}

export interface StorageSettings {
  overview: StorageOverview;
  cdn: CDNSettings;
  limits: FileSizeLimits;
  backups: BackupItem[];
}
