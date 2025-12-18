'use client';

import { useState } from 'react';
import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import ShippingForm from '@/components/checkout/ShippingForm';
import BillingForm from '@/components/checkout/BillingForm';
import ReviewOrder from '@/components/checkout/ReviewOrder';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <CheckoutSteps step={step} />

      {step === 1 && <ShippingForm onNext={() => setStep(2)} />}
      {step === 2 && (
        <BillingForm onBack={() => setStep(1)} onNext={() => setStep(3)} />
      )}
      {step === 3 && <ReviewOrder onBack={() => setStep(2)} />}
    </main>
  );
}
