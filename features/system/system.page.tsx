
import React, { useEffect, useState } from 'react';
import { 
  fetchSystemStats, 
  fetchResourceUsage, 
  fetchSystemLogs, 
  fetchServicesHealth, 
  fetchEnvironmentInfo 
} from './system.api';
import { 
  StatusCards, 
  ResourceCharts, 
  QuickActions, 
  LogsTable, 
  ServiceMonitorGrid, 
  EnvironmentDetailCard 
} from './system.ui';
import { SystemStat, ResourcePoint, SystemLog, ServiceHealth, EnvironmentInfo } from '../../shared/types/system';

export const SystemStatusPage: React.FC = () => {
  const [stats, setStats] = useState<SystemStat[]>([]);
  const [resources, setResources] = useState<ResourcePoint[]>([]);
  const [logs, setLogs] = useState<SystemLog[]>([]);
  const [services, setServices] = useState<ServiceHealth[]>([]);
  const [env, setEnv] = useState<EnvironmentInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const loadAll = async () => {
    try {
      const [s, r, l, sv, e] = await Promise.all([
        fetchSystemStats(),
        fetchResourceUsage(),
        fetchSystemLogs(),
        fetchServicesHealth(),
        fetchEnvironmentInfo()
      ]);
      setStats(s);
      setResources(r);
      setLogs(l);
      setServices(sv);
      setEnv(e);
    } catch (err) {
      console.error("Failed to sync system status", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
    const interval = setInterval(loadAll, 5000); // 5s live polling
    return () => clearInterval(interval);
  }, []);

  if (loading && !env) return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-600/10 border-t-blue-600 rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-blue-500">SYNC</div>
      </div>
      <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">Đang kết nối trung tâm điều hành...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8 pb-20">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black text-slate-100 leading-tight tracking-tighter">Trạng thái hệ thống</h2>
          <p className="text-slate-500 text-sm mt-1 font-medium italic">Giám sát tài nguyên và sức khỏe hạ tầng thời gian thực.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Hạ tầng ổn định</span>
          </div>
          <button 
            onClick={loadAll}
            className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all text-slate-300 active:scale-95 shadow-xl"
          >
            🔄
          </button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <StatusCards stats={stats} />

      {/* Resources & Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
           <ResourceCharts data={resources} />
           <ServiceMonitorGrid services={services} />
        </div>

        <div className="lg:col-span-4 space-y-8">
           {env && <EnvironmentDetailCard info={env} />}
           <QuickActions />
           <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-3xl relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 text-6xl opacity-5 grayscale">🛡️</div>
              <h5 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Bảo mật hệ thống</h5>
              <p className="text-xs text-slate-500 leading-relaxed font-medium italic">
                Tường lửa lớp 7 (WAF) đang hoạt động. Đã chặn <span className="text-blue-400 font-bold">124</span> yêu cầu nghi vấn trong 24h qua.
              </p>
           </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300">
        <LogsTable logs={logs} />
      </div>
    </div>
  );
};
