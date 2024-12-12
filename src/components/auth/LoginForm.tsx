import React from 'react';
import { LogIn } from 'lucide-react';

interface LoginFormProps {
  email: string;
  password: string;
  loading: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function LoginForm({
  email,
  password,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Adresse e-mail
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={onEmailChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#0074A9] focus:border-[#0074A9] focus:z-10 sm:text-sm"
            placeholder="Adresse e-mail"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={onPasswordChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#0074A9] focus:border-[#0074A9] focus:z-10 sm:text-sm"
            placeholder="Mot de passe"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#0074A9] focus:ring-[#0074A9] border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Se souvenir de moi
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-[#0074A9] hover:text-[#005d87]">
            Mot de passe oublié ?
          </a>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0074A9] hover:bg-[#005d87] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0074A9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <LogIn className="h-5 w-5 text-[#0074A9] group-hover:text-[#0074A9]/90" />
        </span>
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  );
}