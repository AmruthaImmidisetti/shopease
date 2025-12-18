'use client';

import { useCartStore } from '../../store/cartStore';

export default function ReviewOrder({
  onBack,
}: {
  onBack: () => void;
}) {
  const { items, clearCart } = useCartStore();

  return (
    <div>
      <h2 className="font-semibold mb-4">Order Summary</h2>

      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="underline">
          Back
        </button>

        <button
          onClick={() => {
            clearCart();
            alert('Order placed successfully!');
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
