'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';

export default function AvatarDropdown() {
  const user = useAuthStore(state => state.user);
  const logout = useAuthStore(state => state.logout);
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const initial = user.name.charAt(0).toUpperCase();

  return (
    <div className="relative">
      {/* Avatar */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center"
      >
        {initial}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg border text-sm z-50">
          <div className="px-4 py-3 border-b">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-500 text-xs">{user.email}</p>
          </div>

          <div className="flex flex-col">
            <Link
              href="/account"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              My Account
            </Link>

            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="px-4 py-2 text-left text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
