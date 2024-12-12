import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/cartStore';
import { useAuthStore } from '../../stores/authStore';
import { AdyenCheckout } from '../../components/checkout/AdyenCheckout';
import toast from 'react-hot-toast';

export function Payment() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const { items, total } = useCartStore();
  const [paymentMethods, setPaymentMethods] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/connexion');
      return;
    }

    if (items.length === 0) {
      navigate('/panier');
      return;
    }

    const fetchPaymentMethods = async () => {
      try {
        const response = await fetch('/api/payment-methods', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: {
              value: total * 100, // Convert to cents
              currency: 'EUR',
            },
          }),
        });

        if (!response.ok) throw new Error('Failed to fetch payment methods');

        const data = await response.json();
        setPaymentMethods(data);
      } catch (error) {
        toast.error('Erreur lors du chargement des méthodes de paiement');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentMethods();
  }, [isLoggedIn, items, total, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Paiement</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Récapitulatif</h2>
          <div className="flex justify-between items-center">
            <span>Total</span>
            <span className="text-xl font-bold">{total.toFixed(2)} €</span>
          </div>
        </div>

        {paymentMethods && (
          <AdyenCheckout
            paymentMethodsResponse={paymentMethods}
            amount={{
              value: total * 100,
              currency: 'EUR',
            }}
          />
        )}
      </div>
    </div>
  );
}