
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserRole, UserStatus } from '../../shared/types/user';

export const UserFiltersBar: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center gap-4 mb-6">
      <div className="relative flex-1 min-w-[200px]">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Tìm kiếm học viên..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="relative min-w-[160px]">
        <select className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 transition-colors cursor-pointer">
          <option>Tất cả vai trò</option>
          <option>Admin</option>
          <option>Instructor</option>
          <option>Student</option>
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">▼</span>
      </div>
      <div className="relative min-w-[160px]">
        <select className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-sm text-slate-300 appearance-none focus:outline-none focus:border-blue-500 transition-colors cursor-pointer">
          <option>Tất cả trạng thái</option>
          <option>Hoạt động</option>
          <option>Bị chặn</option>
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">▼</span>
      </div>
      <input
        type="date"
        className="bg-slate-900 border border-slate-700 rounded-xl py-2.5 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
      />
      <div className="flex items-center gap-3 ml-auto">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm font-bold text-slate-200 transition-all">
          📥 Xuất CSV
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-blue-500/20">
          👤+ Thêm người dùng mới
        </button>
      </div>
    </div>
  );
};

export const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const navigate = useNavigate();

  const getRoleBadge = (role: UserRole) => {
    switch (role) {
      case 'Admin': return 'bg-slate-700/50 text-slate-300 border-slate-600/50';
      case 'Instructor': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
  };

  const getStatusBadge = (status: UserStatus) => {
    return status === 'Hoạt động' 
      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
      : 'bg-rose-500/10 text-rose-400 border-rose-500/20';
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800/30 text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-4 px-6 w-4">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="py-4 px-6">Avatar & Tên</th>
              <th className="py-4 px-6">Email</th>
              <th className="py-4 px-6">Vai trò</th>
              <th className="py-4 px-6">Trạng thái</th>
              <th className="py-4 px-6">Ngày tham gia</th>
              <th className="py-4 px-6 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {users.map((user) => (
              <tr 
                key={user.id} 
                className="group hover:bg-slate-800/30 transition-colors cursor-pointer"
                onClick={() => navigate(`/admin/users/${user.id}`)}
              >
                <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <img src={user.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-slate-800 group-hover:border-blue-500/50 transition-colors" alt="" />
                    <div>
                      <p className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{user.name}</p>
                      <p className="text-[10px] text-slate-500">{user.handle}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-slate-400 font-medium">{user.email}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getRoleBadge(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusBadge(user.status)}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Hoạt động' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                    {user.status}
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-slate-400">{user.joinDate}</td>
                <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => navigate(`/admin/users/${user.id}`)}
                    className="p-2 text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all"
                  >
                    ✏️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer */}
      <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">
          Hiển thị <span className="text-slate-200">1</span> đến <span className="text-slate-200">50</span> trong tổng số <span className="text-slate-200 font-bold">24,592</span> người dùng
        </p>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 transition-colors">
            ‹
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-500/20 transition-all">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 border border-transparent hover:border-slate-700 hover:bg-slate-700 transition-colors text-xs font-bold">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 border border-transparent hover:border-slate-700 hover:bg-slate-700 transition-colors text-xs font-bold">
            3
          </button>
          <span className="text-slate-600 px-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 border border-transparent hover:border-slate-700 hover:bg-slate-700 transition-colors text-xs font-bold">
            492
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 transition-colors">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
