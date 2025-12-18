'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { useAuthStore } from '@/store/authStore';
import AvatarDropdown from './AvatarDropdown';

export default function Header() {
  const { items } = useCartStore();
  const wishlistItems = useWishlistStore(state => state.items);
  const user = useAuthStore(state => state.user);

  // ✅ SHOW COUNTS ONLY IF USER LOGGED IN
  const cartCount = user ? items.length : 0;
  const wishlistCount = user ? wishlistItems.length : 0;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-extrabold text-blue-600">
          ShopEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>

          <Link href="/wishlist">
            Wishlist
            {user && (
              <span className="ml-1 bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link href="/cart">
            Cart
            {user && (
              <span className="ml-1 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">
                {cartCount}
              </span>
            )}
          </Link>

          {/* AUTH SECTION */}
          {!user ? (
            <Link href="/login" className="text-blue-600">
              Login
            </Link>
          ) : (
            <AvatarDropdown />
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden gap-4 items-center text-sm">
          <Link href="/wishlist">
            ❤️ {user ? wishlistCount : ''}
          </Link>

          <Link href="/cart">
            🛒 {user ? cartCount : ''}
          </Link>

          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <AvatarDropdown />
          )}
        </div>

      </nav>
    </header>
  );
}
