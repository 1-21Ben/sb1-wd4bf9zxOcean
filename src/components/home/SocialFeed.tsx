import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Video } from 'lucide-react';
import { useThemeStore } from '../../stores/themeStore';

interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok';
  content: string;
  image?: string;
  author: string;
  date: string;
  likes: number;
  shares?: number;
  link: string;
}

const SOCIAL_POSTS: SocialPost[] = [
  {
    id: '1',
    platform: 'facebook',
    content: 'Découvrez notre nouvelle gamme Ocean Guard Pro ! Protection marine haute performance pour tous vos projets.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    author: 'GPP Ocean',
    date: '2024-02-15',
    likes: 245,
    shares: 56,
    link: 'https://facebook.com/gppocean'
  },
  {
    id: '2',
    platform: 'instagram',
    content: '🌊 La protection marine à son meilleur. #GPPOcean #MarinePaint #Protection',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    author: '@gppocean',
    date: '2024-02-14',
    likes: 789,
    link: 'https://instagram.com/gppocean'
  },
  {
    id: '3',
    platform: 'twitter',
    content: 'Certification ISO 14001 obtenue ! Notre engagement pour l\'environnement continue. #Environnement #Qualité',
    author: '@GPPOcean',
    date: '2024-02-13',
    likes: 123,
    shares: 45,
    link: 'https://twitter.com/gppocean'
  },
  {
    id: '4',
    platform: 'linkedin',
    content: 'GPP Ocean renforce sa présence dans l\'Océan Indien avec l\'ouverture d\'un nouveau centre de distribution.',
    image: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=800&q=80',
    author: 'GPP Ocean',
    date: '2024-02-12',
    likes: 342,
    shares: 89,
    link: 'https://linkedin.com/company/gppocean'
  },
  {
    id: '5',
    platform: 'tiktok',
    content: 'Comment appliquer notre nouvelle peinture Ocean Guard Pro ? Suivez le guide ! #Tutorial #Paint',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    author: '@gppocean',
    date: '2024-02-11',
    likes: 1567,
    link: 'https://tiktok.com/@gppocean'
  }
];

const PlatformIcon = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  tiktok: Video
};

const PlatformColors = {
  facebook: 'bg-[#1877F2]',
  instagram: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
  twitter: 'bg-[#1DA1F2]',
  linkedin: 'bg-[#0A66C2]',
  tiktok: 'bg-gradient-to-r from-[#00f2ea] to-[#ff0050]'
};

export function SocialFeed() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SOCIAL_POSTS.map((post) => {
        const Icon = PlatformIcon[post.platform];
        return (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
              isDarkMode ? 'bg-deep-700' : 'bg-white'
            }`}
          >
            {post.image && (
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 p-2 rounded-full ${PlatformColors[post.platform]}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
            )}
            
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                {!post.image && <Icon className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />}
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.author}
                </span>
              </div>
              
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {post.content}
              </p>
              
              <div className="flex items-center justify-between text-xs">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <div className="flex items-center space-x-4">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {post.likes} likes
                  </span>
                  {post.shares && (
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {post.shares} partages
                    </span>
                  )}
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}