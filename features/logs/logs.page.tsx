
import React, { useEffect, useState } from 'react';
import { fetchLogs } from './logs.api';
import { LogsHeader, LogsList } from './logs.ui';
import { LogEntry } from '../../shared/types/system-logs';

export const SystemLogsPage: React.FC = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchLogs();
                setLogs(data);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) return (
        <div className="h-full flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-[6px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang nạp nhật ký...</p>
        </div>
    );

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <LogsHeader />
            <LogsList logs={logs} />
        </div>
    );
};

export default SystemLogsPage;
