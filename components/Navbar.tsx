'use client';

import Link from 'next/link';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const items = useCartStore(state => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        MyStore
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/products">Products</Link>

        <Link href="/cart" className="relative">
          Cart
          {count > 0 && (
            <span className="ml-1 inline-flex items-center justify-center text-xs bg-red-500 text-white rounded-full w-5 h-5">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
