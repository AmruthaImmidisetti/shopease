'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Review = {
  productId: number;
  rating: number;
  comment: string;
  user: string;
  createdAt: string;
};

type ReviewState = {
  reviews: Review[];
  addReview: (review: Review) => void;
  getReviewsByProduct: (productId: number) => Review[];
};

export const useReviewStore = create<ReviewState>()(
  persist(
    (set, get) => ({
      reviews: [],

      addReview: (review) =>
        set({ reviews: [...get().reviews, review] }),

      getReviewsByProduct: (productId) =>
        get().reviews.filter(r => r.productId === productId),
    }),
    {
      name: 'product-reviews',
    }
  )
);
