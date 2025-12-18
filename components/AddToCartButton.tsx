'use client';

import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCartStore();
  const { items = [], addToWishlist, removeFromWishlist } =
    useWishlistStore();

  if (!product) return null; // ✅ guard

  const isInWishlist = items.some(
    (item) => item.id === product.id
  );

  return (
    <div className="mt-auto flex gap-2">
  <button
    onClick={() => addToCart(product)}
    className="flex-1 bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700"
  >
    Add to Cart
  </button>

  <button
    onClick={() =>
      isInWishlist
        ? removeFromWishlist(product.id)
        : addToWishlist(product)
    }
    className="border border-gray-300 px-3 rounded text-sm hover:bg-gray-100"
  >
    {isInWishlist ? '♥ Wishlisted' : '♡ Wishlist'}
  </button>
</div>

  );
}
