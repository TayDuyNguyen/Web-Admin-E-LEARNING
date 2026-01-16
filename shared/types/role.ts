
export interface ModulePermission {
  module: string;
  description: string;
  icon: string;
  permissions: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
}

export interface Role {
  id: string;
  name: string;
  description: string;
  userCount: number;
  icon: string;
  avatars: string[];
  permissions: ModulePermission[];
}
