'use client';

type Review = {
  user: string;
  rating: number;
  comment: string;
};

export default function ReviewsList({ reviews }: { reviews: Review[] }) {
  if (!reviews || reviews.length === 0) {
    return <p className="text-sm text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((r, i) => (
        <div key={i} className="border rounded p-3 bg-white">
          <div className="flex justify-between">
            <span className="font-medium">{r.user}</span>
            <span className="text-yellow-500">
              {'★'.repeat(r.rating)}
            </span>
          </div>
          <p className="text-sm text-gray-700 mt-1">
            {r.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
