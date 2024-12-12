import { MainCategory } from '../../types/category';

export const eticsCategory: MainCategory = {
  id: 'etics',
  name: 'I.T.E.',
  slug: 'isolation-thermique-exterieure',
  description: 'Systèmes complets d\'isolation thermique par l\'extérieur',
  icon: 'https://images.unsplash.com/photo-1621189406926-9de4a703f41c',
  subcategories: [
    {
      id: 'systems-guide',
      name: 'Guide de choix des systèmes ITE',
      slug: 'guide-systemes',
      description: 'Guide pour le choix des systèmes ITE'
    },
    {
      id: 'systems',
      name: 'Les systèmes et leurs sous-systèmes',
      slug: 'systemes',
      description: 'Systèmes ITE complets'
    },
    {
      id: 'products',
      name: 'Gamme produits ITE',
      slug: 'produits',
      description: 'Produits pour systèmes ITE'
    }
  ]
};