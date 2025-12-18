'use client';

import { useAuthStore } from '@/store/authStore';
import ProfileCard from '@/components/account/ProfileCard';
import WishlistSection from '@/components/account/WishlistSection';
import OrderHistory from '@/components/account/OrderHistory';

export default function AccountPage() {
  const user = useAuthStore(state => state.user);

  if (!user) {
    return (
      <main className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">
          You are not logged in
        </h1>
        <p className="text-gray-600">
          Please login to view your account details.
        </p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">My Account</h1>

      {/* 👤 PROFILE */}
      <ProfileCard user={user} />

      {/* ❤️ WISHLIST */}
      <WishlistSection />

      {/* 📦 ORDERS */}
      <OrderHistory />
    </main>
  );
}
