'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';

export default function CartPage() {
  const { items, increaseQty, decreaseQty, removeFromCart } = useCartStore();
  const user = useAuthStore(state => state.user);

  // 🔒 NOT LOGGED IN VIEW
  if (!user) {
    return (
      <main className="p-8 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Your ShopEase Cart is empty
        </h2>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Sign in
          </Link>

          <Link
            href="/login?mode=signup"
            className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100"
          >
            Sign up
          </Link>
        </div>
      </main>
    );
  }

  // Track selected items
  const [selectedIds, setSelectedIds] = useState<number[]>(
    items.map(i => i.id)
  );

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const total = items.reduce((sum, item) => {
    if (!selectedIds.includes(item.id)) return sum;
    return sum + item.price * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <main className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Your ShopEase Cart is empty 🛒
        </h2>
        <Link href="/products" className="text-blue-600 underline">
          Continue Shopping
        </Link>
      </main>
    );
  }

  // 🛒 LOGGED-IN CART VIEW (UNCHANGED UI)
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-4">
        {items.map(item => {
          const itemTotal = item.price * item.quantity;

          return (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white rounded-xl shadow p-4"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="w-5 h-5 accent-blue-600"
              />

              {/* Image */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image || '/placeholder.png'}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg">
                  {item.title}
                </h2>

                <p className="text-gray-600">
                  ₹{item.price.toFixed(2)}
                </p>

                <p className="mt-1 font-medium">
                  Item Total: ₹{itemTotal.toFixed(2)}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                >
                  −
                </button>

                <span className="font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-bold">
          Total: ₹{total.toFixed(2)}
        </h2>

        <Link
          href="/checkout"
          className={`px-6 py-3 rounded-lg transition ${
            selectedIds.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Proceed to Checkout →
        </Link>
      </div>
    </main>
  );
}
