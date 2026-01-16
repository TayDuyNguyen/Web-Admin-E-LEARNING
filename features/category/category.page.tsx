
import React, { useEffect, useState } from 'react';
import { fetchCategories, buildCategoryTree } from './category.api';
import { Category, CategoryTreeItem } from '../../shared/types/category';
import { CategoryTreeList, CategoryForm } from './category.ui';
import { Card } from '../../shared/ui/Card';

export const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tree, setTree] = useState<CategoryTreeItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setTree(buildCategoryTree(data));
        // Select first one by default if needed, or leave null
        setSelectedCategory(data.find(c => c.id === '4') || null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-slate-500 font-medium">Đang tải danh mục...</p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 pb-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-4">
        <span className="cursor-pointer hover:text-slate-300 transition-colors">Khóa học</span>
        <span className="text-slate-700">/</span>
        <span className="text-blue-500">Danh mục</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-4xl font-black text-slate-100 leading-tight tracking-tight">Danh mục khóa học</h2>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          <span className="text-lg">⊕</span> Thêm danh mục mới
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Category Tree Section */}
        <div className="lg:col-span-7">
          <Card 
            title="Cấu trúc danh mục" 
            className="border-slate-800 bg-[#1e293b]/20"
            extra={
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:text-slate-200">⇅</button>
                <button className="p-2 text-slate-500 hover:text-slate-200">⤫</button>
              </div>
            }
          >
            <CategoryTreeList 
              items={tree} 
              selectedId={selectedCategory?.id || null} 
              onSelect={setSelectedCategory} 
            />
          </Card>
        </div>

        {/* Edit Form Section */}
        <div className="lg:col-span-5">
          <CategoryForm selected={selectedCategory} />
        </div>
      </div>
    </div>
  );
};
