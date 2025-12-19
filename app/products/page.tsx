'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p className="p-6">Loading products...</p>;
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        {/* LEFT FILTER BAR */}
        <aside className="md:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow sticky top-24">
            <Filters />
          </div>
        </aside>

        {/* PRODUCTS */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p className="text-gray-500 col-span-full">
              No products found.
            </p>
          ) : (
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}
