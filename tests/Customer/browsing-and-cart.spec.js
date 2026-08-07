const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginpage');
const testData = require('../../test-data/project-data');

test.describe('Customer browsing and cart operations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.login(
      testData.customercredentials.customerusername,
      testData.customercredentials.customerpassword
    );
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  });

  test('Verify homepage categories and product details', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    const categoriesButton = page.locator('[data-test="nav-categories"]');
    const handToolsButton = page.locator('[data-test="nav-hand-tools"]');
    const powerToolsButton = page.locator('[data-test="nav-power-tools"]');

    await expect(categoriesButton).toBeVisible();
    await expect(handToolsButton).toBeVisible();
    await expect(powerToolsButton).toBeVisible();

    await categoriesButton.click();
    await handToolsButton.click();
    await expect(page.getByText('Pliers', { exact: true })).toBeVisible();

    await categoriesButton.click();
    await powerToolsButton.click();
    await expect(page.getByText('Circular Saw', { exact: true })).toBeVisible();

    await page.getByText('Pliers', { exact: true }).click();
    await expect(page.locator('[data-test="product-title"]')).toHaveText('Pliers');
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    await expect(page.getByText(/price/i).first()).toBeVisible();
  });

  test('Add two products to cart, remove one, and validate empty cart state', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-hand-tools"]').click();
    await page.getByText('Pliers', { exact: true }).click();
    await page.locator('[data-test="add-to-cart"]').click();

    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-power-tools"]').click();
    await page.getByText('Circular Saw', { exact: true }).click();
    await page.locator('[data-test="add-to-cart"]').click();

    await page.locator('[data-test="nav-cart"]').click();
    await expect(page.getByText('Pliers', { exact: true })).toBeVisible();
    await expect(page.getByText('Circular Saw', { exact: true })).toBeVisible();

    await page.locator('.btn.btn-danger').first().click();
    await expect(page.locator('.btn.btn-danger')).toBeVisible();
    await expect(page.getByText(/Pliers|Circular Saw/)).toBeVisible();

    let removeButtons = await page.locator('.btn.btn-danger').count();
    while (removeButtons > 0) {
      await page.locator('.btn.btn-danger').first().click();
      removeButtons = await page.locator('.btn.btn-danger').count();
    }

    await expect(page.getByText(/cart.*empty|your cart is empty|no products/i)).toBeVisible();
  });
});
