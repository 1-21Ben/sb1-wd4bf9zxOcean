import { MainCategory } from '../../types/category';

export const metalsCategory: MainCategory = {
  id: 'metals',
  name: 'MÉTAUX',
  slug: 'metaux',
  description: 'Solutions anticorrosion et décoratives pour métaux',
  icon: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a',
  subcategories: [
    { id: 'primers', name: 'Primaires', slug: 'primaires', description: 'Primaires anticorrosion' },
    { id: 'finishes', name: 'Finitions', slug: 'finitions-metal', description: 'Peintures de finition' },
    { id: 'special', name: 'Spécialités', slug: 'specialites', description: 'Traitements spéciaux' },
  ]
};