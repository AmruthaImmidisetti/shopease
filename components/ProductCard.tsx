'use client';

import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition bg-white">
      
      <div className="relative w-full h-32 md:h-48 mb-3 md:mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <h2 className="font-semibold text-xs md:text-sm line-clamp-2">
        {product.title}
      </h2>

      <p className="mt-1 text-gray-700 font-medium text-sm">
        ₹{product.price}
      </p>

      <AddToCartButton product={product} />
    </div>
  );
}
