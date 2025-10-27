import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import PaymentForm from './PaymentForm';

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_publish_key);

  return (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
  )
}

export default Payment