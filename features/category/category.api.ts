
import { Category, CategoryTreeItem } from '../../shared/types/category';

const MOCK_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Lập trình (Development)',
    slug: 'lap-trinh',
    icon: '💻',
    color: '#3b82f6',
    courseCount: 38,
    parentId: null,
    status: 'Active'
  },
  {
    id: '2',
    name: 'Lập trình Web',
    slug: 'lap-trinh-web',
    icon: '🌐',
    color: '#3b82f6',
    courseCount: 24,
    parentId: '1',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Mobile Apps',
    slug: 'mobile-apps',
    icon: '📱',
    color: '#3b82f6',
    courseCount: 14,
    parentId: '1',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Thiết kế (Design)',
    slug: 'thiet-ke-design',
    icon: '🎨',
    color: '#ec4899',
    courseCount: 12,
    parentId: null,
    status: 'Active',
    isNew: true
  },
  {
    id: '5',
    name: 'UX/UI Design',
    slug: 'ux-ui-design',
    icon: '✒️',
    color: '#ec4899',
    courseCount: 8,
    parentId: '4',
    status: 'Active'
  },
  {
    id: '6',
    name: 'Graphic Design',
    slug: 'graphic-design',
    icon: '📷',
    color: '#ec4899',
    courseCount: 4,
    parentId: '4',
    status: 'Active'
  },
  {
    id: '7',
    name: 'Tiếp thị (Marketing)',
    slug: 'tiep-thi-marketing',
    icon: '📢',
    color: '#f59e0b',
    courseCount: 5,
    parentId: null,
    status: 'Active'
  }
];

export const fetchCategories = async (): Promise<Category[]> => {
  await new Promise(r => setTimeout(r, 600));
  return MOCK_CATEGORIES;
};

export const buildCategoryTree = (categories: Category[]): CategoryTreeItem[] => {
  const map = new Map<string, CategoryTreeItem>();
  const roots: CategoryTreeItem[] = [];

  categories.forEach(cat => {
    map.set(cat.id, { ...cat, children: [] });
  });

  categories.forEach(cat => {
    const item = map.get(cat.id)!;
    if (cat.parentId && map.has(cat.parentId)) {
      map.get(cat.parentId)!.children!.push(item);
    } else {
      roots.push(item);
    }
  });

  return roots;
};
