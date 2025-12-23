import categoriesData from '@/data/categories.json';
import { Category } from '@/types/category';

export function getAllCategories(): Category[] {
  return categoriesData.categories as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return (categoriesData.categories as Category[]).find(c => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return (categoriesData.categories as Category[]).find(c => c.id === id);
}
