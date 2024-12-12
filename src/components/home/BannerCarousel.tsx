import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useThemeStore } from '../../stores/themeStore';

const BANNERS = [
  {
    id: 1,
    title: 'Protection Marine Professionnelle',
    subtitle: 'Nouvelle gamme Ocean Guard Pro',
    description: 'Une protection optimale pour tous vos projets maritimes',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1920&q=80',
    link: '/products?category=marine',
  },
  {
    id: 2,
    title: 'Solutions Écologiques',
    subtitle: 'Gamme Eco-Friendly',
    description: 'Des peintures respectueuses de l\'environnement',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    link: '/products?category=eco',
  },
  {
    id: 3,
    title: 'Expertise Technique',
    subtitle: 'Service Conseil Professionnel',
    description: 'Notre équipe d\'experts à votre service',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=1920&q=80',
    link: '/contact',
  },
];

export function BannerCarousel() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`relative ${isDarkMode ? '' : 'light-mode'}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[500px] w-full group"
      >
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link 
              to={banner.link}
              className="relative h-full w-full block group cursor-pointer"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xl transition-transform duration-500 group-hover:translate-x-2">
                    <p className={`text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-deep-300' : 'text-pastel-300'
                    }`}>
                      {banner.subtitle}
                    </p>
                    <h2 className="text-4xl font-bold text-white mb-4">
                      {banner.title}
                    </h2>
                    <p className="text-lg text-gray-200">
                      {banner.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}