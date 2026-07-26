import { test, expect } from '@playwright/test';
const { CartPage } = require('../../pages/cartpage');

test('Verify that customer can add a product to cart', async ({ page }) => {
  await page.goto('/');
  //console.log(page.url());
  const cartPage = new CartPage(page);
  await cartPage.addtocart();
  await expect(page.locator('[data-test="product-title"]')).toHaveText('Pliers');
});


test('Verify that customer can remove product from the cart', async ({ page }) => {
  await page.goto('/');
  const cartPage = new CartPage(page);
  await cartPage.addtocart();
  await cartPage.removefromcart();
  await expect(page.getByRole('alert', { name: 'Product deleted.' })).toBeVisible();
});

test('Verify that customer can increase the quantity of a product in the cart', async ({ page }) => {
  await page.goto('/');
  const cartPage = new CartPage(page);
  await cartPage.increasequantity();
  await expect(page.locator('#quantity-input')).toHaveValue('2');
});


test('Verify that customer can decrease the quantity of a product in the cart', async ({ page }) => {
  await page.goto('/');
  const cartPage = new CartPage(page);
  await cartPage.increasequantity();
  await cartPage.decreasequantity();
  await expect(page.locator('#quantity-input')).toHaveValue('1');
});

test('`Verify that customer can compare two products', async ({ page }) => {
  await page.goto('/');
  const cartPage = new CartPage(page);
  await cartPage.compareproducts();
  await expect(page.locator('[data-test="comparison-title"]')).toBeVisible();
})