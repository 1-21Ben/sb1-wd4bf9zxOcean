import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../../stores/themeStore';
import { PRODUCT_CATEGORIES } from '../../config/categories';

export function CategoryWidget() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PRODUCT_CATEGORIES.map((category) => (
        <Link
          key={category.id}
          to={`/products/${category.slug}`}
          className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-deep-800' : 'bg-white'
          }`}
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src={category.icon}
              alt={category.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {category.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub.id}
                      className="inline-block px-2 py-1 text-xs text-white/80 bg-white/10 rounded-full"
                    >
                      {sub.name}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="inline-block px-2 py-1 text-xs text-white/80 bg-white/10 rounded-full">
                      +{category.subcategories.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-amber-500/0 transition-colors duration-300 group-hover:bg-amber-500/10" />
        </Link>
      ))}
    </div>
  );
}