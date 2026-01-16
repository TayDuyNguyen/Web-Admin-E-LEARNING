
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  courseCount: number;
  description?: string;
  parentId: string | null;
  status: 'Active' | 'Inactive';
  isNew?: boolean;
}

export interface CategoryTreeItem extends Category {
  children?: CategoryTreeItem[];
}
