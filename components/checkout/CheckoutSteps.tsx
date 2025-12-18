export default function CheckoutSteps({ step }: { step: number }) {
  const steps = ['Shipping', 'Billing', 'Review'];

  return (
    <ol className="flex justify-between mb-8 text-sm">
      {steps.map((label, index) => (
        <li
          key={label}
          className={`flex-1 text-center ${
            step === index + 1 ? 'font-bold' : 'text-gray-500'
          }`}
        >
          {label}
        </li>
      ))}
    </ol>
  );
}
