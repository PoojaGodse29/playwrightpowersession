import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/admin/dashboard');
  await page.locator('[data-test="nav-categories"]').press('Enter');
  await page.locator('[data-test="nav-hand-tools"]').press('Enter');
 await page.getByAltText('Pliers', { exact: true }).click();
  await page.locator('[data-test="increase-quantity"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.locator('[data-test="product-name"]')).toHaveText('Pliers');
});


