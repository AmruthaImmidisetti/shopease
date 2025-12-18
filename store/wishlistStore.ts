import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type WishlistItem = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type WishlistState = {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (item) => {
        const exists = get().items.some(i => i.id === item.id);
        if (!exists) {
          set({ items: [...get().items, item] });
        }
      },

      removeFromWishlist: (id) => {
        set({
          items: get().items.filter(i => i.id !== id),
        });
      },
    }),
    { name: 'wishlist-storage' }
  )
);
