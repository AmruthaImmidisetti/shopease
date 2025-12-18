import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 199,
  image: 'https://example.com/image.png',
};

describe('ProductCard', () => {
  it('renders product title and price', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/199/)).toBeInTheDocument();
  });
});
