import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  
  const title = await page.title();
  expect(title).toContain('Practice Software Testing - Toolshop');

})
