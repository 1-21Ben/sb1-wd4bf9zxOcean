import { MainCategory } from '../../types/category';

export const facadesCategory: MainCategory = {
  id: 'facades',
  name: 'FAÇADES',
  slug: 'facades',
  description: 'Solutions durables pour la protection et décoration des façades',
  icon: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343',
  subcategories: [
    {
      id: 'surface-prep',
      name: 'Préparation des supports',
      slug: 'preparation-supports',
      description: 'Produits de préparation des surfaces'
    },
    {
      id: 'impressions',
      name: 'Impressions',
      slug: 'impressions',
      description: 'Peintures d\'impression pour façades'
    },
    {
      id: 'd1-waterproof',
      name: 'D1 - Hydrofuges',
      slug: 'd1-hydrofuges',
      description: 'Hydrofuges de surface'
    },
    {
      id: 'd1-concrete',
      name: 'D1 - Protection et décoration pour béton',
      slug: 'd1-protection-beton',
      description: 'Solutions spécifiques pour béton'
    },
    {
      id: 'd2-films',
      name: 'D2 - Films minces',
      slug: 'd2-films-minces',
      description: 'Revêtements en films minces'
    },
    {
      id: 'd3-semi',
      name: 'D3 - Revêtements Semi-Epais',
      slug: 'd3-semi-epais',
      description: 'Revêtements semi-épais'
    },
    {
      id: 'd3-thick',
      name: 'D3 - Revêtements de peinture Epais',
      slug: 'd3-epais',
      description: 'Revêtements épais'
    },
    {
      id: 'i1-i4',
      name: 'I1 à I4 - Imperméabilité',
      slug: 'impermeabilite',
      description: 'Systèmes d\'imperméabilité'
    },
    {
      id: 'specialties',
      name: 'Spécialités',
      slug: 'specialites',
      description: 'Solutions spécifiques'
    }
  ]
};