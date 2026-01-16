
import React, { useEffect, useState } from 'react';
import { fetchRoles } from './role.api';
import { Role } from '../../shared/types/role';
import { RoleCardList, PermissionMatrix } from './role.ui';

export const RolesPermissionsPage: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRoleId, setSelectedRoleId] = useState<string>('admin');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchRoles();
        setRoles(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const selectedRole = roles.find(r => r.id === selectedRoleId);

  if (loading) return (
    <div className="h-full flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Vai trò & Quyền hạn</h2>
          <p className="text-slate-500 text-sm mt-1">Quản lý phân quyền truy cập và chức năng trong hệ thống</p>
        </div>
        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
          <span>⊕</span> Tạo vai trò mới
        </button>
      </div>

      <RoleCardList 
        roles={roles} 
        selectedRoleId={selectedRoleId} 
        onSelect={setSelectedRoleId} 
      />

      {selectedRole && (
        <PermissionMatrix 
          permissions={selectedRole.permissions} 
          roleName={selectedRole.name} 
        />
      )}
    </div>
  );
};
