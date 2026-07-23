import { test, expect } from '@playwright/test';
const { CartPage } = require('../../pages/cartpage');

test('Verify that Add to Cart functionality works', async ({ page }) => {
  await page.goto('/');
  //console.log(page.url());
  const cartPage = new CartPage(page);
  await cartPage.addtocart();
  await expect(page.locator('[data-test="product-title"]')).toHaveText('Pliers');
});


test('Verify that remove from cart functionality works', async ({ page }) => {
  await page.goto('/');
  const cartPage = new CartPage(page);
  await cartPage.addtocart();
  await cartPage.removefromcart();
  await expect(page.getByRole('alert', { name: 'Product deleted.' })).toBeVisible();
});

test('Verify that a user can increase the quantity of a product in the cart', async ({ page }) => {
  await page.goto('/');
  const cartPage = new CartPage(page);
  await cartPage.increasequantity();
  await expect(page.locator('#quantity-input')).toHaveValue('2');
});


test('Verify that a user can decrease the quantity of a product in the cart', async ({ page }) => {
  await page.goto('/');
  const cartPage = new CartPage(page);
  await cartPage.increasequantity();
  await cartPage.decreasequantity();
  await expect(page.locator('#quantity-input')).toHaveValue('1');
});