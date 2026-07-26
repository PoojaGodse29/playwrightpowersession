import { test, expect } from '@playwright/test';

test('Verify that user can launch the application', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  
  const title = await page.title();
  expect(title).toContain('Practice Software Testing - Toolshop');

})
