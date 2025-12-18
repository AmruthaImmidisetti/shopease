import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import { useCartStore } from '@/store/cartStore';

describe('Add to Cart integration', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [] });
  });

  it('adds product to cart when clicking Add to Cart', () => {
    const product = {
      id: 1,
      title: 'Integration Test Product',
      price: 100,
      image: '/test.png',
    };

    render(<ProductCard product={product} />);

    const button = screen.getByText('Add to Cart');
    fireEvent.click(button);

    const cartItems = useCartStore.getState().items;

    expect(cartItems.length).toBe(1);
    expect(cartItems[0].quantity).toBe(1);
    expect(cartItems[0].title).toBe('Integration Test Product');
  });
});
