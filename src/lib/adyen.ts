import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';

const ADYEN_CLIENT_KEY = import.meta.env.VITE_ADYEN_CLIENT_KEY;
const ADYEN_ENVIRONMENT = import.meta.env.VITE_ADYEN_ENVIRONMENT;

export async function initAdyenCheckout(paymentMethodsResponse: any) {
  const checkout = await AdyenCheckout({
    environment: ADYEN_ENVIRONMENT,
    clientKey: ADYEN_CLIENT_KEY,
    paymentMethodsResponse,
    locale: "fr-FR",
    showPayButton: true,
    onSubmit: (state: any, component: any) => {
      // Make payment request to your server
      makePayment(state.data)
        .then(response => {
          if (response.action) {
            component.handleAction(response.action);
          } else {
            // Handle final response
            handleFinalResponse(response);
          }
        })
        .catch(error => {
          throw Error(error);
        });
    },
    onAdditionalDetails: (state: any, component: any) => {
      submitAdditionalDetails(state.data)
        .then(response => {
          if (response.action) {
            component.handleAction(response.action);
          } else {
            // Handle final response
            handleFinalResponse(response);
          }
        })
        .catch(error => {
          throw Error(error);
        });
    },
  });

  return checkout;
}

async function makePayment(data: any) {
  const response = await fetch('/api/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function submitAdditionalDetails(data: any) {
  const response = await fetch('/api/payments/details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function handleFinalResponse(response: any) {
  switch (response.resultCode) {
    case 'Authorised':
      window.location.href = '/payment/success';
      break;
    case 'Pending':
    case 'Received':
      window.location.href = '/payment/pending';
      break;
    case 'Refused':
      window.location.href = '/payment/failed';
      break;
    default:
      window.location.href = '/payment/error';
      break;
  }
}