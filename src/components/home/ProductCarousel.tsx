import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useThemeStore } from '../../stores/themeStore';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Ocean Guard Premium',
    description: 'Protection marine haute performance',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    price: 89.99,
  },
  {
    id: '2',
    name: 'Tropical Shield Pro',
    description: 'Protection UV maximale',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    price: 129.99,
  },
  {
    id: '3',
    name: 'Eco Marine Plus',
    description: 'Peinture écologique pour environnements marins',
    image: 'https://images.unsplash.com/photo-1572297794908-f2ee5a2930d6?auto=format&fit=crop&w=800&q=80',
    price: 149.99,
  },
];

export function ProductCarousel() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-8"
      >
        {FEATURED_PRODUCTS.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className={`font-semibold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {product.name}
                  </h3>
                  <p className={`mt-1 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {product.description}
                  </p>
                  <p className="mt-2 text-sky-500 font-bold">
                    {product.price.toFixed(2)}€
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}