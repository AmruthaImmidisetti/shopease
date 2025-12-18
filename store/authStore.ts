import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (email) => {
        // mock login
        set({
          user: { name: 'User', email },
        });
      },

      signup: (name, email) => {
        // mock signup
        set({
          user: { name, email },
        });
      },

      logout: () => set({ user: null }),
    }),
    { name: 'auth-storage' }
  )
);
