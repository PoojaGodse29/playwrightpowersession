import { test, expect } from '@playwright/test';

test('Verify that the home page loads successfully', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');

  await expect(page).toHaveTitle(/Practice Software Testing/);
  await expect(page.locator('h1')).toBeVisible();
});
