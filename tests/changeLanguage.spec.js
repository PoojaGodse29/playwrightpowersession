import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/admin/dashboard');
  await page.getByLabel('Select Language').click();
  //await page.locator('[data-test="language-select"]').click();
  await page.locator('[data-test="lang-fr"]').click();
  await expect(page.locator('[data-test="language-select"]')).toContainText('FR');

})
