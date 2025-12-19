'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CategoryCard from '../components/CategoryCard';
import ProductCarousel from '../components/ProductCarousel';

const CATEGORIES = [
  { label: 'Men', value: "men's clothing" },
  { label: 'Women', value: "women's clothing" },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Jewelry', value: 'jewelery' },
];

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
        setProducts([]);
      }
    }

    loadProducts();
  }, []);

  return (
    <main className="bg-gray-50">
      {/* 🔥 HERO / BANNER */}
      <section className="relative w-full h-[280px] md:h-[420px]">
        <Image
          src="/banner.jpg"
          alt="Shop Banner"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-3">
              Elevate Your Daily Style
            </h1>
            <p className="text-sm md:text-lg mb-5">
              Discover the latest arrivals and best deals
            </p>
            <Link
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base"
            >
              Shop Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* 🧭 SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CATEGORIES.map(cat => (
            <CategoryCard
              key={cat.value}
              label={cat.label}
              value={cat.value}
            />
          ))}
        </div>
      </section>

      {/* 🆕 NEW ARRIVALS — CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          New Arrivals
        </h2>

        <ProductCarousel products={products.slice(0, 12)} />

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="text-blue-600 font-medium hover:underline"
          >
            View All Products →
          </Link>
        </div>
      </section>
    </main>
  );
}
