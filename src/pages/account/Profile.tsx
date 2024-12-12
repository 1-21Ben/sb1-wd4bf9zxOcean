import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { ProfileForm } from '../../components/account/ProfileForm';
import { useAuthStore } from '../../stores/authStore';
import { getCurrentUser, updateUserProfile } from '../../services/userService';
import toast from 'react-hot-toast';

export function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/connexion');
      return;
    }

    const loadUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        toast.error('Erreur lors du chargement du profil');
      }
    };

    loadUser();
  }, [isLoggedIn, navigate]);

  const handleUpdateProfile = async (data: Partial<User>) => {
    if (!user) return;

    setLoading(true);
    try {
      await updateUserProfile(user.id, data);
      toast.success('Profil mis à jour avec succès');
    } catch (error) {
      toast.error('Erreur lors de la mise à jour du profil');
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <User className="h-8 w-8 text-primary-500" />
          <h1 className="text-2xl font-bold text-gray-900">Mon Profil</h1>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <ProfileForm
            user={user}
            onSubmit={handleUpdateProfile}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}