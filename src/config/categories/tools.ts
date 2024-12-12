import { MainCategory } from '../../types/category';

export const toolsCategory: MainCategory = {
  id: 'tools',
  name: 'OUTILLAGE ET MATÉRIEL',
  slug: 'outillage-materiel',
  description: 'Outils professionnels pour l\'application',
  icon: 'https://images.unsplash.com/photo-1581092160607-7bodq5qCPH',
  subcategories: [
    { id: 'brushes', name: 'Brosses & Rouleaux', slug: 'brosses-rouleaux', description: 'Outils d\'application' },
    { id: 'sprayers', name: 'Pulvérisateurs', slug: 'pulverisateurs', description: 'Équipement de pulvérisation' },
    { id: 'accessories', name: 'Accessoires', slug: 'accessoires', description: 'Accessoires divers' },
  ]
};