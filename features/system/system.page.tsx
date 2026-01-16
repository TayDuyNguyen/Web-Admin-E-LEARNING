
import React, { useEffect, useState } from 'react';
import { fetchSystemStats, fetchResourceUsage, fetchSystemLogs } from './system.api';
import { StatusCards, ResourceCharts, QuickActions, LogsTable } from './system.ui';
import { SystemStat, ResourcePoint, SystemLog } from '../../shared/types/system';

export const SystemStatusPage: React.FC = () => {
  const [stats, setStats] = useState<SystemStat[]>([]);
  const [resources, setResources] = useState<ResourcePoint[]>([]);
  const [logs, setLogs] = useState<SystemLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [s, r, l] = await Promise.all([
          fetchSystemStats(),
          fetchResourceUsage(),
          fetchSystemLogs()
        ]);
        setStats(s);
        setResources(r);
        setLogs(l);
      } finally {
        setLoading(false);
      }
    };
    load();
    const interval = setInterval(load, 5000); // Live update simulation
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="h-full flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Search & Profile area managed by Header */}
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Trạng thái hệ thống</h2>
          <p className="text-slate-500 text-sm mt-1">Giám sát hiệu suất và tình trạng server thời gian thực.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Hệ thống ổn định</span>
          </div>
          <button className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors text-slate-400">
            🔄
          </button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <StatusCards stats={stats} />

      {/* Resources & Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ResourceCharts data={resources} />
        <QuickActions />
      </div>

      {/* Logs Table */}
      <LogsTable logs={logs} />
    </div>
  );
};
