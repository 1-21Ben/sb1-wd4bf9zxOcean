import React from 'react';
import { Building2 } from 'lucide-react';
import { CompanyForm } from '../../components/account/CompanyForm';
import { getCurrentUser, updateCompany } from '../../services/userService';
import toast from 'react-hot-toast';

export function Company() {
  const [company, setCompany] = React.useState<Company | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const loadCompany = async () => {
      try {
        const user = await getCurrentUser();
        if (user?.company) {
          setCompany(user.company);
        }
      } catch (error) {
        toast.error('Erreur lors du chargement des informations de l\'entreprise');
      }
    };

    loadCompany();
  }, []);

  const handleUpdateCompany = async (data: Partial<Company>) => {
    if (!company) return;

    setLoading(true);
    try {
      const updatedCompany = await updateCompany(company.id, data);
      setCompany(updatedCompany);
      toast.success('Informations de l\'entreprise mises à jour avec succès');
    } catch (error) {
      toast.error('Erreur lors de la mise à jour des informations');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Building2 className="h-8 w-8 text-primary-500" />
          <h1 className="text-2xl font-bold text-gray-900">Mon Entreprise</h1>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <CompanyForm
            company={company || undefined}
            onSubmit={handleUpdateCompany}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}