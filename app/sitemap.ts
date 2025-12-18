import { fetchProducts } from '../lib/api';

export default async function sitemap() {
  const products = await fetchProducts();

  const productUrls = products.map((product: any) => ({
    url: `http://localhost:3000/products/${product.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'http://localhost:3000',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3000/products',
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}
