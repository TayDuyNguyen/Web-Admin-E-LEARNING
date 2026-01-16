
export type LogSeverity = 'ERROR' | 'INFO' | 'WARNING' | 'DEBUG';

export interface LogEntry {
  id: string;
  timestamp: string;
  severity: LogSeverity;
  author: string;
  action: string;
  ip: string;
  icon?: string;
}

export interface LogFilters {
  type: string;
  severity: string;
  date: string;
  search: string;
}
