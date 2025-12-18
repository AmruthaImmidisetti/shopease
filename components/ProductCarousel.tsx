'use client';

import ProductCard from './ProductCard';

export default function ProductCarousel({
  products,
}: {
  products: any[];
}) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 pb-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[160px] sm:min-w-[220px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
