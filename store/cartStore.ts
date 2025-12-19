import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void; // ✅ REQUIRED
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        const existing = get().items.find(i => i.id === item.id);

        if (existing) {
          set({
            items: get().items.map(i =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                ...item,
                price: Number(item.price),
                quantity: 1,
              },
            ],
          });
        }
      },

      removeFromCart: (id) =>
        set({
          items: get().items.filter(i => i.id !== id),
        }),

      increaseQty: (id) =>
        set({
          items: get().items.map(i =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }),

      decreaseQty: (id) =>
        set({
          items: get().items
            .map(i =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter(i => i.quantity > 0),
        }),

      // ✅ THIS FIXES: "clearCart is not a function"
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
