import { MainCategory } from '../../types/category';

export const preparationCategory: MainCategory = {
  id: 'preparation',
  name: 'PRODUITS DE MISE EN ŒUVRE',
  slug: 'produits-mise-en-oeuvre',
  description: 'Produits pour la préparation et l\'application',
  icon: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
  subcategories: [
    { id: 'primers', name: 'Primaires', slug: 'primaires-preparation', description: 'Primaires d\'accrochage' },
    { id: 'fillers', name: 'Enduits', slug: 'enduits', description: 'Enduits de préparation' },
    { id: 'cleaners', name: 'Nettoyants', slug: 'nettoyants', description: 'Produits de nettoyage' },
  ]
};