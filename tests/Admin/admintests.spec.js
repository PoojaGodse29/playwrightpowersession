import { test, expect } from '@playwright/test';
const { AdminPage } = require('../../pages/adminpage');


test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('TC1: Verify that the admin can view orders', async ({ page }) => {
  const adminpage = new AdminPage(page);
  await adminpage.adminorders();
  await expect(page.locator('[data-test="page-title"]')).toHaveText('Order');
});

test('TC2: Verify that the admin can go to the users page', async ({ page }) => {
  const adminpage = new AdminPage(page);
  await adminpage.adminusers();
  await expect(page.locator('[data-test="page-title"]')).toHaveText('Users');
});

test('TC3: Verify that the admin can add a user', async ({ page }) => {
  const adminpage = new AdminPage(page);
  await adminpage.adminusers();
  await adminpage.adduser();
  await expect(page.locator('[data-test="page-title"]')).toHaveText('Add User');
  //This test is failing because after clicking on save, something went wrong message is shown, this could a bug


});

