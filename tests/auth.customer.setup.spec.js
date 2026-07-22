
const { test , expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test('Verify that user authentication is saved', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        'customer@practicesoftwaretesting.com',
        'welcome01'
    );
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    // Save authenticated state
    await page.context().storageState({
        path: 'playwright/.auth/customer.json'
    });
});