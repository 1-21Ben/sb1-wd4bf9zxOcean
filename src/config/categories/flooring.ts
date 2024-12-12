import { MainCategory } from '../../types/category';

export const flooringCategory: MainCategory = {
  id: 'flooring',
  name: 'REVÊTEMENTS DE SOLS & ACCESSOIRES',
  slug: 'revetements-sols-accessoires',
  description: 'Solutions complètes pour les sols',
  icon: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
  subcategories: [
    { id: 'coverings', name: 'Revêtements', slug: 'revetements', description: 'Revêtements de sol' },
    { id: 'profiles', name: 'Profilés', slug: 'profiles', description: 'Profilés de finition' },
    { id: 'underlays', name: 'Sous-couches', slug: 'sous-couches', description: 'Sous-couches techniques' },
  ]
};