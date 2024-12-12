import React from 'react';
import { Company } from '../../types/user';

interface CompanyFormProps {
  company?: Company;
  onSubmit: (data: Partial<Company>) => Promise<void>;
  loading: boolean;
}

export function CompanyForm({ company, onSubmit, loading }: CompanyFormProps) {
  const [formData, setFormData] = React.useState({
    name: company?.name || '',
    vatNumber: company?.vatNumber || '',
    registrationNumber: company?.registrationNumber || '',
    industry: company?.industry || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Nom de l'entreprise
        </label>
        <input
          type="text"
          id="companyName"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700">
            Numéro de TVA
          </label>
          <input
            type="text"
            id="vatNumber"
            value={formData.vatNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, vatNumber: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
            SIRET
          </label>
          <input
            type="text"
            id="registrationNumber"
            value={formData.registrationNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, registrationNumber: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
          Secteur d'activité
        </label>
        <select
          id="industry"
          value={formData.industry}
          onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="">Sélectionnez un secteur</option>
          <option value="construction">Construction</option>
          <option value="marine">Marine</option>
          <option value="industrial">Industrie</option>
          <option value="decoration">Décoration</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
    </form>
  );
}