
export type ActionKey = 'view' | 'create' | 'edit' | 'delete' | 'export';

export interface ModulePermission {
  moduleId: string;
  moduleName: string;
  category: string;
  actions: {
    [key in ActionKey]: boolean;
  };
}

export interface Role {
  id: string;
  name: string;
  description: string;
  userCount: number;
  icon: string;
  color: string;
  isSystem: boolean;
}

export interface PermissionSettingsData {
  roles: Role[];
  permissions: ModulePermission[];
}
