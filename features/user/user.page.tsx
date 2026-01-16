
import React, { useEffect, useState } from 'react';
import { fetchUsers } from './user.api';
import { UserFiltersBar, UserTable } from './user.ui';
import { User } from '../../shared/types/user';

export const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-medium">Đang tải danh sách người dùng...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Quản lý người dùng</h2>
          <p className="text-slate-500 text-sm mt-1">Quản lý danh sách học viên, giảng viên và quản trị viên.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
          <span className="text-blue-400 text-lg">👥</span>
          <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Tổng: 24,592</span>
        </div>
      </div>

      <UserFiltersBar />
      <UserTable users={users} />
    </div>
  );
};
