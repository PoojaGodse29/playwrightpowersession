const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginpage');
const { AdminPage } = require('../../pages/adminpage');
const testData = require('../../test-data/project-data');

test.describe('Admin dashboard and user management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.login(
      testData.admincredentials.adminusername,
      testData.admincredentials.adminpassword
    );
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/admin/dashboard');
  });

  test('Verify admin dashboard and orders navigation', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.adminorders();
    await expect(page.locator('[data-test="page-title"]')).toHaveText(/Order/i);
    await expect(page.locator('[data-test="nav-admin-orders"]')).toBeVisible();
    await expect(page.locator('[data-test="nav-admin-users"]')).toBeVisible();
  });

  test('Verify admin can add a new user', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.adminusers();

    await page.locator('[data-test="user-add"]').click();
    await page.locator('[data-test="first-name"]').fill('Deepa');
    await page.locator('[data-test="last-name"]').fill('Sharma');
    await page.locator('[data-test="dob"]').fill('2000-01-02');
    await page.locator('[data-test="street"]').fill('123 Main St');
    await page.locator('[data-test="postal_code"]').fill('1403 BB');
    await page.locator('[data-test="city"]').fill('New York');
    await page.locator('[data-test="state"]').fill('MH');
    await page.locator('[data-test="country"]').selectOption('US');
    await page.locator('[data-test="phone"]').fill('47589596');
    await page.locator('[data-test="email"]').fill('deepa.sharma@example.com');
    await page.locator('[data-test="password"]').fill('W!nter_83#River*');
    await page.locator('[data-test="user-submit"]').click();

    await expect(page.getByText(/Deepa Sharma|deepa.sharma@example.com/i)).toBeVisible();
  });
});
