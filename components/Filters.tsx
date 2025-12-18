'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const FASHION = [
  { label: 'Men', value: "men's clothing" },
  { label: 'Women', value: "women's clothing" },
  { label: 'Kids', value: 'kids' }, // not in fake API
];

const OTHER_CATEGORIES = [
  { label: 'Electronics', value: 'electronics' },
  { label: 'Furniture', value: 'furniture' },
  { label: 'Accessories', value: 'jewelery' },
  { label: 'Home & Living', value: 'home' },
  { label: 'Beauty & Care', value: 'beauty' },
  { label: 'Footwear', value: 'footwear' },
  { label: 'Sports', value: 'sports' },
];

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function toggleCategory(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    const selected = params.getAll('category');

    if (selected.includes(value)) {
      params.delete('category');
      selected
        .filter(v => v !== value)
        .forEach(v => params.append('category', v));
    } else {
      params.append('category', value);
    }

    router.push(`/products?${params.toString()}`);
  }

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    router.push(`/products?${params.toString()}`);
  }

  const selectedCategories = searchParams.getAll('category');

  return (
    <div className="space-y-6">

      {/* 👕 FASHION */}
      <div>
        <h3 className="font-semibold mb-2">Fashion</h3>
        <div className="space-y-2">
          {FASHION.map(cat => (
            <label key={cat.value} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.value)}
                onChange={() => toggleCategory(cat.value)}
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      {/* 📂 OTHER CATEGORIES */}
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        <select
          className="border px-3 py-2 rounded w-full"
          defaultValue=""
          onChange={(e) => updateParam('category', e.target.value)}
        >
          <option value="">Select Category</option>
          {OTHER_CATEGORIES.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* 💰 PRICE RANGE */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            className="border px-2 py-1 rounded w-full"
            defaultValue={searchParams.get('min') ?? ''}
            onBlur={(e) => updateParam('min', e.target.value)}
             onKeyDown={(e) => {
              if (e.key === 'Enter') {
                updateParam('min', (e.target as HTMLInputElement).value);
              }
            }}
          />
          <input
            type="number"
            placeholder="Max"
            className="border px-2 py-1 rounded w-full"
            defaultValue={searchParams.get('max') ?? ''}
            onBlur={(e) => updateParam('max', e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                updateParam('max', (e.target as HTMLInputElement).value);
              }
            }}
          />
        </div>
      </div>

      {/* 🔃 SORT */}
      <div>
        <h3 className="font-semibold mb-2">Sort By</h3>
        <select
          className="border px-3 py-2 rounded w-full"
          defaultValue={searchParams.get('sort') ?? ''}
          onChange={(e) => updateParam('sort', e.target.value)}
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

    </div>
  );
}
