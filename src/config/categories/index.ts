import { MainCategory } from '../../types/category';
import { interiorCategory } from './interior';
import { facadesCategory } from './facades';
import { eticsCategory } from './etics';
import { woodCategory } from './wood';
import { metalsCategory } from './metals';
import { floorsCategory } from './floors';
import { preparationCategory } from './preparation';
import { toolsCategory } from './tools';
import { safetyCategory } from './safety';
import { flooringCategory } from './flooring';

export const PRODUCT_CATEGORIES: MainCategory[] = [
  interiorCategory,
  facadesCategory,
  eticsCategory,
  woodCategory,
  metalsCategory,
  floorsCategory,
  preparationCategory,
  toolsCategory,
  safetyCategory,
  flooringCategory,
];

export function getCategoryBySlug(slug: string): MainCategory | undefined {
  return PRODUCT_CATEGORIES.find(category => category.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): SubCategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(sub => sub.slug === subcategorySlug);
}

export function getAllCategories(): MainCategory[] {
  return PRODUCT_CATEGORIES;
}

export function getAllSubcategories(): SubCategory[] {
  return PRODUCT_CATEGORIES.flatMap(category => category.subcategories);
}

export * from './interior';
export * from './facades';
export * from './etics';
export * from './wood';
export * from './metals';
export * from './floors';
export * from './preparation';
export * from './tools';
export * from './safety';
export * from './flooring';