
import { LogEntry } from '../../shared/types/system-logs';

export const fetchLogs = async (): Promise<LogEntry[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
        {
            id: '1',
            timestamp: new Date().toISOString(),
            severity: 'INFO',
            author: 'System',
            action: 'Startup sequence completed',
            ip: '127.0.0.1',
            icon: '🚀'
        },
        {
            id: '2',
            timestamp: new Date(Date.now() - 5000).toISOString(),
            severity: 'WARNING',
            author: 'Admin',
            action: 'Invalid login attempt detected',
            ip: '192.168.1.1',
            icon: '🛡️'
        },
        {
            id: '3',
            timestamp: new Date(Date.now() - 10000).toISOString(),
            severity: 'ERROR',
            author: 'Database',
            action: 'Connection pool near capacity',
            ip: '10.0.0.5',
            icon: '💾'
        }
    ];
};
