import { MainCategory } from '../../types/category';

export const interiorCategory: MainCategory = {
  id: 'interior-paints',
  name: 'PEINTURES INTÉRIEURES',
  slug: 'peintures-interieures',
  description: 'Gamme complète de peintures pour tous vos projets intérieurs',
  icon: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
  subcategories: [
    {
      id: 'impressions',
      name: 'Impressions',
      slug: 'impressions',
      description: 'Peintures d\'impression pour murs intérieurs'
    },
    {
      id: 'mat-paints',
      name: 'Peintures mates',
      slug: 'peintures-mates',
      description: 'Peintures avec finition mate'
    },
    {
      id: 'velvet-paints',
      name: 'Peintures veloutées',
      slug: 'peintures-veloutees',
      description: 'Peintures avec finition veloutée'
    },
    {
      id: 'satin-paints',
      name: 'Peintures satinées',
      slug: 'peintures-satinees',
      description: 'Peintures avec finition satinée'
    },
    {
      id: 'mat-lacquers',
      name: 'Peintures laques mates',
      slug: 'peintures-laques-mates',
      description: 'Laques avec finition mate'
    },
    {
      id: 'satin-lacquers',
      name: 'Peintures laques satinées',
      slug: 'peintures-laques-satinees',
      description: 'Laques avec finition satinée'
    },
    {
      id: 'gloss-lacquers',
      name: 'Peintures laques brillantes',
      slug: 'peintures-laques-brillantes',
      description: 'Laques avec finition brillante'
    }
  ]
};