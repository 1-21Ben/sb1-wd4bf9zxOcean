import React from 'react';
import { BannerCarousel } from '../components/home/BannerCarousel';
import { ProductCarousel } from '../components/home/ProductCarousel';
import { CategoryWidget } from '../components/home/CategoryWidget';
import { SocialFeed } from '../components/home/SocialFeed';
import { useThemeStore } from '../stores/themeStore';
import logo from 'src/pages/SGlogo.png';

export function Home() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <BannerCarousel />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-16">
        <section>
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Nos Catégories Principales
            </h2>
            <p className={`mt-2 text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Découvrez notre gamme complète de solutions
            </p>
          </div>
          <CategoryWidget />
        </section>

        <section>
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Produits Vedettes
            </h2>
            <p className={`mt-2 text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Sélection de nos meilleurs produits
            </p>
          </div>
          <ProductCarousel />
        </section>

        <section className="pb-16">
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Suivez-nous sur les réseaux
            </h2>
            <p className={`mt-2 text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Restez connecté avec Seigneurie Océan
            </p>
          </div>
          <SocialFeed />
        </section>
      </div>
    </div>
  );
}
