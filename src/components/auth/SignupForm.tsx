import React from 'react';
import { UserPlus } from 'lucide-react';

interface SignupFormProps {
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  loading: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCompanyNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function SignupForm({
  email,
  password,
  confirmPassword,
  companyName,
  loading,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onCompanyNameChange,
  onSubmit,
}: SignupFormProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="company-name" className="sr-only">
            Nom de l'entreprise
          </label>
          <input
            id="company-name"
            name="company-name"
            type="text"
            required
            value={companyName}
            onChange={onCompanyNameChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#0074A9] focus:border-[#0074A9] focus:z-10 sm:text-sm"
            placeholder="Nom de l'entreprise"
          />
        </div>
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
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0074A9] focus:border-[#0074A9] focus:z-10 sm:text-sm"
            placeholder="Adresse e-mail professionnelle"
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
            autoComplete="new-password"
            required
            value={password}
            onChange={onPasswordChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0074A9] focus:border-[#0074A9] focus:z-10 sm:text-sm"
            placeholder="Mot de passe"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Confirmer le mot de passe
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#0074A9] focus:border-[#0074A9] focus:z-10 sm:text-sm"
            placeholder="Confirmer le mot de passe"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-4 w-4 text-[#0074A9] focus:ring-[#0074A9] border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
          J'accepte les{' '}
          <a href="/cgv" className="text-[#0074A9] hover:text-[#005d87]">
            conditions générales de vente
          </a>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0074A9] hover:bg-[#005d87] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0074A9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <UserPlus className="h-5 w-5 text-[#0074A9] group-hover:text-[#0074A9]/90" />
        </span>
        {loading ? 'Création...' : 'Créer un compte'}
      </button>
    </form>
  );
}