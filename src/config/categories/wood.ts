import { MainCategory } from '../../types/category';

export const woodCategory: MainCategory = {
  id: 'wood',
  name: 'BOIS',
  slug: 'bois',
  description: 'Protection et décoration des surfaces en bois',
  icon: 'https://images.unsplash.com/photo-1533327325824-76bc4e62d560',
  subcategories: [
    {
      id: 'prep-maintenance',
      name: 'Produit de préparation et d\'entretien des bois',
      slug: 'preparation-entretien',
      description: 'Produits pour préparer et entretenir le bois'
    },
    {
      id: 'decoration',
      name: 'Produit de décoration des bois',
      slug: 'decoration',
      description: 'Produits décoratifs pour bois'
    },
    {
      id: 'impressions',
      name: 'Impressions',
      slug: 'impressions',
      description: 'Impressions pour bois'
    },
    {
      id: 'microporous',
      name: 'Peintures microporeuses',
      slug: 'peintures-microporeuses',
      description: 'Peintures microporeuses pour bois'
    },
    {
      id: 'opaque-stains',
      name: 'Lasures opaques',
      slug: 'lasures-opaques',
      description: 'Lasures couvrantes'
    },
    {
      id: 'transparent-stains',
      name: 'Lasures transparentes et saturateurs',
      slug: 'lasures-transparentes',
      description: 'Lasures transparentes et saturateurs'
    },
    {
      id: 'varnishes',
      name: 'Vernis',
      slug: 'vernis',
      description: 'Vernis pour bois'
    },
    {
      id: 'vitrifiers',
      name: 'Vitrificateurs',
      slug: 'vitrificateurs',
      description: 'Vitrificateurs pour bois'
    }
  ]
};