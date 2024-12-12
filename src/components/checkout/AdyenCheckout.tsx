import React, { useEffect, useRef } from 'react';
import { initAdyenCheckout } from '../../lib/adyen';

interface AdyenCheckoutProps {
  paymentMethodsResponse: any;
  amount: {
    value: number;
    currency: string;
  };
}

export function AdyenCheckout({ paymentMethodsResponse, amount }: AdyenCheckoutProps) {
  const paymentContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let checkout: any;

    const initCheckout = async () => {
      checkout = await initAdyenCheckout(paymentMethodsResponse);
      
      if (paymentContainer.current) {
        checkout
          .create('dropin', {
            amount,
            showPayButton: true,
          })
          .mount(paymentContainer.current);
      }
    };

    initCheckout();

    return () => {
      if (checkout) {
        checkout.unmount();
      }
    };
  }, [paymentMethodsResponse, amount]);

  return (
    <div>
      <div ref={paymentContainer} className="adyen-checkout__wrapper" />
    </div>
  );
}