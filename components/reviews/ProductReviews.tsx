'use client';

import { useState } from 'react';
import { useReviewStore } from '@/store/reviewStore';
import { useAuthStore } from '@/store/authStore';

export default function ProductReviews({
  productId,
}: {
  productId: number;
}) {
  const { user } = useAuthStore();
  const { addReview, getReviewsByProduct } = useReviewStore();

  const reviews = getReviewsByProduct(productId);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  function submitReview() {
    if (!user) {
      alert('Please login to submit a review');
      return;
    }

    addReview({
      productId,
      rating,
      comment,
      user: user.name,
      createdAt: new Date().toISOString(),
    });

    setComment('');
    setRating(5);
  }

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">
        Customer Reviews
      </h2>

      {/* Existing Reviews */}
      {reviews.length === 0 && (
        <p className="text-gray-500 text-sm">
          No reviews yet. Be the first!
        </p>
      )}

      <div className="space-y-4 mb-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg p-4"
          >
            <div className="flex justify-between">
              <span className="font-semibold">
                {r.user}
              </span>
              <span className="text-yellow-500">
                {'★'.repeat(r.rating)}
              </span>
            </div>
            <p className="text-sm mt-2">{r.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review */}
      <div className="bg-gray-50 border rounded-lg p-4">
        <h3 className="font-semibold mb-2">
          Write a Review
        </h3>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border rounded px-2 py-1 mb-2"
        >
          {[5, 4, 3, 2, 1].map(n => (
            <option key={n} value={n}>
              {n} Stars
            </option>
          ))}
        </select>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          className="w-full border rounded p-2 mb-2"
        />

        <button
          onClick={submitReview}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </div>
    </section>
  );
}
