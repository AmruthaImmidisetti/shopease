import { fetchProducts } from '../../lib/api';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';

export const dynamic = 'force-dynamic';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    category?: string | string[];
    sort?: string;
    min?: string;
    max?: string;
  }>;
}) {
  const params = await searchParams;
  let products = await fetchProducts();

  // 🔍 Search
  if (params.q) {
    const q = params.q.toLowerCase();
    products = products.filter((p: any) =>
      p.title.toLowerCase().includes(q)
    );
  }

  // 📂 Categories
  if (params.category) {
    const categories = Array.isArray(params.category)
      ? params.category
      : [params.category];

    products = products.filter((p: any) =>
      categories.includes(p.category)
    );
  }

  // 💰 Price range
  if (params.min) {
    products = products.filter((p: any) => p.price >= Number(params.min));
  }

  if (params.max) {
    products = products.filter((p: any) => p.price <= Number(params.max));
  }

  // 🔃 Sorting
  if (params.sort === 'price-asc') {
    products = [...products].sort((a, b) => a.price - b.price);
  }

  if (params.sort === 'price-desc') {
    products = [...products].sort((a, b) => b.price - a.price);
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
              No products found for selected filters.
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
