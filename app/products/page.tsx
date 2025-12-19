'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // ✅ NEW
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams(); // ✅ NEW

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

  // ✅ NEW: Apply filters using URL params
  const filteredProducts = products.filter((p: any) => {
    // 🔍 Search
    const q = searchParams.get('q');
    if (q && !p.title.toLowerCase().includes(q.toLowerCase())) {
      return false;
    }

    // 📂 Category
    const categories = searchParams.getAll('category');
    if (categories.length > 0 && !categories.includes(p.category)) {
      return false;
    }

    // 💰 Price range
    const min = searchParams.get('min');
    const max = searchParams.get('max');
    if (min && p.price < Number(min)) return false;
    if (max && p.price > Number(max)) return false;

    return true;
  });

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
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 col-span-full">
              No products found.
            </p>
          ) : (
            filteredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}
