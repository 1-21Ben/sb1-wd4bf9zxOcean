import { MainCategory } from '../../types/category';

export const floorsCategory: MainCategory = {
  id: 'floors',
  name: 'SOLS',
  slug: 'sols',
  description: 'Revêtements et peintures pour tous types de sols',
  icon: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190',
  subcategories: [
    { id: 'concrete', name: 'Béton', slug: 'beton', description: 'Peintures pour sols en béton' },
    { id: 'epoxy', name: 'Époxy', slug: 'epoxy', description: 'Revêtements époxy' },
    { id: 'marking', name: 'Marquage', slug: 'marquage', description: 'Peintures de marquage' },
  ]
};