import { test, expect } from '@playwright/test';
const { AdminPage } = require('../../pages/adminpage');

test('Verify that the admin can view orders', async ({ page }) => {
  await page.goto('/');
  const adminpage = new AdminPage(page);
  await adminpage.adminorders();
  await expect(page.locator('[data-test="page-title"]')).toHaveText('Order');
});

test('Verify that the admin can go to the users page', async ({ page }) => {
  await page.goto('/');
  const adminpage = new AdminPage(page);
  await adminpage.adminusers();
  await expect(page.locator('[data-test="page-title"]')).toHaveText('Users');
});

test.only('Verify that the admin can add a user', async ({ page }) => {
  await page.goto('/');
  const adminpage = new AdminPage(page);
  await adminpage.adminusers();
  await adminpage.adduser();
  //This test is failing because after clicking on save, something went wrong message is shown, this could a bug

});

