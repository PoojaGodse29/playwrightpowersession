import { test, expect } from '@playwright/test';

test('Verify that user can compare 2 products', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByAltText('Pliers', { exact: true }).click();
  await page.locator('[data-test="add-to-compare"]').click();
  await page.goBack();
  await page.getByAltText('Combination Pliers', { exact: true }).click();
  await page.locator('[data-test="add-to-compare"]').click();
  await page.locator('[data-test="compare-link"]').click();
  await expect(page.locator('[data-test="comparison-title"]')).toBeVisible();
})