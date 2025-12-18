import { act } from 'react-dom/test-utils';
import { useCartStore } from '@/store/cartStore';

describe('Cart Store', () => {
  beforeEach(() => {
    // reset store before each test
    useCartStore.setState({ items: [] });
  });

  it('adds item to cart with quantity 1', () => {
    act(() => {
      useCartStore.getState().addToCart({
        id: 1,
        title: 'Test Product',
        price: 100,
      });
    });

    const items = useCartStore.getState().items;

    expect(items.length).toBe(1);
    expect(items[0].quantity).toBe(1);
  });

  it('increases quantity when adding same item again', () => {
    act(() => {
      useCartStore.getState().addToCart({
        id: 1,
        title: 'Test Product',
        price: 100,
      });

      useCartStore.getState().addToCart({
        id: 1,
        title: 'Test Product',
        price: 100,
      });
    });

    const item = useCartStore.getState().items[0];
    expect(item.quantity).toBe(2);
  });
});
