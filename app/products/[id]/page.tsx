import { fetchProduct } from '@/lib/api';
import AddToCartButton from '@/components/AddToCartButton';

export const dynamic = 'force-dynamic';

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  let product;

  try {
    product = await fetchProduct(params.id);
  } catch (error) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-xl font-bold">Product unavailable</h1>
        <p className="text-gray-600 mt-2">
          Please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600 mt-1">₹{product.price}</p>
      <p className="mt-4">{product.description}</p>

      <div className="mt-6">
        <AddToCartButton product={product} />
      </div>
    </main>
  );
}
