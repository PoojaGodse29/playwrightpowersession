
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test.describe('Login Tests', () => {
test('Verify that user can login with valid credentials', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.login(
        'admin@practicesoftwaretesting.com',
        'welcome01'
    );
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/admin/dashboard');
});

test('Verify that login fails with Invalid password', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.login(
        'admin@practicesoftwaretesting.com',
        'welcome0001'
    );
    await expect(page.locator('[data-test="login-error"]')).toHaveText('Invalid email or password');
});


test('Verify that login fails with Invalid email', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.login(
        'adminpooja@practicesoftwaretesting.com',
        'welcome01'
    );
    await expect(page.locator('[data-test="login-error"]')).toHaveText('Invalid email or password');
});

test('Verify that login fails with Invalid email and invalid password', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.login(
        'adminpooja@practicesoftwaretesting.com',
        'welcome0001'
    );
    await expect(page.locator('[data-test="login-error"]')).toHaveText('Invalid email or password');
});
});