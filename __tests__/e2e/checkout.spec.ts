import { test, expect } from '@playwright/test';

test('user can add product to cart and open checkout', async ({ page }) => {
  // Start the app
  await page.goto('/products');

  // Wait for products to load
  await page.waitForSelector('text=Add to Cart');

  // Add first product to cart
  await page.locator('text=Add to Cart').first().click();

  // Go to cart
  await page.goto('/cart');

  // Verify cart page
  await expect(page.locator('text=Cart')).toBeVisible();

  // Go to checkout
  await page.goto('/checkout');

  // Verify checkout page
  await expect(page.locator('text=Checkout')).toBeVisible();
});
