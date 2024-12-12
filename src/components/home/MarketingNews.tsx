import React from 'react';
import { Calendar, Award, TrendingUp } from 'lucide-react';
import { useThemeStore } from '../../stores/themeStore';

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Nouvelle gamme Ocean Guard Pro',
    description: 'Découvrez notre nouvelle gamme de peintures marines professionnelles.',
    date: '2024-02-15',
    type: 'product',
    icon: Award,
  },
  {
    id: 2,
    title: 'Salon Maritime 2024',
    description: 'Retrouvez-nous au Salon Maritime de La Réunion du 1er au 3 mars.',
    date: '2024-03-01',
    type: 'event',
    icon: Calendar,
  },
  {
    id: 3,
    title: 'Certification ISO 14001',
    description: 'GPP Ocean obtient la certification environnementale ISO 14001.',
    date: '2024-02-10',
    type: 'news',
    icon: TrendingUp,
  },
];

export function MarketingNews() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {NEWS_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={`rounded-lg p-6 transition-transform hover:scale-105 ${
              isDarkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-900'
            } shadow-lg`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Icon className="h-6 w-6 text-sky-500" />
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className={`text-sm mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {item.description}
            </p>
            <time className={`text-xs ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {new Date(item.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        );
      })}
    </div>
  );
}