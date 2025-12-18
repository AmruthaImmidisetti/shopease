import { fetchProduct, fetchProducts } from '../../../lib/api';
import AddToCartButton from '../../../components/AddToCartButton';
import ProductReviews from '../../../components/reviews/ProductReviews';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  return {
    title: product.title,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((p: any) => ({
    id: p.id.toString(),
  }));
}

export const revalidate = 60;

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">
        {product.title}
      </h1>

      <p className="text-gray-700 mb-2">
        ₹{product.price}
      </p>

      <p className="text-sm text-gray-600 mb-4">
        {product.description}
      </p>

      <AddToCartButton product={product} />

      {/* ⭐ REVIEWS */}
      <ProductReviews productId={product.id} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.title,
            description: product.description,
            image: product.image,
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </main>
  );
}
