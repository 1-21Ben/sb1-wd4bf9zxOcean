import React from 'react';
import { MapPin, Plus, Trash2 } from 'lucide-react';
import { AddressForm } from '../../components/account/AddressForm';
import { Address } from '../../types/user';
import { getCurrentUser, addAddress, updateAddress, deleteAddress } from '../../services/userService';
import toast from 'react-hot-toast';

export function Addresses() {
  const [addresses, setAddresses] = React.useState<Address[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);

  React.useEffect(() => {
    const loadAddresses = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setAddresses(user.addresses);
        }
      } catch (error) {
        toast.error('Erreur lors du chargement des adresses');
      }
    };

    loadAddresses();
  }, []);

  const handleAddAddress = async (data: Omit<Address, 'id'>) => {
    setLoading(true);
    try {
      const newAddress = await addAddress(data);
      setAddresses(prev => [...prev, newAddress]);
      setShowAddForm(false);
      toast.success('Adresse ajoutée avec succès');
    } catch (error) {
      toast.error('Erreur lors de l\'ajout de l\'adresse');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAddress = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette adresse ?')) return;

    try {
      await deleteAddress(id);
      setAddresses(prev => prev.filter(addr => addr.id !== id));
      toast.success('Adresse supprimée avec succès');
    } catch (error) {
      toast.error('Erreur lors de la suppression de l\'adresse');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <MapPin className="h-8 w-8 text-primary-500" />
            <h1 className="text-2xl font-bold text-gray-900">Mes Adresses</h1>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Ajouter une adresse
          </button>
        </div>

        {showAddForm && (
          <div className="mb-8 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Nouvelle adresse
            </h2>
            <AddressForm
              onSubmit={handleAddAddress}
              loading={loading}
            />
          </div>
        )}

        <div className="space-y-6">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="bg-white shadow rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  {address.isDefault && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Par défaut
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-gray-900">{address.street}</p>
                <p className="text-gray-600">
                  {address.postalCode} {address.city}
                </p>
                <p className="text-gray-600">{address.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}