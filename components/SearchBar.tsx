'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/products?q=${query}`);
  }

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <div className="flex w-full md:w-2/3 border-2 border-black rounded overflow-hidden">

        {/* 🔍 Icon box */}
        <div className="flex items-center justify-center px-4 bg-black text-white">
          <Search size={20} />
        </div>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 px-4 py-3 outline-none"
          aria-label="Search products"
        />
      </div>
    </form>
  );
}
