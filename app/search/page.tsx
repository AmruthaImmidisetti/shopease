export const dynamic = 'force-dynamic';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Search Results
      </h1>
      <p className="text-gray-600 mt-2">
        Showing results for: {searchParams.q || 'All'}
      </p>
    </main>
  );
}
