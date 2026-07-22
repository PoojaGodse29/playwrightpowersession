import { test, expect } from '@playwright/test';
const { AdminPage } = require('../../pages/adminpage');

test('Verify that the admin can view statistics', async ({ page }) => {

  await page.goto('/');
  const adminpage = new AdminPage(page);
  await adminpage.adminorders();
  await expect(page.locator('[data-test="page-title"]')).toHaveText('Order');
});
