import React from 'react';
import { Apple, Mail, Linkedin } from 'lucide-react';

interface SocialLoginButtonsProps {
  onOAuthSignIn: (provider: 'github' | 'google' | 'apple' | 'azure' | 'linkedin') => void;
}

export function SocialLoginButtons({ onOAuthSignIn }: SocialLoginButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => onOAuthSignIn('apple')}
        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        <Apple className="h-5 w-5 mr-2" />
        Apple
      </button>

      <button
        onClick={() => onOAuthSignIn('google')}
        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        <Mail className="h-5 w-5 mr-2" />
        Google
      </button>

      <button
        onClick={() => onOAuthSignIn('azure')}
        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        <svg className="h-5 w-5 mr-2" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0H0V11H11V0Z" fill="#F25022"/>
          <path d="M23 0H12V11H23V0Z" fill="#7FBA00"/>
          <path d="M11 12H0V23H11V12Z" fill="#00A4EF"/>
          <path d="M23 12H12V23H23V12Z" fill="#FFB900"/>
        </svg>
        Microsoft
      </button>

      <button
        onClick={() => onOAuthSignIn('linkedin')}
        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        <Linkedin className="h-5 w-5 mr-2" />
        LinkedIn
      </button>
    </div>
  );
}