'use client';

import { useState } from 'react';

export default function ReviewForm({
  onAdd,
}: {
  onAdd: (review: {
    user: string;
    rating: number;
    comment: string;
  }) => void;
}) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onAdd({ user: 'Guest', rating, comment });
    setComment('');
  }

  return (
    <form onSubmit={submit} className="space-y-3 mt-6">
      <h3 className="font-semibold">Write a Review</h3>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 rounded"
      >
        {[5,4,3,2,1].map(n => (
          <option key={n} value={n}>{n} Stars</option>
        ))}
      </select>

      <textarea
        required
        placeholder="Your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Review
      </button>
    </form>
  );
}
