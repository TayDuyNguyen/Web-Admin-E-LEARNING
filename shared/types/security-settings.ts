
export interface LoginSecurity {
  minPasswordLength: number;
  requireSpecialChar: boolean;
  enable2FA: boolean;
}

export interface ContentSecurity {
  preventCopy: boolean;
  concurrentLogins: number;
}

export interface AccessLog {
  id: string;
  action: string;
  user: string;
  ip: string;
  time: string;
  status: 'success' | 'warning' | 'error';
}

export interface APIKey {
  id: string;
  name: string;
  key: string;
}

export interface BackupConfig {
  schedule: string;
  storage: string;
}

export interface SecuritySettings {
  login: LoginSecurity;
  content: ContentSecurity;
  logs: AccessLog[];
  apiKeys: APIKey[];
  backup: BackupConfig;
}
