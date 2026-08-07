import { test, expect } from '@playwright/test';
const { CartPage } = require('../../pages/cartpage');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test('TC1 : Verify that customer can add a product to cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.addtocart();
  await expect(page.locator('[data-test="product-title"]')).toHaveText('Pliers');
});


test('TC2: Verify that customer can remove product from the cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.addtocart();
  await cartPage.removefromcart();
  await expect(page.getByRole('alert', { name: 'Product deleted.' })).toBeVisible();
});

test('TC3: Verify that customer can increase the quantity of a product in the cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.increasequantity();
  await expect(page.locator('#quantity-input')).toHaveValue('2');
});


test('TC4: Verify that customer can decrease the quantity of a product in the cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.increasequantity();
  await cartPage.decreasequantity();
  await expect(page.locator('#quantity-input')).toHaveValue('1');
});

test('TC5: Verify that customer can compare two products', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.compareproducts();
  await expect(page.locator('[data-test="comparison-title"]')).toBeVisible();
})