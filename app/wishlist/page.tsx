'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';

export default function WishlistPage() {
  const wishlistItems = useWishlistStore(state => state.items);
  const removeFromWishlist = useWishlistStore(state => state.removeFromWishlist);
  const addToCart = useCartStore(state => state.addToCart);
  const user = useAuthStore(state => state.user);

  /* 🔒 NOT LOGGED IN */
  if (!user) {
    return (
      <main className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Your ShopEase Wishlist is empty
        </h1>

        <p className="text-gray-600 mb-6">
          Sign in to save items you love
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="border border-gray-400 px-6 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </main>
    );
  }

  /* ✅ LOGGED IN BUT EMPTY */
  if (wishlistItems.length === 0) {
    return (
      <main className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Your ShopEase Wishlist is empty
        </h1>

        <Link
          href="/products"
          className="text-blue-600 hover:underline"
        >
          Browse products →
        </Link>
      </main>
    );
  }

  /* ❤️ LOGGED IN WITH ITEMS */
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistItems.map(item => (
          <div
            key={item.id}
            className="relative bg-white rounded-lg shadow p-4"
          >
            {/* ❌ REMOVE */}
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* INFO */}
            <h2 className="font-semibold text-sm line-clamp-2">
              {item.title}
            </h2>

            <p className="mt-1 font-medium">
              ₹{item.price}
            </p>

            {/* ADD TO CART */}
            <button
              onClick={() => {
                addToCart(item);
                removeFromWishlist(item.id);
              }}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
