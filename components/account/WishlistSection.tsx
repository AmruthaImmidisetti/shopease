'use client';

import { useWishlistStore } from '@/store/wishlistStore';

export default function WishlistSection() {
  const { items, removeFromWishlist } = useWishlistStore();

  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Wishlist</h2>

      {items.length === 0 ? (
        <p className="text-gray-500 text-sm">
          Your wishlist is empty.
        </p>
      ) : (
        <ul className="space-y-4">
          {items.map(item => (
            <li
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4 hover:shadow-sm transition"
            >
              <div>
                <p className="font-medium text-gray-800 line-clamp-1">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">
                  ₹{item.price}
                </p>
              </div>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
