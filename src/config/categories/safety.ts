import { MainCategory } from '../../types/category';

export const safetyCategory: MainCategory = {
  id: 'safety',
  name: 'PROTECTION INDIVIDUELLE ET SÉCURITÉ',
  slug: 'protection-securite',
  description: 'Équipements de protection individuelle',
  icon: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
  subcategories: [
    { id: 'clothing', name: 'Vêtements', slug: 'vetements', description: 'Vêtements de protection' },
    { id: 'masks', name: 'Masques', slug: 'masques', description: 'Protection respiratoire' },
    { id: 'equipment', name: 'Équipements', slug: 'equipements', description: 'Équipements de sécurité' },
  ]
};